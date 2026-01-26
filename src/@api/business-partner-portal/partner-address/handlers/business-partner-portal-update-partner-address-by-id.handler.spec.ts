/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import { BusinessPartnerPortalUpdatePartnerAddressByIdHandler } from '@api/business-partner-portal/partner-address';
import { BusinessPartnerPortalUpdatePartnerAddressByIdInput } from '@api/graphql';
import { businessPartnerPortalMockPartnerAddressData } from '@app/business-partner-portal/partner-address';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalUpdatePartnerAddressByIdHandler', () => {
  let handler: BusinessPartnerPortalUpdatePartnerAddressByIdHandler;
  let queryBus: IQueryBus;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalUpdatePartnerAddressByIdHandler,
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

    handler = module.get<BusinessPartnerPortalUpdatePartnerAddressByIdHandler>(
      BusinessPartnerPortalUpdatePartnerAddressByIdHandler,
    );
    queryBus = module.get<IQueryBus>(IQueryBus);
  });

  test('BusinessPartnerPortalUpdatePartnerAddressByIdHandler should be defined', () => {
    expect(handler).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalUpdatePartnerAddressByIdHandler should be defined', () => {
      expect(handler).toBeDefined();
    });

    test('should return a partnerAddress updated', async () => {
      jest
        .spyOn(queryBus, 'ask')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPartnerAddressData[0]),
            ),
        );
      expect(
        await handler.main(
          <BusinessPartnerPortalUpdatePartnerAddressByIdInput>(
            businessPartnerPortalMockPartnerAddressData[0]
          ),
          {},
          'Europe/Madrid',
        ),
      ).toBe(businessPartnerPortalMockPartnerAddressData[0]);
    });
  });
});
