/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEngineDeleteFieldsController } from './search-engine-delete-fields.controller';
import { SearchEngineDeleteFieldsHandler } from '../handlers/search-engine-delete-fields.handler';

// sources
import { fields } from '@app/search-engine/field/infrastructure/mock/mock-field.data';

describe('SearchEngineDeleteFieldsController', () =>
{
    let controller: SearchEngineDeleteFieldsController;
    let handler: SearchEngineDeleteFieldsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                SearchEngineDeleteFieldsController,
            ],
            providers: [
                {
                    provide : SearchEngineDeleteFieldsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<SearchEngineDeleteFieldsController>(SearchEngineDeleteFieldsController);
        handler = module.get<SearchEngineDeleteFieldsHandler>(SearchEngineDeleteFieldsHandler);
    });

    describe('main', () =>
    {
        test('SearchEngineDeleteFieldsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an fields deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(fields)));
            expect(await controller.main()).toBe(fields);
        });
    });
});