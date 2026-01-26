/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import { BusinessPartnerPortalDeletePartnerAddressByIdCommand } from '@app/business-partner-portal/partner-address';
import { BusinessPartnerPortalDeletePartnerAddressByIdService } from '@app/business-partner-portal/partner-address/application/delete/business-partner-portal-delete-partner-address-by-id.service';
import { BusinessPartnerPortalPartnerAddressId } from '@app/business-partner-portal/partner-address/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(BusinessPartnerPortalDeletePartnerAddressByIdCommand)
export class BusinessPartnerPortalDeletePartnerAddressByIdCommandHandler
  implements
    ICommandHandler<BusinessPartnerPortalDeletePartnerAddressByIdCommand>
{
  constructor(
    private readonly deletePartnerAddressByIdService: BusinessPartnerPortalDeletePartnerAddressByIdService,
  ) {}

  async execute(
    command: BusinessPartnerPortalDeletePartnerAddressByIdCommand,
  ): Promise<void> {
    // call to use case and implements ValueObjects
    await this.deletePartnerAddressByIdService.main(
      new BusinessPartnerPortalPartnerAddressId(command.id),
      command.constraint,
      command.cQMetadata,
    );
  }
}
