/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import {
  BusinessPartnerPortalFindBusinessPartnerByIdHandler,
  BusinessPartnerPortalFindBusinessPartnerByIdResolver,
} from '@api/business-partner-portal/business-partner';
import { businessPartnerPortalMockBusinessPartnerData } from '@app/business-partner-portal/business-partner';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindBusinessPartnerByIdResolver', () => {
  let resolver: BusinessPartnerPortalFindBusinessPartnerByIdResolver;
  let handler: BusinessPartnerPortalFindBusinessPartnerByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalFindBusinessPartnerByIdResolver,
        {
          provide: BusinessPartnerPortalFindBusinessPartnerByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver = module.get<BusinessPartnerPortalFindBusinessPartnerByIdResolver>(
      BusinessPartnerPortalFindBusinessPartnerByIdResolver,
    );
    handler = module.get<BusinessPartnerPortalFindBusinessPartnerByIdHandler>(
      BusinessPartnerPortalFindBusinessPartnerByIdHandler,
    );
  });

  test('BusinessPartnerPortalFindBusinessPartnerByIdResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindBusinessPartnerByIdResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return an businessPartner by id', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockBusinessPartnerData[0]),
            ),
        );
      expect(
        await resolver.main(businessPartnerPortalMockBusinessPartnerData[0].id),
      ).toBe(businessPartnerPortalMockBusinessPartnerData[0]);
    });
  });
});
