/* eslint-disable @typescript-eslint/no-unused-vars */
import { CommonFindAttachmentFamilyResourceByIdHandler } from '@api/common/attachment-family-resource';
import { commonMockAttachmentFamilyResourceData } from '@app/common/attachment-family-resource';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonFindAttachmentFamilyResourceByIdHandler', () =>
{
    let handler: CommonFindAttachmentFamilyResourceByIdHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                CommonFindAttachmentFamilyResourceByIdHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<CommonFindAttachmentFamilyResourceByIdHandler>(CommonFindAttachmentFamilyResourceByIdHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('CommonFindAttachmentFamilyResourceByIdHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('CommonFindAttachmentFamilyResourceByIdHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an attachmentFamilyResource by id', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(commonMockAttachmentFamilyResourceData[0])));
            expect(
                await handler.main(
                    commonMockAttachmentFamilyResourceData[0].id,
                    {},
                    'Europe/Madrid',
                ),
            )
                .toBe(commonMockAttachmentFamilyResourceData[0]);
        });
    });
});
