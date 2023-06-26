/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineDeleteFieldByIdHandler } from '../handlers/search-engine-delete-field-by-id.handler';
import { SearchEngineDeleteFieldByIdController } from './search-engine-delete-field-by-id.controller';
import { fields } from '@app/search-engine/field/infrastructure/mock/mock-field.data';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineDeleteFieldByIdController', () =>
{
    let controller: SearchEngineDeleteFieldByIdController;
    let handler: SearchEngineDeleteFieldByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                SearchEngineDeleteFieldByIdController,
            ],
            providers: [
                {
                    provide : SearchEngineDeleteFieldByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<SearchEngineDeleteFieldByIdController>(SearchEngineDeleteFieldByIdController);
        handler = module.get<SearchEngineDeleteFieldByIdHandler>(SearchEngineDeleteFieldByIdHandler);
    });

    describe('main', () =>
    {
        test('SearchEngineDeleteFieldByIdController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an field deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(fields[0])));
            expect(await controller.main(fields[0].id)).toBe(fields[0]);
        });
    });
});