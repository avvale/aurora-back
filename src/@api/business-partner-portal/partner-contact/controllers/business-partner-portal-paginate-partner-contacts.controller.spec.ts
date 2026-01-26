/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import {
  BusinessPartnerPortalPaginatePartnerContactsController,
  BusinessPartnerPortalPaginatePartnerContactsHandler,
} from '@api/business-partner-portal/partner-contact';
import { businessPartnerPortalMockPartnerContactData } from '@app/business-partner-portal/partner-contact';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalPaginatePartnerContactsController', () => {
  let controller: BusinessPartnerPortalPaginatePartnerContactsController;
  let handler: BusinessPartnerPortalPaginatePartnerContactsHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BusinessPartnerPortalPaginatePartnerContactsController],
      providers: [
        {
          provide: BusinessPartnerPortalPaginatePartnerContactsHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalPaginatePartnerContactsController>(
        BusinessPartnerPortalPaginatePartnerContactsController,
      );
    handler = module.get<BusinessPartnerPortalPaginatePartnerContactsHandler>(
      BusinessPartnerPortalPaginatePartnerContactsHandler,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalPaginatePartnerContactsController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return a businessPartnerPortalMockPartnerContactData', async () => {
      jest.spyOn(handler, 'main').mockImplementation(
        () =>
          new Promise((resolve) =>
            resolve({
              total: 5,
              count: 5,
              rows: businessPartnerPortalMockPartnerContactData,
            }),
          ),
      );
      expect(await controller.main()).toStrictEqual({
        total: 5,
        count: 5,
        rows: businessPartnerPortalMockPartnerContactData,
      });
    });
  });
});
