/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import { BusinessPartnerPortalPaginateBusinessPartnersHandler } from '@api/business-partner-portal/business-partner';
import { businessPartnerPortalMockBusinessPartnerData } from '@app/business-partner-portal/business-partner';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalPaginateBusinessPartnersHandler', () => {
  let handler: BusinessPartnerPortalPaginateBusinessPartnersHandler;
  let queryBus: IQueryBus;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalPaginateBusinessPartnersHandler,
        {
          provide: IQueryBus,
          useValue: {
            ask: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    handler = module.get<BusinessPartnerPortalPaginateBusinessPartnersHandler>(
      BusinessPartnerPortalPaginateBusinessPartnersHandler,
    );
    queryBus = module.get<IQueryBus>(IQueryBus);
  });

  test('BusinessPartnerPortalPaginateBusinessPartnersHandler should be defined', () => {
    expect(handler).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalPaginateBusinessPartnersHandler should be defined', () => {
      expect(handler).toBeDefined();
    });

    test('should return a businessPartners', async () => {
      jest.spyOn(queryBus, 'ask').mockImplementation(
        () =>
          new Promise((resolve) =>
            resolve({
              total: businessPartnerPortalMockBusinessPartnerData.length,
              count: businessPartnerPortalMockBusinessPartnerData.length,
              rows: businessPartnerPortalMockBusinessPartnerData,
            }),
          ),
      );
      expect(await handler.main({}, {})).toEqual({
        total: businessPartnerPortalMockBusinessPartnerData.length,
        count: businessPartnerPortalMockBusinessPartnerData.length,
        rows: businessPartnerPortalMockBusinessPartnerData,
      });
    });
  });
});
