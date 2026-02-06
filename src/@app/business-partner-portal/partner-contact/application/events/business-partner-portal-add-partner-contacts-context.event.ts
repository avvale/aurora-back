/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import {
  BusinessPartnerPortalCreatedPartnerContactEvent,
  BusinessPartnerPortalCreatedPartnerContactsEvent,
  BusinessPartnerPortalPartnerContact,
} from '@app/business-partner-portal/partner-contact';
import { CQMetadata } from '@aurorajs.dev/core';
import { AggregateRoot } from '@nestjs/cqrs';

export class BusinessPartnerPortalAddPartnerContactsContextEvent extends AggregateRoot {
  constructor(
    public readonly aggregateRoots: BusinessPartnerPortalPartnerContact[] = [],
    public readonly cQMetadata?: CQMetadata,
  ) {
    super();
  }

  *[Symbol.iterator]() {
    for (const aggregateRoot of this.aggregateRoots) yield aggregateRoot;
  }

  created(): void {
    this.apply(
      new BusinessPartnerPortalCreatedPartnerContactsEvent({
        payload: this.aggregateRoots.map(
          (partnerContact) =>
            new BusinessPartnerPortalCreatedPartnerContactEvent({
              payload: {
                id: partnerContact.id.value,
                businessPartnerId: partnerContact.businessPartnerId.value,
                firstName: partnerContact.firstName.value,
                lastName: partnerContact.lastName.value,
                position: partnerContact.position?.value,
                department: partnerContact.department?.value,
                email: partnerContact.email.value,
                phone: partnerContact.phone?.value,
                phoneCountryPrefix: partnerContact.phoneCountryPrefix?.value,
                phoneSanitized: partnerContact.phoneSanitized?.value,
                mobile: partnerContact.mobile?.value,
                mobileCountryPrefix: partnerContact.mobileCountryPrefix?.value,
                mobileSanitized: partnerContact.mobileSanitized?.value,
                isPrincipal: partnerContact.isPrincipal.value,
                isActive: partnerContact.isActive.value,
                isUser: partnerContact.isUser.value,
                userId: partnerContact.userId?.value,
                langId: partnerContact.langId?.value,
                notes: partnerContact.notes?.value,
                createdAt: partnerContact.createdAt?.value,
                updatedAt: partnerContact.updatedAt?.value,
                deletedAt: partnerContact.deletedAt?.value,
              },
            }),
        ),
        cQMetadata: this.cQMetadata,
      }),
    );
  }
}
