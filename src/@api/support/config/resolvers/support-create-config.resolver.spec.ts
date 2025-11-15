/* eslint-disable @typescript-eslint/no-unused-vars */
import { SupportCreateConfigInput } from '@api/graphql';
import {
    SupportCreateConfigHandler,
    SupportCreateConfigResolver,
} from '@api/support/config';
import { supportMockConfigData } from '@app/support/config';
import { Test, TestingModule } from '@nestjs/testing';

describe('SupportCreateConfigResolver', () => {
    let resolver: SupportCreateConfigResolver;
    let handler: SupportCreateConfigHandler;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [],
            providers: [
                SupportCreateConfigResolver,
                {
                    provide: SupportCreateConfigHandler,
                    useValue: {
                        main: () => {
                            /**/
                        },
                    },
                },
            ],
        }).compile();

        resolver = module.get<SupportCreateConfigResolver>(
            SupportCreateConfigResolver,
        );
        handler = module.get<SupportCreateConfigHandler>(
            SupportCreateConfigHandler,
        );
    });

    test('SupportCreateConfigResolver should be defined', () => {
        expect(resolver).toBeDefined();
    });

    describe('main', () => {
        test('SupportCreateConfigResolver should be defined', () => {
            expect(resolver).toBeDefined();
        });

        test('should return an config created', async () => {
            jest.spyOn(handler, 'main').mockImplementation(
                () =>
                    new Promise((resolve) => resolve(supportMockConfigData[0])),
            );
            expect(
                await resolver.main(
                    <SupportCreateConfigInput>supportMockConfigData[0],
                ),
            ).toBe(supportMockConfigData[0]);
        });
    });
});
