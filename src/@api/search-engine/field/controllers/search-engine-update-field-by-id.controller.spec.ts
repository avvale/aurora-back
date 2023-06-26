/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEngineUpdateFieldByIdController } from './search-engine-update-field-by-id.controller';
import { SearchEngineUpdateFieldByIdHandler } from '../handlers/search-engine-update-field-by-id.handler';

// sources
import { fields } from '@app/search-engine/field/infrastructure/mock/mock-field.data';

describe('SearchEngineUpdateFieldByIdController', () =>
{
    let controller: SearchEngineUpdateFieldByIdController;
    let handler: SearchEngineUpdateFieldByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                SearchEngineUpdateFieldByIdController,
            ],
            providers: [
                {
                    provide : SearchEngineUpdateFieldByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<SearchEngineUpdateFieldByIdController>(SearchEngineUpdateFieldByIdController);
        handler = module.get<SearchEngineUpdateFieldByIdHandler>(SearchEngineUpdateFieldByIdHandler);
    });

    describe('main', () =>
    {
        test('SearchEngineUpdateFieldByIdController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a field updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(fields[0])));
            expect(await controller.main(fields[0])).toBe(fields[0]);
        });
    });
});