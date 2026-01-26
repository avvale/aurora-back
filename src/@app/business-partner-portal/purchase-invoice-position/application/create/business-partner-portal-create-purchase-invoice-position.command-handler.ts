/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalCreatePurchaseInvoicePositionCommand } from '@app/business-partner-portal/purchase-invoice-position';
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
  BusinessPartnerPortalPurchaseInvoicePositionSubtotal,
  BusinessPartnerPortalPurchaseInvoicePositionTaxAmount,
  BusinessPartnerPortalPurchaseInvoicePositionTaxPercent,
  BusinessPartnerPortalPurchaseInvoicePositionUnitPrice,
} from '@app/business-partner-portal/purchase-invoice-position/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(BusinessPartnerPortalCreatePurchaseInvoicePositionCommand)
export class BusinessPartnerPortalCreatePurchaseInvoicePositionCommandHandler
  implements
    ICommandHandler<BusinessPartnerPortalCreatePurchaseInvoicePositionCommand>
{
  constructor(
    private readonly createPurchaseInvoicePositionService: BusinessPartnerPortalCreatePurchaseInvoicePositionService,
  ) {}

  async execute(
    command: BusinessPartnerPortalCreatePurchaseInvoicePositionCommand,
  ): Promise<void> {
    // call to use case and implements ValueObjects
    await this.createPurchaseInvoicePositionService.main(
      {
        id: new BusinessPartnerPortalPurchaseInvoicePositionId(
          command.payload.id,
        ),
        purchaseInvoiceHeaderId:
          new BusinessPartnerPortalPurchaseInvoicePositionPurchaseInvoiceHeaderId(
            command.payload.purchaseInvoiceHeaderId,
          ),
        positionNumber:
          new BusinessPartnerPortalPurchaseInvoicePositionPositionNumber(
            command.payload.positionNumber,
          ),
        description:
          new BusinessPartnerPortalPurchaseInvoicePositionDescription(
            command.payload.description,
          ),
        productCode:
          new BusinessPartnerPortalPurchaseInvoicePositionProductCode(
            command.payload.productCode,
          ),
        quantity: new BusinessPartnerPortalPurchaseInvoicePositionQuantity(
          command.payload.quantity,
        ),
        unitPrice: new BusinessPartnerPortalPurchaseInvoicePositionUnitPrice(
          command.payload.unitPrice,
        ),
        discountPercent:
          new BusinessPartnerPortalPurchaseInvoicePositionDiscountPercent(
            command.payload.discountPercent,
          ),
        discountAmount:
          new BusinessPartnerPortalPurchaseInvoicePositionDiscountAmount(
            command.payload.discountAmount,
          ),
        taxPercent: new BusinessPartnerPortalPurchaseInvoicePositionTaxPercent(
          command.payload.taxPercent,
        ),
        taxAmount: new BusinessPartnerPortalPurchaseInvoicePositionTaxAmount(
          command.payload.taxAmount,
        ),
        subtotal: new BusinessPartnerPortalPurchaseInvoicePositionSubtotal(
          command.payload.subtotal,
        ),
        positionTotal:
          new BusinessPartnerPortalPurchaseInvoicePositionPositionTotal(
            command.payload.positionTotal,
          ),
        expenseCategory:
          new BusinessPartnerPortalPurchaseInvoicePositionExpenseCategory(
            command.payload.expenseCategory,
          ),
        notes: new BusinessPartnerPortalPurchaseInvoicePositionNotes(
          command.payload.notes,
        ),
      },
      command.cQMetadata,
    );
  }
}
