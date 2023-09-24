/* eslint-disable @typescript-eslint/no-unused-vars */
import { CommonUpdateAttachmentFamilyResourceByIdHandler } from '@api/common/attachment-family-resource';
import { CommonUpdateAttachmentFamilyResourceByIdInput } from '@api/graphql';
import { commonMockAttachmentFamilyResourceData } from '@app/common/attachment-family-resource';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonUpdateAttachmentFamilyResourceByIdHandler', () =>
{
    let handler: CommonUpdateAttachmentFamilyResourceByIdHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                CommonUpdateAttachmentFamilyResourceByIdHandler,
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

        handler = module.get<CommonUpdateAttachmentFamilyResourceByIdHandler>(CommonUpdateAttachmentFamilyResourceByIdHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('CommonUpdateAttachmentFamilyResourceByIdHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('CommonUpdateAttachmentFamilyResourceByIdHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a attachmentFamilyResource updated', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(commonMockAttachmentFamilyResourceData[0])));
            expect(
                await handler.main(
                    <CommonUpdateAttachmentFamilyResourceByIdInput>commonMockAttachmentFamilyResourceData[0],
                    {},
                    'Europe/Madrid',
                ))
                .toBe(commonMockAttachmentFamilyResourceData[0]);
        });
    });
});
