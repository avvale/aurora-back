/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import {
  businessPartnerPortalMockPaymentModeData,
  BusinessPartnerPortalPaymentMode,
} from '@app/business-partner-portal/payment-mode';
import {
  BusinessPartnerPortalPaymentModeCode,
  BusinessPartnerPortalPaymentModeCreatedAt,
  BusinessPartnerPortalPaymentModeDeletedAt,
  BusinessPartnerPortalPaymentModeDescription,
  BusinessPartnerPortalPaymentModeExternalId,
  BusinessPartnerPortalPaymentModeId,
  BusinessPartnerPortalPaymentModeIsAccountNumberRequired,
  BusinessPartnerPortalPaymentModeIsActive,
  BusinessPartnerPortalPaymentModeIsRecurringSupported,
  BusinessPartnerPortalPaymentModeIsRoutingInfoRequired,
  BusinessPartnerPortalPaymentModeMeta,
  BusinessPartnerPortalPaymentModeName,
  BusinessPartnerPortalPaymentModeRowId,
  BusinessPartnerPortalPaymentModeSort,
  BusinessPartnerPortalPaymentModeType,
  BusinessPartnerPortalPaymentModeUpdatedAt,
} from '@app/business-partner-portal/payment-mode/domain/value-objects';
import { MockSeeder } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';

@Injectable()
export class BusinessPartnerPortalMockPaymentModeSeeder extends MockSeeder<BusinessPartnerPortalPaymentMode> {
  public collectionSource: BusinessPartnerPortalPaymentMode[];

  constructor() {
    super();
    this._createMock();
  }

  private _createMock(): void {
    this.collectionSource = [];

    for (const paymentMode of _.orderBy(
      businessPartnerPortalMockPaymentModeData,
      ['id'],
    )) {
      this.collectionSource.push(
        BusinessPartnerPortalPaymentMode.register(
          new BusinessPartnerPortalPaymentModeId(paymentMode.id),
          new BusinessPartnerPortalPaymentModeRowId(paymentMode.rowId),
          new BusinessPartnerPortalPaymentModeExternalId(
            paymentMode.externalId,
          ),
          new BusinessPartnerPortalPaymentModeCode(paymentMode.code),
          new BusinessPartnerPortalPaymentModeName(paymentMode.name),
          new BusinessPartnerPortalPaymentModeDescription(
            paymentMode.description,
          ),
          new BusinessPartnerPortalPaymentModeType(paymentMode.type),
          new BusinessPartnerPortalPaymentModeIsAccountNumberRequired(
            paymentMode.isAccountNumberRequired,
          ),
          new BusinessPartnerPortalPaymentModeIsRoutingInfoRequired(
            paymentMode.isRoutingInfoRequired,
          ),
          new BusinessPartnerPortalPaymentModeIsRecurringSupported(
            paymentMode.isRecurringSupported,
          ),
          new BusinessPartnerPortalPaymentModeSort(paymentMode.sort),
          new BusinessPartnerPortalPaymentModeIsActive(paymentMode.isActive),
          new BusinessPartnerPortalPaymentModeMeta(paymentMode.meta),
          new BusinessPartnerPortalPaymentModeCreatedAt({
            currentTimestamp: true,
          }),
          new BusinessPartnerPortalPaymentModeUpdatedAt({
            currentTimestamp: true,
          }),
          new BusinessPartnerPortalPaymentModeDeletedAt(null),
        ),
      );
    }
  }
}
