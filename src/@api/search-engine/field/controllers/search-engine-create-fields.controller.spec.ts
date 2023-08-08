import { SearchEngineCreateFieldsController, SearchEngineCreateFieldsHandler } from '@api/search-engine/field';
import { searchEngineMockFieldData } from '@app/search-engine/field';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineCreateFieldsController', () =>
{
    let controller: SearchEngineCreateFieldsController;

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
    });

    describe('main', () =>
    {
        test('SearchEngineCreateFieldsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an searchEngineMockFieldData created', async () =>
        {
            expect(
                await controller.main(
                    searchEngineMockFieldData,
                ),
            )
                .toBe(undefined);
        });
    });
});
