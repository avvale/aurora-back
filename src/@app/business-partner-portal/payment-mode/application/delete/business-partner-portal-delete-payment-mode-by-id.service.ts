/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import { BusinessPartnerPortalIPaymentModeRepository } from '@app/business-partner-portal/payment-mode';
import { BusinessPartnerPortalPaymentModeId } from '@app/business-partner-portal/payment-mode/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class BusinessPartnerPortalDeletePaymentModeByIdService {
  constructor(
    private readonly publisher: EventPublisher,
    private readonly repository: BusinessPartnerPortalIPaymentModeRepository,
  ) {}

  async main(
    id: BusinessPartnerPortalPaymentModeId,
    constraint?: QueryStatement,
    cQMetadata?: CQMetadata,
  ): Promise<void> {
    // get object to delete
    const paymentMode = await this.repository.findById(id, {
      constraint,
      cQMetadata,
    });

    // it is not necessary to pass the constraint in the delete, if the object
    // is not found in the findById, an exception will be thrown.
    await this.repository.deleteById(paymentMode.id, {
      deleteOptions: cQMetadata?.repositoryOptions,
      cQMetadata,
    });

    // insert EventBus in object, to be able to apply and commit events
    const paymentModeRegister = this.publisher.mergeObjectContext(paymentMode);

    paymentModeRegister.deleted({
      payload: paymentMode,
      cQMetadata,
    }); // apply event to model events
    paymentModeRegister.commit(); // commit all events of model
  }
}
