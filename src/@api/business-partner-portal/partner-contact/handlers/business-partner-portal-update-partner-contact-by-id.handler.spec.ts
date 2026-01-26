/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import { BusinessPartnerPortalUpdatePartnerContactByIdHandler } from '@api/business-partner-portal/partner-contact';
import { BusinessPartnerPortalUpdatePartnerContactByIdInput } from '@api/graphql';
import { businessPartnerPortalMockPartnerContactData } from '@app/business-partner-portal/partner-contact';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalUpdatePartnerContactByIdHandler', () => {
  let handler: BusinessPartnerPortalUpdatePartnerContactByIdHandler;
  let queryBus: IQueryBus;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalUpdatePartnerContactByIdHandler,
        {
          provide: IQueryBus,
          useValue: {
            ask: () => {
              /**/
            },
          },
        },
        {
          provide: ICommandBus,
          useValue: {
            dispatch: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    handler = module.get<BusinessPartnerPortalUpdatePartnerContactByIdHandler>(
      BusinessPartnerPortalUpdatePartnerContactByIdHandler,
    );
    queryBus = module.get<IQueryBus>(IQueryBus);
  });

  test('BusinessPartnerPortalUpdatePartnerContactByIdHandler should be defined', () => {
    expect(handler).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalUpdatePartnerContactByIdHandler should be defined', () => {
      expect(handler).toBeDefined();
    });

    test('should return a partnerContact updated', async () => {
      jest
        .spyOn(queryBus, 'ask')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPartnerContactData[0]),
            ),
        );
      expect(
        await handler.main(
          <BusinessPartnerPortalUpdatePartnerContactByIdInput>(
            businessPartnerPortalMockPartnerContactData[0]
          ),
          {},
          'Europe/Madrid',
        ),
      ).toBe(businessPartnerPortalMockPartnerContactData[0]);
    });
  });
});
