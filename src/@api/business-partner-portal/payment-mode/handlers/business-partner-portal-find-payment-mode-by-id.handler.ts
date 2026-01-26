/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import { BusinessPartnerPortalPaymentMode } from '@api/graphql';
import { BusinessPartnerPortalFindPaymentModeByIdQuery } from '@app/business-partner-portal/payment-mode';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalFindPaymentModeByIdHandler {
  constructor(private readonly queryBus: IQueryBus) {}

  async main(
    id: string,
    constraint?: QueryStatement,
    timezone?: string,
  ): Promise<BusinessPartnerPortalPaymentMode> {
    const paymentMode = await this.queryBus.ask(
      new BusinessPartnerPortalFindPaymentModeByIdQuery(id, constraint, {
        timezone,
      }),
    );

    if (!paymentMode) {
      throw new NotFoundException(
        `BusinessPartnerPortalPaymentMode with id: ${id}, not found`,
      );
    }

    return paymentMode;
  }
}
