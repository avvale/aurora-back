/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import {
  BusinessPartnerPortalFindBusinessPartnerHandler,
  BusinessPartnerPortalFindBusinessPartnerResolver,
} from '@api/business-partner-portal/business-partner';
import { businessPartnerPortalMockBusinessPartnerData } from '@app/business-partner-portal/business-partner';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindBusinessPartnerResolver', () => {
  let resolver: BusinessPartnerPortalFindBusinessPartnerResolver;
  let handler: BusinessPartnerPortalFindBusinessPartnerHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalFindBusinessPartnerResolver,
        {
          provide: BusinessPartnerPortalFindBusinessPartnerHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver = module.get<BusinessPartnerPortalFindBusinessPartnerResolver>(
      BusinessPartnerPortalFindBusinessPartnerResolver,
    );
    handler = module.get<BusinessPartnerPortalFindBusinessPartnerHandler>(
      BusinessPartnerPortalFindBusinessPartnerHandler,
    );
  });

  test('BusinessPartnerPortalFindBusinessPartnerResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindBusinessPartnerResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return a businessPartner', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockBusinessPartnerData[0]),
            ),
        );
      expect(await resolver.main()).toBe(
        businessPartnerPortalMockBusinessPartnerData[0],
      );
    });
  });
});
