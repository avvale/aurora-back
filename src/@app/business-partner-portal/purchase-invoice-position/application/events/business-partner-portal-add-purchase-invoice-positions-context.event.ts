/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalCreatedPurchaseInvoicePositionEvent,
  BusinessPartnerPortalCreatedPurchaseInvoicePositionsEvent,
  BusinessPartnerPortalPurchaseInvoicePosition,
} from '@app/business-partner-portal/purchase-invoice-position';
import { CQMetadata } from '@aurorajs.dev/core';
import { AggregateRoot } from '@nestjs/cqrs';

export class BusinessPartnerPortalAddPurchaseInvoicePositionsContextEvent extends AggregateRoot {
  constructor(
    public readonly aggregateRoots: BusinessPartnerPortalPurchaseInvoicePosition[] = [],
    public readonly cQMetadata?: CQMetadata,
  ) {
    super();
  }

  *[Symbol.iterator]() {
    for (const aggregateRoot of this.aggregateRoots) yield aggregateRoot;
  }

  created(): void {
    this.apply(
      new BusinessPartnerPortalCreatedPurchaseInvoicePositionsEvent({
        payload: this.aggregateRoots.map(
          (purchaseInvoicePosition) =>
            new BusinessPartnerPortalCreatedPurchaseInvoicePositionEvent({
              payload: {
                id: purchaseInvoicePosition.id.value,
                purchaseInvoiceHeaderId:
                  purchaseInvoicePosition.purchaseInvoiceHeaderId.value,
                positionNumber: purchaseInvoicePosition.positionNumber.value,
                description: purchaseInvoicePosition.description.value,
                productCode: purchaseInvoicePosition.productCode?.value,
                quantity: purchaseInvoicePosition.quantity.value,
                unitPrice: purchaseInvoicePosition.unitPrice.value,
                discountPercent: purchaseInvoicePosition.discountPercent.value,
                discountAmount: purchaseInvoicePosition.discountAmount.value,
                taxPercent: purchaseInvoicePosition.taxPercent.value,
                taxAmount: purchaseInvoicePosition.taxAmount.value,
                subtotal: purchaseInvoicePosition.subtotal.value,
                positionTotal: purchaseInvoicePosition.positionTotal.value,
                expenseCategory: purchaseInvoicePosition.expenseCategory?.value,
                notes: purchaseInvoicePosition.notes?.value,
                createdAt: purchaseInvoicePosition.createdAt?.value,
                updatedAt: purchaseInvoicePosition.updatedAt?.value,
                deletedAt: purchaseInvoicePosition.deletedAt?.value,
              },
            }),
        ),
        cQMetadata: this.cQMetadata,
      }),
    );
  }
}
