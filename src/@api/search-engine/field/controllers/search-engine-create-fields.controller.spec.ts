import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEngineCreateFieldsController } from './search-engine-create-fields.controller';
import { SearchEngineCreateFieldsHandler } from '../handlers/search-engine-create-fields.handler';

// sources
import { fields } from '@app/search-engine/field/infrastructure/mock/mock-field.data';

describe('SearchEngineCreateFieldsController', () =>
{
    let controller: SearchEngineCreateFieldsController;
    let handler: SearchEngineCreateFieldsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [
                SearchEngineCreateFieldsController,
            ],
            providers: [
                {
                    provide : SearchEngineCreateFieldsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<SearchEngineCreateFieldsController>(SearchEngineCreateFieldsController);
        handler = module.get<SearchEngineCreateFieldsHandler>(SearchEngineCreateFieldsHandler);
    });

    describe('main', () =>
    {
        test('SearchEngineCreateFieldsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an fields created', async () =>
        {
            expect(await controller.main(fields)).toBe(undefined);
        });
    });
});