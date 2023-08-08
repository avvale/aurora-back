import { SearchEngineFindFieldController, SearchEngineFindFieldHandler } from '@api/search-engine/field';
import { searchEngineMockFieldData } from '@app/search-engine/field';
import { Test, TestingModule } from '@nestjs/testing';

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
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(searchEngineMockFieldData[0])));
            expect(await controller.main()).toBe(searchEngineMockFieldData[0]);
        });
    });
});
