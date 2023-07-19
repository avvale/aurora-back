/* eslint-disable @typescript-eslint/no-unused-vars */
import { CommonFindAttachmentFamilyByIdHandler } from '@api/common/attachment-family';
import { commonMockAttachmentFamilyData } from '@app/common/attachment-family';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonFindAttachmentFamilyByIdHandler', () =>
{
    let handler: CommonFindAttachmentFamilyByIdHandler;
    let queryBus: IQueryBus;
    let commandBus: ICommandBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                CommonFindAttachmentFamilyByIdHandler,
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

        handler = module.get<CommonFindAttachmentFamilyByIdHandler>(CommonFindAttachmentFamilyByIdHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
        commandBus = module.get<ICommandBus>(ICommandBus);
    });

    test('CommonFindAttachmentFamilyByIdHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('CommonFindAttachmentFamilyByIdHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an attachmentFamily by id', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(commonMockAttachmentFamilyData[0])));
            expect(await handler.main(commonMockAttachmentFamilyData[0].id)).toBe(commonMockAttachmentFamilyData[0]);
        });
    });
});