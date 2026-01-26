/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalCreatedPurchaseInvoiceHeaderEvent,
  BusinessPartnerPortalCreatedPurchaseInvoiceHeadersEvent,
  BusinessPartnerPortalPurchaseInvoiceHeader,
} from '@app/business-partner-portal/purchase-invoice-header';
import { CQMetadata } from '@aurorajs.dev/core';
import { AggregateRoot } from '@nestjs/cqrs';

export class BusinessPartnerPortalAddPurchaseInvoiceHeadersContextEvent extends AggregateRoot {
  constructor(
    public readonly aggregateRoots: BusinessPartnerPortalPurchaseInvoiceHeader[] = [],
    public readonly cQMetadata?: CQMetadata,
  ) {
    super();
  }

  *[Symbol.iterator]() {
    for (const aggregateRoot of this.aggregateRoots) yield aggregateRoot;
  }

  created(): void {
    this.apply(
      new BusinessPartnerPortalCreatedPurchaseInvoiceHeadersEvent({
        payload: this.aggregateRoots.map(
          (purchaseInvoiceHeader) =>
            new BusinessPartnerPortalCreatedPurchaseInvoiceHeaderEvent({
              payload: {
                id: purchaseInvoiceHeader.id.value,
                invoiceNumber: purchaseInvoiceHeader.invoiceNumber.value,
                supplierInvoiceNumber:
                  purchaseInvoiceHeader.supplierInvoiceNumber?.value,
                externalId: purchaseInvoiceHeader.externalId?.value,
                externalSystemCode:
                  purchaseInvoiceHeader.externalSystemCode?.value,
                businessPartnerId:
                  purchaseInvoiceHeader.businessPartnerId.value,
                invoiceDate: purchaseInvoiceHeader.invoiceDate.value,
                receivedDate: purchaseInvoiceHeader.receivedDate?.value,
                dueDate: purchaseInvoiceHeader.dueDate?.value,
                status: purchaseInvoiceHeader.status.value,
                subtotal: purchaseInvoiceHeader.subtotal.value,
                taxAmount: purchaseInvoiceHeader.taxAmount.value,
                discountAmount: purchaseInvoiceHeader.discountAmount.value,
                totalAmount: purchaseInvoiceHeader.totalAmount.value,
                paidAmount: purchaseInvoiceHeader.paidAmount.value,
                currencyCode: purchaseInvoiceHeader.currencyCode.value,
                paymentTermDays: purchaseInvoiceHeader.paymentTermDays?.value,
                notes: purchaseInvoiceHeader.notes?.value,
                approvalNotes: purchaseInvoiceHeader.approvalNotes?.value,
                createdAt: purchaseInvoiceHeader.createdAt?.value,
                updatedAt: purchaseInvoiceHeader.updatedAt?.value,
                deletedAt: purchaseInvoiceHeader.deletedAt?.value,
              },
            }),
        ),
        cQMetadata: this.cQMetadata,
      }),
    );
  }
}
