/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import {
  BusinessPartnerPortalGetBusinessPartnersHandler,
  BusinessPartnerPortalGetBusinessPartnersResolver,
} from '@api/business-partner-portal/business-partner';
import { businessPartnerPortalMockBusinessPartnerData } from '@app/business-partner-portal/business-partner';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalGetBusinessPartnersResolver', () => {
  let resolver: BusinessPartnerPortalGetBusinessPartnersResolver;
  let handler: BusinessPartnerPortalGetBusinessPartnersHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalGetBusinessPartnersResolver,
        {
          provide: BusinessPartnerPortalGetBusinessPartnersHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver = module.get<BusinessPartnerPortalGetBusinessPartnersResolver>(
      BusinessPartnerPortalGetBusinessPartnersResolver,
    );
    handler = module.get<BusinessPartnerPortalGetBusinessPartnersHandler>(
      BusinessPartnerPortalGetBusinessPartnersHandler,
    );
  });

  test('BusinessPartnerPortalGetBusinessPartnersResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalGetBusinessPartnersResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return a businessPartnerPortalMockBusinessPartnerData', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockBusinessPartnerData),
            ),
        );
      expect(await resolver.main()).toBe(
        businessPartnerPortalMockBusinessPartnerData,
      );
    });
  });
});
