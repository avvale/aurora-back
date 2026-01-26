/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdHandler,
  BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdResolver,
} from '@api/business-partner-portal/purchase-invoice-header';
import { BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdInput } from '@api/graphql';
import { businessPartnerPortalMockPurchaseInvoiceHeaderData } from '@app/business-partner-portal/purchase-invoice-header';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdResolver', () => {
  let resolver: BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdResolver;
  let handler: BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdResolver,
        {
          provide: BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver =
      module.get<BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdResolver>(
        BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdResolver,
      );
    handler =
      module.get<BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdHandler>(
        BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdHandler,
      );
  });

  test('BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return a purchaseInvoiceHeader by id updated', async () => {
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
          <BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdInput>(
            businessPartnerPortalMockPurchaseInvoiceHeaderData[0]
          ),
        ),
      ).toBe(businessPartnerPortalMockPurchaseInvoiceHeaderData[0]);
    });
  });
});
