/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import {
  BusinessPartnerPortalGetPartnerContactsController,
  BusinessPartnerPortalGetPartnerContactsHandler,
} from '@api/business-partner-portal/partner-contact';
import { businessPartnerPortalMockPartnerContactData } from '@app/business-partner-portal/partner-contact';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalGetPartnerContactsController', () => {
  let controller: BusinessPartnerPortalGetPartnerContactsController;
  let handler: BusinessPartnerPortalGetPartnerContactsHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BusinessPartnerPortalGetPartnerContactsController],
      providers: [
        {
          provide: BusinessPartnerPortalGetPartnerContactsHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller = module.get<BusinessPartnerPortalGetPartnerContactsController>(
      BusinessPartnerPortalGetPartnerContactsController,
    );
    handler = module.get<BusinessPartnerPortalGetPartnerContactsHandler>(
      BusinessPartnerPortalGetPartnerContactsHandler,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalGetPartnerContactsController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return a businessPartnerPortalMockPartnerContactData', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPartnerContactData),
            ),
        );
      expect(await controller.main()).toBe(
        businessPartnerPortalMockPartnerContactData,
      );
    });
  });
});
