import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SharedModule } from '@aurora/shared.module';
import { SearchEngineSeeder } from './search-engine.seeder';
import { SearchEngineModels, SearchEngineHandlers, SearchEngineServices, SearchEngineRepositories, SearchEngineSagas } from '../../@app/search-engine';
import { SearchEngineCollectionControllers, SearchEngineCollectionResolvers, SearchEngineCollectionApiHandlers, SearchEngineCollectionServices } from './collection';
import { SearchEngineTypesenseImplementationService } from './shared/services/search-engine-typesense-implementation.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypesenseModule } from '@aurorajs.dev/typesense';
import { SearchEngineFieldControllers, SearchEngineFieldResolvers, SearchEngineFieldApiHandlers, SearchEngineFieldServices } from './field';

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
    ],
    controllers: [
        ...SearchEngineCollectionControllers,
        ...SearchEngineFieldControllers
    ],
    providers: [
        SearchEngineSeeder,
        SearchEngineTypesenseImplementationService,
        ...SearchEngineHandlers,
        ...SearchEngineServices,
        ...SearchEngineRepositories,
        ...SearchEngineSagas,
        ...SearchEngineCollectionResolvers,
        ...SearchEngineCollectionApiHandlers,
        ...SearchEngineCollectionServices,
        ...SearchEngineFieldResolvers,
        ...SearchEngineFieldApiHandlers,
        ...SearchEngineFieldServices
    ],
})
export class SearchEngineModule {}
