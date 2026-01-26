/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import {
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
import { MockSeeder } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';

@Injectable()
export class BusinessPartnerPortalMockSalesInvoiceHeaderSeeder extends MockSeeder<BusinessPartnerPortalSalesInvoiceHeader> {
  public collectionSource: BusinessPartnerPortalSalesInvoiceHeader[];

  constructor() {
    super();
    this._createMock();
  }

  private _createMock(): void {
    this.collectionSource = [];

    for (const salesInvoiceHeader of _.orderBy(
      businessPartnerPortalMockSalesInvoiceHeaderData,
      ['id'],
    )) {
      this.collectionSource.push(
        BusinessPartnerPortalSalesInvoiceHeader.register(
          new BusinessPartnerPortalSalesInvoiceHeaderId(salesInvoiceHeader.id),
          new BusinessPartnerPortalSalesInvoiceHeaderRowId(
            salesInvoiceHeader.rowId,
          ),
          new BusinessPartnerPortalSalesInvoiceHeaderInvoiceNumber(
            salesInvoiceHeader.invoiceNumber,
          ),
          new BusinessPartnerPortalSalesInvoiceHeaderExternalId(
            salesInvoiceHeader.externalId,
          ),
          new BusinessPartnerPortalSalesInvoiceHeaderExternalSystemCode(
            salesInvoiceHeader.externalSystemCode,
          ),
          new BusinessPartnerPortalSalesInvoiceHeaderBusinessPartnerId(
            salesInvoiceHeader.businessPartnerId,
          ),
          new BusinessPartnerPortalSalesInvoiceHeaderInvoiceDate(
            salesInvoiceHeader.invoiceDate,
          ),
          new BusinessPartnerPortalSalesInvoiceHeaderDueDate(
            salesInvoiceHeader.dueDate,
          ),
          new BusinessPartnerPortalSalesInvoiceHeaderStatus(
            salesInvoiceHeader.status,
          ),
          new BusinessPartnerPortalSalesInvoiceHeaderSubtotal(
            salesInvoiceHeader.subtotal,
          ),
          new BusinessPartnerPortalSalesInvoiceHeaderTaxAmount(
            salesInvoiceHeader.taxAmount,
          ),
          new BusinessPartnerPortalSalesInvoiceHeaderDiscountAmount(
            salesInvoiceHeader.discountAmount,
          ),
          new BusinessPartnerPortalSalesInvoiceHeaderTotalAmount(
            salesInvoiceHeader.totalAmount,
          ),
          new BusinessPartnerPortalSalesInvoiceHeaderPaidAmount(
            salesInvoiceHeader.paidAmount,
          ),
          new BusinessPartnerPortalSalesInvoiceHeaderCurrencyCode(
            salesInvoiceHeader.currencyCode,
          ),
          new BusinessPartnerPortalSalesInvoiceHeaderPaymentTermDays(
            salesInvoiceHeader.paymentTermDays,
          ),
          new BusinessPartnerPortalSalesInvoiceHeaderNotes(
            salesInvoiceHeader.notes,
          ),
          new BusinessPartnerPortalSalesInvoiceHeaderCustomerNotes(
            salesInvoiceHeader.customerNotes,
          ),
          new BusinessPartnerPortalSalesInvoiceHeaderCreatedAt({
            currentTimestamp: true,
          }),
          new BusinessPartnerPortalSalesInvoiceHeaderUpdatedAt({
            currentTimestamp: true,
          }),
          new BusinessPartnerPortalSalesInvoiceHeaderDeletedAt(null),
        ),
      );
    }
  }
}
