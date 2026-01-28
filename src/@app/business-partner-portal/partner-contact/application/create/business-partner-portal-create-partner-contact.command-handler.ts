/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import { BusinessPartnerPortalCreatePartnerContactCommand } from '@app/business-partner-portal/partner-contact';
import { BusinessPartnerPortalCreatePartnerContactService } from '@app/business-partner-portal/partner-contact/application/create/business-partner-portal-create-partner-contact.service';
import {
  BusinessPartnerPortalPartnerContactBusinessPartnerId,
  BusinessPartnerPortalPartnerContactDepartment,
  BusinessPartnerPortalPartnerContactEmail,
  BusinessPartnerPortalPartnerContactFirstName,
  BusinessPartnerPortalPartnerContactId,
  BusinessPartnerPortalPartnerContactIsActive,
  BusinessPartnerPortalPartnerContactIsPrincipal,
  BusinessPartnerPortalPartnerContactIsUser,
  BusinessPartnerPortalPartnerContactLastName,
  BusinessPartnerPortalPartnerContactMobile,
  BusinessPartnerPortalPartnerContactMobileCountryPrefix,
  BusinessPartnerPortalPartnerContactMobileSanitized,
  BusinessPartnerPortalPartnerContactNotes,
  BusinessPartnerPortalPartnerContactPhone,
  BusinessPartnerPortalPartnerContactPhoneCountryPrefix,
  BusinessPartnerPortalPartnerContactPhoneSanitized,
  BusinessPartnerPortalPartnerContactPosition,
  BusinessPartnerPortalPartnerContactPreferredLanguage,
  BusinessPartnerPortalPartnerContactUserId,
} from '@app/business-partner-portal/partner-contact/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(BusinessPartnerPortalCreatePartnerContactCommand)
export class BusinessPartnerPortalCreatePartnerContactCommandHandler
  implements ICommandHandler<BusinessPartnerPortalCreatePartnerContactCommand>
{
  constructor(
    private readonly createPartnerContactService: BusinessPartnerPortalCreatePartnerContactService,
  ) {}

  async execute(
    command: BusinessPartnerPortalCreatePartnerContactCommand,
  ): Promise<void> {
    // call to use case and implements ValueObjects
    await this.createPartnerContactService.main(
      {
        id: new BusinessPartnerPortalPartnerContactId(command.payload.id),
        businessPartnerId:
          new BusinessPartnerPortalPartnerContactBusinessPartnerId(
            command.payload.businessPartnerId,
          ),
        firstName: new BusinessPartnerPortalPartnerContactFirstName(
          command.payload.firstName,
        ),
        lastName: new BusinessPartnerPortalPartnerContactLastName(
          command.payload.lastName,
        ),
        position: new BusinessPartnerPortalPartnerContactPosition(
          command.payload.position,
        ),
        department: new BusinessPartnerPortalPartnerContactDepartment(
          command.payload.department,
        ),
        email: new BusinessPartnerPortalPartnerContactEmail(
          command.payload.email,
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
        ),
        isActive: new BusinessPartnerPortalPartnerContactIsActive(
          command.payload.isActive,
        ),
        isUser: new BusinessPartnerPortalPartnerContactIsUser(
          command.payload.isUser,
        ),
        userId: new BusinessPartnerPortalPartnerContactUserId(
          command.payload.userId,
        ),
        preferredLanguage:
          new BusinessPartnerPortalPartnerContactPreferredLanguage(
            command.payload.preferredLanguage,
          ),
        notes: new BusinessPartnerPortalPartnerContactNotes(
          command.payload.notes,
        ),
      },
      command.cQMetadata,
    );
  }
}
