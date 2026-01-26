/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import {
  BusinessPartnerPortalDeletePartnerContactByIdController,
  BusinessPartnerPortalDeletePartnerContactByIdHandler,
} from '@api/business-partner-portal/partner-contact';
import { businessPartnerPortalMockPartnerContactData } from '@app/business-partner-portal/partner-contact';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalDeletePartnerContactByIdController', () => {
  let controller: BusinessPartnerPortalDeletePartnerContactByIdController;
  let handler: BusinessPartnerPortalDeletePartnerContactByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BusinessPartnerPortalDeletePartnerContactByIdController],
      providers: [
        {
          provide: BusinessPartnerPortalDeletePartnerContactByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalDeletePartnerContactByIdController>(
        BusinessPartnerPortalDeletePartnerContactByIdController,
      );
    handler = module.get<BusinessPartnerPortalDeletePartnerContactByIdHandler>(
      BusinessPartnerPortalDeletePartnerContactByIdHandler,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalDeletePartnerContactByIdController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return an partnerContact deleted', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPartnerContactData[0]),
            ),
        );
      expect(
        await controller.main(
          businessPartnerPortalMockPartnerContactData[0].id,
        ),
      ).toBe(businessPartnerPortalMockPartnerContactData[0]);
    });
  });
});
