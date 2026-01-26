/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import { BusinessPartnerPortalPaginatePartnerAddressesHandler } from '@api/business-partner-portal/partner-address';
import { businessPartnerPortalMockPartnerAddressData } from '@app/business-partner-portal/partner-address';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalPaginatePartnerAddressesHandler', () => {
  let handler: BusinessPartnerPortalPaginatePartnerAddressesHandler;
  let queryBus: IQueryBus;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalPaginatePartnerAddressesHandler,
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

    handler = module.get<BusinessPartnerPortalPaginatePartnerAddressesHandler>(
      BusinessPartnerPortalPaginatePartnerAddressesHandler,
    );
    queryBus = module.get<IQueryBus>(IQueryBus);
  });

  test('BusinessPartnerPortalPaginatePartnerAddressesHandler should be defined', () => {
    expect(handler).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalPaginatePartnerAddressesHandler should be defined', () => {
      expect(handler).toBeDefined();
    });

    test('should return a partnerAddresses', async () => {
      jest.spyOn(queryBus, 'ask').mockImplementation(
        () =>
          new Promise((resolve) =>
            resolve({
              total: businessPartnerPortalMockPartnerAddressData.length,
              count: businessPartnerPortalMockPartnerAddressData.length,
              rows: businessPartnerPortalMockPartnerAddressData,
            }),
          ),
      );
      expect(await handler.main({}, {})).toEqual({
        total: businessPartnerPortalMockPartnerAddressData.length,
        count: businessPartnerPortalMockPartnerAddressData.length,
        rows: businessPartnerPortalMockPartnerAddressData,
      });
    });
  });
});
