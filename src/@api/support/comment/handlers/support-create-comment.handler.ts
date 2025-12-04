import { SupportComment, SupportCreateCommentInput } from '@api/graphql';
import {
    SupportCommentDto,
    SupportCreateCommentDto,
} from '@api/support/comment';
import {
    SupportCreateCommentCommand,
    SupportFindCommentByIdQuery,
} from '@app/support/comment';
import { AuditingMeta, ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SupportCreateCommentHandler {
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: SupportCreateCommentInput | SupportCreateCommentDto,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<SupportComment | SupportCommentDto> {
        await this.commandBus.dispatch(
            new SupportCreateCommentCommand(payload, {
                timezone,
                repositoryOptions: {
                    auditing,
                },
            }),
        );

        return await this.queryBus.ask(
            new SupportFindCommentByIdQuery(
                payload.id,
                {},
                {
                    timezone,
                },
            ),
        );
    }
}
