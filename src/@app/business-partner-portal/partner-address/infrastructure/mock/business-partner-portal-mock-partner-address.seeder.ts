/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import {
  businessPartnerPortalMockPartnerAddressData,
  BusinessPartnerPortalPartnerAddress,
} from '@app/business-partner-portal/partner-address';
import {
  BusinessPartnerPortalPartnerAddressAddressLine1,
  BusinessPartnerPortalPartnerAddressAddressLine2,
  BusinessPartnerPortalPartnerAddressAdministrativeAreaLevel1Id,
  BusinessPartnerPortalPartnerAddressAdministrativeAreaLevel2Id,
  BusinessPartnerPortalPartnerAddressAdministrativeAreaLevel3Id,
  BusinessPartnerPortalPartnerAddressBusinessPartnerId,
  BusinessPartnerPortalPartnerAddressCity,
  BusinessPartnerPortalPartnerAddressCountryId,
  BusinessPartnerPortalPartnerAddressCreatedAt,
  BusinessPartnerPortalPartnerAddressDeletedAt,
  BusinessPartnerPortalPartnerAddressId,
  BusinessPartnerPortalPartnerAddressIsActive,
  BusinessPartnerPortalPartnerAddressIsPrimary,
  BusinessPartnerPortalPartnerAddressLabel,
  BusinessPartnerPortalPartnerAddressLatitude,
  BusinessPartnerPortalPartnerAddressLongitude,
  BusinessPartnerPortalPartnerAddressNotes,
  BusinessPartnerPortalPartnerAddressPostalCode,
  BusinessPartnerPortalPartnerAddressRowId,
  BusinessPartnerPortalPartnerAddressType,
  BusinessPartnerPortalPartnerAddressUpdatedAt,
} from '@app/business-partner-portal/partner-address/domain/value-objects';
import { MockSeeder } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';

@Injectable()
export class BusinessPartnerPortalMockPartnerAddressSeeder extends MockSeeder<BusinessPartnerPortalPartnerAddress> {
  public collectionSource: BusinessPartnerPortalPartnerAddress[];

  constructor() {
    super();
    this._createMock();
  }

  private _createMock(): void {
    this.collectionSource = [];

    for (const partnerAddress of _.orderBy(
      businessPartnerPortalMockPartnerAddressData,
      ['id'],
    )) {
      this.collectionSource.push(
        BusinessPartnerPortalPartnerAddress.register(
          new BusinessPartnerPortalPartnerAddressId(partnerAddress.id),
          new BusinessPartnerPortalPartnerAddressRowId(partnerAddress.rowId),
          new BusinessPartnerPortalPartnerAddressBusinessPartnerId(
            partnerAddress.businessPartnerId,
          ),
          new BusinessPartnerPortalPartnerAddressType(partnerAddress.type),
          new BusinessPartnerPortalPartnerAddressLabel(partnerAddress.label),
          new BusinessPartnerPortalPartnerAddressAddressLine1(
            partnerAddress.addressLine1,
          ),
          new BusinessPartnerPortalPartnerAddressAddressLine2(
            partnerAddress.addressLine2,
          ),
          new BusinessPartnerPortalPartnerAddressCity(partnerAddress.city),
          new BusinessPartnerPortalPartnerAddressPostalCode(
            partnerAddress.postalCode,
          ),
          new BusinessPartnerPortalPartnerAddressCountryId(
            partnerAddress.countryId,
          ),
          new BusinessPartnerPortalPartnerAddressAdministrativeAreaLevel1Id(
            partnerAddress.administrativeAreaLevel1Id,
          ),
          new BusinessPartnerPortalPartnerAddressAdministrativeAreaLevel2Id(
            partnerAddress.administrativeAreaLevel2Id,
          ),
          new BusinessPartnerPortalPartnerAddressAdministrativeAreaLevel3Id(
            partnerAddress.administrativeAreaLevel3Id,
          ),
          new BusinessPartnerPortalPartnerAddressLatitude(
            partnerAddress.latitude,
          ),
          new BusinessPartnerPortalPartnerAddressLongitude(
            partnerAddress.longitude,
          ),
          new BusinessPartnerPortalPartnerAddressIsPrimary(
            partnerAddress.isPrimary,
          ),
          new BusinessPartnerPortalPartnerAddressIsActive(
            partnerAddress.isActive,
          ),
          new BusinessPartnerPortalPartnerAddressNotes(partnerAddress.notes),
          new BusinessPartnerPortalPartnerAddressCreatedAt({
            currentTimestamp: true,
          }),
          new BusinessPartnerPortalPartnerAddressUpdatedAt({
            currentTimestamp: true,
          }),
          new BusinessPartnerPortalPartnerAddressDeletedAt(null),
        ),
      );
    }
  }
}
