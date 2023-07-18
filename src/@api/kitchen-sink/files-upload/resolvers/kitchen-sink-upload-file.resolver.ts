import { KitchenSinkUploadFileHandler } from '../handlers/kitchen-sink-upload-file.handler';
import { KitchenSinkFile, Upload } from '@api/graphql';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class KitchenSinkUploadFileResolver
{
    constructor(
        private readonly handler: KitchenSinkUploadFileHandler,
    ) {}

    @Mutation('kitchenSinkUploadFile')
    async main(
        @Args('id') id: string,
        @Args('file') file: Upload,
    ): Promise<KitchenSinkFile>
    {
        return await this.handler.main(
            id,
            file,
        );
    }
}