/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { CommonDeleteAttachmentFamilyByIdResolver } from './common-delete-attachment-family-by-id.resolver';
import { CommonDeleteAttachmentFamilyByIdHandler } from '../handlers/common-delete-attachment-family-by-id.handler';

// sources
import { commonMockAttachmentFamilyData } from '@app/common/attachment-family/infrastructure/mock/common-mock-attachment-family.data';

describe('CommonDeleteAttachmentFamilyByIdResolver', () =>
{
    let resolver: CommonDeleteAttachmentFamilyByIdResolver;
    let handler: CommonDeleteAttachmentFamilyByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                CommonDeleteAttachmentFamilyByIdResolver,
                {
                    provide : CommonDeleteAttachmentFamilyByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<CommonDeleteAttachmentFamilyByIdResolver>(CommonDeleteAttachmentFamilyByIdResolver);
        handler = module.get<CommonDeleteAttachmentFamilyByIdHandler>(CommonDeleteAttachmentFamilyByIdHandler);
    });

    test('CommonDeleteAttachmentFamilyByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('CommonDeleteAttachmentFamilyByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an attachmentFamily deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(commonMockAttachmentFamilyData[0])));
            expect(await resolver.main(commonMockAttachmentFamilyData[0].id)).toBe(commonMockAttachmentFamilyData[0]);
        });
    });
});