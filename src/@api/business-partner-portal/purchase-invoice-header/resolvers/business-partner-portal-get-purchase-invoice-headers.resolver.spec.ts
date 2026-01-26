/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalGetPurchaseInvoiceHeadersHandler,
  BusinessPartnerPortalGetPurchaseInvoiceHeadersResolver,
} from '@api/business-partner-portal/purchase-invoice-header';
import { businessPartnerPortalMockPurchaseInvoiceHeaderData } from '@app/business-partner-portal/purchase-invoice-header';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalGetPurchaseInvoiceHeadersResolver', () => {
  let resolver: BusinessPartnerPortalGetPurchaseInvoiceHeadersResolver;
  let handler: BusinessPartnerPortalGetPurchaseInvoiceHeadersHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalGetPurchaseInvoiceHeadersResolver,
        {
          provide: BusinessPartnerPortalGetPurchaseInvoiceHeadersHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver =
      module.get<BusinessPartnerPortalGetPurchaseInvoiceHeadersResolver>(
        BusinessPartnerPortalGetPurchaseInvoiceHeadersResolver,
      );
    handler = module.get<BusinessPartnerPortalGetPurchaseInvoiceHeadersHandler>(
      BusinessPartnerPortalGetPurchaseInvoiceHeadersHandler,
    );
  });

  test('BusinessPartnerPortalGetPurchaseInvoiceHeadersResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalGetPurchaseInvoiceHeadersResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return a businessPartnerPortalMockPurchaseInvoiceHeaderData', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPurchaseInvoiceHeaderData),
            ),
        );
      expect(await resolver.main()).toBe(
        businessPartnerPortalMockPurchaseInvoiceHeaderData,
      );
    });
  });
});
