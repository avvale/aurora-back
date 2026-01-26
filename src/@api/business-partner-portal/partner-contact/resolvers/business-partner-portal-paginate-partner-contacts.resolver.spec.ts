/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import {
  BusinessPartnerPortalPaginatePartnerContactsHandler,
  BusinessPartnerPortalPaginatePartnerContactsResolver,
} from '@api/business-partner-portal/partner-contact';
import { businessPartnerPortalMockPartnerContactData } from '@app/business-partner-portal/partner-contact';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalPaginatePartnerContactsResolver', () => {
  let resolver: BusinessPartnerPortalPaginatePartnerContactsResolver;
  let handler: BusinessPartnerPortalPaginatePartnerContactsHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalPaginatePartnerContactsResolver,
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

    resolver = module.get<BusinessPartnerPortalPaginatePartnerContactsResolver>(
      BusinessPartnerPortalPaginatePartnerContactsResolver,
    );
    handler = module.get<BusinessPartnerPortalPaginatePartnerContactsHandler>(
      BusinessPartnerPortalPaginatePartnerContactsHandler,
    );
  });

  test('BusinessPartnerPortalPaginatePartnerContactsResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalPaginatePartnerContactsResolver should be defined', () => {
      expect(resolver).toBeDefined();
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
      expect(await resolver.main()).toStrictEqual({
        total: 5,
        count: 5,
        rows: businessPartnerPortalMockPartnerContactData,
      });
    });
  });
});
