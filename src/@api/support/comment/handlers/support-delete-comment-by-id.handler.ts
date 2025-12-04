import { SupportComment } from '@api/graphql';
import { SupportCommentDto } from '@api/support/comment';
import {
    SupportDeleteCommentByIdCommand,
    SupportFindCommentByIdQuery,
} from '@app/support/comment';
import {
    AuditingMeta,
    ICommandBus,
    IQueryBus,
    QueryStatement,
} from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SupportDeleteCommentByIdHandler {
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        id: string,
        constraint?: QueryStatement,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<SupportComment | SupportCommentDto> {
        const comment = await this.queryBus.ask(
            new SupportFindCommentByIdQuery(id, constraint, {
                timezone,
            }),
        );

        await this.commandBus.dispatch(
            new SupportDeleteCommentByIdCommand(id, constraint, {
                timezone,
                repositoryOptions: {
                    auditing,
                },
            }),
        );

        return comment;
    }
}
