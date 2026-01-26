/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import {
  BusinessPartnerPortalCreatePartnerAddressController,
  BusinessPartnerPortalCreatePartnerAddressHandler,
} from '@api/business-partner-portal/partner-address';
import { businessPartnerPortalMockPartnerAddressData } from '@app/business-partner-portal/partner-address';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalCreatePartnerAddressController', () => {
  let controller: BusinessPartnerPortalCreatePartnerAddressController;
  let handler: BusinessPartnerPortalCreatePartnerAddressHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BusinessPartnerPortalCreatePartnerAddressController],
      providers: [
        {
          provide: BusinessPartnerPortalCreatePartnerAddressHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalCreatePartnerAddressController>(
        BusinessPartnerPortalCreatePartnerAddressController,
      );
    handler = module.get<BusinessPartnerPortalCreatePartnerAddressHandler>(
      BusinessPartnerPortalCreatePartnerAddressHandler,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalCreatePartnerAddressController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return an partnerAddress created', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPartnerAddressData[0]),
            ),
        );
      expect(
        await controller.main(businessPartnerPortalMockPartnerAddressData[0]),
      ).toBe(businessPartnerPortalMockPartnerAddressData[0]);
    });
  });
});
