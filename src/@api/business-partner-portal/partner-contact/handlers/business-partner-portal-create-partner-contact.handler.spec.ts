/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import { BusinessPartnerPortalCreatePartnerContactHandler } from '@api/business-partner-portal/partner-contact';
import { businessPartnerPortalMockPartnerContactData } from '@app/business-partner-portal/partner-contact';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalCreatePartnerContactHandler', () => {
  let handler: BusinessPartnerPortalCreatePartnerContactHandler;
  let queryBus: IQueryBus;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalCreatePartnerContactHandler,
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

    handler = module.get<BusinessPartnerPortalCreatePartnerContactHandler>(
      BusinessPartnerPortalCreatePartnerContactHandler,
    );
    queryBus = module.get<IQueryBus>(IQueryBus);
  });

  describe('main', () => {
    test('BusinessPartnerPortalCreatePartnerContactHandler should be defined', () => {
      expect(handler).toBeDefined();
    });

    test('should return an partnerContact created', async () => {
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
          businessPartnerPortalMockPartnerContactData[0],
          'Europe/Madrid',
        ),
      ).toBe(businessPartnerPortalMockPartnerContactData[0]);
    });
  });
});
