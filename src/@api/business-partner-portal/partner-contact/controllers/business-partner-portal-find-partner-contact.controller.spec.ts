/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPartnerContactController,
  BusinessPartnerPortalFindPartnerContactHandler,
} from '@api/business-partner-portal/partner-contact';
import { businessPartnerPortalMockPartnerContactData } from '@app/business-partner-portal/partner-contact';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindPartnerContactController', () => {
  let controller: BusinessPartnerPortalFindPartnerContactController;
  let handler: BusinessPartnerPortalFindPartnerContactHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BusinessPartnerPortalFindPartnerContactController],
      providers: [
        {
          provide: BusinessPartnerPortalFindPartnerContactHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller = module.get<BusinessPartnerPortalFindPartnerContactController>(
      BusinessPartnerPortalFindPartnerContactController,
    );
    handler = module.get<BusinessPartnerPortalFindPartnerContactHandler>(
      BusinessPartnerPortalFindPartnerContactHandler,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindPartnerContactController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return a partnerContact', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPartnerContactData[0]),
            ),
        );
      expect(await controller.main()).toBe(
        businessPartnerPortalMockPartnerContactData[0],
      );
    });
  });
});
