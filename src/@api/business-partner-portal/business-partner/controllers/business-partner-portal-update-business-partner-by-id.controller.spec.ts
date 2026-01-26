/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import {
  BusinessPartnerPortalUpdateBusinessPartnerByIdController,
  BusinessPartnerPortalUpdateBusinessPartnerByIdHandler,
} from '@api/business-partner-portal/business-partner';
import { businessPartnerPortalMockBusinessPartnerData } from '@app/business-partner-portal/business-partner';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalUpdateBusinessPartnerByIdController', () => {
  let controller: BusinessPartnerPortalUpdateBusinessPartnerByIdController;
  let handler: BusinessPartnerPortalUpdateBusinessPartnerByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BusinessPartnerPortalUpdateBusinessPartnerByIdController],
      providers: [
        {
          provide: BusinessPartnerPortalUpdateBusinessPartnerByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalUpdateBusinessPartnerByIdController>(
        BusinessPartnerPortalUpdateBusinessPartnerByIdController,
      );
    handler = module.get<BusinessPartnerPortalUpdateBusinessPartnerByIdHandler>(
      BusinessPartnerPortalUpdateBusinessPartnerByIdHandler,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalUpdateBusinessPartnerByIdController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return a businessPartner updated', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockBusinessPartnerData[0]),
            ),
        );
      expect(
        await controller.main(businessPartnerPortalMockBusinessPartnerData[0]),
      ).toBe(businessPartnerPortalMockBusinessPartnerData[0]);
    });
  });
});
