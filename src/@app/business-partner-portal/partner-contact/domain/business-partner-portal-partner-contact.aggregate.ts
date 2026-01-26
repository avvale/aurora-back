/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import { BusinessPartnerPortalBusinessPartner } from '@app/business-partner-portal/business-partner';
import {
  BusinessPartnerPortalCreatedPartnerContactEvent,
  BusinessPartnerPortalDeletedPartnerContactEvent,
  BusinessPartnerPortalUpdatedPartnerContactEvent,
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
  BusinessPartnerPortalPartnerContactIsPrimary,
  BusinessPartnerPortalPartnerContactIsUser,
  BusinessPartnerPortalPartnerContactLastName,
  BusinessPartnerPortalPartnerContactMobile,
  BusinessPartnerPortalPartnerContactNotes,
  BusinessPartnerPortalPartnerContactPhone,
  BusinessPartnerPortalPartnerContactPosition,
  BusinessPartnerPortalPartnerContactPreferredLanguage,
  BusinessPartnerPortalPartnerContactRowId,
  BusinessPartnerPortalPartnerContactUpdatedAt,
  BusinessPartnerPortalPartnerContactUserId,
} from '@app/business-partner-portal/partner-contact/domain/value-objects';
import { IamUser } from '@app/iam/user';
import { CQMetadata, LiteralObject } from '@aurorajs.dev/core';
import { AggregateRoot } from '@nestjs/cqrs';

export class BusinessPartnerPortalPartnerContact extends AggregateRoot {
  id: BusinessPartnerPortalPartnerContactId;
  rowId: BusinessPartnerPortalPartnerContactRowId;
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
  createdAt: BusinessPartnerPortalPartnerContactCreatedAt;
  updatedAt: BusinessPartnerPortalPartnerContactUpdatedAt;
  deletedAt: BusinessPartnerPortalPartnerContactDeletedAt;
  user: IamUser;
  businessPartner: BusinessPartnerPortalBusinessPartner;

  constructor(
    id: BusinessPartnerPortalPartnerContactId,
    rowId: BusinessPartnerPortalPartnerContactRowId,
    businessPartnerId: BusinessPartnerPortalPartnerContactBusinessPartnerId,
    firstName: BusinessPartnerPortalPartnerContactFirstName,
    lastName: BusinessPartnerPortalPartnerContactLastName,
    position: BusinessPartnerPortalPartnerContactPosition,
    department: BusinessPartnerPortalPartnerContactDepartment,
    email: BusinessPartnerPortalPartnerContactEmail,
    phone: BusinessPartnerPortalPartnerContactPhone,
    mobile: BusinessPartnerPortalPartnerContactMobile,
    isPrimary: BusinessPartnerPortalPartnerContactIsPrimary,
    isActive: BusinessPartnerPortalPartnerContactIsActive,
    isUser: BusinessPartnerPortalPartnerContactIsUser,
    userId: BusinessPartnerPortalPartnerContactUserId,
    preferredLanguage: BusinessPartnerPortalPartnerContactPreferredLanguage,
    notes: BusinessPartnerPortalPartnerContactNotes,
    createdAt: BusinessPartnerPortalPartnerContactCreatedAt,
    updatedAt: BusinessPartnerPortalPartnerContactUpdatedAt,
    deletedAt: BusinessPartnerPortalPartnerContactDeletedAt,
    user?: IamUser,
    businessPartner?: BusinessPartnerPortalBusinessPartner,
  ) {
    super();
    this.id = id;
    this.rowId = rowId;
    this.businessPartnerId = businessPartnerId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.department = department;
    this.email = email;
    this.phone = phone;
    this.mobile = mobile;
    this.isPrimary = isPrimary;
    this.isActive = isActive;
    this.isUser = isUser;
    this.userId = userId;
    this.preferredLanguage = preferredLanguage;
    this.notes = notes;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
    this.user = user;
    this.businessPartner = businessPartner;
  }

  static register(
    id: BusinessPartnerPortalPartnerContactId,
    rowId: BusinessPartnerPortalPartnerContactRowId,
    businessPartnerId: BusinessPartnerPortalPartnerContactBusinessPartnerId,
    firstName: BusinessPartnerPortalPartnerContactFirstName,
    lastName: BusinessPartnerPortalPartnerContactLastName,
    position: BusinessPartnerPortalPartnerContactPosition,
    department: BusinessPartnerPortalPartnerContactDepartment,
    email: BusinessPartnerPortalPartnerContactEmail,
    phone: BusinessPartnerPortalPartnerContactPhone,
    mobile: BusinessPartnerPortalPartnerContactMobile,
    isPrimary: BusinessPartnerPortalPartnerContactIsPrimary,
    isActive: BusinessPartnerPortalPartnerContactIsActive,
    isUser: BusinessPartnerPortalPartnerContactIsUser,
    userId: BusinessPartnerPortalPartnerContactUserId,
    preferredLanguage: BusinessPartnerPortalPartnerContactPreferredLanguage,
    notes: BusinessPartnerPortalPartnerContactNotes,
    createdAt: BusinessPartnerPortalPartnerContactCreatedAt,
    updatedAt: BusinessPartnerPortalPartnerContactUpdatedAt,
    deletedAt: BusinessPartnerPortalPartnerContactDeletedAt,
    user?: IamUser,
    businessPartner?: BusinessPartnerPortalBusinessPartner,
  ): BusinessPartnerPortalPartnerContact {
    return new BusinessPartnerPortalPartnerContact(
      id,
      rowId,
      businessPartnerId,
      firstName,
      lastName,
      position,
      department,
      email,
      phone,
      mobile,
      isPrimary,
      isActive,
      isUser,
      userId,
      preferredLanguage,
      notes,
      createdAt,
      updatedAt,
      deletedAt,
      user,
      businessPartner,
    );
  }

