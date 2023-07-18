import { KitchenSinkFile, KitchenSinkFileUploaded } from '@api/graphql';
import { Utils } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { join } from 'node:path';

@Injectable()
export class KitchenSinkUploadFilesHandler
{
    async main(
        files: KitchenSinkFileUploaded[],
    ): Promise<KitchenSinkFile[]>
    {
        const uploadPromises = [];
        const responses = [];

        for (const file of files)
        {
            // eslint-disable-next-line no-await-in-loop
            const { createReadStream, filename, mimetype, encoding } = await file.file;
            const path = join(process.cwd(),'uploads',`${file.id}-${filename}`);

            // Create readable stream
            const stream = createReadStream();

            // Store the file in the filesystem.
            uploadPromises.push(Utils.storageStream(path, stream));

            responses.push({
                id: file.id,
                filename,
                mimetype,
                encoding,
            });

        }

        return responses;
    }
}