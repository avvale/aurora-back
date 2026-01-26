/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import {
  BusinessPartnerPortalDeletePartnerAddressByIdHandler,
  BusinessPartnerPortalDeletePartnerAddressByIdResolver,
} from '@api/business-partner-portal/partner-address';
import { businessPartnerPortalMockPartnerAddressData } from '@app/business-partner-portal/partner-address';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalDeletePartnerAddressByIdResolver', () => {
  let resolver: BusinessPartnerPortalDeletePartnerAddressByIdResolver;
  let handler: BusinessPartnerPortalDeletePartnerAddressByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalDeletePartnerAddressByIdResolver,
        {
          provide: BusinessPartnerPortalDeletePartnerAddressByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver =
      module.get<BusinessPartnerPortalDeletePartnerAddressByIdResolver>(
        BusinessPartnerPortalDeletePartnerAddressByIdResolver,
      );
    handler = module.get<BusinessPartnerPortalDeletePartnerAddressByIdHandler>(
      BusinessPartnerPortalDeletePartnerAddressByIdHandler,
    );
  });

  test('BusinessPartnerPortalDeletePartnerAddressByIdResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalDeletePartnerAddressByIdResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return an partnerAddress deleted', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPartnerAddressData[0]),
            ),
        );
      expect(
        await resolver.main(businessPartnerPortalMockPartnerAddressData[0].id),
      ).toBe(businessPartnerPortalMockPartnerAddressData[0]);
    });
  });
});
