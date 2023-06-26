/* import { OrionDeliveryIssues, OrionJobIssues } from '@api/graphql';
import { OrionHESAConnectorService } from '@api/orion/hesa/services/orion-hesa-connector.service';
import { FindDealerByIdQuery } from '@app/orion/dealer/application/find/find-dealer-by-id.query';
import { FindDeliveryByIdQuery } from '@app/orion/delivery/application/find/find-delivery-by-id.query';
import { UpdateDeliveryByIdCommand } from '@app/orion/delivery/application/update/update-delivery-by-id.command';
import { FindLoadOrderByIdQuery } from '@app/orion/load-order/application/find/find-load-order-by-id.query';
import { OrionDocumentPrefix } from '@app/orion/orion.types';
import { FindServicePointByIdQuery } from '@app/orion/service-point/application/find/find-service-point-by-id.query'; */
import { ICommandBus, IQueryBus, Utils } from '@aurorajs.dev/core';
import { Process, Processor } from '@nestjs/bull';
import { BadRequestException, Logger } from '@nestjs/common';
import { Job } from 'bull';
import { lastValueFrom } from 'rxjs';
import { QueueStorage } from 'src/app.queues';
import { Client } from 'typesense';

@Processor(QueueStorage.SEARCH_ENGINE_COLLECTION)
export class IndexCollectionSearchEngineConsumer
{
    constructor(
        private readonly queryBus: IQueryBus,
        private readonly commandBus: ICommandBus,
        private readonly typesense: Client,
    ) {}

    @Process('indexCollection')
    async main(job: Job<{
        payload: {
            id: string;
            offset: number;
            limit: number;
            collectionName: string;
        };
        timezone: string;
    }>): Promise<void>
    {
        const { payload, timezone } = job.data;

        try
        {
            // eslint-disable-next-line no-await-in-loop
            await this.typesense.collections(payload.collectionName).retrieve();
        }
        catch (error)
        {
            if ((error as any).httpStatus === 404)
            {
               /*  // create collection with real name
                await this.typesense.collections()
                    .create({
                        ...schema,
                        name: collectionName,
                    }); */
            }
        }
    }
}