/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { CommonUpsertAttachmentFamilyResolver } from './common-upsert-attachment-family.resolver';
import { CommonUpsertAttachmentFamilyHandler } from '../handlers/common-upsert-attachment-family.handler';
import { CommonUpdateAttachmentFamilyByIdInput } from '@api/graphql';

// sources
import { commonMockAttachmentFamilyData } from '@app/common/attachment-family/infrastructure/mock/common-mock-attachment-family.data';

describe('CommonUpsertAttachmentFamilyResolver', () =>
{
    let resolver: CommonUpsertAttachmentFamilyResolver;
    let handler: CommonUpsertAttachmentFamilyHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                CommonUpsertAttachmentFamilyResolver,
                {
                    provide : CommonUpsertAttachmentFamilyHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<CommonUpsertAttachmentFamilyResolver>(CommonUpsertAttachmentFamilyResolver);
        handler = module.get<CommonUpsertAttachmentFamilyHandler>(CommonUpsertAttachmentFamilyHandler);
    });

    test('CommonUpsertAttachmentFamilyResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('CommonUpsertAttachmentFamilyResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an attachmentFamily upserted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(commonMockAttachmentFamilyData[0])));
            expect(await resolver.main(<CommonUpdateAttachmentFamilyByIdInput>commonMockAttachmentFamilyData[0])).toBe(commonMockAttachmentFamilyData[0]);
        });
    });
});