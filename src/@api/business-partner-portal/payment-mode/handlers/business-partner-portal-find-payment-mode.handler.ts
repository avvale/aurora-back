/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import { BusinessPartnerPortalPaymentMode } from '@api/graphql';
import { BusinessPartnerPortalFindPaymentModeQuery } from '@app/business-partner-portal/payment-mode';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalFindPaymentModeHandler {
  constructor(private readonly queryBus: IQueryBus) {}

  async main(
    queryStatement?: QueryStatement,
    constraint?: QueryStatement,
    timezone?: string,
  ): Promise<BusinessPartnerPortalPaymentMode> {
    const paymentMode = await this.queryBus.ask(
      new BusinessPartnerPortalFindPaymentModeQuery(
        queryStatement,
        constraint,
        {
          timezone,
        },
      ),
    );

    if (!paymentMode) {
      throw new NotFoundException(`BusinessPartnerPortalPaymentMode not found`);
    }

    return paymentMode;
  }
}
