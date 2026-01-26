/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import {
  BusinessPartnerPortalCreateBusinessPartnerHandler,
  BusinessPartnerPortalCreateBusinessPartnerResolver,
} from '@api/business-partner-portal/business-partner';
import { BusinessPartnerPortalCreateBusinessPartnerInput } from '@api/graphql';
import { businessPartnerPortalMockBusinessPartnerData } from '@app/business-partner-portal/business-partner';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalCreateBusinessPartnerResolver', () => {
  let resolver: BusinessPartnerPortalCreateBusinessPartnerResolver;
  let handler: BusinessPartnerPortalCreateBusinessPartnerHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalCreateBusinessPartnerResolver,
        {
          provide: BusinessPartnerPortalCreateBusinessPartnerHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver = module.get<BusinessPartnerPortalCreateBusinessPartnerResolver>(
      BusinessPartnerPortalCreateBusinessPartnerResolver,
    );
    handler = module.get<BusinessPartnerPortalCreateBusinessPartnerHandler>(
      BusinessPartnerPortalCreateBusinessPartnerHandler,
    );
  });

  test('BusinessPartnerPortalCreateBusinessPartnerResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalCreateBusinessPartnerResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return an businessPartner created', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockBusinessPartnerData[0]),
            ),
        );
      expect(
        await resolver.main(
          <BusinessPartnerPortalCreateBusinessPartnerInput>(
            businessPartnerPortalMockBusinessPartnerData[0]
          ),
        ),
      ).toBe(businessPartnerPortalMockBusinessPartnerData[0]);
    });
  });
});
