/* eslint-disable @typescript-eslint/no-unused-vars */
import { CommonGetAttachmentFamiliesResourcesHandler } from '@api/common/attachment-family-resource';
import { commonMockAttachmentFamilyResourceData } from '@app/common/attachment-family-resource';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonGetAttachmentFamiliesResourcesHandler', () =>
{
    let handler: CommonGetAttachmentFamiliesResourcesHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                CommonGetAttachmentFamiliesResourcesHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<CommonGetAttachmentFamiliesResourcesHandler>(CommonGetAttachmentFamiliesResourcesHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('CommonGetAttachmentFamiliesResourcesHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('CommonGetAttachmentFamiliesResourcesHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a commonMockAttachmentFamilyResourceData', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(commonMockAttachmentFamilyResourceData)));
            expect(
                await handler.main(
                    {},
                    {},
                    'Europe/Madrid',
                ),
            )
                .toBe(commonMockAttachmentFamilyResourceData);
        });
    });
});
