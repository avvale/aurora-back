/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import { BusinessPartnerPortalBusinessPartnerMapper } from '@app/business-partner-portal/business-partner';
import {
  BusinessPartnerPortalPartnerContact,
  BusinessPartnerPortalPartnerContactResponse,
} from '@app/business-partner-portal/partner-contact';
import {
  BusinessPartnerPortalPartnerContactBusinessPartnerId,
  BusinessPartnerPortalPartnerContactCreatedAt,
  BusinessPartnerPortalPartnerContactDeletedAt,
  BusinessPartnerPortalPartnerContactDepartment,
  BusinessPartnerPortalPartnerContactEmail,
  BusinessPartnerPortalPartnerContactFirstName,
  BusinessPartnerPortalPartnerContactId,
  BusinessPartnerPortalPartnerContactIsActive,
  BusinessPartnerPortalPartnerContactIsPrincipal,
  BusinessPartnerPortalPartnerContactIsUser,
  BusinessPartnerPortalPartnerContactLangId,
  BusinessPartnerPortalPartnerContactLastName,
  BusinessPartnerPortalPartnerContactMobile,
  BusinessPartnerPortalPartnerContactMobileCountryPrefix,
  BusinessPartnerPortalPartnerContactMobileSanitized,
  BusinessPartnerPortalPartnerContactNotes,
  BusinessPartnerPortalPartnerContactPhone,
  BusinessPartnerPortalPartnerContactPhoneCountryPrefix,
  BusinessPartnerPortalPartnerContactPhoneSanitized,
  BusinessPartnerPortalPartnerContactPosition,
  BusinessPartnerPortalPartnerContactRowId,
  BusinessPartnerPortalPartnerContactUpdatedAt,
  BusinessPartnerPortalPartnerContactUserId,
} from '@app/business-partner-portal/partner-contact/domain/value-objects';
import { CommonLangMapper } from '@app/common/lang';
import { IamUserMapper } from '@app/iam/user';
import {
  CQMetadata,
  IMapper,
  LiteralObject,
  MapperOptions,
} from '@aurorajs.dev/core';

export class BusinessPartnerPortalPartnerContactMapper implements IMapper {
  constructor(public options: MapperOptions = { eagerLoading: true }) {}

  /**
   * Map object to aggregate
   * @param partnerContact
   */
  mapModelToAggregate(
    partnerContact: LiteralObject,
    cQMetadata?: CQMetadata,
  ): BusinessPartnerPortalPartnerContact {
    if (!partnerContact) return;

    return this.makeAggregate(partnerContact, cQMetadata);
  }

  /**
   * Map array of objects to array aggregates
   * @param partnerContacts
   */
  mapModelsToAggregates(
    partnerContacts: LiteralObject[],
    cQMetadata?: CQMetadata,
  ): BusinessPartnerPortalPartnerContact[] {
    if (!Array.isArray(partnerContacts)) return;

    return partnerContacts.map((partnerContact) =>
      this.makeAggregate(partnerContact, cQMetadata),
    );
  }

  /**
   * Map aggregate to response
   * @param partnerContact
   */
  mapAggregateToResponse(
    partnerContact: BusinessPartnerPortalPartnerContact,
  ): BusinessPartnerPortalPartnerContactResponse {
    return this.makeResponse(partnerContact);
  }

  /**
   * Map array of aggregates to array responses
   * @param partnerContacts
   */
  mapAggregatesToResponses(
    partnerContacts: BusinessPartnerPortalPartnerContact[],
  ): BusinessPartnerPortalPartnerContactResponse[] {
    if (!Array.isArray(partnerContacts)) return;

    return partnerContacts.map((partnerContact) =>
      this.makeResponse(partnerContact),
    );
  }

