import { SupportComment, SupportUpdateCommentByIdInput } from '@api/graphql';
import {
    SupportCommentDto,
    SupportUpdateCommentByIdDto,
} from '@api/support/comment';
import {
    SupportFindCommentByIdQuery,
    SupportUpdateCommentByIdCommand,
} from '@app/support/comment';
import {
    AuditingMeta,
    diff,
    ICommandBus,
    IQueryBus,
    QueryStatement,
} from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SupportUpdateCommentByIdHandler {
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: SupportUpdateCommentByIdInput | SupportUpdateCommentByIdDto,
        constraint?: QueryStatement,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<SupportComment | SupportCommentDto> {
        const comment = await this.queryBus.ask(
            new SupportFindCommentByIdQuery(payload.id, constraint, {
                timezone,
            }),
        );

        const dataToUpdate = diff(payload, comment);

        await this.commandBus.dispatch(
            new SupportUpdateCommentByIdCommand(
                {
                    ...dataToUpdate,
                    id: payload.id,
                },
                constraint,
                {
                    timezone,
                    repositoryOptions: {
                        auditing,
                    },
                },
            ),
        );

        return await this.queryBus.ask(
            new SupportFindCommentByIdQuery(payload.id, constraint, {
                timezone,
            }),
        );
    }
}
