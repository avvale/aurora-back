/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import { BusinessPartnerPortalPaymentMode } from '@api/graphql';
import { BusinessPartnerPortalGetPaymentModesQuery } from '@app/business-partner-portal/payment-mode';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalGetPaymentModesHandler {
  constructor(private readonly queryBus: IQueryBus) {}

  async main(
    queryStatement?: QueryStatement,
    constraint?: QueryStatement,
    timezone?: string,
  ): Promise<BusinessPartnerPortalPaymentMode[]> {
    return await this.queryBus.ask(
      new BusinessPartnerPortalGetPaymentModesQuery(
        queryStatement,
        constraint,
        {
          timezone,
        },
      ),
    );
  }
}
