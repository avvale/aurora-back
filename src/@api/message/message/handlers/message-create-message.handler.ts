import { MessageCreateMessageInput, MessageMessage } from '@api/graphql';
import { MessageCreateMessageDto, MessageMessageDto } from '@api/message/message';
import { IamAccountResponse } from '@app/iam/account';
import { MessageCreateMessageCommand, MessageFindMessageByIdQuery } from '@app/message/message';
import { AuditingMeta, ICommandBus, IQueryBus, uploadFile, uuid } from '@aurorajs.dev/core';
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

        await this.commandBus.dispatch(new MessageCreateMessageCommand(
            {
                ...payload,
                attachments,
                totalRecipients: 0,
                reads          : 0,
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
