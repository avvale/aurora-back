import { Module } from '@nestjs/common';
import { SharedModule } from '@aurora/shared.module';
import { KitchenSinkFilesUploadHandlers, KitchenSinkFilesUploadResolvers } from './files-upload';

@Module({
    imports: [
        SharedModule,
    ],
    controllers: [
    ],
    providers: [
        ...KitchenSinkFilesUploadHandlers,
        ...KitchenSinkFilesUploadResolvers,
    ],
})
export class KitchenSinkModule {}
