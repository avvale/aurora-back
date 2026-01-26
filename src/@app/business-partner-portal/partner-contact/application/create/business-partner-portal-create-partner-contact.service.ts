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
  BusinessPartnerPortalPartnerContactCreatedAt,
  BusinessPartnerPortalPartnerContactDepartment,
  BusinessPartnerPortalPartnerContactEmail,
  BusinessPartnerPortalPartnerContactFirstName,
  BusinessPartnerPortalPartnerContactId,
  BusinessPartnerPortalPartnerContactIsActive,
  BusinessPartnerPortalPartnerContactIsPrimary,
  BusinessPartnerPortalPartnerContactIsUser,
  BusinessPartnerPortalPartnerContactLastName,
  BusinessPartnerPortalPartnerContactMobile,
  BusinessPartnerPortalPartnerContactNotes,
  BusinessPartnerPortalPartnerContactPhone,
  BusinessPartnerPortalPartnerContactPosition,
  BusinessPartnerPortalPartnerContactPreferredLanguage,
  BusinessPartnerPortalPartnerContactUpdatedAt,
  BusinessPartnerPortalPartnerContactUserId,
} from '@app/business-partner-portal/partner-contact/domain/value-objects';
import { CQMetadata } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class BusinessPartnerPortalCreatePartnerContactService {
  constructor(
    private readonly publisher: EventPublisher,
    private readonly repository: BusinessPartnerPortalIPartnerContactRepository,
  ) {}

  async main(
    payload: {
      id: BusinessPartnerPortalPartnerContactId;
      businessPartnerId: BusinessPartnerPortalPartnerContactBusinessPartnerId;
      firstName: BusinessPartnerPortalPartnerContactFirstName;
      lastName: BusinessPartnerPortalPartnerContactLastName;
      position: BusinessPartnerPortalPartnerContactPosition;
      department: BusinessPartnerPortalPartnerContactDepartment;
      email: BusinessPartnerPortalPartnerContactEmail;
      phone: BusinessPartnerPortalPartnerContactPhone;
      mobile: BusinessPartnerPortalPartnerContactMobile;
      isPrimary: BusinessPartnerPortalPartnerContactIsPrimary;
      isActive: BusinessPartnerPortalPartnerContactIsActive;
      isUser: BusinessPartnerPortalPartnerContactIsUser;
      userId: BusinessPartnerPortalPartnerContactUserId;
      preferredLanguage: BusinessPartnerPortalPartnerContactPreferredLanguage;
      notes: BusinessPartnerPortalPartnerContactNotes;
    },
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
      payload.mobile,
      payload.isPrimary,
      payload.isActive,
      payload.isUser,
      payload.userId,
      payload.preferredLanguage,
      payload.notes,
      new BusinessPartnerPortalPartnerContactCreatedAt({
        currentTimestamp: true,
      }),
      new BusinessPartnerPortalPartnerContactUpdatedAt({
        currentTimestamp: true,
      }),
      null, // deletedAt
    );

    await this.repository.create(partnerContact, {
      createOptions: cQMetadata?.repositoryOptions,
    });

    // merge EventBus methods with object returned by the repository, to be able to apply and commit events
    const partnerContactRegister =
      this.publisher.mergeObjectContext(partnerContact);

    partnerContactRegister.created({
      payload: partnerContact,
      cQMetadata,
    }); // apply event to model events
    partnerContactRegister.commit(); // commit all events of model
  }
}
