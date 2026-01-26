/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalCreatedSalesInvoicePositionEvent,
  BusinessPartnerPortalCreatedSalesInvoicePositionsEvent,
  BusinessPartnerPortalSalesInvoicePosition,
} from '@app/business-partner-portal/sales-invoice-position';
import { CQMetadata } from '@aurorajs.dev/core';
import { AggregateRoot } from '@nestjs/cqrs';

export class BusinessPartnerPortalAddSalesInvoicePositionsContextEvent extends AggregateRoot {
  constructor(
    public readonly aggregateRoots: BusinessPartnerPortalSalesInvoicePosition[] = [],
    public readonly cQMetadata?: CQMetadata,
  ) {
    super();
  }

  *[Symbol.iterator]() {
    for (const aggregateRoot of this.aggregateRoots) yield aggregateRoot;
  }

  created(): void {
    this.apply(
      new BusinessPartnerPortalCreatedSalesInvoicePositionsEvent({
        payload: this.aggregateRoots.map(
          (salesInvoicePosition) =>
            new BusinessPartnerPortalCreatedSalesInvoicePositionEvent({
              payload: {
                id: salesInvoicePosition.id.value,
                salesInvoiceHeaderId:
                  salesInvoicePosition.salesInvoiceHeaderId.value,
                positionNumber: salesInvoicePosition.positionNumber.value,
                description: salesInvoicePosition.description.value,
                productCode: salesInvoicePosition.productCode?.value,
                quantity: salesInvoicePosition.quantity.value,
                unitPrice: salesInvoicePosition.unitPrice.value,
                discountPercent: salesInvoicePosition.discountPercent.value,
                discountAmount: salesInvoicePosition.discountAmount.value,
                taxPercent: salesInvoicePosition.taxPercent.value,
                taxAmount: salesInvoicePosition.taxAmount.value,
                subtotal: salesInvoicePosition.subtotal.value,
                positionTotal: salesInvoicePosition.positionTotal.value,
                notes: salesInvoicePosition.notes?.value,
                createdAt: salesInvoicePosition.createdAt?.value,
                updatedAt: salesInvoicePosition.updatedAt?.value,
                deletedAt: salesInvoicePosition.deletedAt?.value,
              },
            }),
        ),
        cQMetadata: this.cQMetadata,
      }),
    );
  }
}
