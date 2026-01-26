/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import { BusinessPartnerPortalIPartnerAddressRepository } from '@app/business-partner-portal/partner-address';
import { BusinessPartnerPortalPartnerAddressId } from '@app/business-partner-portal/partner-address/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class BusinessPartnerPortalDeletePartnerAddressByIdService {
  constructor(
    private readonly publisher: EventPublisher,
    private readonly repository: BusinessPartnerPortalIPartnerAddressRepository,
  ) {}

  async main(
    id: BusinessPartnerPortalPartnerAddressId,
    constraint?: QueryStatement,
    cQMetadata?: CQMetadata,
  ): Promise<void> {
    // get object to delete
    const partnerAddress = await this.repository.findById(id, {
      constraint,
      cQMetadata,
    });

    // it is not necessary to pass the constraint in the delete, if the object
    // is not found in the findById, an exception will be thrown.
    await this.repository.deleteById(partnerAddress.id, {
      deleteOptions: cQMetadata?.repositoryOptions,
      cQMetadata,
    });

    // insert EventBus in object, to be able to apply and commit events
    const partnerAddressRegister =
      this.publisher.mergeObjectContext(partnerAddress);

    partnerAddressRegister.deleted({
      payload: partnerAddress,
      cQMetadata,
    }); // apply event to model events
    partnerAddressRegister.commit(); // commit all events of model
  }
}
