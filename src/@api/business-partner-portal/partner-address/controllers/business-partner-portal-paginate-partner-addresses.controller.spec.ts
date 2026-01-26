/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import {
  BusinessPartnerPortalPaginatePartnerAddressesController,
  BusinessPartnerPortalPaginatePartnerAddressesHandler,
} from '@api/business-partner-portal/partner-address';
import { businessPartnerPortalMockPartnerAddressData } from '@app/business-partner-portal/partner-address';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalPaginatePartnerAddressesController', () => {
  let controller: BusinessPartnerPortalPaginatePartnerAddressesController;
  let handler: BusinessPartnerPortalPaginatePartnerAddressesHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BusinessPartnerPortalPaginatePartnerAddressesController],
      providers: [
        {
          provide: BusinessPartnerPortalPaginatePartnerAddressesHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalPaginatePartnerAddressesController>(
        BusinessPartnerPortalPaginatePartnerAddressesController,
      );
    handler = module.get<BusinessPartnerPortalPaginatePartnerAddressesHandler>(
      BusinessPartnerPortalPaginatePartnerAddressesHandler,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalPaginatePartnerAddressesController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return a businessPartnerPortalMockPartnerAddressData', async () => {
      jest.spyOn(handler, 'main').mockImplementation(
        () =>
          new Promise((resolve) =>
            resolve({
              total: 5,
              count: 5,
              rows: businessPartnerPortalMockPartnerAddressData,
            }),
          ),
      );
      expect(await controller.main()).toStrictEqual({
        total: 5,
        count: 5,
        rows: businessPartnerPortalMockPartnerAddressData,
      });
    });
  });
});
