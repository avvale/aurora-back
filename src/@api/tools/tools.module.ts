import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SharedModule } from '@aurora/shared.module';
import { ToolsSeeder } from './tools.seeder';
import { ToolsModels, ToolsHandlers, ToolsServices, ToolsRepositories, ToolsSagas } from '@app/tools';
import { ToolsKeyValueApiControllers, ToolsKeyValueApiResolvers, ToolsKeyValueApiHandlers, ToolsKeyValueApiServices } from './key-value';

@Module({
    imports: [
        SharedModule,
        SequelizeModule.forFeature([
            ...ToolsModels,
        ]),
    ],
    controllers: [
        ...ToolsKeyValueApiControllers,
    ],
    providers: [
        ToolsSeeder,
        ...ToolsHandlers,
        ...ToolsServices,
        ...ToolsRepositories,
        ...ToolsSagas,
        ...ToolsKeyValueApiResolvers,
        ...ToolsKeyValueApiHandlers,
        ...ToolsKeyValueApiServices,
    ],
})
export class ToolsModule {}
