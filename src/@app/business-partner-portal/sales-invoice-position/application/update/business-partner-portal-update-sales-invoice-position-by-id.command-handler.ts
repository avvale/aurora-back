/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalUpdateSalesInvoicePositionByIdCommand } from '@app/business-partner-portal/sales-invoice-position';
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
  BusinessPartnerPortalSalesInvoicePositionSalesInvoiceHeaderId,
  BusinessPartnerPortalSalesInvoicePositionSubtotal,
  BusinessPartnerPortalSalesInvoicePositionTaxAmount,
  BusinessPartnerPortalSalesInvoicePositionTaxPercent,
  BusinessPartnerPortalSalesInvoicePositionUnitPrice,
} from '@app/business-partner-portal/sales-invoice-position/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(BusinessPartnerPortalUpdateSalesInvoicePositionByIdCommand)
export class BusinessPartnerPortalUpdateSalesInvoicePositionByIdCommandHandler
  implements
    ICommandHandler<BusinessPartnerPortalUpdateSalesInvoicePositionByIdCommand>
{
  constructor(
    private readonly updateSalesInvoicePositionByIdService: BusinessPartnerPortalUpdateSalesInvoicePositionByIdService,
  ) {}

  async execute(
    command: BusinessPartnerPortalUpdateSalesInvoicePositionByIdCommand,
  ): Promise<void> {
    // call to use case and implements ValueObjects
    await this.updateSalesInvoicePositionByIdService.main(
      {
        id: new BusinessPartnerPortalSalesInvoicePositionId(command.payload.id),
        salesInvoiceHeaderId:
          new BusinessPartnerPortalSalesInvoicePositionSalesInvoiceHeaderId(
            command.payload.salesInvoiceHeaderId,
            { undefinable: true },
          ),
        positionNumber:
          new BusinessPartnerPortalSalesInvoicePositionPositionNumber(
            command.payload.positionNumber,
            { undefinable: true },
          ),
        description: new BusinessPartnerPortalSalesInvoicePositionDescription(
          command.payload.description,
          { undefinable: true },
        ),
        productCode: new BusinessPartnerPortalSalesInvoicePositionProductCode(
          command.payload.productCode,
        ),
        quantity: new BusinessPartnerPortalSalesInvoicePositionQuantity(
          command.payload.quantity,
          { undefinable: true },
        ),
        unitPrice: new BusinessPartnerPortalSalesInvoicePositionUnitPrice(
          command.payload.unitPrice,
          { undefinable: true },
        ),
        discountPercent:
          new BusinessPartnerPortalSalesInvoicePositionDiscountPercent(
            command.payload.discountPercent,
            { undefinable: true },
          ),
        discountAmount:
          new BusinessPartnerPortalSalesInvoicePositionDiscountAmount(
            command.payload.discountAmount,
            { undefinable: true },
          ),
        taxPercent: new BusinessPartnerPortalSalesInvoicePositionTaxPercent(
          command.payload.taxPercent,
          { undefinable: true },
        ),
        taxAmount: new BusinessPartnerPortalSalesInvoicePositionTaxAmount(
          command.payload.taxAmount,
          { undefinable: true },
        ),
        subtotal: new BusinessPartnerPortalSalesInvoicePositionSubtotal(
          command.payload.subtotal,
          { undefinable: true },
        ),
        positionTotal:
          new BusinessPartnerPortalSalesInvoicePositionPositionTotal(
            command.payload.positionTotal,
            { undefinable: true },
          ),
        notes: new BusinessPartnerPortalSalesInvoicePositionNotes(
          command.payload.notes,
        ),
      },
      command.constraint,
      command.cQMetadata,
    );
  }
}
