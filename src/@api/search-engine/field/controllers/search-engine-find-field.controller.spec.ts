/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEngineFindFieldController } from './search-engine-find-field.controller';
import { SearchEngineFindFieldHandler } from '../handlers/search-engine-find-field.handler';

// sources
import { fields } from '@app/search-engine/field/infrastructure/mock/mock-field.data';

describe('SearchEngineFindFieldController', () =>
{
    let controller: SearchEngineFindFieldController;
    let handler: SearchEngineFindFieldHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                SearchEngineFindFieldController,
            ],
            providers: [
                {
                    provide : SearchEngineFindFieldHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<SearchEngineFindFieldController>(SearchEngineFindFieldController);
        handler = module.get<SearchEngineFindFieldHandler>(SearchEngineFindFieldHandler);
    });

    describe('main', () =>
    {
        test('SearchEngineFindFieldController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a field', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(fields[0])));
            expect(await controller.main()).toBe(fields[0]);
        });
    });
});