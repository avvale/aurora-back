/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import { BusinessPartnerPortalIPartnerContactRepository } from '@app/business-partner-portal/partner-contact';
import { BusinessPartnerPortalPartnerContactId } from '@app/business-partner-portal/partner-contact/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class BusinessPartnerPortalDeletePartnerContactByIdService {
  constructor(
    private readonly publisher: EventPublisher,
    private readonly repository: BusinessPartnerPortalIPartnerContactRepository,
  ) {}

  async main(
    id: BusinessPartnerPortalPartnerContactId,
    constraint?: QueryStatement,
    cQMetadata?: CQMetadata,
  ): Promise<void> {
    // get object to delete
    const partnerContact = await this.repository.findById(id, {
      constraint,
      cQMetadata,
    });

    // it is not necessary to pass the constraint in the delete, if the object
    // is not found in the findById, an exception will be thrown.
    await this.repository.deleteById(partnerContact.id, {
      deleteOptions: cQMetadata?.repositoryOptions,
      cQMetadata,
    });

    // insert EventBus in object, to be able to apply and commit events
    const partnerContactRegister =
      this.publisher.mergeObjectContext(partnerContact);

    partnerContactRegister.deleted({
      payload: partnerContact,
      cQMetadata,
    }); // apply event to model events
    partnerContactRegister.commit(); // commit all events of model
  }
}
