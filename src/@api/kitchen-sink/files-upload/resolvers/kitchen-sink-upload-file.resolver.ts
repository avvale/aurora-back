import { KitchenSinkUploadFileHandler } from '../handlers/kitchen-sink-upload-file.handler';
import { CoreFile, CoreFileUploaded } from '@api/graphql';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class KitchenSinkUploadFileResolver
{
    constructor(
        private readonly handler: KitchenSinkUploadFileHandler,
    ) {}

    @Mutation('kitchenSinkUploadFile')
    async main(
        @Args('file') file: CoreFileUploaded,
    ): Promise<CoreFile>
    {
        return await this.handler.main(
            file,
        );
    }
}