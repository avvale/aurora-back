/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import { BusinessPartnerPortalPaginatePartnerContactsHandler } from '@api/business-partner-portal/partner-contact';
import { businessPartnerPortalMockPartnerContactData } from '@app/business-partner-portal/partner-contact';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalPaginatePartnerContactsHandler', () => {
  let handler: BusinessPartnerPortalPaginatePartnerContactsHandler;
  let queryBus: IQueryBus;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalPaginatePartnerContactsHandler,
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

    handler = module.get<BusinessPartnerPortalPaginatePartnerContactsHandler>(
      BusinessPartnerPortalPaginatePartnerContactsHandler,
    );
    queryBus = module.get<IQueryBus>(IQueryBus);
  });

  test('BusinessPartnerPortalPaginatePartnerContactsHandler should be defined', () => {
    expect(handler).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalPaginatePartnerContactsHandler should be defined', () => {
      expect(handler).toBeDefined();
    });

    test('should return a partnerContacts', async () => {
      jest.spyOn(queryBus, 'ask').mockImplementation(
        () =>
          new Promise((resolve) =>
            resolve({
              total: businessPartnerPortalMockPartnerContactData.length,
              count: businessPartnerPortalMockPartnerContactData.length,
              rows: businessPartnerPortalMockPartnerContactData,
            }),
          ),
      );
      expect(await handler.main({}, {})).toEqual({
        total: businessPartnerPortalMockPartnerContactData.length,
        count: businessPartnerPortalMockPartnerContactData.length,
        rows: businessPartnerPortalMockPartnerContactData,
      });
    });
  });
});
