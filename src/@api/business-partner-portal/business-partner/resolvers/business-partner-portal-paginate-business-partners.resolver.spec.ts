/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import {
  BusinessPartnerPortalPaginateBusinessPartnersHandler,
  BusinessPartnerPortalPaginateBusinessPartnersResolver,
} from '@api/business-partner-portal/business-partner';
import { businessPartnerPortalMockBusinessPartnerData } from '@app/business-partner-portal/business-partner';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalPaginateBusinessPartnersResolver', () => {
  let resolver: BusinessPartnerPortalPaginateBusinessPartnersResolver;
  let handler: BusinessPartnerPortalPaginateBusinessPartnersHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalPaginateBusinessPartnersResolver,
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

    resolver =
      module.get<BusinessPartnerPortalPaginateBusinessPartnersResolver>(
        BusinessPartnerPortalPaginateBusinessPartnersResolver,
      );
    handler = module.get<BusinessPartnerPortalPaginateBusinessPartnersHandler>(
      BusinessPartnerPortalPaginateBusinessPartnersHandler,
    );
  });

  test('BusinessPartnerPortalPaginateBusinessPartnersResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalPaginateBusinessPartnersResolver should be defined', () => {
      expect(resolver).toBeDefined();
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
      expect(await resolver.main()).toStrictEqual({
        total: 5,
        count: 5,
        rows: businessPartnerPortalMockBusinessPartnerData,
      });
    });
  });
});
