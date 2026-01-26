/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import {
  BusinessPartnerPortalGetBusinessPartnersController,
  BusinessPartnerPortalGetBusinessPartnersHandler,
} from '@api/business-partner-portal/business-partner';
import { businessPartnerPortalMockBusinessPartnerData } from '@app/business-partner-portal/business-partner';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalGetBusinessPartnersController', () => {
  let controller: BusinessPartnerPortalGetBusinessPartnersController;
  let handler: BusinessPartnerPortalGetBusinessPartnersHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BusinessPartnerPortalGetBusinessPartnersController],
      providers: [
        {
          provide: BusinessPartnerPortalGetBusinessPartnersHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller = module.get<BusinessPartnerPortalGetBusinessPartnersController>(
      BusinessPartnerPortalGetBusinessPartnersController,
    );
    handler = module.get<BusinessPartnerPortalGetBusinessPartnersHandler>(
      BusinessPartnerPortalGetBusinessPartnersHandler,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalGetBusinessPartnersController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return a businessPartnerPortalMockBusinessPartnerData', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockBusinessPartnerData),
            ),
        );
      expect(await controller.main()).toBe(
        businessPartnerPortalMockBusinessPartnerData,
      );
    });
  });
});
