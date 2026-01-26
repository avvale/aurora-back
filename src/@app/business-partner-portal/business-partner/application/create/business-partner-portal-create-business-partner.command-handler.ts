/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import { BusinessPartnerPortalCreateBusinessPartnerCommand } from '@app/business-partner-portal/business-partner';
import { BusinessPartnerPortalCreateBusinessPartnerService } from '@app/business-partner-portal/business-partner/application/create/business-partner-portal-create-business-partner.service';
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

@CommandHandler(BusinessPartnerPortalCreateBusinessPartnerCommand)
export class BusinessPartnerPortalCreateBusinessPartnerCommandHandler
  implements ICommandHandler<BusinessPartnerPortalCreateBusinessPartnerCommand>
{
  constructor(
    private readonly createBusinessPartnerService: BusinessPartnerPortalCreateBusinessPartnerService,
  ) {}

  async execute(
    command: BusinessPartnerPortalCreateBusinessPartnerCommand,
  ): Promise<void> {
    // call to use case and implements ValueObjects
    await this.createBusinessPartnerService.main(
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
        ),
        name: new BusinessPartnerPortalBusinessPartnerName(
          command.payload.name,
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
        ),
        meta: new BusinessPartnerPortalBusinessPartnerMeta(
          command.payload.meta,
        ),
      },
      command.cQMetadata,
    );
  }
}
