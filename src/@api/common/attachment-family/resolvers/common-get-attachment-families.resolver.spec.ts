/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { CommonGetAttachmentFamiliesResolver } from './common-get-attachment-families.resolver';
import { CommonGetAttachmentFamiliesHandler } from '../handlers/common-get-attachment-families.handler';

// sources
import { commonMockAttachmentFamilyData } from '@app/common/attachment-family/infrastructure/mock/common-mock-attachment-family.data';

describe('CommonGetAttachmentFamiliesResolver', () =>
{
    let resolver: CommonGetAttachmentFamiliesResolver;
    let handler: CommonGetAttachmentFamiliesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                CommonGetAttachmentFamiliesResolver,
                {
                    provide : CommonGetAttachmentFamiliesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<CommonGetAttachmentFamiliesResolver>(CommonGetAttachmentFamiliesResolver);
        handler = module.get<CommonGetAttachmentFamiliesHandler>(CommonGetAttachmentFamiliesHandler);
    });

    test('CommonGetAttachmentFamiliesResolver should be defined', () =>
    {
        expect(resolver).   toBeDefined();
    });

    describe('main', () =>
    {
        test('CommonGetAttachmentFamiliesResolver should be defined', () =>
        {
            expect(resolver).   toBeDefined();
        });

        test('should return a commonMockAttachmentFamilyData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(commonMockAttachmentFamilyData)));
            expect(await resolver.main()).toBe(commonMockAttachmentFamilyData);
        });
    });
});