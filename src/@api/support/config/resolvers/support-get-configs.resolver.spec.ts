/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    SupportGetConfigsHandler,
    SupportGetConfigsResolver,
} from '@api/support/config';
import { supportMockConfigData } from '@app/support/config';
import { Test, TestingModule } from '@nestjs/testing';

describe('SupportGetConfigsResolver', () => {
    let resolver: SupportGetConfigsResolver;
    let handler: SupportGetConfigsHandler;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [],
            providers: [
                SupportGetConfigsResolver,
                {
                    provide: SupportGetConfigsHandler,
                    useValue: {
                        main: () => {
                            /**/
                        },
                    },
                },
            ],
        }).compile();

        resolver = module.get<SupportGetConfigsResolver>(
            SupportGetConfigsResolver,
        );
        handler = module.get<SupportGetConfigsHandler>(
            SupportGetConfigsHandler,
        );
    });

    test('SupportGetConfigsResolver should be defined', () => {
        expect(resolver).toBeDefined();
    });

    describe('main', () => {
        test('SupportGetConfigsResolver should be defined', () => {
            expect(resolver).toBeDefined();
        });

        test('should return a supportMockConfigData', async () => {
            jest.spyOn(handler, 'main').mockImplementation(
                () => new Promise((resolve) => resolve(supportMockConfigData)),
            );
            expect(await resolver.main()).toBe(supportMockConfigData);
        });
    });
});
