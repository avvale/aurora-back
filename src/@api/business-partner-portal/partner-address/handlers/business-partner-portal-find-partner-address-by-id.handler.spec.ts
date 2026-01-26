/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import { BusinessPartnerPortalFindPartnerAddressByIdHandler } from '@api/business-partner-portal/partner-address';
import { businessPartnerPortalMockPartnerAddressData } from '@app/business-partner-portal/partner-address';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindPartnerAddressByIdHandler', () => {
  let handler: BusinessPartnerPortalFindPartnerAddressByIdHandler;
  let queryBus: IQueryBus;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalFindPartnerAddressByIdHandler,
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

    handler = module.get<BusinessPartnerPortalFindPartnerAddressByIdHandler>(
      BusinessPartnerPortalFindPartnerAddressByIdHandler,
    );
    queryBus = module.get<IQueryBus>(IQueryBus);
  });

  test('BusinessPartnerPortalFindPartnerAddressByIdHandler should be defined', () => {
    expect(handler).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindPartnerAddressByIdHandler should be defined', () => {
      expect(handler).toBeDefined();
    });

    test('should return an partnerAddress by id', async () => {
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
          businessPartnerPortalMockPartnerAddressData[0].id,
          {},
          'Europe/Madrid',
        ),
      ).toBe(businessPartnerPortalMockPartnerAddressData[0]);
    });
  });
});
