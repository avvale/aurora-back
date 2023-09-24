/* eslint-disable @typescript-eslint/no-unused-vars */
import { CommonPaginateAttachmentFamiliesResourcesHandler } from '@api/common/attachment-family-resource';
import { commonMockAttachmentFamilyResourceData } from '@app/common/attachment-family-resource';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonPaginateAttachmentFamiliesResourcesHandler', () =>
{
    let handler: CommonPaginateAttachmentFamiliesResourcesHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                CommonPaginateAttachmentFamiliesResourcesHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<CommonPaginateAttachmentFamiliesResourcesHandler>(CommonPaginateAttachmentFamiliesResourcesHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('CommonPaginateAttachmentFamiliesResourcesHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('CommonPaginateAttachmentFamiliesResourcesHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a attachmentFamiliesResources', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve({
                total: commonMockAttachmentFamilyResourceData.length,
                count: commonMockAttachmentFamilyResourceData.length,
                rows : commonMockAttachmentFamilyResourceData,
            })));
            expect(
                await handler.main(
                    {},
                    {},
                ),
            )
                .toEqual({
                    total: commonMockAttachmentFamilyResourceData.length,
                    count: commonMockAttachmentFamilyResourceData.length,
                    rows : commonMockAttachmentFamilyResourceData,
                });
        });
    });
});
