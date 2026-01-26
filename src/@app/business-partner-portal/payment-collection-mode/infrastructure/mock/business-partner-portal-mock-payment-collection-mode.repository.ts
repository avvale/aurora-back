/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalIPaymentCollectionModeRepository,
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
import { MockRepository, Utils } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalMockPaymentCollectionModeRepository
  extends MockRepository<BusinessPartnerPortalPaymentCollectionMode>
  implements BusinessPartnerPortalIPaymentCollectionModeRepository
{
  public readonly repository: any;
  public readonly aggregateName: string =
    'BusinessPartnerPortalPaymentCollectionMode';
  public collectionSource: BusinessPartnerPortalPaymentCollectionMode[];

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
      businessPartnerPortalMockPaymentCollectionModeData
    )) {
      itemCollection['createdAt'] = now;
      itemCollection['updatedAt'] = now;
      itemCollection['deletedAt'] = null;

      this.collectionSource.push(
        BusinessPartnerPortalPaymentCollectionMode.register(
          new BusinessPartnerPortalPaymentCollectionModeId(itemCollection.id),
          new BusinessPartnerPortalPaymentCollectionModeRowId(
            itemCollection.rowId,
          ),
          new BusinessPartnerPortalPaymentCollectionModeBusinessPartnerId(
            itemCollection.businessPartnerId,
          ),
          new BusinessPartnerPortalPaymentCollectionModePaymentModeId(
            itemCollection.paymentModeId,
          ),
          new BusinessPartnerPortalPaymentCollectionModeLabel(
            itemCollection.label,
          ),
          new BusinessPartnerPortalPaymentCollectionModeAccountNumber(
            itemCollection.accountNumber,
          ),
          new BusinessPartnerPortalPaymentCollectionModeAccountHolderName(
            itemCollection.accountHolderName,
          ),
          new BusinessPartnerPortalPaymentCollectionModeBankName(
            itemCollection.bankName,
          ),
          new BusinessPartnerPortalPaymentCollectionModeRoutingNumber(
            itemCollection.routingNumber,
          ),
          new BusinessPartnerPortalPaymentCollectionModeIban(
            itemCollection.iban,
          ),
          new BusinessPartnerPortalPaymentCollectionModeSwiftCode(
            itemCollection.swiftCode,
          ),
          new BusinessPartnerPortalPaymentCollectionModeCurrencyCode(
            itemCollection.currencyCode,
          ),
          new BusinessPartnerPortalPaymentCollectionModeExpirationDate(
            itemCollection.expirationDate,
          ),
          new BusinessPartnerPortalPaymentCollectionModeIsPrimary(
            itemCollection.isPrimary,
          ),
          new BusinessPartnerPortalPaymentCollectionModeIsActive(
            itemCollection.isActive,
          ),
          new BusinessPartnerPortalPaymentCollectionModeNotes(
            itemCollection.notes,
          ),
          new BusinessPartnerPortalPaymentCollectionModeLastUsedAt(
            itemCollection.lastUsedAt,
          ),
          new BusinessPartnerPortalPaymentCollectionModeCreatedAt(
            itemCollection.createdAt,
          ),
          new BusinessPartnerPortalPaymentCollectionModeUpdatedAt(
            itemCollection.updatedAt,
          ),
          new BusinessPartnerPortalPaymentCollectionModeDeletedAt(
            itemCollection.deletedAt,
          ),
        ),
      );
    }
  }
}
