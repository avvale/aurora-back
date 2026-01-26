/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalIPurchaseInvoiceHeaderRepository,
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
import { MockRepository, Utils } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalMockPurchaseInvoiceHeaderRepository
  extends MockRepository<BusinessPartnerPortalPurchaseInvoiceHeader>
  implements BusinessPartnerPortalIPurchaseInvoiceHeaderRepository
{
  public readonly repository: any;
  public readonly aggregateName: string =
    'BusinessPartnerPortalPurchaseInvoiceHeader';
  public collectionSource: BusinessPartnerPortalPurchaseInvoiceHeader[];

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
      businessPartnerPortalMockPurchaseInvoiceHeaderData
    )) {
      itemCollection['createdAt'] = now;
      itemCollection['updatedAt'] = now;
      itemCollection['deletedAt'] = null;

      this.collectionSource.push(
        BusinessPartnerPortalPurchaseInvoiceHeader.register(
          new BusinessPartnerPortalPurchaseInvoiceHeaderId(itemCollection.id),
          new BusinessPartnerPortalPurchaseInvoiceHeaderRowId(
            itemCollection.rowId,
          ),
          new BusinessPartnerPortalPurchaseInvoiceHeaderInvoiceNumber(
            itemCollection.invoiceNumber,
          ),
          new BusinessPartnerPortalPurchaseInvoiceHeaderSupplierInvoiceNumber(
            itemCollection.supplierInvoiceNumber,
          ),
          new BusinessPartnerPortalPurchaseInvoiceHeaderExternalId(
            itemCollection.externalId,
          ),
          new BusinessPartnerPortalPurchaseInvoiceHeaderExternalSystemCode(
            itemCollection.externalSystemCode,
          ),
          new BusinessPartnerPortalPurchaseInvoiceHeaderBusinessPartnerId(
            itemCollection.businessPartnerId,
          ),
          new BusinessPartnerPortalPurchaseInvoiceHeaderInvoiceDate(
            itemCollection.invoiceDate,
          ),
          new BusinessPartnerPortalPurchaseInvoiceHeaderReceivedDate(
            itemCollection.receivedDate,
          ),
          new BusinessPartnerPortalPurchaseInvoiceHeaderDueDate(
            itemCollection.dueDate,
          ),
          new BusinessPartnerPortalPurchaseInvoiceHeaderStatus(
            itemCollection.status,
          ),
          new BusinessPartnerPortalPurchaseInvoiceHeaderSubtotal(
            itemCollection.subtotal,
          ),
          new BusinessPartnerPortalPurchaseInvoiceHeaderTaxAmount(
            itemCollection.taxAmount,
          ),
          new BusinessPartnerPortalPurchaseInvoiceHeaderDiscountAmount(
            itemCollection.discountAmount,
          ),
          new BusinessPartnerPortalPurchaseInvoiceHeaderTotalAmount(
            itemCollection.totalAmount,
          ),
          new BusinessPartnerPortalPurchaseInvoiceHeaderPaidAmount(
            itemCollection.paidAmount,
          ),
          new BusinessPartnerPortalPurchaseInvoiceHeaderCurrencyCode(
            itemCollection.currencyCode,
          ),
          new BusinessPartnerPortalPurchaseInvoiceHeaderPaymentTermDays(
            itemCollection.paymentTermDays,
          ),
          new BusinessPartnerPortalPurchaseInvoiceHeaderNotes(
            itemCollection.notes,
          ),
          new BusinessPartnerPortalPurchaseInvoiceHeaderApprovalNotes(
            itemCollection.approvalNotes,
          ),
          new BusinessPartnerPortalPurchaseInvoiceHeaderCreatedAt(
            itemCollection.createdAt,
          ),
          new BusinessPartnerPortalPurchaseInvoiceHeaderUpdatedAt(
            itemCollection.updatedAt,
          ),
          new BusinessPartnerPortalPurchaseInvoiceHeaderDeletedAt(
            itemCollection.deletedAt,
          ),
        ),
      );
    }
  }
}
