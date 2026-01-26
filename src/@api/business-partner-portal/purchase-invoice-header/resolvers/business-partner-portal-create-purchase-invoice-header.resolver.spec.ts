/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalCreatePurchaseInvoiceHeaderHandler,
  BusinessPartnerPortalCreatePurchaseInvoiceHeaderResolver,
} from '@api/business-partner-portal/purchase-invoice-header';
import { BusinessPartnerPortalCreatePurchaseInvoiceHeaderInput } from '@api/graphql';
import { businessPartnerPortalMockPurchaseInvoiceHeaderData } from '@app/business-partner-portal/purchase-invoice-header';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalCreatePurchaseInvoiceHeaderResolver', () => {
  let resolver: BusinessPartnerPortalCreatePurchaseInvoiceHeaderResolver;
  let handler: BusinessPartnerPortalCreatePurchaseInvoiceHeaderHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalCreatePurchaseInvoiceHeaderResolver,
        {
          provide: BusinessPartnerPortalCreatePurchaseInvoiceHeaderHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver =
      module.get<BusinessPartnerPortalCreatePurchaseInvoiceHeaderResolver>(
        BusinessPartnerPortalCreatePurchaseInvoiceHeaderResolver,
      );
    handler =
      module.get<BusinessPartnerPortalCreatePurchaseInvoiceHeaderHandler>(
        BusinessPartnerPortalCreatePurchaseInvoiceHeaderHandler,
      );
  });

  test('BusinessPartnerPortalCreatePurchaseInvoiceHeaderResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalCreatePurchaseInvoiceHeaderResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return an purchaseInvoiceHeader created', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPurchaseInvoiceHeaderData[0]),
            ),
        );
      expect(
        await resolver.main(
          <BusinessPartnerPortalCreatePurchaseInvoiceHeaderInput>(
            businessPartnerPortalMockPurchaseInvoiceHeaderData[0]
          ),
        ),
      ).toBe(businessPartnerPortalMockPurchaseInvoiceHeaderData[0]);
    });
  });
});
