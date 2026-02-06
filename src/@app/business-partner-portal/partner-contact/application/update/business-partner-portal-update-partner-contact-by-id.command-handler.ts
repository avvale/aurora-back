/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import { BusinessPartnerPortalUpdatePartnerContactByIdCommand } from '@app/business-partner-portal/partner-contact';
import { BusinessPartnerPortalUpdatePartnerContactByIdService } from '@app/business-partner-portal/partner-contact/application/update/business-partner-portal-update-partner-contact-by-id.service';
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
  BusinessPartnerPortalPartnerContactUserId,
} from '@app/business-partner-portal/partner-contact/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(BusinessPartnerPortalUpdatePartnerContactByIdCommand)
export class BusinessPartnerPortalUpdatePartnerContactByIdCommandHandler
  implements
    ICommandHandler<BusinessPartnerPortalUpdatePartnerContactByIdCommand>
{
  constructor(
    private readonly updatePartnerContactByIdService: BusinessPartnerPortalUpdatePartnerContactByIdService,
  ) {}

  async execute(
    command: BusinessPartnerPortalUpdatePartnerContactByIdCommand,
  ): Promise<void> {
    // call to use case and implements ValueObjects
    await this.updatePartnerContactByIdService.main(
      {
        id: new BusinessPartnerPortalPartnerContactId(command.payload.id),
        businessPartnerId:
          new BusinessPartnerPortalPartnerContactBusinessPartnerId(
            command.payload.businessPartnerId,
            { undefinable: true },
          ),
        firstName: new BusinessPartnerPortalPartnerContactFirstName(
          command.payload.firstName,
          { undefinable: true },
        ),
        lastName: new BusinessPartnerPortalPartnerContactLastName(
          command.payload.lastName,
          { undefinable: true },
        ),
        position: new BusinessPartnerPortalPartnerContactPosition(
          command.payload.position,
        ),
        department: new BusinessPartnerPortalPartnerContactDepartment(
          command.payload.department,
        ),
        email: new BusinessPartnerPortalPartnerContactEmail(
          command.payload.email,
          { undefinable: true },
        ),
        phone: new BusinessPartnerPortalPartnerContactPhone(
          command.payload.phone,
        ),
        phoneCountryPrefix:
          new BusinessPartnerPortalPartnerContactPhoneCountryPrefix(
            command.payload.phoneCountryPrefix,
          ),
        phoneSanitized: new BusinessPartnerPortalPartnerContactPhoneSanitized(
          command.payload.phoneSanitized,
        ),
        mobile: new BusinessPartnerPortalPartnerContactMobile(
          command.payload.mobile,
        ),
        mobileCountryPrefix:
          new BusinessPartnerPortalPartnerContactMobileCountryPrefix(
            command.payload.mobileCountryPrefix,
          ),
        mobileSanitized: new BusinessPartnerPortalPartnerContactMobileSanitized(
          command.payload.mobileSanitized,
        ),
        isPrincipal: new BusinessPartnerPortalPartnerContactIsPrincipal(
          command.payload.isPrincipal,
          { undefinable: true },
        ),
        isActive: new BusinessPartnerPortalPartnerContactIsActive(
          command.payload.isActive,
          { undefinable: true },
        ),
        isUser: new BusinessPartnerPortalPartnerContactIsUser(
          command.payload.isUser,
          { undefinable: true },
        ),
        userId: new BusinessPartnerPortalPartnerContactUserId(
          command.payload.userId,
        ),
        langId: new BusinessPartnerPortalPartnerContactLangId(
          command.payload.langId,
        ),
        notes: new BusinessPartnerPortalPartnerContactNotes(
          command.payload.notes,
        ),
      },
      command.constraint,
      command.cQMetadata,
    );
  }
}
