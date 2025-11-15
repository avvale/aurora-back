/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    SupportDeleteConfigByIdHandler,
    SupportDeleteConfigByIdResolver,
} from '@api/support/config';
import { supportMockConfigData } from '@app/support/config';
import { Test, TestingModule } from '@nestjs/testing';

describe('SupportDeleteConfigByIdResolver', () => {
    let resolver: SupportDeleteConfigByIdResolver;
    let handler: SupportDeleteConfigByIdHandler;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [],
            providers: [
                SupportDeleteConfigByIdResolver,
                {
                    provide: SupportDeleteConfigByIdHandler,
                    useValue: {
                        main: () => {
                            /**/
                        },
                    },
                },
            ],
        }).compile();

        resolver = module.get<SupportDeleteConfigByIdResolver>(
            SupportDeleteConfigByIdResolver,
        );
        handler = module.get<SupportDeleteConfigByIdHandler>(
            SupportDeleteConfigByIdHandler,
        );
    });

    test('SupportDeleteConfigByIdResolver should be defined', () => {
        expect(resolver).toBeDefined();
    });

    describe('main', () => {
        test('SupportDeleteConfigByIdResolver should be defined', () => {
            expect(resolver).toBeDefined();
        });

        test('should return an config deleted', async () => {
            jest.spyOn(handler, 'main').mockImplementation(
                () =>
                    new Promise((resolve) => resolve(supportMockConfigData[0])),
            );
            expect(await resolver.main(supportMockConfigData[0].id)).toBe(
                supportMockConfigData[0],
            );
        });
    });
});
