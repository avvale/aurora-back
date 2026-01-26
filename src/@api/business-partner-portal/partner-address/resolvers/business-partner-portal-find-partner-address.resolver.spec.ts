/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPartnerAddressHandler,
  BusinessPartnerPortalFindPartnerAddressResolver,
} from '@api/business-partner-portal/partner-address';
import { businessPartnerPortalMockPartnerAddressData } from '@app/business-partner-portal/partner-address';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindPartnerAddressResolver', () => {
  let resolver: BusinessPartnerPortalFindPartnerAddressResolver;
  let handler: BusinessPartnerPortalFindPartnerAddressHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalFindPartnerAddressResolver,
        {
          provide: BusinessPartnerPortalFindPartnerAddressHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver = module.get<BusinessPartnerPortalFindPartnerAddressResolver>(
      BusinessPartnerPortalFindPartnerAddressResolver,
    );
    handler = module.get<BusinessPartnerPortalFindPartnerAddressHandler>(
      BusinessPartnerPortalFindPartnerAddressHandler,
    );
  });

  test('BusinessPartnerPortalFindPartnerAddressResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindPartnerAddressResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return a partnerAddress', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPartnerAddressData[0]),
            ),
        );
      expect(await resolver.main()).toBe(
        businessPartnerPortalMockPartnerAddressData[0],
      );
    });
  });
});
