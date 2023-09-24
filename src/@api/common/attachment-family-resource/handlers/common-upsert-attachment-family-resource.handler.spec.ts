/* eslint-disable @typescript-eslint/no-unused-vars */
import { CommonUpsertAttachmentFamilyResourceHandler } from '@api/common/attachment-family-resource';
import { commonMockAttachmentFamilyResourceData } from '@app/common/attachment-family-resource';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonUpsertAttachmentFamilyResourceHandler', () =>
{
    let handler: CommonUpsertAttachmentFamilyResourceHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                CommonUpsertAttachmentFamilyResourceHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
                {
                    provide : ICommandBus,
                    useValue: {
                        dispatch: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<CommonUpsertAttachmentFamilyResourceHandler>(CommonUpsertAttachmentFamilyResourceHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    describe('main', () =>
    {
        test('CommonUpsertAttachmentFamilyResourceHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an attachmentFamilyResource upserted', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(commonMockAttachmentFamilyResourceData[0])));
            expect(
                await handler.main(
                    commonMockAttachmentFamilyResourceData[0],
                    'Europe/Madrid',
                ))
                .toBe(commonMockAttachmentFamilyResourceData[0]);
        });
    });
});
