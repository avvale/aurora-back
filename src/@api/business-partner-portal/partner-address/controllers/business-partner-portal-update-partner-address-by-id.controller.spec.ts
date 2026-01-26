/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import {
  BusinessPartnerPortalUpdatePartnerAddressByIdController,
  BusinessPartnerPortalUpdatePartnerAddressByIdHandler,
} from '@api/business-partner-portal/partner-address';
import { businessPartnerPortalMockPartnerAddressData } from '@app/business-partner-portal/partner-address';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalUpdatePartnerAddressByIdController', () => {
  let controller: BusinessPartnerPortalUpdatePartnerAddressByIdController;
  let handler: BusinessPartnerPortalUpdatePartnerAddressByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BusinessPartnerPortalUpdatePartnerAddressByIdController],
      providers: [
        {
          provide: BusinessPartnerPortalUpdatePartnerAddressByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalUpdatePartnerAddressByIdController>(
        BusinessPartnerPortalUpdatePartnerAddressByIdController,
      );
    handler = module.get<BusinessPartnerPortalUpdatePartnerAddressByIdHandler>(
      BusinessPartnerPortalUpdatePartnerAddressByIdHandler,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalUpdatePartnerAddressByIdController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return a partnerAddress updated', async () => {
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
