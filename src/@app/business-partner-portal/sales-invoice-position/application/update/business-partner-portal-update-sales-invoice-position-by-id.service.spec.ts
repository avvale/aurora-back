/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalISalesInvoicePositionRepository,
  businessPartnerPortalMockSalesInvoicePositionData,
  BusinessPartnerPortalMockSalesInvoicePositionRepository,
} from '@app/business-partner-portal/sales-invoice-position';
import { BusinessPartnerPortalUpdateSalesInvoicePositionByIdService } from '@app/business-partner-portal/sales-invoice-position/application/update/business-partner-portal-update-sales-invoice-position-by-id.service';
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

describe('BusinessPartnerPortalUpdateSalesInvoicePositionByIdService', () => {
  let service: BusinessPartnerPortalUpdateSalesInvoicePositionByIdService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalUpdateSalesInvoicePositionByIdService,
        BusinessPartnerPortalMockSalesInvoicePositionRepository,
        {
          provide: BusinessPartnerPortalISalesInvoicePositionRepository,
          useValue: {
            updateById: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(
      BusinessPartnerPortalUpdateSalesInvoicePositionByIdService,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalUpdateSalesInvoicePositionByIdService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should update a salesInvoicePosition and emit event', async () => {
      expect(
        await service.main(
          {
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
            description:
              new BusinessPartnerPortalSalesInvoicePositionDescription(
                businessPartnerPortalMockSalesInvoicePositionData[0].description,
              ),
            productCode:
              new BusinessPartnerPortalSalesInvoicePositionProductCode(
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
          },
          {},
        ),
      ).toBe(undefined);
    });
  });
});
