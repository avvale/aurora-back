/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import { BusinessPartnerPortalBusinessPartnerMapper } from '@app/business-partner-portal/business-partner';
import {
  BusinessPartnerPortalPartnerAddress,
  BusinessPartnerPortalPartnerAddressResponse,
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
import { CommonAdministrativeAreaLevel1Mapper } from '@app/common/administrative-area-level-1';
import { CommonAdministrativeAreaLevel2Mapper } from '@app/common/administrative-area-level-2';
import { CommonAdministrativeAreaLevel3Mapper } from '@app/common/administrative-area-level-3';
import { CommonCountryMapper } from '@app/common/country';
import {
  CQMetadata,
  IMapper,
  LiteralObject,
  MapperOptions,
} from '@aurorajs.dev/core';

export class BusinessPartnerPortalPartnerAddressMapper implements IMapper {
  constructor(public options: MapperOptions = { eagerLoading: true }) {}

  /**
   * Map object to aggregate
   * @param partnerAddress
   */
  mapModelToAggregate(
    partnerAddress: LiteralObject,
    cQMetadata?: CQMetadata,
  ): BusinessPartnerPortalPartnerAddress {
    if (!partnerAddress) return;

    return this.makeAggregate(partnerAddress, cQMetadata);
  }

  /**
   * Map array of objects to array aggregates
   * @param partnerAddresses
   */
  mapModelsToAggregates(
    partnerAddresses: LiteralObject[],
    cQMetadata?: CQMetadata,
  ): BusinessPartnerPortalPartnerAddress[] {
    if (!Array.isArray(partnerAddresses)) return;

    return partnerAddresses.map((partnerAddress) =>
      this.makeAggregate(partnerAddress, cQMetadata),
    );
  }

  /**
   * Map aggregate to response
   * @param partnerAddress
   */
  mapAggregateToResponse(
    partnerAddress: BusinessPartnerPortalPartnerAddress,
  ): BusinessPartnerPortalPartnerAddressResponse {
    return this.makeResponse(partnerAddress);
  }

  /**
   * Map array of aggregates to array responses
   * @param partnerAddresses
   */
  mapAggregatesToResponses(
    partnerAddresses: BusinessPartnerPortalPartnerAddress[],
  ): BusinessPartnerPortalPartnerAddressResponse[] {
    if (!Array.isArray(partnerAddresses)) return;

    return partnerAddresses.map((partnerAddress) =>
      this.makeResponse(partnerAddress),
    );
  }

  private makeAggregate(
    partnerAddress: LiteralObject,
    cQMetadata?: CQMetadata,
  ): BusinessPartnerPortalPartnerAddress {
    return BusinessPartnerPortalPartnerAddress.register(
      new BusinessPartnerPortalPartnerAddressId(partnerAddress.id, {
        undefinable: true,
      }),
      new BusinessPartnerPortalPartnerAddressRowId(partnerAddress.rowId, {
        undefinable: true,
      }),
      new BusinessPartnerPortalPartnerAddressBusinessPartnerId(
        partnerAddress.businessPartnerId,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPartnerAddressType(partnerAddress.type, {
        undefinable: true,
      }),
      new BusinessPartnerPortalPartnerAddressLabel(partnerAddress.label, {
        undefinable: true,
      }),
      new BusinessPartnerPortalPartnerAddressAddressLine1(
        partnerAddress.addressLine1,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPartnerAddressAddressLine2(
        partnerAddress.addressLine2,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPartnerAddressCity(partnerAddress.city, {
        undefinable: true,
      }),
      new BusinessPartnerPortalPartnerAddressPostalCode(
        partnerAddress.postalCode,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPartnerAddressCountryId(
        partnerAddress.countryId,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPartnerAddressAdministrativeAreaLevel1Id(
        partnerAddress.administrativeAreaLevel1Id,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPartnerAddressAdministrativeAreaLevel2Id(
        partnerAddress.administrativeAreaLevel2Id,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPartnerAddressAdministrativeAreaLevel3Id(
        partnerAddress.administrativeAreaLevel3Id,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPartnerAddressLatitude(partnerAddress.latitude, {
        undefinable: true,
      }),
      new BusinessPartnerPortalPartnerAddressLongitude(
        partnerAddress.longitude,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPartnerAddressIsPrimary(
        partnerAddress.isPrimary,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPartnerAddressIsActive(partnerAddress.isActive, {
        undefinable: true,
      }),
      new BusinessPartnerPortalPartnerAddressNotes(partnerAddress.notes, {
        undefinable: true,
      }),
      new BusinessPartnerPortalPartnerAddressCreatedAt(
        partnerAddress.createdAt,
        { undefinable: true },
        { addTimezone: cQMetadata?.timezone },
      ),
      new BusinessPartnerPortalPartnerAddressUpdatedAt(
        partnerAddress.updatedAt,
        { undefinable: true },
        { addTimezone: cQMetadata?.timezone },
      ),
      new BusinessPartnerPortalPartnerAddressDeletedAt(
        partnerAddress.deletedAt,
        { undefinable: true },
        { addTimezone: cQMetadata?.timezone },
      ),
      this.options.eagerLoading
        ? new BusinessPartnerPortalBusinessPartnerMapper({
            eagerLoading: true,
          }).mapModelToAggregate(partnerAddress.businessPartner, cQMetadata)
        : undefined,
      this.options.eagerLoading
        ? new CommonCountryMapper({ eagerLoading: true }).mapModelToAggregate(
            partnerAddress.country,
            cQMetadata,
          )
        : undefined,
      this.options.eagerLoading
        ? new CommonAdministrativeAreaLevel1Mapper({
            eagerLoading: true,
          }).mapModelToAggregate(
            partnerAddress.administrativeAreaLevel1,
            cQMetadata,
          )
        : undefined,
      this.options.eagerLoading
        ? new CommonAdministrativeAreaLevel2Mapper({
            eagerLoading: true,
          }).mapModelToAggregate(
            partnerAddress.administrativeAreaLevel2,
            cQMetadata,
          )
        : undefined,
      this.options.eagerLoading
        ? new CommonAdministrativeAreaLevel3Mapper({
            eagerLoading: true,
          }).mapModelToAggregate(
            partnerAddress.administrativeAreaLevel3,
            cQMetadata,
          )
        : undefined,
    );
  }

  private makeResponse(
    partnerAddress: BusinessPartnerPortalPartnerAddress,
  ): BusinessPartnerPortalPartnerAddressResponse {
    if (!partnerAddress) return null;

    return new BusinessPartnerPortalPartnerAddressResponse(
      partnerAddress.id.value,
      partnerAddress.rowId.value,
      partnerAddress.businessPartnerId.value,
      partnerAddress.type.value,
      partnerAddress.label.value,
      partnerAddress.addressLine1.value,
      partnerAddress.addressLine2.value,
      partnerAddress.city.value,
      partnerAddress.postalCode.value,
      partnerAddress.countryId.value,
      partnerAddress.administrativeAreaLevel1Id.value,
      partnerAddress.administrativeAreaLevel2Id.value,
      partnerAddress.administrativeAreaLevel3Id.value,
      partnerAddress.latitude.value,
      partnerAddress.longitude.value,
      partnerAddress.isPrimary.value,
      partnerAddress.isActive.value,
      partnerAddress.notes.value,
      partnerAddress.createdAt.value,
      partnerAddress.updatedAt.value,
      partnerAddress.deletedAt.value,
      this.options.eagerLoading
        ? new BusinessPartnerPortalBusinessPartnerMapper({
            eagerLoading: true,
          }).mapAggregateToResponse(partnerAddress.businessPartner)
        : undefined,
      this.options.eagerLoading
        ? new CommonCountryMapper({
            eagerLoading: true,
          }).mapAggregateToResponse(partnerAddress.country)
        : undefined,
      this.options.eagerLoading
        ? new CommonAdministrativeAreaLevel1Mapper({
            eagerLoading: true,
          }).mapAggregateToResponse(partnerAddress.administrativeAreaLevel1)
        : undefined,
      this.options.eagerLoading
        ? new CommonAdministrativeAreaLevel2Mapper({
            eagerLoading: true,
          }).mapAggregateToResponse(partnerAddress.administrativeAreaLevel2)
        : undefined,
      this.options.eagerLoading
        ? new CommonAdministrativeAreaLevel3Mapper({
            eagerLoading: true,
          }).mapAggregateToResponse(partnerAddress.administrativeAreaLevel3)
        : undefined,
    );
  }
}
