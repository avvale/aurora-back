/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import {
  BusinessPartnerPortalBusinessPartner,
  BusinessPartnerPortalIBusinessPartnerRepository,
  businessPartnerPortalMockBusinessPartnerData,
} from '@app/business-partner-portal/business-partner';
import {
  BusinessPartnerPortalBusinessPartnerCode,
  BusinessPartnerPortalBusinessPartnerCreatedAt,
  BusinessPartnerPortalBusinessPartnerDeletedAt,
  BusinessPartnerPortalBusinessPartnerEmail,
  BusinessPartnerPortalBusinessPartnerExternalId,
  BusinessPartnerPortalBusinessPartnerId,
  BusinessPartnerPortalBusinessPartnerIsActive,
  BusinessPartnerPortalBusinessPartnerMeta,
  BusinessPartnerPortalBusinessPartnerName,
  BusinessPartnerPortalBusinessPartnerPhone,
  BusinessPartnerPortalBusinessPartnerPhoneCountryPrefix,
  BusinessPartnerPortalBusinessPartnerPhoneSanitized,
  BusinessPartnerPortalBusinessPartnerRowId,
  BusinessPartnerPortalBusinessPartnerTin,
  BusinessPartnerPortalBusinessPartnerType,
  BusinessPartnerPortalBusinessPartnerUpdatedAt,
  BusinessPartnerPortalBusinessPartnerWebsite,
} from '@app/business-partner-portal/business-partner/domain/value-objects';
import { MockRepository, Utils } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalMockBusinessPartnerRepository
  extends MockRepository<BusinessPartnerPortalBusinessPartner>
  implements BusinessPartnerPortalIBusinessPartnerRepository
{
  public readonly repository: any;
  public readonly aggregateName: string =
    'BusinessPartnerPortalBusinessPartner';
  public collectionSource: BusinessPartnerPortalBusinessPartner[];

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
      businessPartnerPortalMockBusinessPartnerData
    )) {
      itemCollection['createdAt'] = now;
      itemCollection['updatedAt'] = now;
      itemCollection['deletedAt'] = null;

      this.collectionSource.push(
        BusinessPartnerPortalBusinessPartner.register(
          new BusinessPartnerPortalBusinessPartnerId(itemCollection.id),
          new BusinessPartnerPortalBusinessPartnerRowId(itemCollection.rowId),
          new BusinessPartnerPortalBusinessPartnerExternalId(
            itemCollection.externalId,
          ),
          new BusinessPartnerPortalBusinessPartnerCode(itemCollection.code),
          new BusinessPartnerPortalBusinessPartnerType(itemCollection.type),
          new BusinessPartnerPortalBusinessPartnerName(itemCollection.name),
          new BusinessPartnerPortalBusinessPartnerTin(itemCollection.tin),
          new BusinessPartnerPortalBusinessPartnerEmail(itemCollection.email),
          new BusinessPartnerPortalBusinessPartnerWebsite(
            itemCollection.website,
          ),
          new BusinessPartnerPortalBusinessPartnerPhone(itemCollection.phone),
          new BusinessPartnerPortalBusinessPartnerPhoneCountryPrefix(
            itemCollection.phoneCountryPrefix,
          ),
          new BusinessPartnerPortalBusinessPartnerPhoneSanitized(
            itemCollection.phoneSanitized,
          ),
          new BusinessPartnerPortalBusinessPartnerIsActive(
            itemCollection.isActive,
          ),
          new BusinessPartnerPortalBusinessPartnerMeta(itemCollection.meta),
          new BusinessPartnerPortalBusinessPartnerCreatedAt(
            itemCollection.createdAt,
          ),
          new BusinessPartnerPortalBusinessPartnerUpdatedAt(
            itemCollection.updatedAt,
          ),
          new BusinessPartnerPortalBusinessPartnerDeletedAt(
            itemCollection.deletedAt,
          ),
        ),
      );
    }
  }
}
