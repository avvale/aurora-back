/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import {
  BusinessPartnerPortalIPartnerAddressRepository,
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
import { MockRepository, Utils } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalMockPartnerAddressRepository
  extends MockRepository<BusinessPartnerPortalPartnerAddress>
  implements BusinessPartnerPortalIPartnerAddressRepository
{
  public readonly repository: any;
  public readonly aggregateName: string = 'BusinessPartnerPortalPartnerAddress';
  public collectionSource: BusinessPartnerPortalPartnerAddress[];

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
      businessPartnerPortalMockPartnerAddressData
    )) {
      itemCollection['createdAt'] = now;
      itemCollection['updatedAt'] = now;
      itemCollection['deletedAt'] = null;

      this.collectionSource.push(
        BusinessPartnerPortalPartnerAddress.register(
          new BusinessPartnerPortalPartnerAddressId(itemCollection.id),
          new BusinessPartnerPortalPartnerAddressRowId(itemCollection.rowId),
          new BusinessPartnerPortalPartnerAddressBusinessPartnerId(
            itemCollection.businessPartnerId,
          ),
          new BusinessPartnerPortalPartnerAddressType(itemCollection.type),
          new BusinessPartnerPortalPartnerAddressLabel(itemCollection.label),
          new BusinessPartnerPortalPartnerAddressAddressLine1(
            itemCollection.addressLine1,
          ),
          new BusinessPartnerPortalPartnerAddressAddressLine2(
            itemCollection.addressLine2,
          ),
          new BusinessPartnerPortalPartnerAddressCity(itemCollection.city),
          new BusinessPartnerPortalPartnerAddressPostalCode(
            itemCollection.postalCode,
          ),
          new BusinessPartnerPortalPartnerAddressCountryId(
            itemCollection.countryId,
          ),
          new BusinessPartnerPortalPartnerAddressAdministrativeAreaLevel1Id(
            itemCollection.administrativeAreaLevel1Id,
          ),
          new BusinessPartnerPortalPartnerAddressAdministrativeAreaLevel2Id(
            itemCollection.administrativeAreaLevel2Id,
          ),
          new BusinessPartnerPortalPartnerAddressAdministrativeAreaLevel3Id(
            itemCollection.administrativeAreaLevel3Id,
          ),
          new BusinessPartnerPortalPartnerAddressLatitude(
            itemCollection.latitude,
          ),
          new BusinessPartnerPortalPartnerAddressLongitude(
            itemCollection.longitude,
          ),
          new BusinessPartnerPortalPartnerAddressIsPrimary(
            itemCollection.isPrimary,
          ),
          new BusinessPartnerPortalPartnerAddressIsActive(
            itemCollection.isActive,
          ),
          new BusinessPartnerPortalPartnerAddressNotes(itemCollection.notes),
          new BusinessPartnerPortalPartnerAddressCreatedAt(
            itemCollection.createdAt,
          ),
          new BusinessPartnerPortalPartnerAddressUpdatedAt(
            itemCollection.updatedAt,
          ),
          new BusinessPartnerPortalPartnerAddressDeletedAt(
            itemCollection.deletedAt,
          ),
        ),
      );
    }
  }
}
