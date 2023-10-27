import { CoreFile, CoreFileUploaded } from '@api/graphql';
import { Utils } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { join, extname } from 'node:path';
import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { ConfigService } from '@nestjs/config';
import * as sharp from 'sharp';

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
        // by default all files are saved in the tmp folder, so that after manipulation they are saved in the corresponding folder
        // if it is not necessary to manipulate the file, it can be saved directly in the corresponding folder.
        const relativePathSegments = Array.isArray(file.relativePathSegments) && file.relativePathSegments.length > 0 ? file.relativePathSegments : ['tmp'];
        const absolutePathDirectory = join(process.cwd(), 'storage', 'app', ...relativePathSegments);

        // eslint-disable-next-line no-await-in-loop
        const { createReadStream, filename, mimetype, encoding } = await file.file;
        const extensionFile = extname(filename);
        const absolutePath = join(
            absolutePathDirectory,
            `${file.id}${extensionFile}`,
        );

        // create directory if not exists
        if (!existsSync(absolutePathDirectory)) mkdirSync(absolutePathDirectory, { recursive: true });

        // Create readable stream
        const stream = createReadStream();

        // promise to store the file in the filesystem.
        // no await here to allow parallel uploads
        await Utils.storageStream(absolutePath, stream);

        // return the file url
        const url = `${this.configService.get('STORAGE_URL')}/storage/app/${relativePathSegments.join('/')}/${file.id}${extname(filename)}`;
        const stats = statSync(absolutePath);

        // check if file can do a crop action
        const isCropable = mimetype === 'image/jpeg' || mimetype === 'image/png' || mimetype === 'image/gif';

        // set metadata for image
        const metadata = await sharp(absolutePath).metadata();

        const coreFile: CoreFile = {
            id       : file.id,
            encoding,
            filename,
            mimetype,
            extension: extensionFile,
            relativePathSegments,
            size     : stats.size,
            url,
            isCropable,
            meta     : metadata,
        };

        // add cropable properties
        if (isCropable)
        {
            const libraryId = Utils.uuid();
            const absoluteLibraryPath = join(
                absolutePathDirectory,
                `${libraryId}${coreFile.extension}`,
            );

            // copy file to create a library file
            copyFileSync(
                absolutePath,
                absoluteLibraryPath,
            );

            // set coreFile properties from cropable file
            coreFile.width = coreFile.meta.width;
            coreFile.height = coreFile.meta.height;
            coreFile.library = {
                id                  : libraryId,
                url                 : `${this.configService.get('STORAGE_URL')}/storage/app/${coreFile.relativePathSegments.join('/')}/${libraryId}${coreFile.extension}`,
                relativePathSegments: coreFile.relativePathSegments,
            };
        }

        return coreFile;
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