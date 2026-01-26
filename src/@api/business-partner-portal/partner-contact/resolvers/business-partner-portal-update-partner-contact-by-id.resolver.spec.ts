/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import {
  BusinessPartnerPortalUpdatePartnerContactByIdHandler,
  BusinessPartnerPortalUpdatePartnerContactByIdResolver,
} from '@api/business-partner-portal/partner-contact';
import { BusinessPartnerPortalUpdatePartnerContactByIdInput } from '@api/graphql';
import { businessPartnerPortalMockPartnerContactData } from '@app/business-partner-portal/partner-contact';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalUpdatePartnerContactByIdResolver', () => {
  let resolver: BusinessPartnerPortalUpdatePartnerContactByIdResolver;
  let handler: BusinessPartnerPortalUpdatePartnerContactByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalUpdatePartnerContactByIdResolver,
        {
          provide: BusinessPartnerPortalUpdatePartnerContactByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver =
      module.get<BusinessPartnerPortalUpdatePartnerContactByIdResolver>(
        BusinessPartnerPortalUpdatePartnerContactByIdResolver,
      );
    handler = module.get<BusinessPartnerPortalUpdatePartnerContactByIdHandler>(
      BusinessPartnerPortalUpdatePartnerContactByIdHandler,
    );
  });

  test('BusinessPartnerPortalUpdatePartnerContactByIdResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalUpdatePartnerContactByIdResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return a partnerContact by id updated', async () => {
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
          <BusinessPartnerPortalUpdatePartnerContactByIdInput>(
            businessPartnerPortalMockPartnerContactData[0]
          ),
        ),
      ).toBe(businessPartnerPortalMockPartnerContactData[0]);
    });
  });
});
