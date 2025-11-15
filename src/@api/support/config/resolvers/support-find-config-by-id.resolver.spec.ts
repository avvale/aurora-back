/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    SupportFindConfigByIdHandler,
    SupportFindConfigByIdResolver,
} from '@api/support/config';
import { supportMockConfigData } from '@app/support/config';
import { Test, TestingModule } from '@nestjs/testing';

describe('SupportFindConfigByIdResolver', () => {
    let resolver: SupportFindConfigByIdResolver;
    let handler: SupportFindConfigByIdHandler;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [],
            providers: [
                SupportFindConfigByIdResolver,
                {
                    provide: SupportFindConfigByIdHandler,
                    useValue: {
                        main: () => {
                            /**/
                        },
                    },
                },
            ],
        }).compile();

        resolver = module.get<SupportFindConfigByIdResolver>(
            SupportFindConfigByIdResolver,
        );
        handler = module.get<SupportFindConfigByIdHandler>(
            SupportFindConfigByIdHandler,
        );
    });

    test('SupportFindConfigByIdResolver should be defined', () => {
        expect(resolver).toBeDefined();
    });

    describe('main', () => {
        test('SupportFindConfigByIdResolver should be defined', () => {
            expect(resolver).toBeDefined();
        });

        test('should return an config by id', async () => {
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
