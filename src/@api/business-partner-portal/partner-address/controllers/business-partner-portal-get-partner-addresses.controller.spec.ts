/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import {
  BusinessPartnerPortalGetPartnerAddressesController,
  BusinessPartnerPortalGetPartnerAddressesHandler,
} from '@api/business-partner-portal/partner-address';
import { businessPartnerPortalMockPartnerAddressData } from '@app/business-partner-portal/partner-address';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalGetPartnerAddressesController', () => {
  let controller: BusinessPartnerPortalGetPartnerAddressesController;
  let handler: BusinessPartnerPortalGetPartnerAddressesHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BusinessPartnerPortalGetPartnerAddressesController],
      providers: [
        {
          provide: BusinessPartnerPortalGetPartnerAddressesHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller = module.get<BusinessPartnerPortalGetPartnerAddressesController>(
      BusinessPartnerPortalGetPartnerAddressesController,
    );
    handler = module.get<BusinessPartnerPortalGetPartnerAddressesHandler>(
      BusinessPartnerPortalGetPartnerAddressesHandler,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalGetPartnerAddressesController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return a businessPartnerPortalMockPartnerAddressData', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPartnerAddressData),
            ),
        );
      expect(await controller.main()).toBe(
        businessPartnerPortalMockPartnerAddressData,
      );
    });
  });
});
