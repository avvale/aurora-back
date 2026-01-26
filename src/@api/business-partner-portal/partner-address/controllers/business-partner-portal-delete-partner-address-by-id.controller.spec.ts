/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import {
  BusinessPartnerPortalDeletePartnerAddressByIdController,
  BusinessPartnerPortalDeletePartnerAddressByIdHandler,
} from '@api/business-partner-portal/partner-address';
import { businessPartnerPortalMockPartnerAddressData } from '@app/business-partner-portal/partner-address';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalDeletePartnerAddressByIdController', () => {
  let controller: BusinessPartnerPortalDeletePartnerAddressByIdController;
  let handler: BusinessPartnerPortalDeletePartnerAddressByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BusinessPartnerPortalDeletePartnerAddressByIdController],
      providers: [
        {
          provide: BusinessPartnerPortalDeletePartnerAddressByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalDeletePartnerAddressByIdController>(
        BusinessPartnerPortalDeletePartnerAddressByIdController,
      );
    handler = module.get<BusinessPartnerPortalDeletePartnerAddressByIdHandler>(
      BusinessPartnerPortalDeletePartnerAddressByIdHandler,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalDeletePartnerAddressByIdController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return an partnerAddress deleted', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPartnerAddressData[0]),
            ),
        );
      expect(
        await controller.main(
          businessPartnerPortalMockPartnerAddressData[0].id,
        ),
      ).toBe(businessPartnerPortalMockPartnerAddressData[0]);
    });
  });
});
