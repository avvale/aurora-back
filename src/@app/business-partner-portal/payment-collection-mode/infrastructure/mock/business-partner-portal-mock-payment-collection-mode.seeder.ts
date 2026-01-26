/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import {
  businessPartnerPortalMockPaymentCollectionModeData,
  BusinessPartnerPortalPaymentCollectionMode,
} from '@app/business-partner-portal/payment-collection-mode';
import {
  BusinessPartnerPortalPaymentCollectionModeAccountHolderName,
  BusinessPartnerPortalPaymentCollectionModeAccountNumber,
  BusinessPartnerPortalPaymentCollectionModeBankName,
  BusinessPartnerPortalPaymentCollectionModeBusinessPartnerId,
  BusinessPartnerPortalPaymentCollectionModeCreatedAt,
  BusinessPartnerPortalPaymentCollectionModeCurrencyCode,
  BusinessPartnerPortalPaymentCollectionModeDeletedAt,
  BusinessPartnerPortalPaymentCollectionModeExpirationDate,
  BusinessPartnerPortalPaymentCollectionModeIban,
  BusinessPartnerPortalPaymentCollectionModeId,
  BusinessPartnerPortalPaymentCollectionModeIsActive,
  BusinessPartnerPortalPaymentCollectionModeIsPrimary,
  BusinessPartnerPortalPaymentCollectionModeLabel,
  BusinessPartnerPortalPaymentCollectionModeLastUsedAt,
  BusinessPartnerPortalPaymentCollectionModeNotes,
  BusinessPartnerPortalPaymentCollectionModePaymentModeId,
  BusinessPartnerPortalPaymentCollectionModeRoutingNumber,
  BusinessPartnerPortalPaymentCollectionModeRowId,
  BusinessPartnerPortalPaymentCollectionModeSwiftCode,
  BusinessPartnerPortalPaymentCollectionModeUpdatedAt,
} from '@app/business-partner-portal/payment-collection-mode/domain/value-objects';
import { MockSeeder } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';

@Injectable()
export class BusinessPartnerPortalMockPaymentCollectionModeSeeder extends MockSeeder<BusinessPartnerPortalPaymentCollectionMode> {
  public collectionSource: BusinessPartnerPortalPaymentCollectionMode[];

  constructor() {
    super();
    this._createMock();
  }

  private _createMock(): void {
    this.collectionSource = [];

    for (const paymentCollectionMode of _.orderBy(
      businessPartnerPortalMockPaymentCollectionModeData,
      ['id'],
    )) {
      this.collectionSource.push(
        BusinessPartnerPortalPaymentCollectionMode.register(
          new BusinessPartnerPortalPaymentCollectionModeId(
            paymentCollectionMode.id,
          ),
          new BusinessPartnerPortalPaymentCollectionModeRowId(
            paymentCollectionMode.rowId,
          ),
          new BusinessPartnerPortalPaymentCollectionModeBusinessPartnerId(
            paymentCollectionMode.businessPartnerId,
          ),
          new BusinessPartnerPortalPaymentCollectionModePaymentModeId(
            paymentCollectionMode.paymentModeId,
          ),
          new BusinessPartnerPortalPaymentCollectionModeLabel(
            paymentCollectionMode.label,
          ),
          new BusinessPartnerPortalPaymentCollectionModeAccountNumber(
            paymentCollectionMode.accountNumber,
          ),
          new BusinessPartnerPortalPaymentCollectionModeAccountHolderName(
            paymentCollectionMode.accountHolderName,
          ),
          new BusinessPartnerPortalPaymentCollectionModeBankName(
            paymentCollectionMode.bankName,
          ),
          new BusinessPartnerPortalPaymentCollectionModeRoutingNumber(
            paymentCollectionMode.routingNumber,
          ),
          new BusinessPartnerPortalPaymentCollectionModeIban(
            paymentCollectionMode.iban,
          ),
          new BusinessPartnerPortalPaymentCollectionModeSwiftCode(
            paymentCollectionMode.swiftCode,
          ),
          new BusinessPartnerPortalPaymentCollectionModeCurrencyCode(
            paymentCollectionMode.currencyCode,
          ),
          new BusinessPartnerPortalPaymentCollectionModeExpirationDate(
            paymentCollectionMode.expirationDate,
          ),
          new BusinessPartnerPortalPaymentCollectionModeIsPrimary(
            paymentCollectionMode.isPrimary,
          ),
          new BusinessPartnerPortalPaymentCollectionModeIsActive(
            paymentCollectionMode.isActive,
          ),
          new BusinessPartnerPortalPaymentCollectionModeNotes(
            paymentCollectionMode.notes,
          ),
          new BusinessPartnerPortalPaymentCollectionModeLastUsedAt(
            paymentCollectionMode.lastUsedAt,
          ),
          new BusinessPartnerPortalPaymentCollectionModeCreatedAt({
            currentTimestamp: true,
          }),
          new BusinessPartnerPortalPaymentCollectionModeUpdatedAt({
            currentTimestamp: true,
          }),
          new BusinessPartnerPortalPaymentCollectionModeDeletedAt(null),
        ),
      );
    }
  }
}
