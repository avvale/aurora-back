import { SharedModule } from '@aurora/shared.module';
import { TypesenseModule } from '@aurorajs.dev/typesense';
import { BullModule } from '@nestjs/bullmq';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { appQueues } from 'src/app.queues';
import { SearchEngineHandlers, SearchEngineModels, SearchEngineRepositories, SearchEngineSagas, SearchEngineServices } from '../../@app/search-engine';
import { SearchEngineCollectionApiHandlers, SearchEngineCollectionApiControllers, SearchEngineCollectionApiResolvers, SearchEngineCollectionApiServices } from './collection';
import { SearchEngineFieldApiHandlers,SearchEngineFieldApiControllers, SearchEngineFieldApiResolvers, SearchEngineFieldApiServices } from './field';
import { SearchEngineSeeder } from './search-engine.seeder';
import { IndexCollectionSearchEngineConsumer } from './shared/consumers/index-collection-search-engine.consumer';
import { SearchEngineTypesenseImplementationService } from './shared/services/search-engine-typesense-implementation.service';
import { QueueManagerJobService } from '@api/queue-manager/shared/services';

@Module({
    imports: [
        SharedModule,
        SequelizeModule.forFeature([
            ...SearchEngineModels,
        ]),
        TypesenseModule.forRootAsync({
            imports   : [ConfigModule],
            inject    : [ConfigService],
            useFactory: (configService: ConfigService) => ({
                apiKey: configService.get('TYPESENSE_API_KEY'),
                nodes : [
                    {
                        host    : configService.get('TYPESENSE_HOST'),
                        port    : +configService.get('TYPESENSE_PORT'),
                        protocol: configService.get('TYPESENSE_PROTOCOL'),
                    },
                ],
            }),
        }),
        BullModule.registerQueue(
            ...appQueues.common,
            ...appQueues.searchEngine,
        ),
    ],
    controllers: [
        ...SearchEngineCollectionApiControllers,
        ...SearchEngineFieldApiControllers,
    ],
    providers: [
        SearchEngineSeeder,
        SearchEngineTypesenseImplementationService,
        ...SearchEngineHandlers,
        ...SearchEngineServices,
        ...SearchEngineRepositories,
        ...SearchEngineSagas,
        ...SearchEngineCollectionApiHandlers,
        ...SearchEngineFieldApiHandlers,
        ...SearchEngineCollectionApiResolvers,
        ...SearchEngineCollectionApiServices,
        ...SearchEngineFieldApiResolvers,
        ...SearchEngineFieldApiServices,

        // services
        QueueManagerJobService,

        // consumers
        IndexCollectionSearchEngineConsumer,
    ],
})
export class SearchEngineModule {}
