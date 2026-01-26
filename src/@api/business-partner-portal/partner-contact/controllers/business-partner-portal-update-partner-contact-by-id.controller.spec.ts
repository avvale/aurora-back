/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import {
  BusinessPartnerPortalUpdatePartnerContactByIdController,
  BusinessPartnerPortalUpdatePartnerContactByIdHandler,
} from '@api/business-partner-portal/partner-contact';
import { businessPartnerPortalMockPartnerContactData } from '@app/business-partner-portal/partner-contact';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalUpdatePartnerContactByIdController', () => {
  let controller: BusinessPartnerPortalUpdatePartnerContactByIdController;
  let handler: BusinessPartnerPortalUpdatePartnerContactByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BusinessPartnerPortalUpdatePartnerContactByIdController],
      providers: [
        {
          provide: BusinessPartnerPortalUpdatePartnerContactByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalUpdatePartnerContactByIdController>(
        BusinessPartnerPortalUpdatePartnerContactByIdController,
      );
    handler = module.get<BusinessPartnerPortalUpdatePartnerContactByIdHandler>(
      BusinessPartnerPortalUpdatePartnerContactByIdHandler,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalUpdatePartnerContactByIdController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return a partnerContact updated', async () => {
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
