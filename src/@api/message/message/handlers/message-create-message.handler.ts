import { MessageCreateMessageInput, MessageMessage } from '@api/graphql';
import { MessageCreateMessageDto, MessageMessageDto } from '@api/message/message';
import { IamAccountResponse, IamCountAccountQuery } from '@app/iam/account';
import { MessageCreateMessageCommand, MessageFindMessageByIdQuery } from '@app/message/message';
import { AuditingMeta, ICommandBus, IQueryBus, Operator, uploadFile, uuid } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageCreateMessageHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        account: IamAccountResponse,
        payload: MessageCreateMessageInput | MessageCreateMessageDto,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<MessageMessage | MessageMessageDto>
    {
        const attachments = Array.isArray(payload.attachmentsInputFile) ?
            await Promise.all(
                payload.attachmentsInputFile
                    .map(
                        attachmentInputFile => uploadFile({
                            id                  : uuid(),
                            file                : attachmentInputFile,
                            relativePathSegments: ['aurora', 'message', 'attachments'],
                            hasCreateLibrary    : false,
                        }),
                    ),
            ) : [];

        const totalRecipients = await this.queryBus.ask(new IamCountAccountQuery(
            {
                where: {
                    [Operator.or]: [
                        {
                            // query messages for tenants that account belongs to
                            dTenants: {
                                [Operator.overlap]: payload.tenantRecipientIds,
                            },
                        },
                        {
                            // query messages for scopes that account belongs to
                            scopes: {
                                [Operator.overlap]: payload.scopeRecipients,
                            },
                        },
                        {
                            // query messages for tags that account belongs to
                            tags: {
                                [Operator.overlap]: payload.tagRecipients,
                            },
                        },
                        {
                            // query messages for account
                            id: {
                                [Operator.in]: payload.accountRecipientIds || [],
                            },
                        },
                    ],
                },
            },
        ));

        await this.commandBus.dispatch(new MessageCreateMessageCommand(
            {
                ...payload,
                attachments,
                totalRecipients,
                reads: 0,
            },
            {
                timezone,
                repositoryOptions: {
                    auditing,
                },
            },
        ));

        return await this.queryBus.ask(new MessageFindMessageByIdQuery(
            payload.id,
            {},
            {
                timezone,
            },
        ));
    }
}
