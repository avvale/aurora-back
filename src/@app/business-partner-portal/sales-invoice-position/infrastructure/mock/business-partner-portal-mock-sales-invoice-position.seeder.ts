/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import {
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
import { MockSeeder } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';

@Injectable()
export class BusinessPartnerPortalMockSalesInvoicePositionSeeder extends MockSeeder<BusinessPartnerPortalSalesInvoicePosition> {
  public collectionSource: BusinessPartnerPortalSalesInvoicePosition[];

  constructor() {
    super();
    this._createMock();
  }

  private _createMock(): void {
    this.collectionSource = [];

    for (const salesInvoicePosition of _.orderBy(
      businessPartnerPortalMockSalesInvoicePositionData,
      ['id'],
    )) {
      this.collectionSource.push(
        BusinessPartnerPortalSalesInvoicePosition.register(
          new BusinessPartnerPortalSalesInvoicePositionId(
            salesInvoicePosition.id,
          ),
          new BusinessPartnerPortalSalesInvoicePositionRowId(
            salesInvoicePosition.rowId,
          ),
          new BusinessPartnerPortalSalesInvoicePositionSalesInvoiceHeaderId(
            salesInvoicePosition.salesInvoiceHeaderId,
          ),
          new BusinessPartnerPortalSalesInvoicePositionPositionNumber(
            salesInvoicePosition.positionNumber,
          ),
          new BusinessPartnerPortalSalesInvoicePositionDescription(
            salesInvoicePosition.description,
          ),
          new BusinessPartnerPortalSalesInvoicePositionProductCode(
            salesInvoicePosition.productCode,
          ),
          new BusinessPartnerPortalSalesInvoicePositionQuantity(
            salesInvoicePosition.quantity,
          ),
          new BusinessPartnerPortalSalesInvoicePositionUnitPrice(
            salesInvoicePosition.unitPrice,
          ),
          new BusinessPartnerPortalSalesInvoicePositionDiscountPercent(
            salesInvoicePosition.discountPercent,
          ),
          new BusinessPartnerPortalSalesInvoicePositionDiscountAmount(
            salesInvoicePosition.discountAmount,
          ),
          new BusinessPartnerPortalSalesInvoicePositionTaxPercent(
            salesInvoicePosition.taxPercent,
          ),
          new BusinessPartnerPortalSalesInvoicePositionTaxAmount(
            salesInvoicePosition.taxAmount,
          ),
          new BusinessPartnerPortalSalesInvoicePositionSubtotal(
            salesInvoicePosition.subtotal,
          ),
          new BusinessPartnerPortalSalesInvoicePositionPositionTotal(
            salesInvoicePosition.positionTotal,
          ),
          new BusinessPartnerPortalSalesInvoicePositionNotes(
            salesInvoicePosition.notes,
          ),
          new BusinessPartnerPortalSalesInvoicePositionCreatedAt({
            currentTimestamp: true,
          }),
          new BusinessPartnerPortalSalesInvoicePositionUpdatedAt({
            currentTimestamp: true,
          }),
          new BusinessPartnerPortalSalesInvoicePositionDeletedAt(null),
        ),
      );
    }
  }
}
