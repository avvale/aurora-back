/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalDeletePurchaseInvoicePositionByIdHandler,
  BusinessPartnerPortalDeletePurchaseInvoicePositionByIdResolver,
} from '@api/business-partner-portal/purchase-invoice-position';
import { businessPartnerPortalMockPurchaseInvoicePositionData } from '@app/business-partner-portal/purchase-invoice-position';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalDeletePurchaseInvoicePositionByIdResolver', () => {
  let resolver: BusinessPartnerPortalDeletePurchaseInvoicePositionByIdResolver;
  let handler: BusinessPartnerPortalDeletePurchaseInvoicePositionByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalDeletePurchaseInvoicePositionByIdResolver,
        {
          provide:
            BusinessPartnerPortalDeletePurchaseInvoicePositionByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver =
      module.get<BusinessPartnerPortalDeletePurchaseInvoicePositionByIdResolver>(
        BusinessPartnerPortalDeletePurchaseInvoicePositionByIdResolver,
      );
    handler =
      module.get<BusinessPartnerPortalDeletePurchaseInvoicePositionByIdHandler>(
        BusinessPartnerPortalDeletePurchaseInvoicePositionByIdHandler,
      );
  });

  test('BusinessPartnerPortalDeletePurchaseInvoicePositionByIdResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalDeletePurchaseInvoicePositionByIdResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return an purchaseInvoicePosition deleted', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPurchaseInvoicePositionData[0]),
            ),
        );
      expect(
        await resolver.main(
          businessPartnerPortalMockPurchaseInvoicePositionData[0].id,
        ),
      ).toBe(businessPartnerPortalMockPurchaseInvoicePositionData[0]);
    });
  });
});
