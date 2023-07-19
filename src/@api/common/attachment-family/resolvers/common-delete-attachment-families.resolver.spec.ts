/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { CommonDeleteAttachmentFamiliesResolver } from './common-delete-attachment-families.resolver';
import { CommonDeleteAttachmentFamiliesHandler } from '../handlers/common-delete-attachment-families.handler';

// sources
import { commonMockAttachmentFamilyData } from '@app/common/attachment-family/infrastructure/mock/common-mock-attachment-family.data';

describe('CommonDeleteAttachmentFamiliesResolver', () =>
{
    let resolver: CommonDeleteAttachmentFamiliesResolver;
    let handler: CommonDeleteAttachmentFamiliesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                CommonDeleteAttachmentFamiliesResolver,
                {
                    provide : CommonDeleteAttachmentFamiliesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<CommonDeleteAttachmentFamiliesResolver>(CommonDeleteAttachmentFamiliesResolver);
        handler = module.get<CommonDeleteAttachmentFamiliesHandler>(CommonDeleteAttachmentFamiliesHandler);
    });

    test('CommonDeleteAttachmentFamiliesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('CommonDeleteAttachmentFamiliesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an commonMockAttachmentFamilyData deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(commonMockAttachmentFamilyData)));
            expect(await resolver.main()).toBe(commonMockAttachmentFamilyData);
        });
    });
});