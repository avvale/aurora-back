/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPartnerContactHandler,
  BusinessPartnerPortalFindPartnerContactResolver,
} from '@api/business-partner-portal/partner-contact';
import { businessPartnerPortalMockPartnerContactData } from '@app/business-partner-portal/partner-contact';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindPartnerContactResolver', () => {
  let resolver: BusinessPartnerPortalFindPartnerContactResolver;
  let handler: BusinessPartnerPortalFindPartnerContactHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalFindPartnerContactResolver,
        {
          provide: BusinessPartnerPortalFindPartnerContactHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver = module.get<BusinessPartnerPortalFindPartnerContactResolver>(
      BusinessPartnerPortalFindPartnerContactResolver,
    );
    handler = module.get<BusinessPartnerPortalFindPartnerContactHandler>(
      BusinessPartnerPortalFindPartnerContactHandler,
    );
  });

  test('BusinessPartnerPortalFindPartnerContactResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindPartnerContactResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return a partnerContact', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPartnerContactData[0]),
            ),
        );
      expect(await resolver.main()).toBe(
        businessPartnerPortalMockPartnerContactData[0],
      );
    });
  });
});
