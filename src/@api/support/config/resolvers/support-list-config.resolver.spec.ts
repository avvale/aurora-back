/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { SupportListConfigHandler } from '../handlers/support-list-config.handler';
import { SupportListConfigResolver } from './support-list-config.resolver';

describe('SupportListConfigResolver', () => {
    let resolver: SupportListConfigResolver;
    let handler: SupportListConfigHandler;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [],
            providers: [
                SupportListConfigResolver,
                {
                    provide: SupportListConfigHandler,
                    useValue: {
                        main: () => {
                            /**/
                        },
                    },
                },
            ],
        }).compile();

        resolver = module.get<SupportListConfigResolver>(
            SupportListConfigResolver,
        );
        handler = module.get<SupportListConfigHandler>(
            SupportListConfigHandler,
        );
    });

    test('SupportListConfigResolver should be defined', () => {
        expect(resolver).toBeDefined();
    });

    describe('main', () => {
        test('SupportListConfigResolver should be defined', () => {
            expect(resolver).toBeDefined();
        });
    });
});
