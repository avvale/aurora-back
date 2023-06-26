/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { collections } from '@app/search-engine/collection/infrastructure/mock/mock-collection.data';
import { CreateCollectionsCommandHandler } from './create-collections.command-handler';
import { CreateCollectionsCommand } from './create-collections.command';
import { CreateCollectionsService } from './create-collections.service';

describe('CreateCollectionsCommandHandler', () =>
{
    let commandHandler: CreateCollectionsCommandHandler;
    let service: CreateCollectionsService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CreateCollectionsCommandHandler,
                {
                    provide : CreateCollectionsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<CreateCollectionsCommandHandler>(CreateCollectionsCommandHandler);
        service = module.get<CreateCollectionsService>(CreateCollectionsService);
    });

    describe('main', () =>
    {
        test('CreateCollectionsCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return collections createds', async () =>
        {
            expect(await commandHandler.execute(
                new CreateCollectionsCommand(
                    collections,
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});