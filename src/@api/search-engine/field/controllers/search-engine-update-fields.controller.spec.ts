/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEngineUpdateFieldsController } from './search-engine-update-fields.controller';
import { SearchEngineUpdateFieldsHandler } from '../handlers/search-engine-update-fields.handler';

// sources
import { fields } from '@app/search-engine/field/infrastructure/mock/mock-field.data';

describe('SearchEngineUpdateFieldsController', () =>
{
    let controller: SearchEngineUpdateFieldsController;
    let handler: SearchEngineUpdateFieldsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                SearchEngineUpdateFieldsController,
            ],
            providers: [
                {
                    provide : SearchEngineUpdateFieldsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<SearchEngineUpdateFieldsController>(SearchEngineUpdateFieldsController);
        handler = module.get<SearchEngineUpdateFieldsHandler>(SearchEngineUpdateFieldsHandler);
    });

    describe('main', () =>
    {
        test('SearchEngineUpdateFieldsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a fields updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(fields[0])));
            expect(await controller.main(fields[0])).toBe(fields[0]);
        });
    });
});