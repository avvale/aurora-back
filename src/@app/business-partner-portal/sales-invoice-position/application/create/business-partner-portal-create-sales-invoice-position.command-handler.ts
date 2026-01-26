/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalCreateSalesInvoicePositionCommand } from '@app/business-partner-portal/sales-invoice-position';
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
  BusinessPartnerPortalSalesInvoicePositionSalesInvoiceHeaderId,
  BusinessPartnerPortalSalesInvoicePositionSubtotal,
  BusinessPartnerPortalSalesInvoicePositionTaxAmount,
  BusinessPartnerPortalSalesInvoicePositionTaxPercent,
  BusinessPartnerPortalSalesInvoicePositionUnitPrice,
} from '@app/business-partner-portal/sales-invoice-position/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(BusinessPartnerPortalCreateSalesInvoicePositionCommand)
export class BusinessPartnerPortalCreateSalesInvoicePositionCommandHandler
  implements
    ICommandHandler<BusinessPartnerPortalCreateSalesInvoicePositionCommand>
{
  constructor(
    private readonly createSalesInvoicePositionService: BusinessPartnerPortalCreateSalesInvoicePositionService,
  ) {}

  async execute(
    command: BusinessPartnerPortalCreateSalesInvoicePositionCommand,
  ): Promise<void> {
    // call to use case and implements ValueObjects
    await this.createSalesInvoicePositionService.main(
      {
        id: new BusinessPartnerPortalSalesInvoicePositionId(command.payload.id),
        salesInvoiceHeaderId:
          new BusinessPartnerPortalSalesInvoicePositionSalesInvoiceHeaderId(
            command.payload.salesInvoiceHeaderId,
          ),
        positionNumber:
          new BusinessPartnerPortalSalesInvoicePositionPositionNumber(
            command.payload.positionNumber,
          ),
        description: new BusinessPartnerPortalSalesInvoicePositionDescription(
          command.payload.description,
        ),
        productCode: new BusinessPartnerPortalSalesInvoicePositionProductCode(
          command.payload.productCode,
        ),
        quantity: new BusinessPartnerPortalSalesInvoicePositionQuantity(
          command.payload.quantity,
        ),
        unitPrice: new BusinessPartnerPortalSalesInvoicePositionUnitPrice(
          command.payload.unitPrice,
        ),
        discountPercent:
          new BusinessPartnerPortalSalesInvoicePositionDiscountPercent(
            command.payload.discountPercent,
          ),
        discountAmount:
          new BusinessPartnerPortalSalesInvoicePositionDiscountAmount(
            command.payload.discountAmount,
          ),
        taxPercent: new BusinessPartnerPortalSalesInvoicePositionTaxPercent(
          command.payload.taxPercent,
        ),
        taxAmount: new BusinessPartnerPortalSalesInvoicePositionTaxAmount(
          command.payload.taxAmount,
        ),
        subtotal: new BusinessPartnerPortalSalesInvoicePositionSubtotal(
          command.payload.subtotal,
        ),
        positionTotal:
          new BusinessPartnerPortalSalesInvoicePositionPositionTotal(
            command.payload.positionTotal,
          ),
        notes: new BusinessPartnerPortalSalesInvoicePositionNotes(
          command.payload.notes,
        ),
      },
      command.cQMetadata,
    );
  }
}
