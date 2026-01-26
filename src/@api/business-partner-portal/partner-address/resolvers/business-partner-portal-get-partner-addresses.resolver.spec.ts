/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import {
  BusinessPartnerPortalGetPartnerAddressesHandler,
  BusinessPartnerPortalGetPartnerAddressesResolver,
} from '@api/business-partner-portal/partner-address';
import { businessPartnerPortalMockPartnerAddressData } from '@app/business-partner-portal/partner-address';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalGetPartnerAddressesResolver', () => {
  let resolver: BusinessPartnerPortalGetPartnerAddressesResolver;
  let handler: BusinessPartnerPortalGetPartnerAddressesHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalGetPartnerAddressesResolver,
        {
          provide: BusinessPartnerPortalGetPartnerAddressesHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver = module.get<BusinessPartnerPortalGetPartnerAddressesResolver>(
      BusinessPartnerPortalGetPartnerAddressesResolver,
    );
    handler = module.get<BusinessPartnerPortalGetPartnerAddressesHandler>(
      BusinessPartnerPortalGetPartnerAddressesHandler,
    );
  });

  test('BusinessPartnerPortalGetPartnerAddressesResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalGetPartnerAddressesResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return a businessPartnerPortalMockPartnerAddressData', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPartnerAddressData),
            ),
        );
      expect(await resolver.main()).toBe(
        businessPartnerPortalMockPartnerAddressData,
      );
    });
  });
});
