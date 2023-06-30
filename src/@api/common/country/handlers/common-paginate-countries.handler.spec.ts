/* eslint-disable @typescript-eslint/no-unused-vars */
import { CommonPaginateCountriesHandler } from './common-paginate-countries.handler';
import { commonMockCountryData } from '@app/common/country/infrastructure/mock/common-mock-country.data';
import { langs } from '@app/common/lang/infrastructure/mock/mock-lang.data';
import { CoreAddI18nConstraintService, ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { CACHE_MANAGER, CacheModule } from '@nestjs/cache-manager';
import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonPaginateCountriesHandler', () =>
{
    let handler: CommonPaginateCountriesHandler;
    let queryBus: IQueryBus;
    let commandBus: ICommandBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
                CacheModule.register(),
            ],
            providers: [
                CommonPaginateCountriesHandler,
                CoreAddI18nConstraintService,
                {
                    provide : ConfigService,
                    useValue: {
                        get: (key: string) => key === 'APP_FALLBACK_LANG' ? 'es' : '',
                    },
                },
                {
                    provide : CACHE_MANAGER,
                    useValue: {
                        get: (key: string) => key === 'common/langs' ? langs : null,
                    },
                },
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

        handler = module.get<CommonPaginateCountriesHandler>(CommonPaginateCountriesHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
        commandBus = module.get<ICommandBus>(ICommandBus);
    });

    test('CommonPaginateCountriesHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('CommonPaginateCountriesHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a countries', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve({
                total: commonMockCountryData.length,
                count: commonMockCountryData.length,
                rows : commonMockCountryData,
            })));
            expect(await handler.main()).toEqual({
                total: commonMockCountryData.length,
                count: commonMockCountryData.length,
                rows : commonMockCountryData,
            });
        });
    });
});