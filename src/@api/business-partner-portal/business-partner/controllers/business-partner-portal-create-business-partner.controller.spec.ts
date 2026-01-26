/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import {
  BusinessPartnerPortalCreateBusinessPartnerController,
  BusinessPartnerPortalCreateBusinessPartnerHandler,
} from '@api/business-partner-portal/business-partner';
import { businessPartnerPortalMockBusinessPartnerData } from '@app/business-partner-portal/business-partner';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalCreateBusinessPartnerController', () => {
  let controller: BusinessPartnerPortalCreateBusinessPartnerController;
  let handler: BusinessPartnerPortalCreateBusinessPartnerHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BusinessPartnerPortalCreateBusinessPartnerController],
      providers: [
        {
          provide: BusinessPartnerPortalCreateBusinessPartnerHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalCreateBusinessPartnerController>(
        BusinessPartnerPortalCreateBusinessPartnerController,
      );
    handler = module.get<BusinessPartnerPortalCreateBusinessPartnerHandler>(
      BusinessPartnerPortalCreateBusinessPartnerHandler,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalCreateBusinessPartnerController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return an businessPartner created', async () => {
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
