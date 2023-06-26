/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEngineGetFieldsController } from './search-engine-get-fields.controller';
import { SearchEngineGetFieldsHandler } from '../handlers/search-engine-get-fields.handler';

// sources
import { fields } from '@app/search-engine/field/infrastructure/mock/mock-field.data';

describe('SearchEngineGetFieldsController', () =>
{
    let controller: SearchEngineGetFieldsController;
    let handler: SearchEngineGetFieldsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                SearchEngineGetFieldsController,
            ],
            providers: [
                {
                    provide : SearchEngineGetFieldsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<SearchEngineGetFieldsController>(SearchEngineGetFieldsController);
        handler = module.get<SearchEngineGetFieldsHandler>(SearchEngineGetFieldsHandler);
    });

    describe('main', () =>
    {
        test('SearchEngineGetFieldsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a fields', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(fields)));
            expect(await controller.main()).toBe(fields);
        });
    });
});