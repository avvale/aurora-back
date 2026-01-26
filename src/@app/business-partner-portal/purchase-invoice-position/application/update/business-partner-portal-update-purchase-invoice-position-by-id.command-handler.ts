/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdCommand } from '@app/business-partner-portal/purchase-invoice-position';
import { BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdService } from '@app/business-partner-portal/purchase-invoice-position/application/update/business-partner-portal-update-purchase-invoice-position-by-id.service';
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
  BusinessPartnerPortalPurchaseInvoicePositionSubtotal,
  BusinessPartnerPortalPurchaseInvoicePositionTaxAmount,
  BusinessPartnerPortalPurchaseInvoicePositionTaxPercent,
  BusinessPartnerPortalPurchaseInvoicePositionUnitPrice,
} from '@app/business-partner-portal/purchase-invoice-position/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdCommand)
export class BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdCommandHandler
  implements
    ICommandHandler<BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdCommand>
{
  constructor(
    private readonly updatePurchaseInvoicePositionByIdService: BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdService,
  ) {}

  async execute(
    command: BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdCommand,
  ): Promise<void> {
    // call to use case and implements ValueObjects
    await this.updatePurchaseInvoicePositionByIdService.main(
      {
        id: new BusinessPartnerPortalPurchaseInvoicePositionId(
          command.payload.id,
        ),
        purchaseInvoiceHeaderId:
          new BusinessPartnerPortalPurchaseInvoicePositionPurchaseInvoiceHeaderId(
            command.payload.purchaseInvoiceHeaderId,
            { undefinable: true },
          ),
        positionNumber:
          new BusinessPartnerPortalPurchaseInvoicePositionPositionNumber(
            command.payload.positionNumber,
            { undefinable: true },
          ),
        description:
          new BusinessPartnerPortalPurchaseInvoicePositionDescription(
            command.payload.description,
            { undefinable: true },
          ),
        productCode:
          new BusinessPartnerPortalPurchaseInvoicePositionProductCode(
            command.payload.productCode,
          ),
        quantity: new BusinessPartnerPortalPurchaseInvoicePositionQuantity(
          command.payload.quantity,
          { undefinable: true },
        ),
        unitPrice: new BusinessPartnerPortalPurchaseInvoicePositionUnitPrice(
          command.payload.unitPrice,
          { undefinable: true },
        ),
        discountPercent:
          new BusinessPartnerPortalPurchaseInvoicePositionDiscountPercent(
            command.payload.discountPercent,
            { undefinable: true },
          ),
        discountAmount:
          new BusinessPartnerPortalPurchaseInvoicePositionDiscountAmount(
            command.payload.discountAmount,
            { undefinable: true },
          ),
        taxPercent: new BusinessPartnerPortalPurchaseInvoicePositionTaxPercent(
          command.payload.taxPercent,
          { undefinable: true },
        ),
        taxAmount: new BusinessPartnerPortalPurchaseInvoicePositionTaxAmount(
          command.payload.taxAmount,
          { undefinable: true },
        ),
        subtotal: new BusinessPartnerPortalPurchaseInvoicePositionSubtotal(
          command.payload.subtotal,
          { undefinable: true },
        ),
        positionTotal:
          new BusinessPartnerPortalPurchaseInvoicePositionPositionTotal(
            command.payload.positionTotal,
            { undefinable: true },
          ),
        expenseCategory:
          new BusinessPartnerPortalPurchaseInvoicePositionExpenseCategory(
            command.payload.expenseCategory,
          ),
        notes: new BusinessPartnerPortalPurchaseInvoicePositionNotes(
          command.payload.notes,
        ),
      },
      command.constraint,
      command.cQMetadata,
    );
  }
}
