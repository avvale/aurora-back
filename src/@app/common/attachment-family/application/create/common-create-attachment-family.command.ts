import { CQMetadata } from '@aurorajs.dev/core';

export class CommonCreateAttachmentFamilyCommand
{
    constructor(
        public readonly payload: {
            id: string;
            name: string;
            code: string;
            width?: number;
            height?: number;
            fitType?: string;
            quality?: number;
            sizes?: any;
            format?: string;
        },
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
