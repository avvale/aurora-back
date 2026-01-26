/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import { BusinessPartnerPortalDeleteBusinessPartnerByIdCommand } from '@app/business-partner-portal/business-partner';
import { BusinessPartnerPortalDeleteBusinessPartnerByIdService } from '@app/business-partner-portal/business-partner/application/delete/business-partner-portal-delete-business-partner-by-id.service';
import { BusinessPartnerPortalBusinessPartnerId } from '@app/business-partner-portal/business-partner/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(BusinessPartnerPortalDeleteBusinessPartnerByIdCommand)
export class BusinessPartnerPortalDeleteBusinessPartnerByIdCommandHandler
  implements
    ICommandHandler<BusinessPartnerPortalDeleteBusinessPartnerByIdCommand>
{
  constructor(
    private readonly deleteBusinessPartnerByIdService: BusinessPartnerPortalDeleteBusinessPartnerByIdService,
  ) {}

  async execute(
    command: BusinessPartnerPortalDeleteBusinessPartnerByIdCommand,
  ): Promise<void> {
    // call to use case and implements ValueObjects
    await this.deleteBusinessPartnerByIdService.main(
      new BusinessPartnerPortalBusinessPartnerId(command.id),
      command.constraint,
      command.cQMetadata,
    );
  }
}
