/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalCreatedSalesInvoiceHeaderEvent,
  BusinessPartnerPortalCreatedSalesInvoiceHeadersEvent,
  BusinessPartnerPortalSalesInvoiceHeader,
} from '@app/business-partner-portal/sales-invoice-header';
import { CQMetadata } from '@aurorajs.dev/core';
import { AggregateRoot } from '@nestjs/cqrs';

export class BusinessPartnerPortalAddSalesInvoiceHeadersContextEvent extends AggregateRoot {
  constructor(
    public readonly aggregateRoots: BusinessPartnerPortalSalesInvoiceHeader[] = [],
    public readonly cQMetadata?: CQMetadata,
  ) {
    super();
  }

  *[Symbol.iterator]() {
    for (const aggregateRoot of this.aggregateRoots) yield aggregateRoot;
  }

  created(): void {
    this.apply(
      new BusinessPartnerPortalCreatedSalesInvoiceHeadersEvent({
        payload: this.aggregateRoots.map(
          (salesInvoiceHeader) =>
            new BusinessPartnerPortalCreatedSalesInvoiceHeaderEvent({
              payload: {
                id: salesInvoiceHeader.id.value,
                invoiceNumber: salesInvoiceHeader.invoiceNumber.value,
                externalId: salesInvoiceHeader.externalId?.value,
                externalSystemCode:
                  salesInvoiceHeader.externalSystemCode?.value,
                businessPartnerId: salesInvoiceHeader.businessPartnerId.value,
                invoiceDate: salesInvoiceHeader.invoiceDate.value,
                dueDate: salesInvoiceHeader.dueDate?.value,
                status: salesInvoiceHeader.status.value,
                subtotal: salesInvoiceHeader.subtotal.value,
                taxAmount: salesInvoiceHeader.taxAmount.value,
                discountAmount: salesInvoiceHeader.discountAmount.value,
                totalAmount: salesInvoiceHeader.totalAmount.value,
                paidAmount: salesInvoiceHeader.paidAmount.value,
                currencyCode: salesInvoiceHeader.currencyCode.value,
                paymentTermDays: salesInvoiceHeader.paymentTermDays?.value,
                notes: salesInvoiceHeader.notes?.value,
                customerNotes: salesInvoiceHeader.customerNotes?.value,
                createdAt: salesInvoiceHeader.createdAt?.value,
                updatedAt: salesInvoiceHeader.updatedAt?.value,
                deletedAt: salesInvoiceHeader.deletedAt?.value,
              },
            }),
        ),
        cQMetadata: this.cQMetadata,
      }),
    );
  }
}
