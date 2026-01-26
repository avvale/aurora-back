/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalISalesInvoiceHeaderRepository,
  businessPartnerPortalMockSalesInvoiceHeaderData,
  BusinessPartnerPortalSalesInvoiceHeader,
} from '@app/business-partner-portal/sales-invoice-header';
import {
  BusinessPartnerPortalSalesInvoiceHeaderBusinessPartnerId,
  BusinessPartnerPortalSalesInvoiceHeaderCreatedAt,
  BusinessPartnerPortalSalesInvoiceHeaderCurrencyCode,
  BusinessPartnerPortalSalesInvoiceHeaderCustomerNotes,
  BusinessPartnerPortalSalesInvoiceHeaderDeletedAt,
  BusinessPartnerPortalSalesInvoiceHeaderDiscountAmount,
  BusinessPartnerPortalSalesInvoiceHeaderDueDate,
  BusinessPartnerPortalSalesInvoiceHeaderExternalId,
  BusinessPartnerPortalSalesInvoiceHeaderExternalSystemCode,
  BusinessPartnerPortalSalesInvoiceHeaderId,
  BusinessPartnerPortalSalesInvoiceHeaderInvoiceDate,
  BusinessPartnerPortalSalesInvoiceHeaderInvoiceNumber,
  BusinessPartnerPortalSalesInvoiceHeaderNotes,
  BusinessPartnerPortalSalesInvoiceHeaderPaidAmount,
  BusinessPartnerPortalSalesInvoiceHeaderPaymentTermDays,
  BusinessPartnerPortalSalesInvoiceHeaderRowId,
  BusinessPartnerPortalSalesInvoiceHeaderStatus,
  BusinessPartnerPortalSalesInvoiceHeaderSubtotal,
  BusinessPartnerPortalSalesInvoiceHeaderTaxAmount,
  BusinessPartnerPortalSalesInvoiceHeaderTotalAmount,
  BusinessPartnerPortalSalesInvoiceHeaderUpdatedAt,
} from '@app/business-partner-portal/sales-invoice-header/domain/value-objects';
import { MockRepository, Utils } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalMockSalesInvoiceHeaderRepository
  extends MockRepository<BusinessPartnerPortalSalesInvoiceHeader>
  implements BusinessPartnerPortalISalesInvoiceHeaderRepository
{
  public readonly repository: any;
  public readonly aggregateName: string =
    'BusinessPartnerPortalSalesInvoiceHeader';
  public collectionSource: BusinessPartnerPortalSalesInvoiceHeader[];

  constructor() {
    super();
    this.createSourceMockData();
  }

  public reset(): void {
    this.createSourceMockData();
  }

  private createSourceMockData(): void {
    this.collectionSource = [];
    const now = Utils.nowTimestamp();

    for (const itemCollection of <any[]>(
      businessPartnerPortalMockSalesInvoiceHeaderData
    )) {
      itemCollection['createdAt'] = now;
      itemCollection['updatedAt'] = now;
      itemCollection['deletedAt'] = null;

      this.collectionSource.push(
        BusinessPartnerPortalSalesInvoiceHeader.register(
          new BusinessPartnerPortalSalesInvoiceHeaderId(itemCollection.id),
          new BusinessPartnerPortalSalesInvoiceHeaderRowId(
            itemCollection.rowId,
          ),
          new BusinessPartnerPortalSalesInvoiceHeaderInvoiceNumber(
            itemCollection.invoiceNumber,
          ),
          new BusinessPartnerPortalSalesInvoiceHeaderExternalId(
            itemCollection.externalId,
          ),
          new BusinessPartnerPortalSalesInvoiceHeaderExternalSystemCode(
            itemCollection.externalSystemCode,
          ),
          new BusinessPartnerPortalSalesInvoiceHeaderBusinessPartnerId(
            itemCollection.businessPartnerId,
          ),
          new BusinessPartnerPortalSalesInvoiceHeaderInvoiceDate(
            itemCollection.invoiceDate,
          ),
          new BusinessPartnerPortalSalesInvoiceHeaderDueDate(
            itemCollection.dueDate,
          ),
          new BusinessPartnerPortalSalesInvoiceHeaderStatus(
            itemCollection.status,
          ),
          new BusinessPartnerPortalSalesInvoiceHeaderSubtotal(
            itemCollection.subtotal,
          ),
          new BusinessPartnerPortalSalesInvoiceHeaderTaxAmount(
            itemCollection.taxAmount,
          ),
          new BusinessPartnerPortalSalesInvoiceHeaderDiscountAmount(
            itemCollection.discountAmount,
          ),
          new BusinessPartnerPortalSalesInvoiceHeaderTotalAmount(
            itemCollection.totalAmount,
          ),
          new BusinessPartnerPortalSalesInvoiceHeaderPaidAmount(
            itemCollection.paidAmount,
          ),
          new BusinessPartnerPortalSalesInvoiceHeaderCurrencyCode(
            itemCollection.currencyCode,
          ),
          new BusinessPartnerPortalSalesInvoiceHeaderPaymentTermDays(
            itemCollection.paymentTermDays,
          ),
          new BusinessPartnerPortalSalesInvoiceHeaderNotes(
            itemCollection.notes,
          ),
          new BusinessPartnerPortalSalesInvoiceHeaderCustomerNotes(
            itemCollection.customerNotes,
          ),
          new BusinessPartnerPortalSalesInvoiceHeaderCreatedAt(
            itemCollection.createdAt,
          ),
          new BusinessPartnerPortalSalesInvoiceHeaderUpdatedAt(
            itemCollection.updatedAt,
          ),
          new BusinessPartnerPortalSalesInvoiceHeaderDeletedAt(
            itemCollection.deletedAt,
          ),
        ),
      );
    }
  }
}
