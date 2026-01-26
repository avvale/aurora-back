/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import { BusinessPartnerPortalUpdateBusinessPartnerByIdHandler } from '@api/business-partner-portal/business-partner';
import { BusinessPartnerPortalUpdateBusinessPartnerByIdInput } from '@api/graphql';
import { businessPartnerPortalMockBusinessPartnerData } from '@app/business-partner-portal/business-partner';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalUpdateBusinessPartnerByIdHandler', () => {
  let handler: BusinessPartnerPortalUpdateBusinessPartnerByIdHandler;
  let queryBus: IQueryBus;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalUpdateBusinessPartnerByIdHandler,
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

    handler = module.get<BusinessPartnerPortalUpdateBusinessPartnerByIdHandler>(
      BusinessPartnerPortalUpdateBusinessPartnerByIdHandler,
    );
    queryBus = module.get<IQueryBus>(IQueryBus);
  });

  test('BusinessPartnerPortalUpdateBusinessPartnerByIdHandler should be defined', () => {
    expect(handler).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalUpdateBusinessPartnerByIdHandler should be defined', () => {
      expect(handler).toBeDefined();
    });

    test('should return a businessPartner updated', async () => {
      jest
        .spyOn(queryBus, 'ask')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockBusinessPartnerData[0]),
            ),
        );
      expect(
        await handler.main(
          <BusinessPartnerPortalUpdateBusinessPartnerByIdInput>(
            businessPartnerPortalMockBusinessPartnerData[0]
          ),
          {},
          'Europe/Madrid',
        ),
      ).toBe(businessPartnerPortalMockBusinessPartnerData[0]);
    });
  });
});
