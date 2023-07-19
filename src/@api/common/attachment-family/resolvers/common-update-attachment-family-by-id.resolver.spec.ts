/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { CommonUpdateAttachmentFamilyByIdResolver } from './common-update-attachment-family-by-id.resolver';
import { CommonUpdateAttachmentFamilyByIdHandler } from '../handlers/common-update-attachment-family-by-id.handler';
import { CommonUpdateAttachmentFamilyByIdInput } from '@api/graphql';

// sources
import { commonMockAttachmentFamilyData } from '@app/common/attachment-family/infrastructure/mock/common-mock-attachment-family.data';

describe('CommonUpdateAttachmentFamilyByIdResolver', () =>
{
    let resolver: CommonUpdateAttachmentFamilyByIdResolver;
    let handler: CommonUpdateAttachmentFamilyByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                CommonUpdateAttachmentFamilyByIdResolver,
                {
                    provide : CommonUpdateAttachmentFamilyByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<CommonUpdateAttachmentFamilyByIdResolver>(CommonUpdateAttachmentFamilyByIdResolver);
        handler = module.get<CommonUpdateAttachmentFamilyByIdHandler>(CommonUpdateAttachmentFamilyByIdHandler);
    });

    test('CommonUpdateAttachmentFamilyByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('CommonUpdateAttachmentFamilyByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a attachmentFamily by id updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(commonMockAttachmentFamilyData[0])));
            expect(await resolver.main(<CommonUpdateAttachmentFamilyByIdInput>commonMockAttachmentFamilyData[0])).toBe(commonMockAttachmentFamilyData[0]);
        });
    });
});