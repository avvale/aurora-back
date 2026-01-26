/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPartnerAddressByIdController,
  BusinessPartnerPortalFindPartnerAddressByIdHandler,
} from '@api/business-partner-portal/partner-address';
import { businessPartnerPortalMockPartnerAddressData } from '@app/business-partner-portal/partner-address';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindPartnerAddressByIdController', () => {
  let controller: BusinessPartnerPortalFindPartnerAddressByIdController;
  let handler: BusinessPartnerPortalFindPartnerAddressByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BusinessPartnerPortalFindPartnerAddressByIdController],
      providers: [
        {
          provide: BusinessPartnerPortalFindPartnerAddressByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalFindPartnerAddressByIdController>(
        BusinessPartnerPortalFindPartnerAddressByIdController,
      );
    handler = module.get<BusinessPartnerPortalFindPartnerAddressByIdHandler>(
      BusinessPartnerPortalFindPartnerAddressByIdHandler,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindPartnerAddressByIdController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return an partnerAddress by id', async () => {
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
