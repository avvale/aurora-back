import { CommonCreateCountriesHandler } from '@api/common/country';
import { commonMockCountryData } from '@app/common/country';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonCreateCountriesHandler', () =>
{
    let handler: CommonCreateCountriesHandler;
    let queryBus: IQueryBus;
    let commandBus: ICommandBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommonCreateCountriesHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
                {
                    provide : ICommandBus,
                    useValue: {
                        dispatch: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<CommonCreateCountriesHandler>(CommonCreateCountriesHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
        commandBus = module.get<ICommandBus>(ICommandBus);
    });

    describe('main', () =>
    {
        test('CommonCreateCountriesHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an commonMockCountryData created', async () =>
        {
            expect(await handler.main(commonMockCountryData)).toBe(true);
        });
    });
});