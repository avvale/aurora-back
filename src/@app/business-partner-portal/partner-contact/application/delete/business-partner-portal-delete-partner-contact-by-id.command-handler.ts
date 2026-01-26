/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import { BusinessPartnerPortalDeletePartnerContactByIdCommand } from '@app/business-partner-portal/partner-contact';
import { BusinessPartnerPortalDeletePartnerContactByIdService } from '@app/business-partner-portal/partner-contact/application/delete/business-partner-portal-delete-partner-contact-by-id.service';
import { BusinessPartnerPortalPartnerContactId } from '@app/business-partner-portal/partner-contact/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(BusinessPartnerPortalDeletePartnerContactByIdCommand)
export class BusinessPartnerPortalDeletePartnerContactByIdCommandHandler
  implements
    ICommandHandler<BusinessPartnerPortalDeletePartnerContactByIdCommand>
{
  constructor(
    private readonly deletePartnerContactByIdService: BusinessPartnerPortalDeletePartnerContactByIdService,
  ) {}

  async execute(
    command: BusinessPartnerPortalDeletePartnerContactByIdCommand,
  ): Promise<void> {
    // call to use case and implements ValueObjects
    await this.deletePartnerContactByIdService.main(
      new BusinessPartnerPortalPartnerContactId(command.id),
      command.constraint,
      command.cQMetadata,
    );
  }
}
