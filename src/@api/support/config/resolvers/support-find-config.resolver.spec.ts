/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    SupportFindConfigHandler,
    SupportFindConfigResolver,
} from '@api/support/config';
import { supportMockConfigData } from '@app/support/config';
import { Test, TestingModule } from '@nestjs/testing';

describe('SupportFindConfigResolver', () => {
    let resolver: SupportFindConfigResolver;
    let handler: SupportFindConfigHandler;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [],
            providers: [
                SupportFindConfigResolver,
                {
                    provide: SupportFindConfigHandler,
                    useValue: {
                        main: () => {
                            /**/
                        },
                    },
                },
            ],
        }).compile();

        resolver = module.get<SupportFindConfigResolver>(
            SupportFindConfigResolver,
        );
        handler = module.get<SupportFindConfigHandler>(
            SupportFindConfigHandler,
        );
    });

    test('SupportFindConfigResolver should be defined', () => {
        expect(resolver).toBeDefined();
    });

    describe('main', () => {
        test('SupportFindConfigResolver should be defined', () => {
            expect(resolver).toBeDefined();
        });

        test('should return a config', async () => {
            jest.spyOn(handler, 'main').mockImplementation(
                () =>
                    new Promise((resolve) => resolve(supportMockConfigData[0])),
            );
            expect(await resolver.main()).toBe(supportMockConfigData[0]);
        });
    });
});
