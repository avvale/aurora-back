/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPartnerContactByIdHandler,
  BusinessPartnerPortalFindPartnerContactByIdResolver,
} from '@api/business-partner-portal/partner-contact';
import { businessPartnerPortalMockPartnerContactData } from '@app/business-partner-portal/partner-contact';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindPartnerContactByIdResolver', () => {
  let resolver: BusinessPartnerPortalFindPartnerContactByIdResolver;
  let handler: BusinessPartnerPortalFindPartnerContactByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalFindPartnerContactByIdResolver,
        {
          provide: BusinessPartnerPortalFindPartnerContactByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver = module.get<BusinessPartnerPortalFindPartnerContactByIdResolver>(
      BusinessPartnerPortalFindPartnerContactByIdResolver,
    );
    handler = module.get<BusinessPartnerPortalFindPartnerContactByIdHandler>(
      BusinessPartnerPortalFindPartnerContactByIdHandler,
    );
  });

  test('BusinessPartnerPortalFindPartnerContactByIdResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindPartnerContactByIdResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return an partnerContact by id', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPartnerContactData[0]),
            ),
        );
      expect(
        await resolver.main(businessPartnerPortalMockPartnerContactData[0].id),
      ).toBe(businessPartnerPortalMockPartnerContactData[0]);
    });
  });
});
