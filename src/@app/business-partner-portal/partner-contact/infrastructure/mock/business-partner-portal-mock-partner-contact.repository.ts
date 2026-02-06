/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import {
  BusinessPartnerPortalIPartnerContactRepository,
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
import { MockRepository, Utils } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalMockPartnerContactRepository
  extends MockRepository<BusinessPartnerPortalPartnerContact>
  implements BusinessPartnerPortalIPartnerContactRepository
{
  public readonly repository: any;
  public readonly aggregateName: string = 'BusinessPartnerPortalPartnerContact';
  public collectionSource: BusinessPartnerPortalPartnerContact[];

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
      businessPartnerPortalMockPartnerContactData
    )) {
      itemCollection['createdAt'] = now;
      itemCollection['updatedAt'] = now;
      itemCollection['deletedAt'] = null;

      this.collectionSource.push(
        BusinessPartnerPortalPartnerContact.register(
          new BusinessPartnerPortalPartnerContactId(itemCollection.id),
          new BusinessPartnerPortalPartnerContactRowId(itemCollection.rowId),
          new BusinessPartnerPortalPartnerContactBusinessPartnerId(
            itemCollection.businessPartnerId,
          ),
          new BusinessPartnerPortalPartnerContactFirstName(
            itemCollection.firstName,
          ),
          new BusinessPartnerPortalPartnerContactLastName(
            itemCollection.lastName,
          ),
          new BusinessPartnerPortalPartnerContactPosition(
            itemCollection.position,
          ),
          new BusinessPartnerPortalPartnerContactDepartment(
            itemCollection.department,
          ),
          new BusinessPartnerPortalPartnerContactEmail(itemCollection.email),
          new BusinessPartnerPortalPartnerContactPhone(itemCollection.phone),
          new BusinessPartnerPortalPartnerContactPhoneCountryPrefix(
            itemCollection.phoneCountryPrefix,
          ),
          new BusinessPartnerPortalPartnerContactPhoneSanitized(
            itemCollection.phoneSanitized,
          ),
          new BusinessPartnerPortalPartnerContactMobile(itemCollection.mobile),
          new BusinessPartnerPortalPartnerContactMobileCountryPrefix(
            itemCollection.mobileCountryPrefix,
          ),
          new BusinessPartnerPortalPartnerContactMobileSanitized(
            itemCollection.mobileSanitized,
          ),
          new BusinessPartnerPortalPartnerContactIsPrincipal(
            itemCollection.isPrincipal,
          ),
          new BusinessPartnerPortalPartnerContactIsActive(
            itemCollection.isActive,
          ),
          new BusinessPartnerPortalPartnerContactIsUser(itemCollection.isUser),
          new BusinessPartnerPortalPartnerContactUserId(itemCollection.userId),
          new BusinessPartnerPortalPartnerContactLangId(itemCollection.langId),
          new BusinessPartnerPortalPartnerContactNotes(itemCollection.notes),
          new BusinessPartnerPortalPartnerContactCreatedAt(
            itemCollection.createdAt,
          ),
          new BusinessPartnerPortalPartnerContactUpdatedAt(
            itemCollection.updatedAt,
          ),
          new BusinessPartnerPortalPartnerContactDeletedAt(
            itemCollection.deletedAt,
          ),
        ),
      );
    }
  }
}
