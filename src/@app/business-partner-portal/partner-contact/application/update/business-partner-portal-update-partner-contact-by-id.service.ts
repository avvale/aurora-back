/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import {
  BusinessPartnerPortalIPartnerContactRepository,
  BusinessPartnerPortalPartnerContact,
} from '@app/business-partner-portal/partner-contact';
import {
  BusinessPartnerPortalPartnerContactBusinessPartnerId,
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
  BusinessPartnerPortalPartnerContactUpdatedAt,
  BusinessPartnerPortalPartnerContactUserId,
} from '@app/business-partner-portal/partner-contact/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class BusinessPartnerPortalUpdatePartnerContactByIdService {
  constructor(
    private readonly publisher: EventPublisher,
    private readonly repository: BusinessPartnerPortalIPartnerContactRepository,
  ) {}

  async main(
    payload: {
      id: BusinessPartnerPortalPartnerContactId;
      businessPartnerId?: BusinessPartnerPortalPartnerContactBusinessPartnerId;
      firstName?: BusinessPartnerPortalPartnerContactFirstName;
      lastName?: BusinessPartnerPortalPartnerContactLastName;
      position?: BusinessPartnerPortalPartnerContactPosition;
      department?: BusinessPartnerPortalPartnerContactDepartment;
      email?: BusinessPartnerPortalPartnerContactEmail;
      phone?: BusinessPartnerPortalPartnerContactPhone;
      phoneCountryPrefix?: BusinessPartnerPortalPartnerContactPhoneCountryPrefix;
      phoneSanitized?: BusinessPartnerPortalPartnerContactPhoneSanitized;
      mobile?: BusinessPartnerPortalPartnerContactMobile;
      mobileCountryPrefix?: BusinessPartnerPortalPartnerContactMobileCountryPrefix;
      mobileSanitized?: BusinessPartnerPortalPartnerContactMobileSanitized;
      isPrincipal?: BusinessPartnerPortalPartnerContactIsPrincipal;
      isActive?: BusinessPartnerPortalPartnerContactIsActive;
      isUser?: BusinessPartnerPortalPartnerContactIsUser;
      userId?: BusinessPartnerPortalPartnerContactUserId;
      langId?: BusinessPartnerPortalPartnerContactLangId;
      notes?: BusinessPartnerPortalPartnerContactNotes;
    },
    constraint?: QueryStatement,
    cQMetadata?: CQMetadata,
  ): Promise<void> {
    // create aggregate with factory pattern
    const partnerContact = BusinessPartnerPortalPartnerContact.register(
      payload.id,
      undefined, // rowId
      payload.businessPartnerId,
      payload.firstName,
      payload.lastName,
      payload.position,
      payload.department,
      payload.email,
      payload.phone,
      payload.phoneCountryPrefix,
      payload.phoneSanitized,
      payload.mobile,
      payload.mobileCountryPrefix,
      payload.mobileSanitized,
      payload.isPrincipal,
      payload.isActive,
      payload.isUser,
      payload.userId,
      payload.langId,
      payload.notes,
      null, // createdAt
      new BusinessPartnerPortalPartnerContactUpdatedAt({
        currentTimestamp: true,
      }),
      null, // deletedAt
    );

    // update by id
    await this.repository.updateById(partnerContact, {
      constraint,
      cQMetadata,
      updateByIdOptions: cQMetadata?.repositoryOptions,
    });

    // merge EventBus methods with object returned by the repository, to be able to apply and commit events
    const partnerContactRegister =
      this.publisher.mergeObjectContext(partnerContact);

    partnerContactRegister.updated({
      payload: partnerContact,
      cQMetadata,
    }); // apply event to model events
    partnerContactRegister.commit(); // commit all events of model
  }
}
