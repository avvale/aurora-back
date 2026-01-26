/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import {
  BusinessPartnerPortalPaginatePartnerAddressesHandler,
  BusinessPartnerPortalPaginatePartnerAddressesResolver,
} from '@api/business-partner-portal/partner-address';
import { businessPartnerPortalMockPartnerAddressData } from '@app/business-partner-portal/partner-address';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalPaginatePartnerAddressesResolver', () => {
  let resolver: BusinessPartnerPortalPaginatePartnerAddressesResolver;
  let handler: BusinessPartnerPortalPaginatePartnerAddressesHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalPaginatePartnerAddressesResolver,
        {
          provide: BusinessPartnerPortalPaginatePartnerAddressesHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver =
      module.get<BusinessPartnerPortalPaginatePartnerAddressesResolver>(
        BusinessPartnerPortalPaginatePartnerAddressesResolver,
      );
    handler = module.get<BusinessPartnerPortalPaginatePartnerAddressesHandler>(
      BusinessPartnerPortalPaginatePartnerAddressesHandler,
    );
  });

  test('BusinessPartnerPortalPaginatePartnerAddressesResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalPaginatePartnerAddressesResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return a businessPartnerPortalMockPartnerAddressData', async () => {
      jest.spyOn(handler, 'main').mockImplementation(
        () =>
          new Promise((resolve) =>
            resolve({
              total: 5,
              count: 5,
              rows: businessPartnerPortalMockPartnerAddressData,
            }),
          ),
      );
      expect(await resolver.main()).toStrictEqual({
        total: 5,
        count: 5,
        rows: businessPartnerPortalMockPartnerAddressData,
      });
    });
  });
});
