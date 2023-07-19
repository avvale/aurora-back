/* eslint-disable @typescript-eslint/no-unused-vars */
import { CommonPaginateAttachmentFamiliesHandler } from '@api/common/attachment-family';
import { commonMockAttachmentFamilyData } from '@app/common/attachment-family';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonPaginateAttachmentFamiliesHandler', () =>
{
    let handler: CommonPaginateAttachmentFamiliesHandler;
    let queryBus: IQueryBus;
    let commandBus: ICommandBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                CommonPaginateAttachmentFamiliesHandler,
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

        handler = module.get<CommonPaginateAttachmentFamiliesHandler>(CommonPaginateAttachmentFamiliesHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
        commandBus = module.get<ICommandBus>(ICommandBus);
    });

    test('CommonPaginateAttachmentFamiliesHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('CommonPaginateAttachmentFamiliesHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a attachmentFamilies', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve({
                total: commonMockAttachmentFamilyData.length,
                count: commonMockAttachmentFamilyData.length,
                rows : commonMockAttachmentFamilyData,
            })));
            expect(await handler.main()).toEqual({
                total: commonMockAttachmentFamilyData.length,
                count: commonMockAttachmentFamilyData.length,
                rows : commonMockAttachmentFamilyData,
            });
        });
    });
});