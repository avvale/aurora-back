/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdHandler,
  BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdResolver,
} from '@api/business-partner-portal/purchase-invoice-position';
import { BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdInput } from '@api/graphql';
import { businessPartnerPortalMockPurchaseInvoicePositionData } from '@app/business-partner-portal/purchase-invoice-position';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdResolver', () => {
  let resolver: BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdResolver;
  let handler: BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdResolver,
        {
          provide:
            BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver =
      module.get<BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdResolver>(
        BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdResolver,
      );
    handler =
      module.get<BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdHandler>(
        BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdHandler,
      );
  });

  test('BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return a purchaseInvoicePosition by id updated', async () => {
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
          <BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdInput>(
            businessPartnerPortalMockPurchaseInvoicePositionData[0]
          ),
        ),
      ).toBe(businessPartnerPortalMockPurchaseInvoicePositionData[0]);
    });
  });
});
