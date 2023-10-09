import { CoreFile, CoreFileUploaded } from '@api/graphql';
import { Utils } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { join, extname } from 'node:path';
import { existsSync, mkdirSync } from 'node:fs';

@Injectable()
export class CoreFileUploaderService
{
    // CoreFileUploaded has relativePathSegments, that is an array
    // of strings that represents the path to the file will be stored.
    // by default, the file will be stored in the tmp directory.
    async uploadFile(file: CoreFileUploaded): Promise<CoreFile>
    {
        const directoryPath = Array.isArray(file.relativePathSegments) &&  file.relativePathSegments.length > 0 ?
            join(process.cwd(), 'storage', 'app', ...file.relativePathSegments) :
            join(process.cwd(), 'storage', 'app', 'tmp');

        // eslint-disable-next-line no-await-in-loop
        const { createReadStream, filename, mimetype, encoding } = await file.file;
        const path = join(
            directoryPath,
            `${file.id}${extname(filename)}`,
        );

        // create directory if not exists
        if (!existsSync(directoryPath)) mkdirSync(directoryPath, { recursive: true });

        // Create readable stream
        const stream = createReadStream();

        // promise to store the file in the filesystem.
        // no await here to allow parallel uploads
        Utils.storageStream(path, stream);

        return {
            id                  : file.id,
            filename,
            mimetype,
            encoding,
            relativePathSegments: file.relativePathSegments,
        };
    }

    async uploadFiles(files: CoreFileUploaded[]): Promise<CoreFile[]>
    {
        const responses = [];

        for (const file of files)
        {
            responses.push(this.uploadFile(file));
        }

        return responses;
    }
}