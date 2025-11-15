/* eslint-disable @typescript-eslint/no-unused-vars */
import { SupportUpdateConfigByIdInput } from '@api/graphql';
import {
    SupportUpdateConfigByIdHandler,
    SupportUpdateConfigByIdResolver,
} from '@api/support/config';
import { supportMockConfigData } from '@app/support/config';
import { Test, TestingModule } from '@nestjs/testing';

describe('SupportUpdateConfigByIdResolver', () => {
    let resolver: SupportUpdateConfigByIdResolver;
    let handler: SupportUpdateConfigByIdHandler;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [],
            providers: [
                SupportUpdateConfigByIdResolver,
                {
                    provide: SupportUpdateConfigByIdHandler,
                    useValue: {
                        main: () => {
                            /**/
                        },
                    },
                },
            ],
        }).compile();

        resolver = module.get<SupportUpdateConfigByIdResolver>(
            SupportUpdateConfigByIdResolver,
        );
        handler = module.get<SupportUpdateConfigByIdHandler>(
            SupportUpdateConfigByIdHandler,
        );
    });

    test('SupportUpdateConfigByIdResolver should be defined', () => {
        expect(resolver).toBeDefined();
    });

    describe('main', () => {
        test('SupportUpdateConfigByIdResolver should be defined', () => {
            expect(resolver).toBeDefined();
        });

        test('should return a config by id updated', async () => {
            jest.spyOn(handler, 'main').mockImplementation(
                () =>
                    new Promise((resolve) => resolve(supportMockConfigData[0])),
            );
            expect(
                await resolver.main(
                    <SupportUpdateConfigByIdInput>supportMockConfigData[0],
                ),
            ).toBe(supportMockConfigData[0]);
        });
    });
});
