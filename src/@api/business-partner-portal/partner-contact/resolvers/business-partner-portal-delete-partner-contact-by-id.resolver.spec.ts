/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import {
  BusinessPartnerPortalDeletePartnerContactByIdHandler,
  BusinessPartnerPortalDeletePartnerContactByIdResolver,
} from '@api/business-partner-portal/partner-contact';
import { businessPartnerPortalMockPartnerContactData } from '@app/business-partner-portal/partner-contact';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalDeletePartnerContactByIdResolver', () => {
  let resolver: BusinessPartnerPortalDeletePartnerContactByIdResolver;
  let handler: BusinessPartnerPortalDeletePartnerContactByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalDeletePartnerContactByIdResolver,
        {
          provide: BusinessPartnerPortalDeletePartnerContactByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver =
      module.get<BusinessPartnerPortalDeletePartnerContactByIdResolver>(
        BusinessPartnerPortalDeletePartnerContactByIdResolver,
      );
    handler = module.get<BusinessPartnerPortalDeletePartnerContactByIdHandler>(
      BusinessPartnerPortalDeletePartnerContactByIdHandler,
    );
  });

  test('BusinessPartnerPortalDeletePartnerContactByIdResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalDeletePartnerContactByIdResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return an partnerContact deleted', async () => {
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
