/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalIPaymentModeRepository,
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
import { MockRepository, Utils } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalMockPaymentModeRepository
  extends MockRepository<BusinessPartnerPortalPaymentMode>
  implements BusinessPartnerPortalIPaymentModeRepository
{
  public readonly repository: any;
  public readonly aggregateName: string = 'BusinessPartnerPortalPaymentMode';
  public collectionSource: BusinessPartnerPortalPaymentMode[];

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
      businessPartnerPortalMockPaymentModeData
    )) {
      itemCollection['createdAt'] = now;
      itemCollection['updatedAt'] = now;
      itemCollection['deletedAt'] = null;

      this.collectionSource.push(
        BusinessPartnerPortalPaymentMode.register(
          new BusinessPartnerPortalPaymentModeId(itemCollection.id),
          new BusinessPartnerPortalPaymentModeRowId(itemCollection.rowId),
          new BusinessPartnerPortalPaymentModeExternalId(
            itemCollection.externalId,
          ),
          new BusinessPartnerPortalPaymentModeCode(itemCollection.code),
          new BusinessPartnerPortalPaymentModeName(itemCollection.name),
          new BusinessPartnerPortalPaymentModeDescription(
            itemCollection.description,
          ),
          new BusinessPartnerPortalPaymentModeType(itemCollection.type),
          new BusinessPartnerPortalPaymentModeIsAccountNumberRequired(
            itemCollection.isAccountNumberRequired,
          ),
          new BusinessPartnerPortalPaymentModeIsRoutingInfoRequired(
            itemCollection.isRoutingInfoRequired,
          ),
          new BusinessPartnerPortalPaymentModeIsRecurringSupported(
            itemCollection.isRecurringSupported,
          ),
          new BusinessPartnerPortalPaymentModeSort(itemCollection.sort),
          new BusinessPartnerPortalPaymentModeIsActive(itemCollection.isActive),
          new BusinessPartnerPortalPaymentModeMeta(itemCollection.meta),
          new BusinessPartnerPortalPaymentModeCreatedAt(
            itemCollection.createdAt,
          ),
          new BusinessPartnerPortalPaymentModeUpdatedAt(
            itemCollection.updatedAt,
          ),
          new BusinessPartnerPortalPaymentModeDeletedAt(
            itemCollection.deletedAt,
          ),
        ),
      );
    }
  }
}
