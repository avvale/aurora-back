/* eslint-disable @typescript-eslint/no-unused-vars */
import { CommonDeleteAdministrativeAreaLevel1ByIdHandler } from '../handlers/common-delete-administrative-area-level-1-by-id.handler';
import { CommonDeleteAdministrativeAreaLevel1ByIdController } from './common-delete-administrative-area-level-1-by-id.controller';
import { commonMockAdministrativeAreaLevel1Data } from '@app/common/administrative-area-level-1/infrastructure/mock/common-mock-administrative-area-level-1.data';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonDeleteAdministrativeAreaLevel1ByIdController', () =>
{
    let controller: CommonDeleteAdministrativeAreaLevel1ByIdController;
    let handler: CommonDeleteAdministrativeAreaLevel1ByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                CommonDeleteAdministrativeAreaLevel1ByIdController,
            ],
            providers: [
                {
                    provide : CommonDeleteAdministrativeAreaLevel1ByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<CommonDeleteAdministrativeAreaLevel1ByIdController>(CommonDeleteAdministrativeAreaLevel1ByIdController);
        handler = module.get<CommonDeleteAdministrativeAreaLevel1ByIdHandler>(CommonDeleteAdministrativeAreaLevel1ByIdHandler);
    });

    describe('main', () =>
    {
        test('CommonDeleteAdministrativeAreaLevel1ByIdController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an administrativeAreaLevel1 deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(commonMockAdministrativeAreaLevel1Data[0])));
            expect(await controller.main(commonMockAdministrativeAreaLevel1Data[0].id)).toBe(commonMockAdministrativeAreaLevel1Data[0]);
        });
    });
});