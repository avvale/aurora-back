import { CoreFile, CoreFileUploaded } from '@api/graphql';
import { Utils } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { join, extname } from 'node:path';
import { existsSync, mkdirSync, statSync } from 'node:fs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CoreFileUploaderService
{
    constructor(
        private readonly configService: ConfigService,
    ) { }

    // CoreFileUploaded has relativePathSegments, that is an array
    // of strings that represents the path to the file will be stored.
    // by default, the file will be stored in the tmp directory.
    async uploadFile(file: CoreFileUploaded): Promise<CoreFile>
    {
        const basePathDirectory = Array.isArray(file.relativePathSegments) &&  file.relativePathSegments.length > 0 ? file.relativePathSegments : ['tmp'];

        const pathDirectory = join(process.cwd(), 'storage', 'app', ...basePathDirectory);

        // eslint-disable-next-line no-await-in-loop
        const { createReadStream, filename, mimetype, encoding } = await file.file;
        const path = join(
            pathDirectory,
            `${file.id}${extname(filename)}`,
        );

        // create directory if not exists
        if (!existsSync(pathDirectory)) mkdirSync(pathDirectory, { recursive: true });

        // Create readable stream
        const stream = createReadStream();

        // promise to store the file in the filesystem.
        // no await here to allow parallel uploads
        await Utils.storageStream(path, stream);

        // return the file url
        const url = `${this.configService.get('STORAGE_URL')}/storage/app/${basePathDirectory.join('/')}/${file.id}${extname(filename)}`;
        const stats = statSync(path);

        return {
            id                  : file.id,
            url,
            filename,
            mimetype,
            encoding,
            size                : stats.size,
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