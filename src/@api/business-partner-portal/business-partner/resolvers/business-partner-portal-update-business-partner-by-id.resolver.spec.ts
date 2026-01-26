/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import {
  BusinessPartnerPortalUpdateBusinessPartnerByIdHandler,
  BusinessPartnerPortalUpdateBusinessPartnerByIdResolver,
} from '@api/business-partner-portal/business-partner';
import { BusinessPartnerPortalUpdateBusinessPartnerByIdInput } from '@api/graphql';
import { businessPartnerPortalMockBusinessPartnerData } from '@app/business-partner-portal/business-partner';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalUpdateBusinessPartnerByIdResolver', () => {
  let resolver: BusinessPartnerPortalUpdateBusinessPartnerByIdResolver;
  let handler: BusinessPartnerPortalUpdateBusinessPartnerByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalUpdateBusinessPartnerByIdResolver,
        {
          provide: BusinessPartnerPortalUpdateBusinessPartnerByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver =
      module.get<BusinessPartnerPortalUpdateBusinessPartnerByIdResolver>(
        BusinessPartnerPortalUpdateBusinessPartnerByIdResolver,
      );
    handler = module.get<BusinessPartnerPortalUpdateBusinessPartnerByIdHandler>(
      BusinessPartnerPortalUpdateBusinessPartnerByIdHandler,
    );
  });

  test('BusinessPartnerPortalUpdateBusinessPartnerByIdResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalUpdateBusinessPartnerByIdResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return a businessPartner by id updated', async () => {
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
          <BusinessPartnerPortalUpdateBusinessPartnerByIdInput>(
            businessPartnerPortalMockBusinessPartnerData[0]
          ),
        ),
      ).toBe(businessPartnerPortalMockBusinessPartnerData[0]);
    });
  });
});
