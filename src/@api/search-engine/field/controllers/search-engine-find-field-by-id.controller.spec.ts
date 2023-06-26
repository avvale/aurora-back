/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEngineFindFieldByIdController } from './search-engine-find-field-by-id.controller';
import { SearchEngineFindFieldByIdHandler } from '../handlers/search-engine-find-field-by-id.handler';

// sources
import { fields } from '@app/search-engine/field/infrastructure/mock/mock-field.data';

describe('SearchEngineFindFieldByIdController', () =>
{
    let controller: SearchEngineFindFieldByIdController;
    let handler: SearchEngineFindFieldByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                SearchEngineFindFieldByIdController,
            ],
            providers: [
                {
                    provide : SearchEngineFindFieldByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<SearchEngineFindFieldByIdController>(SearchEngineFindFieldByIdController);
        handler = module.get<SearchEngineFindFieldByIdHandler>(SearchEngineFindFieldByIdHandler);
    });

    describe('main', () =>
    {
        test('SearchEngineFindFieldByIdController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an field by id', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(fields[0])));
            expect(await controller.main(fields[0].id)).toBe(fields[0]);
        });
    });
});