/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import {
  BusinessPartnerPortalGetPartnerContactsHandler,
  BusinessPartnerPortalGetPartnerContactsResolver,
} from '@api/business-partner-portal/partner-contact';
import { businessPartnerPortalMockPartnerContactData } from '@app/business-partner-portal/partner-contact';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalGetPartnerContactsResolver', () => {
  let resolver: BusinessPartnerPortalGetPartnerContactsResolver;
  let handler: BusinessPartnerPortalGetPartnerContactsHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalGetPartnerContactsResolver,
        {
          provide: BusinessPartnerPortalGetPartnerContactsHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver = module.get<BusinessPartnerPortalGetPartnerContactsResolver>(
      BusinessPartnerPortalGetPartnerContactsResolver,
    );
    handler = module.get<BusinessPartnerPortalGetPartnerContactsHandler>(
      BusinessPartnerPortalGetPartnerContactsHandler,
    );
  });

  test('BusinessPartnerPortalGetPartnerContactsResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalGetPartnerContactsResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return a businessPartnerPortalMockPartnerContactData', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPartnerContactData),
            ),
        );
      expect(await resolver.main()).toBe(
        businessPartnerPortalMockPartnerContactData,
      );
    });
  });
});
