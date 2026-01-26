/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import {
  BusinessPartnerPortalCreatePartnerContactController,
  BusinessPartnerPortalCreatePartnerContactHandler,
} from '@api/business-partner-portal/partner-contact';
import { businessPartnerPortalMockPartnerContactData } from '@app/business-partner-portal/partner-contact';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalCreatePartnerContactController', () => {
  let controller: BusinessPartnerPortalCreatePartnerContactController;
  let handler: BusinessPartnerPortalCreatePartnerContactHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BusinessPartnerPortalCreatePartnerContactController],
      providers: [
        {
          provide: BusinessPartnerPortalCreatePartnerContactHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalCreatePartnerContactController>(
        BusinessPartnerPortalCreatePartnerContactController,
      );
    handler = module.get<BusinessPartnerPortalCreatePartnerContactHandler>(
      BusinessPartnerPortalCreatePartnerContactHandler,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalCreatePartnerContactController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return an partnerContact created', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPartnerContactData[0]),
            ),
        );
      expect(
        await controller.main(businessPartnerPortalMockPartnerContactData[0]),
      ).toBe(businessPartnerPortalMockPartnerContactData[0]);
    });
  });
});
