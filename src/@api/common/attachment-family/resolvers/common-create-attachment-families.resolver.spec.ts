import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { CommonCreateAttachmentFamiliesResolver } from './common-create-attachment-families.resolver';
import { CommonCreateAttachmentFamiliesHandler } from '../handlers/common-create-attachment-families.handler';
import { CommonCreateAttachmentFamilyInput } from '@api/graphql';

// sources
import { commonMockAttachmentFamilyData } from '@app/common/attachment-family/infrastructure/mock/common-mock-attachment-family.data';

describe('CommonCreateAttachmentFamiliesResolver', () =>
{
    let resolver: CommonCreateAttachmentFamiliesResolver;
    let handler: CommonCreateAttachmentFamiliesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommonCreateAttachmentFamiliesResolver,
                {
                    provide : CommonCreateAttachmentFamiliesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<CommonCreateAttachmentFamiliesResolver>(CommonCreateAttachmentFamiliesResolver);
        handler = module.get<CommonCreateAttachmentFamiliesHandler>(CommonCreateAttachmentFamiliesHandler);
    });

    test('CommonCreateAttachmentFamiliesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('CommonCreateAttachmentFamiliesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an attachmentFamilies created', async () =>
        {
            expect(await resolver.main(<CommonCreateAttachmentFamilyInput[]>commonMockAttachmentFamilyData)).toBe(undefined);
        });
    });
});