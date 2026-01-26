/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdHandler,
  BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdResolver,
} from '@api/business-partner-portal/purchase-invoice-header';
import { businessPartnerPortalMockPurchaseInvoiceHeaderData } from '@app/business-partner-portal/purchase-invoice-header';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdResolver', () => {
  let resolver: BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdResolver;
  let handler: BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdResolver,
        {
          provide: BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver =
      module.get<BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdResolver>(
        BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdResolver,
      );
    handler =
      module.get<BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdHandler>(
        BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdHandler,
      );
  });

  test('BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return an purchaseInvoiceHeader deleted', async () => {
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
          businessPartnerPortalMockPurchaseInvoiceHeaderData[0].id,
        ),
      ).toBe(businessPartnerPortalMockPurchaseInvoiceHeaderData[0]);
    });
  });
});
