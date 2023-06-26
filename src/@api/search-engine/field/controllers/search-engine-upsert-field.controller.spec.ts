/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEngineUpsertFieldController } from './search-engine-upsert-field.controller';
import { SearchEngineUpsertFieldHandler } from '../handlers/search-engine-upsert-field.handler';

// sources
import { fields } from '@app/search-engine/field/infrastructure/mock/mock-field.data';

describe('SearchEngineUpsertFieldController', () =>
{
    let controller: SearchEngineUpsertFieldController;
    let handler: SearchEngineUpsertFieldHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                SearchEngineUpsertFieldController,
            ],
            providers: [
                {
                    provide : SearchEngineUpsertFieldHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<SearchEngineUpsertFieldController>(SearchEngineUpsertFieldController);
        handler = module.get<SearchEngineUpsertFieldHandler>(SearchEngineUpsertFieldHandler);
    });

    describe('main', () =>
    {
        test('SearchEngineUpsertFieldController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an field upserted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(fields[0])));
            expect(await controller.main(fields[0])).toBe(fields[0]);
        });
    });
});