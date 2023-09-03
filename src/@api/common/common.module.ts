import { CommonHandlers, CommonModels, CommonRepositories, CommonSagas, CommonServices } from '@app/common';
import { SharedModule } from '@aurora/shared.module';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CommonSeeder } from './common.seeder';
import { CommonCountryApiHandlers, CommonCountryApiControllers, CommonCountryApiResolvers, CommonCountryApiServices } from './country';
import { CommonLangApiHandlers, CommonLangApiControllers, CommonLangApiResolvers, CommonLangApiServices } from './lang';
import { CommonAdministrativeAreaLevel1Controllers, CommonAdministrativeAreaLevel1Resolvers, CommonAdministrativeAreaLevel1ApiHandlers, CommonAdministrativeAreaLevel1Services } from './administrative-area-level-1';
import { CommonAdministrativeAreaLevel2Controllers, CommonAdministrativeAreaLevel2Resolvers, CommonAdministrativeAreaLevel2ApiHandlers, CommonAdministrativeAreaLevel2Services } from './administrative-area-level-2';
import { CommonAdministrativeAreaLevel3Controllers, CommonAdministrativeAreaLevel3Resolvers, CommonAdministrativeAreaLevel3ApiHandlers, CommonAdministrativeAreaLevel3Services } from './administrative-area-level-3';
import { CommonResourceApiHandlers, CommonResourceApiControllers, CommonResourceApiResolvers, CommonResourceApiServices } from './resource';
import { CommonAttachmentFamilyControllers, CommonAttachmentFamilyResolvers, CommonAttachmentFamilyApiHandlers, CommonAttachmentFamilyServices } from './attachment-family';

@Module({
    imports: [
        SharedModule,
        SequelizeModule.forFeature([
            ...CommonModels
        ])
    ],
    controllers: [
        ...CommonAdministrativeAreaLevel1Controllers,
        ...CommonAdministrativeAreaLevel2Controllers,
        ...CommonAdministrativeAreaLevel3Controllers,
        ...CommonAttachmentFamilyControllers,
        ...CommonLangApiControllers,
        ...CommonResourceApiControllers,
        ...CommonCountryApiControllers
    ],
    providers: [
        CommonSeeder,
        ...CommonHandlers,
        ...CommonServices,
        ...CommonRepositories,
        ...CommonSagas,
        ...CommonLangApiHandlers,
        ...CommonCountryApiHandlers,
        ...CommonAdministrativeAreaLevel1Resolvers,
        ...CommonAdministrativeAreaLevel1ApiHandlers,
        ...CommonAdministrativeAreaLevel1Services,
        ...CommonAdministrativeAreaLevel2Resolvers,
        ...CommonAdministrativeAreaLevel2ApiHandlers,
        ...CommonAdministrativeAreaLevel2Services,
        ...CommonAdministrativeAreaLevel3Resolvers,
        ...CommonAdministrativeAreaLevel3ApiHandlers,
        ...CommonAdministrativeAreaLevel3Services,
        ...CommonResourceApiHandlers,
        ...CommonAttachmentFamilyResolvers,
        ...CommonAttachmentFamilyApiHandlers,
        ...CommonAttachmentFamilyServices,
        ...CommonLangApiResolvers,
        ...CommonLangApiServices,
        ...CommonResourceApiResolvers,
        ...CommonResourceApiServices,
        ...CommonCountryApiResolvers,
        ...CommonCountryApiServices
    ],
})
export class CommonModule {}
