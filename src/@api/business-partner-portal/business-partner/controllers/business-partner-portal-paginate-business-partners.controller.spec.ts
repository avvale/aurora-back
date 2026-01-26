/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import {
  BusinessPartnerPortalPaginateBusinessPartnersController,
  BusinessPartnerPortalPaginateBusinessPartnersHandler,
} from '@api/business-partner-portal/business-partner';
import { businessPartnerPortalMockBusinessPartnerData } from '@app/business-partner-portal/business-partner';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalPaginateBusinessPartnersController', () => {
  let controller: BusinessPartnerPortalPaginateBusinessPartnersController;
  let handler: BusinessPartnerPortalPaginateBusinessPartnersHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BusinessPartnerPortalPaginateBusinessPartnersController],
      providers: [
        {
          provide: BusinessPartnerPortalPaginateBusinessPartnersHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalPaginateBusinessPartnersController>(
        BusinessPartnerPortalPaginateBusinessPartnersController,
      );
    handler = module.get<BusinessPartnerPortalPaginateBusinessPartnersHandler>(
      BusinessPartnerPortalPaginateBusinessPartnersHandler,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalPaginateBusinessPartnersController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return a businessPartnerPortalMockBusinessPartnerData', async () => {
      jest.spyOn(handler, 'main').mockImplementation(
        () =>
          new Promise((resolve) =>
            resolve({
              total: 5,
              count: 5,
              rows: businessPartnerPortalMockBusinessPartnerData,
            }),
          ),
      );
      expect(await controller.main()).toStrictEqual({
        total: 5,
        count: 5,
        rows: businessPartnerPortalMockBusinessPartnerData,
      });
    });
  });
});
