/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import { BusinessPartnerPortalDeletePartnerContactByIdHandler } from '@api/business-partner-portal/partner-contact';
import { businessPartnerPortalMockPartnerContactData } from '@app/business-partner-portal/partner-contact';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalDeletePartnerContactByIdController', () => {
  let handler: BusinessPartnerPortalDeletePartnerContactByIdHandler;
  let queryBus: IQueryBus;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalDeletePartnerContactByIdHandler,
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

    handler = module.get<BusinessPartnerPortalDeletePartnerContactByIdHandler>(
      BusinessPartnerPortalDeletePartnerContactByIdHandler,
    );
    queryBus = module.get<IQueryBus>(IQueryBus);
  });

  describe('main', () => {
    test('BusinessPartnerPortalDeletePartnerContactByIdHandler should be defined', () => {
      expect(handler).toBeDefined();
    });

    test('should return an partnerContact deleted', async () => {
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
          businessPartnerPortalMockPartnerContactData[0].id,
          {},
          'Europe/Madrid',
        ),
      ).toBe(businessPartnerPortalMockPartnerContactData[0]);
    });
  });
});
