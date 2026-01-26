/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import {
  BusinessPartnerPortalUpdatePartnerAddressByIdHandler,
  BusinessPartnerPortalUpdatePartnerAddressByIdResolver,
} from '@api/business-partner-portal/partner-address';
import { BusinessPartnerPortalUpdatePartnerAddressByIdInput } from '@api/graphql';
import { businessPartnerPortalMockPartnerAddressData } from '@app/business-partner-portal/partner-address';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalUpdatePartnerAddressByIdResolver', () => {
  let resolver: BusinessPartnerPortalUpdatePartnerAddressByIdResolver;
  let handler: BusinessPartnerPortalUpdatePartnerAddressByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalUpdatePartnerAddressByIdResolver,
        {
          provide: BusinessPartnerPortalUpdatePartnerAddressByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver =
      module.get<BusinessPartnerPortalUpdatePartnerAddressByIdResolver>(
        BusinessPartnerPortalUpdatePartnerAddressByIdResolver,
      );
    handler = module.get<BusinessPartnerPortalUpdatePartnerAddressByIdHandler>(
      BusinessPartnerPortalUpdatePartnerAddressByIdHandler,
    );
  });

  test('BusinessPartnerPortalUpdatePartnerAddressByIdResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalUpdatePartnerAddressByIdResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return a partnerAddress by id updated', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPartnerAddressData[0]),
            ),
        );
      expect(
        await resolver.main(
          <BusinessPartnerPortalUpdatePartnerAddressByIdInput>(
            businessPartnerPortalMockPartnerAddressData[0]
          ),
        ),
      ).toBe(businessPartnerPortalMockPartnerAddressData[0]);
    });
  });
});
