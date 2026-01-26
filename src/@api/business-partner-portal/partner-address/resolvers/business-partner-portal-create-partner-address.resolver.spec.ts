/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import {
  BusinessPartnerPortalCreatePartnerAddressHandler,
  BusinessPartnerPortalCreatePartnerAddressResolver,
} from '@api/business-partner-portal/partner-address';
import { BusinessPartnerPortalCreatePartnerAddressInput } from '@api/graphql';
import { businessPartnerPortalMockPartnerAddressData } from '@app/business-partner-portal/partner-address';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalCreatePartnerAddressResolver', () => {
  let resolver: BusinessPartnerPortalCreatePartnerAddressResolver;
  let handler: BusinessPartnerPortalCreatePartnerAddressHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalCreatePartnerAddressResolver,
        {
          provide: BusinessPartnerPortalCreatePartnerAddressHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver = module.get<BusinessPartnerPortalCreatePartnerAddressResolver>(
      BusinessPartnerPortalCreatePartnerAddressResolver,
    );
    handler = module.get<BusinessPartnerPortalCreatePartnerAddressHandler>(
      BusinessPartnerPortalCreatePartnerAddressHandler,
    );
  });

  test('BusinessPartnerPortalCreatePartnerAddressResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalCreatePartnerAddressResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return an partnerAddress created', async () => {
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
          <BusinessPartnerPortalCreatePartnerAddressInput>(
            businessPartnerPortalMockPartnerAddressData[0]
          ),
        ),
      ).toBe(businessPartnerPortalMockPartnerAddressData[0]);
    });
  });
});
