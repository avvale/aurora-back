/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineFindFieldByIdHandler } from './search-engine-find-field-by-id.handler';
import { fields } from '@app/search-engine/field/infrastructure/mock/mock-field.data';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineFindFieldByIdHandler', () =>
{
    let handler: SearchEngineFindFieldByIdHandler;
    let queryBus: IQueryBus;
    let commandBus: ICommandBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                SearchEngineFindFieldByIdHandler,
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

        handler = module.get<SearchEngineFindFieldByIdHandler>(SearchEngineFindFieldByIdHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
        commandBus = module.get<ICommandBus>(ICommandBus);
    });

    test('SearchEngineFindFieldByIdHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('SearchEngineFindFieldByIdHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an field by id', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(fields[0])));
            expect(await handler.main(fields[0].id)).toBe(fields[0]);
        });
    });
});