/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import {
  BusinessPartnerPortalDeleteBusinessPartnerByIdController,
  BusinessPartnerPortalDeleteBusinessPartnerByIdHandler,
} from '@api/business-partner-portal/business-partner';
import { businessPartnerPortalMockBusinessPartnerData } from '@app/business-partner-portal/business-partner';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalDeleteBusinessPartnerByIdController', () => {
  let controller: BusinessPartnerPortalDeleteBusinessPartnerByIdController;
  let handler: BusinessPartnerPortalDeleteBusinessPartnerByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BusinessPartnerPortalDeleteBusinessPartnerByIdController],
      providers: [
        {
          provide: BusinessPartnerPortalDeleteBusinessPartnerByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalDeleteBusinessPartnerByIdController>(
        BusinessPartnerPortalDeleteBusinessPartnerByIdController,
      );
    handler = module.get<BusinessPartnerPortalDeleteBusinessPartnerByIdHandler>(
      BusinessPartnerPortalDeleteBusinessPartnerByIdHandler,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalDeleteBusinessPartnerByIdController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return an businessPartner deleted', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockBusinessPartnerData[0]),
            ),
        );
      expect(
        await controller.main(
          businessPartnerPortalMockBusinessPartnerData[0].id,
        ),
      ).toBe(businessPartnerPortalMockBusinessPartnerData[0]);
    });
  });
});
