/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import {
  BusinessPartnerPortalBusinessPartner,
  BusinessPartnerPortalBusinessPartnerResponse,
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
import { BusinessPartnerPortalPartnerAddressMapper } from '@app/business-partner-portal/partner-address';
import { BusinessPartnerPortalPartnerContactMapper } from '@app/business-partner-portal/partner-contact';
import { BusinessPartnerPortalPaymentCollectionModeMapper } from '@app/business-partner-portal/payment-collection-mode';
import {
  CQMetadata,
  IMapper,
  LiteralObject,
  MapperOptions,
} from '@aurorajs.dev/core';

export class BusinessPartnerPortalBusinessPartnerMapper implements IMapper {
  constructor(public options: MapperOptions = { eagerLoading: true }) {}

  /**
   * Map object to aggregate
   * @param businessPartner
   */
  mapModelToAggregate(
    businessPartner: LiteralObject,
    cQMetadata?: CQMetadata,
  ): BusinessPartnerPortalBusinessPartner {
    if (!businessPartner) return;

    return this.makeAggregate(businessPartner, cQMetadata);
  }

  /**
   * Map array of objects to array aggregates
   * @param businessPartners
   */
  mapModelsToAggregates(
    businessPartners: LiteralObject[],
    cQMetadata?: CQMetadata,
  ): BusinessPartnerPortalBusinessPartner[] {
    if (!Array.isArray(businessPartners)) return;

    return businessPartners.map((businessPartner) =>
      this.makeAggregate(businessPartner, cQMetadata),
    );
  }

  /**
   * Map aggregate to response
   * @param businessPartner
   */
  mapAggregateToResponse(
    businessPartner: BusinessPartnerPortalBusinessPartner,
  ): BusinessPartnerPortalBusinessPartnerResponse {
    return this.makeResponse(businessPartner);
  }

  /**
   * Map array of aggregates to array responses
   * @param businessPartners
   */
  mapAggregatesToResponses(
    businessPartners: BusinessPartnerPortalBusinessPartner[],
  ): BusinessPartnerPortalBusinessPartnerResponse[] {
    if (!Array.isArray(businessPartners)) return;

    return businessPartners.map((businessPartner) =>
      this.makeResponse(businessPartner),
    );
  }

  private makeAggregate(
    businessPartner: LiteralObject,
    cQMetadata?: CQMetadata,
  ): BusinessPartnerPortalBusinessPartner {
    return BusinessPartnerPortalBusinessPartner.register(
      new BusinessPartnerPortalBusinessPartnerId(businessPartner.id, {
        undefinable: true,
      }),
      new BusinessPartnerPortalBusinessPartnerRowId(businessPartner.rowId, {
        undefinable: true,
      }),
      new BusinessPartnerPortalBusinessPartnerExternalId(
        businessPartner.externalId,
        { undefinable: true },
      ),
      new BusinessPartnerPortalBusinessPartnerCode(businessPartner.code, {
        undefinable: true,
      }),
      new BusinessPartnerPortalBusinessPartnerType(businessPartner.type, {
        undefinable: true,
      }),
      new BusinessPartnerPortalBusinessPartnerName(businessPartner.name, {
        undefinable: true,
      }),
      new BusinessPartnerPortalBusinessPartnerTin(businessPartner.tin, {
        undefinable: true,
      }),
      new BusinessPartnerPortalBusinessPartnerEmail(businessPartner.email, {
        undefinable: true,
      }),
      new BusinessPartnerPortalBusinessPartnerWebsite(businessPartner.website, {
        undefinable: true,
      }),
      new BusinessPartnerPortalBusinessPartnerPhone(businessPartner.phone, {
        undefinable: true,
      }),
      new BusinessPartnerPortalBusinessPartnerPhoneCountryPrefix(
        businessPartner.phoneCountryPrefix,
        { undefinable: true },
      ),
      new BusinessPartnerPortalBusinessPartnerPhoneSanitized(
        businessPartner.phoneSanitized,
        { undefinable: true },
      ),
      new BusinessPartnerPortalBusinessPartnerIsActive(
        businessPartner.isActive,
        { undefinable: true },
      ),
      new BusinessPartnerPortalBusinessPartnerMeta(businessPartner.meta, {
        undefinable: true,
      }),
      new BusinessPartnerPortalBusinessPartnerCreatedAt(
        businessPartner.createdAt,
        { undefinable: true },
        { addTimezone: cQMetadata?.timezone },
      ),
      new BusinessPartnerPortalBusinessPartnerUpdatedAt(
        businessPartner.updatedAt,
        { undefinable: true },
        { addTimezone: cQMetadata?.timezone },
      ),
      new BusinessPartnerPortalBusinessPartnerDeletedAt(
        businessPartner.deletedAt,
        { undefinable: true },
        { addTimezone: cQMetadata?.timezone },
      ),
      this.options.eagerLoading
        ? new BusinessPartnerPortalPartnerContactMapper({
            eagerLoading: true,
          }).mapModelsToAggregates(businessPartner.contacts, cQMetadata)
        : undefined,
      this.options.eagerLoading
        ? new BusinessPartnerPortalPartnerAddressMapper({
            eagerLoading: true,
          }).mapModelsToAggregates(businessPartner.addresses, cQMetadata)
        : undefined,
      this.options.eagerLoading
        ? new BusinessPartnerPortalPaymentCollectionModeMapper({
            eagerLoading: true,
          }).mapModelsToAggregates(
            businessPartner.paymentCollectionModes,
            cQMetadata,
          )
        : undefined,
    );
  }

  private makeResponse(
    businessPartner: BusinessPartnerPortalBusinessPartner,
  ): BusinessPartnerPortalBusinessPartnerResponse {
    if (!businessPartner) return null;

    return new BusinessPartnerPortalBusinessPartnerResponse(
      businessPartner.id.value,
      businessPartner.rowId.value,
      businessPartner.externalId.value,
      businessPartner.code.value,
      businessPartner.type.value,
      businessPartner.name.value,
      businessPartner.tin.value,
      businessPartner.email.value,
      businessPartner.website.value,
      businessPartner.phone.value,
      businessPartner.phoneCountryPrefix.value,
      businessPartner.phoneSanitized.value,
      businessPartner.isActive.value,
      businessPartner.meta.value,
      businessPartner.createdAt.value,
      businessPartner.updatedAt.value,
      businessPartner.deletedAt.value,
      this.options.eagerLoading
        ? new BusinessPartnerPortalPartnerContactMapper({
            eagerLoading: true,
          }).mapAggregatesToResponses(businessPartner.contacts)
        : undefined,
      this.options.eagerLoading
        ? new BusinessPartnerPortalPartnerAddressMapper({
            eagerLoading: true,
          }).mapAggregatesToResponses(businessPartner.addresses)
        : undefined,
      this.options.eagerLoading
        ? new BusinessPartnerPortalPaymentCollectionModeMapper({
            eagerLoading: true,
          }).mapAggregatesToResponses(businessPartner.paymentCollectionModes)
        : undefined,
    );
  }
}
