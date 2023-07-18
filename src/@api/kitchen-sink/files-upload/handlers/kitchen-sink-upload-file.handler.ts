import { KitchenSinkFile, Upload } from '@api/graphql';
import { Utils } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { join } from 'node:path';

@Injectable()
export class KitchenSinkUploadFileHandler
{
    async main(
        id: string,
        file: Upload,
    ): Promise<KitchenSinkFile>
    {
        const { createReadStream, filename, mimetype, encoding } = await file;
        const path = join(process.cwd(),'uploads',`${id}-${filename}`);

        // Create readable stream
        const stream = createReadStream();

        // Store the file in the filesystem.
        await Utils.storageStream(path, stream);

        return {
            id,
            filename,
            mimetype,
            encoding,
        };
    }
}