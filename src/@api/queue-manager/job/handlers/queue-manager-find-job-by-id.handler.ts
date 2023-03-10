import { Injectable } from '@nestjs/common';
import { IQueryBus, QueryStatement } from '@aurora-ts/core';

// @app
import { QueueManagerJob } from '@api/graphql';
import { QueueManagerJobDto } from '../dto';

@Injectable()
export class QueueManagerFindJobByIdHandler
{
    constructor(
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        id: string,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<QueueManagerJob | QueueManagerJobDto>
    {
        return;
    }
}