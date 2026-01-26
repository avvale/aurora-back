/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPartnerContactByIdController,
  BusinessPartnerPortalFindPartnerContactByIdHandler,
} from '@api/business-partner-portal/partner-contact';
import { businessPartnerPortalMockPartnerContactData } from '@app/business-partner-portal/partner-contact';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindPartnerContactByIdController', () => {
  let controller: BusinessPartnerPortalFindPartnerContactByIdController;
  let handler: BusinessPartnerPortalFindPartnerContactByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BusinessPartnerPortalFindPartnerContactByIdController],
      providers: [
        {
          provide: BusinessPartnerPortalFindPartnerContactByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalFindPartnerContactByIdController>(
        BusinessPartnerPortalFindPartnerContactByIdController,
      );
    handler = module.get<BusinessPartnerPortalFindPartnerContactByIdHandler>(
      BusinessPartnerPortalFindPartnerContactByIdHandler,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindPartnerContactByIdController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return an partnerContact by id', async () => {
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
