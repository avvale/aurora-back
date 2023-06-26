/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEngineCreateFieldController } from './search-engine-create-field.controller';
import { SearchEngineCreateFieldHandler } from '../handlers/search-engine-create-field.handler';

// sources
import { fields } from '@app/search-engine/field/infrastructure/mock/mock-field.data';

describe('SearchEngineCreateFieldController', () =>
{
    let controller: SearchEngineCreateFieldController;
    let handler: SearchEngineCreateFieldHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                SearchEngineCreateFieldController,
            ],
            providers: [
                {
                    provide : SearchEngineCreateFieldHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<SearchEngineCreateFieldController>(SearchEngineCreateFieldController);
        handler = module.get<SearchEngineCreateFieldHandler>(SearchEngineCreateFieldHandler);
    });

    describe('main', () =>
    {
        test('SearchEngineCreateFieldController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an field created', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(fields[0])));
            expect(await controller.main(fields[0])).toBe(fields[0]);
        });
    });
});