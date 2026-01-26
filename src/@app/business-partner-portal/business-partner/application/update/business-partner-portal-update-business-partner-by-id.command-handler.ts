/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import { BusinessPartnerPortalUpdateBusinessPartnerByIdCommand } from '@app/business-partner-portal/business-partner';
import { BusinessPartnerPortalUpdateBusinessPartnerByIdService } from '@app/business-partner-portal/business-partner/application/update/business-partner-portal-update-business-partner-by-id.service';
import {
  BusinessPartnerPortalBusinessPartnerCode,
  BusinessPartnerPortalBusinessPartnerEmail,
  BusinessPartnerPortalBusinessPartnerExternalId,
  BusinessPartnerPortalBusinessPartnerId,
  BusinessPartnerPortalBusinessPartnerIsActive,
  BusinessPartnerPortalBusinessPartnerMeta,
  BusinessPartnerPortalBusinessPartnerName,
  BusinessPartnerPortalBusinessPartnerPhone,
  BusinessPartnerPortalBusinessPartnerPhoneCountryPrefix,
  BusinessPartnerPortalBusinessPartnerPhoneSanitized,
  BusinessPartnerPortalBusinessPartnerTin,
  BusinessPartnerPortalBusinessPartnerType,
  BusinessPartnerPortalBusinessPartnerWebsite,
} from '@app/business-partner-portal/business-partner/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(BusinessPartnerPortalUpdateBusinessPartnerByIdCommand)
export class BusinessPartnerPortalUpdateBusinessPartnerByIdCommandHandler
  implements
    ICommandHandler<BusinessPartnerPortalUpdateBusinessPartnerByIdCommand>
{
  constructor(
    private readonly updateBusinessPartnerByIdService: BusinessPartnerPortalUpdateBusinessPartnerByIdService,
  ) {}

  async execute(
    command: BusinessPartnerPortalUpdateBusinessPartnerByIdCommand,
  ): Promise<void> {
    // call to use case and implements ValueObjects
    await this.updateBusinessPartnerByIdService.main(
      {
        id: new BusinessPartnerPortalBusinessPartnerId(command.payload.id),
        externalId: new BusinessPartnerPortalBusinessPartnerExternalId(
          command.payload.externalId,
        ),
        code: new BusinessPartnerPortalBusinessPartnerCode(
          command.payload.code,
        ),
        type: new BusinessPartnerPortalBusinessPartnerType(
          command.payload.type,
          { undefinable: true },
        ),
        name: new BusinessPartnerPortalBusinessPartnerName(
          command.payload.name,
          { undefinable: true },
        ),
        tin: new BusinessPartnerPortalBusinessPartnerTin(command.payload.tin),
        email: new BusinessPartnerPortalBusinessPartnerEmail(
          command.payload.email,
        ),
        website: new BusinessPartnerPortalBusinessPartnerWebsite(
          command.payload.website,
        ),
        phone: new BusinessPartnerPortalBusinessPartnerPhone(
          command.payload.phone,
        ),
        phoneCountryPrefix:
          new BusinessPartnerPortalBusinessPartnerPhoneCountryPrefix(
            command.payload.phoneCountryPrefix,
          ),
        phoneSanitized: new BusinessPartnerPortalBusinessPartnerPhoneSanitized(
          command.payload.phoneSanitized,
        ),
        isActive: new BusinessPartnerPortalBusinessPartnerIsActive(
          command.payload.isActive,
          { undefinable: true },
        ),
        meta: new BusinessPartnerPortalBusinessPartnerMeta(
          command.payload.meta,
        ),
      },
      command.constraint,
      command.cQMetadata,
    );
  }
}
