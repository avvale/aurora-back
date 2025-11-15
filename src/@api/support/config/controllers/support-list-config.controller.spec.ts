/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { SupportListConfigHandler } from '../handlers/support-list-config.handler';
import { SupportListConfigController } from './support-list-config.controller';

describe('SupportListConfigController', () => {
    let controller: SupportListConfigController;
    let handler: SupportListConfigHandler;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [],
            controllers: [SupportListConfigController],
            providers: [
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

        controller = module.get<SupportListConfigController>(
            SupportListConfigController,
        );
        handler = module.get<SupportListConfigHandler>(
            SupportListConfigHandler,
        );
    });

    describe('main', () => {
        test('SupportListConfigController should be defined', () => {
            expect(controller).toBeDefined();
        });
    });
});
