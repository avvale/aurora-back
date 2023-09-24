/* eslint-disable @typescript-eslint/no-unused-vars */
import { CommonUpdateAttachmentFamiliesResourcesHandler } from '@api/common/attachment-family-resource';
import { CommonUpdateAttachmentFamiliesResourcesInput } from '@api/graphql';
import { commonMockAttachmentFamilyResourceData } from '@app/common/attachment-family-resource';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonUpdateAttachmentFamiliesResourcesHandler', () =>
{
    let handler: CommonUpdateAttachmentFamiliesResourcesHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                CommonUpdateAttachmentFamiliesResourcesHandler,
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

        handler = module.get<CommonUpdateAttachmentFamiliesResourcesHandler>(CommonUpdateAttachmentFamiliesResourcesHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('CommonUpdateAttachmentFamiliesResourcesHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('CommonUpdateAttachmentFamiliesResourcesHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a attachmentFamiliesResources updated', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(commonMockAttachmentFamilyResourceData[0])));
            expect(
                await handler.main(
                    <CommonUpdateAttachmentFamiliesResourcesInput>commonMockAttachmentFamilyResourceData[0],
                    {},
                    {},
                    'Europe/Madrid',
                ),
            )
                .toBe(commonMockAttachmentFamilyResourceData[0]);
        });
    });
});
