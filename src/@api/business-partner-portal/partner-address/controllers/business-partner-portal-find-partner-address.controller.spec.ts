/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPartnerAddressController,
  BusinessPartnerPortalFindPartnerAddressHandler,
} from '@api/business-partner-portal/partner-address';
import { businessPartnerPortalMockPartnerAddressData } from '@app/business-partner-portal/partner-address';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindPartnerAddressController', () => {
  let controller: BusinessPartnerPortalFindPartnerAddressController;
  let handler: BusinessPartnerPortalFindPartnerAddressHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BusinessPartnerPortalFindPartnerAddressController],
      providers: [
        {
          provide: BusinessPartnerPortalFindPartnerAddressHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller = module.get<BusinessPartnerPortalFindPartnerAddressController>(
      BusinessPartnerPortalFindPartnerAddressController,
    );
    handler = module.get<BusinessPartnerPortalFindPartnerAddressHandler>(
      BusinessPartnerPortalFindPartnerAddressHandler,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindPartnerAddressController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return a partnerAddress', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPartnerAddressData[0]),
            ),
        );
      expect(await controller.main()).toBe(
        businessPartnerPortalMockPartnerAddressData[0],
      );
    });
  });
});
