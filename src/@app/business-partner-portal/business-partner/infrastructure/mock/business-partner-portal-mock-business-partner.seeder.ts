/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import {
  BusinessPartnerPortalBusinessPartner,
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
import { MockSeeder } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';

@Injectable()
export class BusinessPartnerPortalMockBusinessPartnerSeeder extends MockSeeder<BusinessPartnerPortalBusinessPartner> {
  public collectionSource: BusinessPartnerPortalBusinessPartner[];

  constructor() {
    super();
    this._createMock();
  }

  private _createMock(): void {
    this.collectionSource = [];

    for (const businessPartner of _.orderBy(
      businessPartnerPortalMockBusinessPartnerData,
      ['id'],
    )) {
      this.collectionSource.push(
        BusinessPartnerPortalBusinessPartner.register(
          new BusinessPartnerPortalBusinessPartnerId(businessPartner.id),
          new BusinessPartnerPortalBusinessPartnerRowId(businessPartner.rowId),
          new BusinessPartnerPortalBusinessPartnerExternalId(
            businessPartner.externalId,
          ),
          new BusinessPartnerPortalBusinessPartnerCode(businessPartner.code),
          new BusinessPartnerPortalBusinessPartnerType(businessPartner.type),
          new BusinessPartnerPortalBusinessPartnerName(businessPartner.name),
          new BusinessPartnerPortalBusinessPartnerTin(businessPartner.tin),
          new BusinessPartnerPortalBusinessPartnerEmail(businessPartner.email),
          new BusinessPartnerPortalBusinessPartnerWebsite(
            businessPartner.website,
          ),
          new BusinessPartnerPortalBusinessPartnerPhone(businessPartner.phone),
          new BusinessPartnerPortalBusinessPartnerPhoneCountryPrefix(
            businessPartner.phoneCountryPrefix,
          ),
          new BusinessPartnerPortalBusinessPartnerPhoneSanitized(
            businessPartner.phoneSanitized,
          ),
          new BusinessPartnerPortalBusinessPartnerIsActive(
            businessPartner.isActive,
          ),
          new BusinessPartnerPortalBusinessPartnerMeta(businessPartner.meta),
          new BusinessPartnerPortalBusinessPartnerCreatedAt({
            currentTimestamp: true,
          }),
          new BusinessPartnerPortalBusinessPartnerUpdatedAt({
            currentTimestamp: true,
          }),
          new BusinessPartnerPortalBusinessPartnerDeletedAt(null),
        ),
      );
    }
  }
}
