/* eslint-disable @typescript-eslint/no-unused-vars */
import { CommonDeleteAttachmentFamilyResourceByIdHandler } from '@api/common/attachment-family-resource';
import { commonMockAttachmentFamilyResourceData } from '@app/common/attachment-family-resource';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonDeleteAttachmentFamilyResourceByIdController', () =>
{
    let handler: CommonDeleteAttachmentFamilyResourceByIdHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                CommonDeleteAttachmentFamilyResourceByIdHandler,
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

        handler = module.get<CommonDeleteAttachmentFamilyResourceByIdHandler>(CommonDeleteAttachmentFamilyResourceByIdHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    describe('main', () =>
    {
        test('CommonDeleteAttachmentFamilyResourceByIdHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an attachmentFamilyResource deleted', async () =>
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
