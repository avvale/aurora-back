/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalIPurchaseInvoiceHeaderRepository,
  BusinessPartnerPortalPurchaseInvoiceHeader,
} from '@app/business-partner-portal/purchase-invoice-header';
import {
  BusinessPartnerPortalPurchaseInvoiceHeaderApprovalNotes,
  BusinessPartnerPortalPurchaseInvoiceHeaderBusinessPartnerId,
  BusinessPartnerPortalPurchaseInvoiceHeaderCreatedAt,
  BusinessPartnerPortalPurchaseInvoiceHeaderCurrencyCode,
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
  BusinessPartnerPortalPurchaseInvoiceHeaderStatus,
  BusinessPartnerPortalPurchaseInvoiceHeaderSubtotal,
  BusinessPartnerPortalPurchaseInvoiceHeaderSupplierInvoiceNumber,
  BusinessPartnerPortalPurchaseInvoiceHeaderTaxAmount,
  BusinessPartnerPortalPurchaseInvoiceHeaderTotalAmount,
  BusinessPartnerPortalPurchaseInvoiceHeaderUpdatedAt,
} from '@app/business-partner-portal/purchase-invoice-header/domain/value-objects';
import { CQMetadata } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class BusinessPartnerPortalCreatePurchaseInvoiceHeaderService {
  constructor(
    private readonly publisher: EventPublisher,
    private readonly repository: BusinessPartnerPortalIPurchaseInvoiceHeaderRepository,
  ) {}

  async main(
    payload: {
      id: BusinessPartnerPortalPurchaseInvoiceHeaderId;
      invoiceNumber: BusinessPartnerPortalPurchaseInvoiceHeaderInvoiceNumber;
      supplierInvoiceNumber: BusinessPartnerPortalPurchaseInvoiceHeaderSupplierInvoiceNumber;
      externalId: BusinessPartnerPortalPurchaseInvoiceHeaderExternalId;
      externalSystemCode: BusinessPartnerPortalPurchaseInvoiceHeaderExternalSystemCode;
      businessPartnerId: BusinessPartnerPortalPurchaseInvoiceHeaderBusinessPartnerId;
      invoiceDate: BusinessPartnerPortalPurchaseInvoiceHeaderInvoiceDate;
      receivedDate: BusinessPartnerPortalPurchaseInvoiceHeaderReceivedDate;
      dueDate: BusinessPartnerPortalPurchaseInvoiceHeaderDueDate;
      status: BusinessPartnerPortalPurchaseInvoiceHeaderStatus;
      subtotal: BusinessPartnerPortalPurchaseInvoiceHeaderSubtotal;
      taxAmount: BusinessPartnerPortalPurchaseInvoiceHeaderTaxAmount;
      discountAmount: BusinessPartnerPortalPurchaseInvoiceHeaderDiscountAmount;
      totalAmount: BusinessPartnerPortalPurchaseInvoiceHeaderTotalAmount;
      paidAmount: BusinessPartnerPortalPurchaseInvoiceHeaderPaidAmount;
      currencyCode: BusinessPartnerPortalPurchaseInvoiceHeaderCurrencyCode;
      paymentTermDays: BusinessPartnerPortalPurchaseInvoiceHeaderPaymentTermDays;
      notes: BusinessPartnerPortalPurchaseInvoiceHeaderNotes;
      approvalNotes: BusinessPartnerPortalPurchaseInvoiceHeaderApprovalNotes;
    },
    cQMetadata?: CQMetadata,
  ): Promise<void> {
    // create aggregate with factory pattern
    const purchaseInvoiceHeader =
      BusinessPartnerPortalPurchaseInvoiceHeader.register(
        payload.id,
        undefined, // rowId
        payload.invoiceNumber,
        payload.supplierInvoiceNumber,
        payload.externalId,
        payload.externalSystemCode,
        payload.businessPartnerId,
        payload.invoiceDate,
        payload.receivedDate,
        payload.dueDate,
        payload.status,
        payload.subtotal,
        payload.taxAmount,
        payload.discountAmount,
        payload.totalAmount,
        payload.paidAmount,
        payload.currencyCode,
        payload.paymentTermDays,
        payload.notes,
        payload.approvalNotes,
        new BusinessPartnerPortalPurchaseInvoiceHeaderCreatedAt({
          currentTimestamp: true,
        }),
        new BusinessPartnerPortalPurchaseInvoiceHeaderUpdatedAt({
          currentTimestamp: true,
        }),
        null, // deletedAt
      );

    await this.repository.create(purchaseInvoiceHeader, {
      createOptions: cQMetadata?.repositoryOptions,
    });

    // merge EventBus methods with object returned by the repository, to be able to apply and commit events
    const purchaseInvoiceHeaderRegister = this.publisher.mergeObjectContext(
      purchaseInvoiceHeader,
    );

    purchaseInvoiceHeaderRegister.created({
      payload: purchaseInvoiceHeader,
      cQMetadata,
    }); // apply event to model events
    purchaseInvoiceHeaderRegister.commit(); // commit all events of model
  }
}
