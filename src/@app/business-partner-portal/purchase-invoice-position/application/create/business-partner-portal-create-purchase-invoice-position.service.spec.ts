/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalIPurchaseInvoicePositionRepository,
  businessPartnerPortalMockPurchaseInvoicePositionData,
  BusinessPartnerPortalMockPurchaseInvoicePositionRepository,
} from '@app/business-partner-portal/purchase-invoice-position';
import { BusinessPartnerPortalCreatePurchaseInvoicePositionService } from '@app/business-partner-portal/purchase-invoice-position/application/create/business-partner-portal-create-purchase-invoice-position.service';
import {
  BusinessPartnerPortalPurchaseInvoicePositionDescription,
  BusinessPartnerPortalPurchaseInvoicePositionDiscountAmount,
  BusinessPartnerPortalPurchaseInvoicePositionDiscountPercent,
  BusinessPartnerPortalPurchaseInvoicePositionExpenseCategory,
  BusinessPartnerPortalPurchaseInvoicePositionId,
  BusinessPartnerPortalPurchaseInvoicePositionNotes,
  BusinessPartnerPortalPurchaseInvoicePositionPositionNumber,
  BusinessPartnerPortalPurchaseInvoicePositionPositionTotal,
  BusinessPartnerPortalPurchaseInvoicePositionProductCode,
  BusinessPartnerPortalPurchaseInvoicePositionPurchaseInvoiceHeaderId,
  BusinessPartnerPortalPurchaseInvoicePositionQuantity,
  BusinessPartnerPortalPurchaseInvoicePositionRowId,
  BusinessPartnerPortalPurchaseInvoicePositionSubtotal,
  BusinessPartnerPortalPurchaseInvoicePositionTaxAmount,
  BusinessPartnerPortalPurchaseInvoicePositionTaxPercent,
  BusinessPartnerPortalPurchaseInvoicePositionUnitPrice,
} from '@app/business-partner-portal/purchase-invoice-position/domain/value-objects';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalCreatePurchaseInvoicePositionService', () => {
  let service: BusinessPartnerPortalCreatePurchaseInvoicePositionService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalCreatePurchaseInvoicePositionService,
        BusinessPartnerPortalMockPurchaseInvoicePositionRepository,
        {
          provide: BusinessPartnerPortalIPurchaseInvoicePositionRepository,
          useValue: {
            create: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(
      BusinessPartnerPortalCreatePurchaseInvoicePositionService,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalCreatePurchaseInvoicePositionService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should create a purchaseInvoicePosition and emit event', async () => {
      expect(
        await service.main({
          id: new BusinessPartnerPortalPurchaseInvoicePositionId(
            businessPartnerPortalMockPurchaseInvoicePositionData[0].id,
          ),
          rowId: new BusinessPartnerPortalPurchaseInvoicePositionRowId(
            businessPartnerPortalMockPurchaseInvoicePositionData[0].rowId,
          ),
          purchaseInvoiceHeaderId:
            new BusinessPartnerPortalPurchaseInvoicePositionPurchaseInvoiceHeaderId(
              businessPartnerPortalMockPurchaseInvoicePositionData[0].purchaseInvoiceHeaderId,
            ),
          positionNumber:
            new BusinessPartnerPortalPurchaseInvoicePositionPositionNumber(
              businessPartnerPortalMockPurchaseInvoicePositionData[0].positionNumber,
            ),
          description:
            new BusinessPartnerPortalPurchaseInvoicePositionDescription(
              businessPartnerPortalMockPurchaseInvoicePositionData[0].description,
            ),
          productCode:
            new BusinessPartnerPortalPurchaseInvoicePositionProductCode(
              businessPartnerPortalMockPurchaseInvoicePositionData[0].productCode,
            ),
          quantity: new BusinessPartnerPortalPurchaseInvoicePositionQuantity(
            businessPartnerPortalMockPurchaseInvoicePositionData[0].quantity,
          ),
          unitPrice: new BusinessPartnerPortalPurchaseInvoicePositionUnitPrice(
            businessPartnerPortalMockPurchaseInvoicePositionData[0].unitPrice,
          ),
          discountPercent:
            new BusinessPartnerPortalPurchaseInvoicePositionDiscountPercent(
              businessPartnerPortalMockPurchaseInvoicePositionData[0].discountPercent,
            ),
          discountAmount:
            new BusinessPartnerPortalPurchaseInvoicePositionDiscountAmount(
              businessPartnerPortalMockPurchaseInvoicePositionData[0].discountAmount,
            ),
          taxPercent:
            new BusinessPartnerPortalPurchaseInvoicePositionTaxPercent(
              businessPartnerPortalMockPurchaseInvoicePositionData[0].taxPercent,
            ),
          taxAmount: new BusinessPartnerPortalPurchaseInvoicePositionTaxAmount(
            businessPartnerPortalMockPurchaseInvoicePositionData[0].taxAmount,
          ),
          subtotal: new BusinessPartnerPortalPurchaseInvoicePositionSubtotal(
            businessPartnerPortalMockPurchaseInvoicePositionData[0].subtotal,
          ),
          positionTotal:
            new BusinessPartnerPortalPurchaseInvoicePositionPositionTotal(
              businessPartnerPortalMockPurchaseInvoicePositionData[0].positionTotal,
            ),
          expenseCategory:
            new BusinessPartnerPortalPurchaseInvoicePositionExpenseCategory(
              businessPartnerPortalMockPurchaseInvoicePositionData[0].expenseCategory,
            ),
          notes: new BusinessPartnerPortalPurchaseInvoicePositionNotes(
            businessPartnerPortalMockPurchaseInvoicePositionData[0].notes,
          ),
        }),
      ).toBe(undefined);
    });
  });
});
