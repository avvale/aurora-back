/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import {
  BusinessPartnerPortalCreatePartnerContactHandler,
  BusinessPartnerPortalCreatePartnerContactResolver,
} from '@api/business-partner-portal/partner-contact';
import { BusinessPartnerPortalCreatePartnerContactInput } from '@api/graphql';
import { businessPartnerPortalMockPartnerContactData } from '@app/business-partner-portal/partner-contact';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalCreatePartnerContactResolver', () => {
  let resolver: BusinessPartnerPortalCreatePartnerContactResolver;
  let handler: BusinessPartnerPortalCreatePartnerContactHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalCreatePartnerContactResolver,
        {
          provide: BusinessPartnerPortalCreatePartnerContactHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver = module.get<BusinessPartnerPortalCreatePartnerContactResolver>(
      BusinessPartnerPortalCreatePartnerContactResolver,
    );
    handler = module.get<BusinessPartnerPortalCreatePartnerContactHandler>(
      BusinessPartnerPortalCreatePartnerContactHandler,
    );
  });

  test('BusinessPartnerPortalCreatePartnerContactResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalCreatePartnerContactResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return an partnerContact created', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPartnerContactData[0]),
            ),
        );
      expect(
        await resolver.main(
          <BusinessPartnerPortalCreatePartnerContactInput>(
            businessPartnerPortalMockPartnerContactData[0]
          ),
        ),
      ).toBe(businessPartnerPortalMockPartnerContactData[0]);
    });
  });
});
