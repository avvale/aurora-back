/* eslint-disable @typescript-eslint/no-unused-vars */
import { CommonUpdateAttachmentFamilyByIdHandler } from '@api/common/attachment-family';
import { CommonUpdateAttachmentFamilyByIdInput } from '@api/graphql';
import { commonMockAttachmentFamilyData } from '@app/common/attachment-family';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonUpdateAttachmentFamilyByIdHandler', () =>
{
    let handler: CommonUpdateAttachmentFamilyByIdHandler;
    let queryBus: IQueryBus;
    let commandBus: ICommandBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                CommonUpdateAttachmentFamilyByIdHandler,
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

        handler = module.get<CommonUpdateAttachmentFamilyByIdHandler>(CommonUpdateAttachmentFamilyByIdHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
        commandBus = module.get<ICommandBus>(ICommandBus);
    });

    test('CommonUpdateAttachmentFamilyByIdHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('CommonUpdateAttachmentFamilyByIdHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a attachmentFamily updated', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(commonMockAttachmentFamilyData[0])));
            expect(await handler.main(<CommonUpdateAttachmentFamilyByIdInput>commonMockAttachmentFamilyData[0])).toBe(commonMockAttachmentFamilyData[0]);
        });
    });
});