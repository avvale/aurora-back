/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalISalesInvoicePositionRepository,
  businessPartnerPortalMockSalesInvoicePositionData,
  BusinessPartnerPortalSalesInvoicePosition,
} from '@app/business-partner-portal/sales-invoice-position';
import {
  BusinessPartnerPortalSalesInvoicePositionCreatedAt,
  BusinessPartnerPortalSalesInvoicePositionDeletedAt,
  BusinessPartnerPortalSalesInvoicePositionDescription,
  BusinessPartnerPortalSalesInvoicePositionDiscountAmount,
  BusinessPartnerPortalSalesInvoicePositionDiscountPercent,
  BusinessPartnerPortalSalesInvoicePositionId,
  BusinessPartnerPortalSalesInvoicePositionNotes,
  BusinessPartnerPortalSalesInvoicePositionPositionNumber,
  BusinessPartnerPortalSalesInvoicePositionPositionTotal,
  BusinessPartnerPortalSalesInvoicePositionProductCode,
  BusinessPartnerPortalSalesInvoicePositionQuantity,
  BusinessPartnerPortalSalesInvoicePositionRowId,
  BusinessPartnerPortalSalesInvoicePositionSalesInvoiceHeaderId,
  BusinessPartnerPortalSalesInvoicePositionSubtotal,
  BusinessPartnerPortalSalesInvoicePositionTaxAmount,
  BusinessPartnerPortalSalesInvoicePositionTaxPercent,
  BusinessPartnerPortalSalesInvoicePositionUnitPrice,
  BusinessPartnerPortalSalesInvoicePositionUpdatedAt,
} from '@app/business-partner-portal/sales-invoice-position/domain/value-objects';
import { MockRepository, Utils } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalMockSalesInvoicePositionRepository
  extends MockRepository<BusinessPartnerPortalSalesInvoicePosition>
  implements BusinessPartnerPortalISalesInvoicePositionRepository
{
  public readonly repository: any;
  public readonly aggregateName: string =
    'BusinessPartnerPortalSalesInvoicePosition';
  public collectionSource: BusinessPartnerPortalSalesInvoicePosition[];

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
      businessPartnerPortalMockSalesInvoicePositionData
    )) {
      itemCollection['createdAt'] = now;
      itemCollection['updatedAt'] = now;
      itemCollection['deletedAt'] = null;

      this.collectionSource.push(
        BusinessPartnerPortalSalesInvoicePosition.register(
          new BusinessPartnerPortalSalesInvoicePositionId(itemCollection.id),
          new BusinessPartnerPortalSalesInvoicePositionRowId(
            itemCollection.rowId,
          ),
          new BusinessPartnerPortalSalesInvoicePositionSalesInvoiceHeaderId(
            itemCollection.salesInvoiceHeaderId,
          ),
          new BusinessPartnerPortalSalesInvoicePositionPositionNumber(
            itemCollection.positionNumber,
          ),
          new BusinessPartnerPortalSalesInvoicePositionDescription(
            itemCollection.description,
          ),
          new BusinessPartnerPortalSalesInvoicePositionProductCode(
            itemCollection.productCode,
          ),
          new BusinessPartnerPortalSalesInvoicePositionQuantity(
            itemCollection.quantity,
          ),
          new BusinessPartnerPortalSalesInvoicePositionUnitPrice(
            itemCollection.unitPrice,
          ),
          new BusinessPartnerPortalSalesInvoicePositionDiscountPercent(
            itemCollection.discountPercent,
          ),
          new BusinessPartnerPortalSalesInvoicePositionDiscountAmount(
            itemCollection.discountAmount,
          ),
          new BusinessPartnerPortalSalesInvoicePositionTaxPercent(
            itemCollection.taxPercent,
          ),
          new BusinessPartnerPortalSalesInvoicePositionTaxAmount(
            itemCollection.taxAmount,
          ),
          new BusinessPartnerPortalSalesInvoicePositionSubtotal(
            itemCollection.subtotal,
          ),
          new BusinessPartnerPortalSalesInvoicePositionPositionTotal(
            itemCollection.positionTotal,
          ),
          new BusinessPartnerPortalSalesInvoicePositionNotes(
            itemCollection.notes,
          ),
          new BusinessPartnerPortalSalesInvoicePositionCreatedAt(
            itemCollection.createdAt,
          ),
          new BusinessPartnerPortalSalesInvoicePositionUpdatedAt(
            itemCollection.updatedAt,
          ),
          new BusinessPartnerPortalSalesInvoicePositionDeletedAt(
            itemCollection.deletedAt,
          ),
        ),
      );
    }
  }
}
