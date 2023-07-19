import { Test, TestingModule } from '@nestjs/testing';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';

// custom items
import { CommonCreateAttachmentFamiliesHandler } from './common-create-attachment-families.handler';
import { commonMockAttachmentFamilyData } from '@app/common/attachment-family/infrastructure/mock/common-mock-attachment-family.data';

describe('CommonCreateAttachmentFamiliesHandler', () =>
{
    let handler: CommonCreateAttachmentFamiliesHandler;
    let queryBus: IQueryBus;
    let commandBus: ICommandBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommonCreateAttachmentFamiliesHandler,
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

        handler = module.get<CommonCreateAttachmentFamiliesHandler>(CommonCreateAttachmentFamiliesHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
        commandBus = module.get<ICommandBus>(ICommandBus);
    });

    describe('main', () =>
    {
        test('CommonCreateAttachmentFamiliesHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an commonMockAttachmentFamilyData created', async () =>
        {
            expect(await handler.main(commonMockAttachmentFamilyData)).toBe(true);
        });
    });
});