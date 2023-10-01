import { CoreFileUploaded, CoreFile } from '@api/graphql';
import { CoreFileUploaderService } from '@aurora/modules/file-uploader';
import { Injectable } from '@nestjs/common';

@Injectable()
export class KitchenSinkUploadFileHandler
{
    constructor(
        private readonly coreFileUploaderService: CoreFileUploaderService,
    ) { }

    async main(
        file: CoreFileUploaded,
    ): Promise<CoreFile>
    {
        return await this.coreFileUploaderService.uploadFile(file);
    }
}