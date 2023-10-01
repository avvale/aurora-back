import { CoreFile, CoreFileUploaded } from '@api/graphql';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { KitchenSinkUploadFilesHandler } from '../handlers/kitchen-sink-upload-files.handler';

@Resolver()
export class KitchenSinkUploadFilesResolver
{
    constructor(
        private readonly handler: KitchenSinkUploadFilesHandler,
    ) {}

    @Mutation('kitchenSinkUploadFiles')
    async main(
        @Args('files') files: CoreFileUploaded[],
    ): Promise<CoreFile[]>
    {
        return await this.handler.main(
            files,
        );
    }
}