  created(event: {
    payload: BusinessPartnerPortalPartnerContact;
    cQMetadata?: CQMetadata;
  }): void {
    this.apply(
      new BusinessPartnerPortalCreatedPartnerContactEvent({
        payload: {
          id: event.payload.id.value,
          businessPartnerId: event.payload.businessPartnerId.value,
          firstName: event.payload.firstName.value,
          lastName: event.payload.lastName.value,
          position: event.payload.position?.value,
          department: event.payload.department?.value,
          email: event.payload.email.value,
          phone: event.payload.phone?.value,
          mobile: event.payload.mobile?.value,
          isPrimary: event.payload.isPrimary.value,
          isActive: event.payload.isActive.value,
          isUser: event.payload.isUser.value,
          userId: event.payload.userId?.value,
          preferredLanguage: event.payload.preferredLanguage?.value,
          notes: event.payload.notes?.value,
          createdAt: event.payload.createdAt?.value,
          updatedAt: event.payload.updatedAt?.value,
          deletedAt: event.payload.deletedAt?.value,
        },
        cQMetadata: event.cQMetadata,
      }),
    );
  }

  updated(event: {
    payload: BusinessPartnerPortalPartnerContact;
    cQMetadata?: CQMetadata;
  }): void {
    this.apply(
      new BusinessPartnerPortalUpdatedPartnerContactEvent({
        payload: {
          id: event.payload.id?.value,
          businessPartnerId: event.payload.businessPartnerId?.value,
          firstName: event.payload.firstName?.value,
          lastName: event.payload.lastName?.value,
          position: event.payload.position?.value,
          department: event.payload.department?.value,
          email: event.payload.email?.value,
          phone: event.payload.phone?.value,
          mobile: event.payload.mobile?.value,
          isPrimary: event.payload.isPrimary?.value,
          isActive: event.payload.isActive?.value,
          isUser: event.payload.isUser?.value,
          userId: event.payload.userId?.value,
          preferredLanguage: event.payload.preferredLanguage?.value,
          notes: event.payload.notes?.value,
          createdAt: event.payload.createdAt?.value,
          updatedAt: event.payload.updatedAt?.value,
          deletedAt: event.payload.deletedAt?.value,
        },
        cQMetadata: event.cQMetadata,
      }),
    );
  }

  deleted(event: {
    payload: BusinessPartnerPortalPartnerContact;
    cQMetadata?: CQMetadata;
  }): void {
    this.apply(
      new BusinessPartnerPortalDeletedPartnerContactEvent({
        payload: {
          id: event.payload.id.value,
          rowId: event.payload.rowId.value,
          businessPartnerId: event.payload.businessPartnerId.value,
          firstName: event.payload.firstName.value,
          lastName: event.payload.lastName.value,
          position: event.payload.position?.value,
          department: event.payload.department?.value,
          email: event.payload.email.value,
          phone: event.payload.phone?.value,
          mobile: event.payload.mobile?.value,
          isPrimary: event.payload.isPrimary.value,
          isActive: event.payload.isActive.value,
          isUser: event.payload.isUser.value,
          userId: event.payload.userId?.value,
          preferredLanguage: event.payload.preferredLanguage?.value,
          notes: event.payload.notes?.value,
          createdAt: event.payload.createdAt?.value,
          updatedAt: event.payload.updatedAt?.value,
          deletedAt: event.payload.deletedAt?.value,
        },
        cQMetadata: event.cQMetadata,
      }),
    );
  }

  toDTO(): LiteralObject {
    return {
      id: this.id.value,
      rowId: this.rowId.value,
      businessPartnerId: this.businessPartnerId.value,
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      position: this.position?.value,
      department: this.department?.value,
      email: this.email.value,
      phone: this.phone?.value,
      mobile: this.mobile?.value,
      isPrimary: this.isPrimary.value,
      isActive: this.isActive.value,
      isUser: this.isUser.value,
      userId: this.userId?.value,
      preferredLanguage: this.preferredLanguage?.value,
      notes: this.notes?.value,
      createdAt: this.createdAt?.value,
      updatedAt: this.updatedAt?.value,
      deletedAt: this.deletedAt?.value,
      user: this.user?.toDTO(),
      businessPartner: this.businessPartner?.toDTO(),
    };
  }

  // function called to get data for repository side effect methods
  toRepository(): LiteralObject {
    return {
      id: this.id.value,
      businessPartnerId: this.businessPartnerId.value,
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      position: this.position?.value,
      department: this.department?.value,
      email: this.email.value,
      phone: this.phone?.value,
      mobile: this.mobile?.value,
      isPrimary: this.isPrimary.value,
      isActive: this.isActive.value,
      isUser: this.isUser.value,
      userId: this.userId?.value,
      preferredLanguage: this.preferredLanguage?.value,
      notes: this.notes?.value,
      createdAt: this.createdAt?.value,
      updatedAt: this.updatedAt?.value,
      deletedAt: this.deletedAt?.value,
      user: this.user?.toDTO(),
      businessPartner: this.businessPartner?.toDTO(),
    };
  }
}
