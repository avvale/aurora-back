/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { CommonCreateAttachmentFamilyResolver } from './common-create-attachment-family.resolver';
import { CommonCreateAttachmentFamilyHandler } from '../handlers/common-create-attachment-family.handler';
import { CommonCreateAttachmentFamilyInput } from '@api/graphql';

// sources
import { commonMockAttachmentFamilyData } from '@app/common/attachment-family/infrastructure/mock/common-mock-attachment-family.data';

describe('CommonCreateAttachmentFamilyResolver', () =>
{
    let resolver: CommonCreateAttachmentFamilyResolver;
    let handler: CommonCreateAttachmentFamilyHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                CommonCreateAttachmentFamilyResolver,
                {
                    provide : CommonCreateAttachmentFamilyHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<CommonCreateAttachmentFamilyResolver>(CommonCreateAttachmentFamilyResolver);
        handler = module.get<CommonCreateAttachmentFamilyHandler>(CommonCreateAttachmentFamilyHandler);
    });

    test('CommonCreateAttachmentFamilyResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('CommonCreateAttachmentFamilyResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an attachmentFamily created', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(commonMockAttachmentFamilyData[0])));
            expect(await resolver.main(<CommonCreateAttachmentFamilyInput>commonMockAttachmentFamilyData[0])).toBe(commonMockAttachmentFamilyData[0]);
        });
    });
});