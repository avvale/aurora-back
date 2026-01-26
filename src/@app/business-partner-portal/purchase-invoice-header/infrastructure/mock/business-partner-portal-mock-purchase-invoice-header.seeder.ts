/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import {
  businessPartnerPortalMockPurchaseInvoiceHeaderData,
  BusinessPartnerPortalPurchaseInvoiceHeader,
} from '@app/business-partner-portal/purchase-invoice-header';
import {
  BusinessPartnerPortalPurchaseInvoiceHeaderApprovalNotes,
  BusinessPartnerPortalPurchaseInvoiceHeaderBusinessPartnerId,
  BusinessPartnerPortalPurchaseInvoiceHeaderCreatedAt,
  BusinessPartnerPortalPurchaseInvoiceHeaderCurrencyCode,
  BusinessPartnerPortalPurchaseInvoiceHeaderDeletedAt,
  BusinessPartnerPortalPurchaseInvoiceHeaderDiscountAmount,
  BusinessPartnerPortalPurchaseInvoiceHeaderDueDate,
  BusinessPartnerPortalPurchaseInvoiceHeaderExternalId,
  BusinessPartnerPortalPurchaseInvoiceHeaderExternalSystemCode,
  BusinessPartnerPortalPurchaseInvoiceHeaderId,
  BusinessPartnerPortalPurchaseInvoiceHeaderInvoiceDate,
  BusinessPartnerPortalPurchaseInvoiceHeaderInvoiceNumber,
  BusinessPartnerPortalPurchaseInvoiceHeaderNotes,
  BusinessPartnerPortalPurchaseInvoiceHeaderPaidAmount,
  BusinessPartnerPortalPurchaseInvoiceHeaderPaymentTermDays,
  BusinessPartnerPortalPurchaseInvoiceHeaderReceivedDate,
  BusinessPartnerPortalPurchaseInvoiceHeaderRowId,
  BusinessPartnerPortalPurchaseInvoiceHeaderStatus,
  BusinessPartnerPortalPurchaseInvoiceHeaderSubtotal,
  BusinessPartnerPortalPurchaseInvoiceHeaderSupplierInvoiceNumber,
  BusinessPartnerPortalPurchaseInvoiceHeaderTaxAmount,
  BusinessPartnerPortalPurchaseInvoiceHeaderTotalAmount,
  BusinessPartnerPortalPurchaseInvoiceHeaderUpdatedAt,
} from '@app/business-partner-portal/purchase-invoice-header/domain/value-objects';
import { MockSeeder } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';

@Injectable()
export class BusinessPartnerPortalMockPurchaseInvoiceHeaderSeeder extends MockSeeder<BusinessPartnerPortalPurchaseInvoiceHeader> {
  public collectionSource: BusinessPartnerPortalPurchaseInvoiceHeader[];

  constructor() {
    super();
    this._createMock();
  }

  private _createMock(): void {
    this.collectionSource = [];

    for (const purchaseInvoiceHeader of _.orderBy(
      businessPartnerPortalMockPurchaseInvoiceHeaderData,
      ['id'],
    )) {
      this.collectionSource.push(
        BusinessPartnerPortalPurchaseInvoiceHeader.register(
          new BusinessPartnerPortalPurchaseInvoiceHeaderId(
            purchaseInvoiceHeader.id,
          ),
          new BusinessPartnerPortalPurchaseInvoiceHeaderRowId(
            purchaseInvoiceHeader.rowId,
          ),
          new BusinessPartnerPortalPurchaseInvoiceHeaderInvoiceNumber(
            purchaseInvoiceHeader.invoiceNumber,
          ),
          new BusinessPartnerPortalPurchaseInvoiceHeaderSupplierInvoiceNumber(
            purchaseInvoiceHeader.supplierInvoiceNumber,
          ),
          new BusinessPartnerPortalPurchaseInvoiceHeaderExternalId(
            purchaseInvoiceHeader.externalId,
          ),
          new BusinessPartnerPortalPurchaseInvoiceHeaderExternalSystemCode(
            purchaseInvoiceHeader.externalSystemCode,
          ),
          new BusinessPartnerPortalPurchaseInvoiceHeaderBusinessPartnerId(
            purchaseInvoiceHeader.businessPartnerId,
          ),
          new BusinessPartnerPortalPurchaseInvoiceHeaderInvoiceDate(
            purchaseInvoiceHeader.invoiceDate,
          ),
          new BusinessPartnerPortalPurchaseInvoiceHeaderReceivedDate(
            purchaseInvoiceHeader.receivedDate,
          ),
          new BusinessPartnerPortalPurchaseInvoiceHeaderDueDate(
            purchaseInvoiceHeader.dueDate,
          ),
          new BusinessPartnerPortalPurchaseInvoiceHeaderStatus(
            purchaseInvoiceHeader.status,
          ),
          new BusinessPartnerPortalPurchaseInvoiceHeaderSubtotal(
            purchaseInvoiceHeader.subtotal,
          ),
          new BusinessPartnerPortalPurchaseInvoiceHeaderTaxAmount(
            purchaseInvoiceHeader.taxAmount,
          ),
          new BusinessPartnerPortalPurchaseInvoiceHeaderDiscountAmount(
            purchaseInvoiceHeader.discountAmount,
          ),
          new BusinessPartnerPortalPurchaseInvoiceHeaderTotalAmount(
            purchaseInvoiceHeader.totalAmount,
          ),
          new BusinessPartnerPortalPurchaseInvoiceHeaderPaidAmount(
            purchaseInvoiceHeader.paidAmount,
          ),
          new BusinessPartnerPortalPurchaseInvoiceHeaderCurrencyCode(
            purchaseInvoiceHeader.currencyCode,
          ),
          new BusinessPartnerPortalPurchaseInvoiceHeaderPaymentTermDays(
            purchaseInvoiceHeader.paymentTermDays,
          ),
          new BusinessPartnerPortalPurchaseInvoiceHeaderNotes(
            purchaseInvoiceHeader.notes,
          ),
          new BusinessPartnerPortalPurchaseInvoiceHeaderApprovalNotes(
            purchaseInvoiceHeader.approvalNotes,
          ),
          new BusinessPartnerPortalPurchaseInvoiceHeaderCreatedAt({
            currentTimestamp: true,
          }),
          new BusinessPartnerPortalPurchaseInvoiceHeaderUpdatedAt({
            currentTimestamp: true,
          }),
          new BusinessPartnerPortalPurchaseInvoiceHeaderDeletedAt(null),
        ),
      );
    }
  }
}
