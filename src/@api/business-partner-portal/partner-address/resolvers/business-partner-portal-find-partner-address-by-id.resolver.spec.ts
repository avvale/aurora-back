/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPartnerAddressByIdHandler,
  BusinessPartnerPortalFindPartnerAddressByIdResolver,
} from '@api/business-partner-portal/partner-address';
import { businessPartnerPortalMockPartnerAddressData } from '@app/business-partner-portal/partner-address';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindPartnerAddressByIdResolver', () => {
  let resolver: BusinessPartnerPortalFindPartnerAddressByIdResolver;
  let handler: BusinessPartnerPortalFindPartnerAddressByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalFindPartnerAddressByIdResolver,
        {
          provide: BusinessPartnerPortalFindPartnerAddressByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver = module.get<BusinessPartnerPortalFindPartnerAddressByIdResolver>(
      BusinessPartnerPortalFindPartnerAddressByIdResolver,
    );
    handler = module.get<BusinessPartnerPortalFindPartnerAddressByIdHandler>(
      BusinessPartnerPortalFindPartnerAddressByIdHandler,
    );
  });

  test('BusinessPartnerPortalFindPartnerAddressByIdResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindPartnerAddressByIdResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return an partnerAddress by id', async () => {
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
