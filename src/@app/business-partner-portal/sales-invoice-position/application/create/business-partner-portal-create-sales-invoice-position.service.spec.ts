/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalISalesInvoicePositionRepository,
  businessPartnerPortalMockSalesInvoicePositionData,
  BusinessPartnerPortalMockSalesInvoicePositionRepository,
} from '@app/business-partner-portal/sales-invoice-position';
import { BusinessPartnerPortalCreateSalesInvoicePositionService } from '@app/business-partner-portal/sales-invoice-position/application/create/business-partner-portal-create-sales-invoice-position.service';
import {
  BusinessPartnerPortalSalesInvoicePositionDescription,
  BusinessPartnerPortalSalesInvoicePositionDiscountAmount,
  BusinessPartnerPortalSalesInvoicePositionDiscountPercent,
  BusinessPartnerPortalSalesInvoicePositionId,
  BusinessPartnerPortalSalesInvoicePositionNotes,
  BusinessPartnerPortalSalesInvoicePositionPositionNumber,
  BusinessPartnerPortalSalesInvoicePositionPositionTotal,
  BusinessPartnerPortalSalesInvoicePositionProductCode,
  BusinessPartnerPortalSalesInvoicePositionQuantity,
  BusinessPartnerPortalSalesInvoicePositionRowId,
  BusinessPartnerPortalSalesInvoicePositionSalesInvoiceHeaderId,
  BusinessPartnerPortalSalesInvoicePositionSubtotal,
  BusinessPartnerPortalSalesInvoicePositionTaxAmount,
  BusinessPartnerPortalSalesInvoicePositionTaxPercent,
  BusinessPartnerPortalSalesInvoicePositionUnitPrice,
} from '@app/business-partner-portal/sales-invoice-position/domain/value-objects';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalCreateSalesInvoicePositionService', () => {
  let service: BusinessPartnerPortalCreateSalesInvoicePositionService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalCreateSalesInvoicePositionService,
        BusinessPartnerPortalMockSalesInvoicePositionRepository,
        {
          provide: BusinessPartnerPortalISalesInvoicePositionRepository,
          useValue: {
            create: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(
      BusinessPartnerPortalCreateSalesInvoicePositionService,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalCreateSalesInvoicePositionService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should create a salesInvoicePosition and emit event', async () => {
      expect(
        await service.main({
          id: new BusinessPartnerPortalSalesInvoicePositionId(
            businessPartnerPortalMockSalesInvoicePositionData[0].id,
          ),
          rowId: new BusinessPartnerPortalSalesInvoicePositionRowId(
            businessPartnerPortalMockSalesInvoicePositionData[0].rowId,
          ),
          salesInvoiceHeaderId:
            new BusinessPartnerPortalSalesInvoicePositionSalesInvoiceHeaderId(
              businessPartnerPortalMockSalesInvoicePositionData[0].salesInvoiceHeaderId,
            ),
          positionNumber:
            new BusinessPartnerPortalSalesInvoicePositionPositionNumber(
              businessPartnerPortalMockSalesInvoicePositionData[0].positionNumber,
            ),
          description: new BusinessPartnerPortalSalesInvoicePositionDescription(
            businessPartnerPortalMockSalesInvoicePositionData[0].description,
          ),
          productCode: new BusinessPartnerPortalSalesInvoicePositionProductCode(
            businessPartnerPortalMockSalesInvoicePositionData[0].productCode,
          ),
          quantity: new BusinessPartnerPortalSalesInvoicePositionQuantity(
            businessPartnerPortalMockSalesInvoicePositionData[0].quantity,
          ),
          unitPrice: new BusinessPartnerPortalSalesInvoicePositionUnitPrice(
            businessPartnerPortalMockSalesInvoicePositionData[0].unitPrice,
          ),
          discountPercent:
            new BusinessPartnerPortalSalesInvoicePositionDiscountPercent(
              businessPartnerPortalMockSalesInvoicePositionData[0].discountPercent,
            ),
          discountAmount:
            new BusinessPartnerPortalSalesInvoicePositionDiscountAmount(
              businessPartnerPortalMockSalesInvoicePositionData[0].discountAmount,
            ),
          taxPercent: new BusinessPartnerPortalSalesInvoicePositionTaxPercent(
            businessPartnerPortalMockSalesInvoicePositionData[0].taxPercent,
          ),
          taxAmount: new BusinessPartnerPortalSalesInvoicePositionTaxAmount(
            businessPartnerPortalMockSalesInvoicePositionData[0].taxAmount,
          ),
          subtotal: new BusinessPartnerPortalSalesInvoicePositionSubtotal(
            businessPartnerPortalMockSalesInvoicePositionData[0].subtotal,
          ),
          positionTotal:
            new BusinessPartnerPortalSalesInvoicePositionPositionTotal(
              businessPartnerPortalMockSalesInvoicePositionData[0].positionTotal,
            ),
          notes: new BusinessPartnerPortalSalesInvoicePositionNotes(
            businessPartnerPortalMockSalesInvoicePositionData[0].notes,
          ),
        }),
      ).toBe(undefined);
    });
  });
});
