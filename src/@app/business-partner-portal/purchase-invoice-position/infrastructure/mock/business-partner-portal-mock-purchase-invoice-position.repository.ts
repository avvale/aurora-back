/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalIPurchaseInvoicePositionRepository,
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
import { MockRepository, Utils } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalMockPurchaseInvoicePositionRepository
  extends MockRepository<BusinessPartnerPortalPurchaseInvoicePosition>
  implements BusinessPartnerPortalIPurchaseInvoicePositionRepository
{
  public readonly repository: any;
  public readonly aggregateName: string =
    'BusinessPartnerPortalPurchaseInvoicePosition';
  public collectionSource: BusinessPartnerPortalPurchaseInvoicePosition[];

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
      businessPartnerPortalMockPurchaseInvoicePositionData
    )) {
      itemCollection['createdAt'] = now;
      itemCollection['updatedAt'] = now;
      itemCollection['deletedAt'] = null;

      this.collectionSource.push(
        BusinessPartnerPortalPurchaseInvoicePosition.register(
          new BusinessPartnerPortalPurchaseInvoicePositionId(itemCollection.id),
          new BusinessPartnerPortalPurchaseInvoicePositionRowId(
            itemCollection.rowId,
          ),
          new BusinessPartnerPortalPurchaseInvoicePositionPurchaseInvoiceHeaderId(
            itemCollection.purchaseInvoiceHeaderId,
          ),
          new BusinessPartnerPortalPurchaseInvoicePositionPositionNumber(
            itemCollection.positionNumber,
          ),
          new BusinessPartnerPortalPurchaseInvoicePositionDescription(
            itemCollection.description,
          ),
          new BusinessPartnerPortalPurchaseInvoicePositionProductCode(
            itemCollection.productCode,
          ),
          new BusinessPartnerPortalPurchaseInvoicePositionQuantity(
            itemCollection.quantity,
          ),
          new BusinessPartnerPortalPurchaseInvoicePositionUnitPrice(
            itemCollection.unitPrice,
          ),
          new BusinessPartnerPortalPurchaseInvoicePositionDiscountPercent(
            itemCollection.discountPercent,
          ),
          new BusinessPartnerPortalPurchaseInvoicePositionDiscountAmount(
            itemCollection.discountAmount,
          ),
          new BusinessPartnerPortalPurchaseInvoicePositionTaxPercent(
            itemCollection.taxPercent,
          ),
          new BusinessPartnerPortalPurchaseInvoicePositionTaxAmount(
            itemCollection.taxAmount,
          ),
          new BusinessPartnerPortalPurchaseInvoicePositionSubtotal(
            itemCollection.subtotal,
          ),
          new BusinessPartnerPortalPurchaseInvoicePositionPositionTotal(
            itemCollection.positionTotal,
          ),
          new BusinessPartnerPortalPurchaseInvoicePositionExpenseCategory(
            itemCollection.expenseCategory,
          ),
          new BusinessPartnerPortalPurchaseInvoicePositionNotes(
            itemCollection.notes,
          ),
          new BusinessPartnerPortalPurchaseInvoicePositionCreatedAt(
            itemCollection.createdAt,
          ),
          new BusinessPartnerPortalPurchaseInvoicePositionUpdatedAt(
            itemCollection.updatedAt,
          ),
          new BusinessPartnerPortalPurchaseInvoicePositionDeletedAt(
            itemCollection.deletedAt,
          ),
        ),
      );
    }
  }
}
