/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEnginePaginateFieldsController } from './search-engine-paginate-fields.controller';
import { SearchEnginePaginateFieldsHandler } from '../handlers/search-engine-paginate-fields.handler';

// sources
import { fields } from '@app/search-engine/field/infrastructure/mock/mock-field.data';

describe('SearchEnginePaginateFieldsController', () =>
{
    let controller: SearchEnginePaginateFieldsController;
    let handler: SearchEnginePaginateFieldsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                SearchEnginePaginateFieldsController,
            ],
            providers: [
                {
                    provide : SearchEnginePaginateFieldsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<SearchEnginePaginateFieldsController>(SearchEnginePaginateFieldsController);
        handler = module.get<SearchEnginePaginateFieldsHandler>(SearchEnginePaginateFieldsHandler);
    });

    describe('main', () =>
    {
        test('SearchEnginePaginateFieldsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a fields', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve({
                total: 5,
                count: 5,
                rows : fields,
            })));
            expect(await controller.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows : fields,
            });
        });
    });
});