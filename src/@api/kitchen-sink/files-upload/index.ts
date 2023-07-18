import { KitchenSinkUploadFileHandler } from './handlers/kitchen-sink-upload-file.handler';
import { KitchenSinkUploadFilesHandler } from './handlers/kitchen-sink-upload-files.handler';
import { KitchenSinkUploadFileResolver } from './resolvers/kitchen-sink-upload-file.resolver';
import { KitchenSinkUploadFilesResolver } from './resolvers/kitchen-sink-upload-files.resolver';

export const KitchenSinkFilesUploadResolvers = [
    KitchenSinkUploadFileResolver,
    KitchenSinkUploadFilesResolver,
];

export const KitchenSinkFilesUploadHandlers = [
    KitchenSinkUploadFileHandler,
    KitchenSinkUploadFilesHandler,
];