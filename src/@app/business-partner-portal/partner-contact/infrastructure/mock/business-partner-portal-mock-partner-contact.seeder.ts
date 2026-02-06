/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import {
  businessPartnerPortalMockPartnerContactData,
  BusinessPartnerPortalPartnerContact,
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
import { MockSeeder } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';

@Injectable()
export class BusinessPartnerPortalMockPartnerContactSeeder extends MockSeeder<BusinessPartnerPortalPartnerContact> {
  public collectionSource: BusinessPartnerPortalPartnerContact[];

  constructor() {
    super();
    this._createMock();
  }

  private _createMock(): void {
    this.collectionSource = [];

    for (const partnerContact of _.orderBy(
      businessPartnerPortalMockPartnerContactData,
      ['id'],
    )) {
      this.collectionSource.push(
        BusinessPartnerPortalPartnerContact.register(
          new BusinessPartnerPortalPartnerContactId(partnerContact.id),
          new BusinessPartnerPortalPartnerContactRowId(partnerContact.rowId),
          new BusinessPartnerPortalPartnerContactBusinessPartnerId(
            partnerContact.businessPartnerId,
          ),
          new BusinessPartnerPortalPartnerContactFirstName(
            partnerContact.firstName,
          ),
          new BusinessPartnerPortalPartnerContactLastName(
            partnerContact.lastName,
          ),
          new BusinessPartnerPortalPartnerContactPosition(
            partnerContact.position,
          ),
          new BusinessPartnerPortalPartnerContactDepartment(
            partnerContact.department,
          ),
          new BusinessPartnerPortalPartnerContactEmail(partnerContact.email),
          new BusinessPartnerPortalPartnerContactPhone(partnerContact.phone),
          new BusinessPartnerPortalPartnerContactPhoneCountryPrefix(
            partnerContact.phoneCountryPrefix,
          ),
          new BusinessPartnerPortalPartnerContactPhoneSanitized(
            partnerContact.phoneSanitized,
          ),
          new BusinessPartnerPortalPartnerContactMobile(partnerContact.mobile),
          new BusinessPartnerPortalPartnerContactMobileCountryPrefix(
            partnerContact.mobileCountryPrefix,
          ),
          new BusinessPartnerPortalPartnerContactMobileSanitized(
            partnerContact.mobileSanitized,
          ),
          new BusinessPartnerPortalPartnerContactIsPrincipal(
            partnerContact.isPrincipal,
          ),
          new BusinessPartnerPortalPartnerContactIsActive(
            partnerContact.isActive,
          ),
          new BusinessPartnerPortalPartnerContactIsUser(partnerContact.isUser),
          new BusinessPartnerPortalPartnerContactUserId(partnerContact.userId),
          new BusinessPartnerPortalPartnerContactLangId(partnerContact.langId),
          new BusinessPartnerPortalPartnerContactNotes(partnerContact.notes),
          new BusinessPartnerPortalPartnerContactCreatedAt({
            currentTimestamp: true,
          }),
          new BusinessPartnerPortalPartnerContactUpdatedAt({
            currentTimestamp: true,
          }),
          new BusinessPartnerPortalPartnerContactDeletedAt(null),
        ),
      );
    }
  }
}