  private makeAggregate(
    partnerContact: LiteralObject,
    cQMetadata?: CQMetadata,
  ): BusinessPartnerPortalPartnerContact {
    return BusinessPartnerPortalPartnerContact.register(
      new BusinessPartnerPortalPartnerContactId(partnerContact.id, {
        undefinable: true,
      }),
      new BusinessPartnerPortalPartnerContactRowId(partnerContact.rowId, {
        undefinable: true,
      }),
      new BusinessPartnerPortalPartnerContactBusinessPartnerId(
        partnerContact.businessPartnerId,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPartnerContactFirstName(
        partnerContact.firstName,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPartnerContactLastName(partnerContact.lastName, {
        undefinable: true,
      }),
      new BusinessPartnerPortalPartnerContactPosition(partnerContact.position, {
        undefinable: true,
      }),
      new BusinessPartnerPortalPartnerContactDepartment(
        partnerContact.department,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPartnerContactEmail(partnerContact.email, {
        undefinable: true,
      }),
      new BusinessPartnerPortalPartnerContactPhone(partnerContact.phone, {
        undefinable: true,
      }),
      new BusinessPartnerPortalPartnerContactPhoneCountryPrefix(
        partnerContact.phoneCountryPrefix,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPartnerContactPhoneSanitized(
        partnerContact.phoneSanitized,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPartnerContactMobile(partnerContact.mobile, {
        undefinable: true,
      }),
      new BusinessPartnerPortalPartnerContactMobileCountryPrefix(
        partnerContact.mobileCountryPrefix,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPartnerContactMobileSanitized(
        partnerContact.mobileSanitized,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPartnerContactIsPrincipal(
        partnerContact.isPrincipal,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPartnerContactIsActive(partnerContact.isActive, {
        undefinable: true,
      }),
      new BusinessPartnerPortalPartnerContactIsUser(partnerContact.isUser, {
        undefinable: true,
      }),
      new BusinessPartnerPortalPartnerContactUserId(partnerContact.userId, {
        undefinable: true,
      }),
      new BusinessPartnerPortalPartnerContactLangId(partnerContact.langId, {
        undefinable: true,
      }),
      new BusinessPartnerPortalPartnerContactNotes(partnerContact.notes, {
        undefinable: true,
      }),
      new BusinessPartnerPortalPartnerContactCreatedAt(
        partnerContact.createdAt,
        { undefinable: true },
        { addTimezone: cQMetadata?.timezone },
      ),
      new BusinessPartnerPortalPartnerContactUpdatedAt(
        partnerContact.updatedAt,
        { undefinable: true },
        { addTimezone: cQMetadata?.timezone },
      ),
      new BusinessPartnerPortalPartnerContactDeletedAt(
        partnerContact.deletedAt,
        { undefinable: true },
        { addTimezone: cQMetadata?.timezone },
      ),
      this.options.eagerLoading
        ? new IamUserMapper({ eagerLoading: true }).mapModelToAggregate(
            partnerContact.user,
            cQMetadata,
          )
        : undefined,
      this.options.eagerLoading
        ? new BusinessPartnerPortalBusinessPartnerMapper({
            eagerLoading: true,
          }).mapModelToAggregate(partnerContact.businessPartner, cQMetadata)
        : undefined,
      this.options.eagerLoading
        ? new CommonLangMapper({ eagerLoading: true }).mapModelToAggregate(
            partnerContact.lang,
            cQMetadata,
          )
        : undefined,
    );
  }

  private makeResponse(
    partnerContact: BusinessPartnerPortalPartnerContact,
  ): BusinessPartnerPortalPartnerContactResponse {
    if (!partnerContact) return null;

    return new BusinessPartnerPortalPartnerContactResponse(
      partnerContact.id.value,
      partnerContact.rowId.value,
      partnerContact.businessPartnerId.value,
      partnerContact.firstName.value,
      partnerContact.lastName.value,
      partnerContact.position.value,
      partnerContact.department.value,
      partnerContact.email.value,
      partnerContact.phone.value,
      partnerContact.phoneCountryPrefix.value,
      partnerContact.phoneSanitized.value,
      partnerContact.mobile.value,
      partnerContact.mobileCountryPrefix.value,
      partnerContact.mobileSanitized.value,
      partnerContact.isPrincipal.value,
      partnerContact.isActive.value,
      partnerContact.isUser.value,
      partnerContact.userId.value,
      partnerContact.langId.value,
      partnerContact.notes.value,
      partnerContact.createdAt.value,
      partnerContact.updatedAt.value,
      partnerContact.deletedAt.value,
      this.options.eagerLoading
        ? new IamUserMapper({ eagerLoading: true }).mapAggregateToResponse(
            partnerContact.user,
          )
        : undefined,
      this.options.eagerLoading
        ? new BusinessPartnerPortalBusinessPartnerMapper({
            eagerLoading: true,
          }).mapAggregateToResponse(partnerContact.businessPartner)
        : undefined,
      this.options.eagerLoading
        ? new CommonLangMapper({ eagerLoading: true }).mapAggregateToResponse(
            partnerContact.lang,
          )
        : undefined,
    );
  }
}
