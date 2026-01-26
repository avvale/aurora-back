/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalIPaymentModeRepository,
  BusinessPartnerPortalPaymentMode,
} from '@app/business-partner-portal/payment-mode';
import {
  BusinessPartnerPortalPaymentModeCode,
  BusinessPartnerPortalPaymentModeCreatedAt,
  BusinessPartnerPortalPaymentModeDescription,
  BusinessPartnerPortalPaymentModeExternalId,
  BusinessPartnerPortalPaymentModeId,
  BusinessPartnerPortalPaymentModeIsAccountNumberRequired,
  BusinessPartnerPortalPaymentModeIsActive,
  BusinessPartnerPortalPaymentModeIsRecurringSupported,
  BusinessPartnerPortalPaymentModeIsRoutingInfoRequired,
  BusinessPartnerPortalPaymentModeMeta,
  BusinessPartnerPortalPaymentModeName,
  BusinessPartnerPortalPaymentModeSort,
  BusinessPartnerPortalPaymentModeType,
  BusinessPartnerPortalPaymentModeUpdatedAt,
} from '@app/business-partner-portal/payment-mode/domain/value-objects';
import { CQMetadata } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class BusinessPartnerPortalCreatePaymentModeService {
  constructor(
    private readonly publisher: EventPublisher,
    private readonly repository: BusinessPartnerPortalIPaymentModeRepository,
  ) {}

  async main(
    payload: {
      id: BusinessPartnerPortalPaymentModeId;
      externalId: BusinessPartnerPortalPaymentModeExternalId;
      code: BusinessPartnerPortalPaymentModeCode;
      name: BusinessPartnerPortalPaymentModeName;
      description: BusinessPartnerPortalPaymentModeDescription;
      type: BusinessPartnerPortalPaymentModeType;
      isAccountNumberRequired: BusinessPartnerPortalPaymentModeIsAccountNumberRequired;
      isRoutingInfoRequired: BusinessPartnerPortalPaymentModeIsRoutingInfoRequired;
      isRecurringSupported: BusinessPartnerPortalPaymentModeIsRecurringSupported;
      sort: BusinessPartnerPortalPaymentModeSort;
      isActive: BusinessPartnerPortalPaymentModeIsActive;
      meta: BusinessPartnerPortalPaymentModeMeta;
    },
    cQMetadata?: CQMetadata,
  ): Promise<void> {
    // create aggregate with factory pattern
    const paymentMode = BusinessPartnerPortalPaymentMode.register(
      payload.id,
      undefined, // rowId
      payload.externalId,
      payload.code,
      payload.name,
      payload.description,
      payload.type,
      payload.isAccountNumberRequired,
      payload.isRoutingInfoRequired,
      payload.isRecurringSupported,
      payload.sort,
      payload.isActive,
      payload.meta,
      new BusinessPartnerPortalPaymentModeCreatedAt({ currentTimestamp: true }),
      new BusinessPartnerPortalPaymentModeUpdatedAt({ currentTimestamp: true }),
      null, // deletedAt
    );

    await this.repository.create(paymentMode, {
      createOptions: cQMetadata?.repositoryOptions,
    });

    // merge EventBus methods with object returned by the repository, to be able to apply and commit events
    const paymentModeRegister = this.publisher.mergeObjectContext(paymentMode);

    paymentModeRegister.created({
      payload: paymentMode,
      cQMetadata,
    }); // apply event to model events
    paymentModeRegister.commit(); // commit all events of model
  }
}
