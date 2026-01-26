/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import {
  businessPartnerPortalMockPurchaseInvoicePositionData,
  BusinessPartnerPortalPurchaseInvoicePosition,
} from '@app/business-partner-portal/purchase-invoice-position';
import {
  BusinessPartnerPortalPurchaseInvoicePositionCreatedAt,
  BusinessPartnerPortalPurchaseInvoicePositionDeletedAt,
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
  BusinessPartnerPortalPurchaseInvoicePositionRowId,
  BusinessPartnerPortalPurchaseInvoicePositionSubtotal,
  BusinessPartnerPortalPurchaseInvoicePositionTaxAmount,
  BusinessPartnerPortalPurchaseInvoicePositionTaxPercent,
  BusinessPartnerPortalPurchaseInvoicePositionUnitPrice,
  BusinessPartnerPortalPurchaseInvoicePositionUpdatedAt,
} from '@app/business-partner-portal/purchase-invoice-position/domain/value-objects';
import { MockSeeder } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';

@Injectable()
export class BusinessPartnerPortalMockPurchaseInvoicePositionSeeder extends MockSeeder<BusinessPartnerPortalPurchaseInvoicePosition> {
  public collectionSource: BusinessPartnerPortalPurchaseInvoicePosition[];

  constructor() {
    super();
    this._createMock();
  }

  private _createMock(): void {
    this.collectionSource = [];

    for (const purchaseInvoicePosition of _.orderBy(
      businessPartnerPortalMockPurchaseInvoicePositionData,
      ['id'],
    )) {
      this.collectionSource.push(
        BusinessPartnerPortalPurchaseInvoicePosition.register(
          new BusinessPartnerPortalPurchaseInvoicePositionId(
            purchaseInvoicePosition.id,
          ),
          new BusinessPartnerPortalPurchaseInvoicePositionRowId(
            purchaseInvoicePosition.rowId,
          ),
          new BusinessPartnerPortalPurchaseInvoicePositionPurchaseInvoiceHeaderId(
            purchaseInvoicePosition.purchaseInvoiceHeaderId,
          ),
          new BusinessPartnerPortalPurchaseInvoicePositionPositionNumber(
            purchaseInvoicePosition.positionNumber,
          ),
          new BusinessPartnerPortalPurchaseInvoicePositionDescription(
            purchaseInvoicePosition.description,
          ),
          new BusinessPartnerPortalPurchaseInvoicePositionProductCode(
            purchaseInvoicePosition.productCode,
          ),
          new BusinessPartnerPortalPurchaseInvoicePositionQuantity(
            purchaseInvoicePosition.quantity,
          ),
          new BusinessPartnerPortalPurchaseInvoicePositionUnitPrice(
            purchaseInvoicePosition.unitPrice,
          ),
          new BusinessPartnerPortalPurchaseInvoicePositionDiscountPercent(
            purchaseInvoicePosition.discountPercent,
          ),
          new BusinessPartnerPortalPurchaseInvoicePositionDiscountAmount(
            purchaseInvoicePosition.discountAmount,
          ),
          new BusinessPartnerPortalPurchaseInvoicePositionTaxPercent(
            purchaseInvoicePosition.taxPercent,
          ),
          new BusinessPartnerPortalPurchaseInvoicePositionTaxAmount(
            purchaseInvoicePosition.taxAmount,
          ),
          new BusinessPartnerPortalPurchaseInvoicePositionSubtotal(
            purchaseInvoicePosition.subtotal,
          ),
          new BusinessPartnerPortalPurchaseInvoicePositionPositionTotal(
            purchaseInvoicePosition.positionTotal,
          ),
          new BusinessPartnerPortalPurchaseInvoicePositionExpenseCategory(
            purchaseInvoicePosition.expenseCategory,
          ),
          new BusinessPartnerPortalPurchaseInvoicePositionNotes(
            purchaseInvoicePosition.notes,
          ),
          new BusinessPartnerPortalPurchaseInvoicePositionCreatedAt({
            currentTimestamp: true,
          }),
          new BusinessPartnerPortalPurchaseInvoicePositionUpdatedAt({
            currentTimestamp: true,
          }),
          new BusinessPartnerPortalPurchaseInvoicePositionDeletedAt(null),
        ),
      );
    }
  }
}
