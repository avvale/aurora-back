/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import {
  BusinessPartnerPortalFindBusinessPartnerController,
  BusinessPartnerPortalFindBusinessPartnerHandler,
} from '@api/business-partner-portal/business-partner';
import { businessPartnerPortalMockBusinessPartnerData } from '@app/business-partner-portal/business-partner';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindBusinessPartnerController', () => {
  let controller: BusinessPartnerPortalFindBusinessPartnerController;
  let handler: BusinessPartnerPortalFindBusinessPartnerHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BusinessPartnerPortalFindBusinessPartnerController],
      providers: [
        {
          provide: BusinessPartnerPortalFindBusinessPartnerHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller = module.get<BusinessPartnerPortalFindBusinessPartnerController>(
      BusinessPartnerPortalFindBusinessPartnerController,
    );
    handler = module.get<BusinessPartnerPortalFindBusinessPartnerHandler>(
      BusinessPartnerPortalFindBusinessPartnerHandler,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindBusinessPartnerController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return a businessPartner', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockBusinessPartnerData[0]),
            ),
        );
      expect(await controller.main()).toBe(
        businessPartnerPortalMockBusinessPartnerData[0],
      );
    });
  });
});
