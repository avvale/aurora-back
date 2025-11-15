/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    SupportPaginateConfigsHandler,
    SupportPaginateConfigsResolver,
} from '@api/support/config';
import { supportMockConfigData } from '@app/support/config';
import { Test, TestingModule } from '@nestjs/testing';

describe('SupportPaginateConfigsResolver', () => {
    let resolver: SupportPaginateConfigsResolver;
    let handler: SupportPaginateConfigsHandler;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [],
            providers: [
                SupportPaginateConfigsResolver,
                {
                    provide: SupportPaginateConfigsHandler,
                    useValue: {
                        main: () => {
                            /**/
                        },
                    },
                },
            ],
        }).compile();

        resolver = module.get<SupportPaginateConfigsResolver>(
            SupportPaginateConfigsResolver,
        );
        handler = module.get<SupportPaginateConfigsHandler>(
            SupportPaginateConfigsHandler,
        );
    });

    test('SupportPaginateConfigsResolver should be defined', () => {
        expect(resolver).toBeDefined();
    });

    describe('main', () => {
        test('SupportPaginateConfigsResolver should be defined', () => {
            expect(resolver).toBeDefined();
        });

        test('should return a supportMockConfigData', async () => {
            jest.spyOn(handler, 'main').mockImplementation(
                () =>
                    new Promise((resolve) =>
                        resolve({
                            total: 5,
                            count: 5,
                            rows: supportMockConfigData,
                        }),
                    ),
            );
            expect(await resolver.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows: supportMockConfigData,
            });
        });
    });
});
