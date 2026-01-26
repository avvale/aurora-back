/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import { BusinessPartnerPortalBusinessPartner } from '@api/graphql';
import { BusinessPartnerPortalFindBusinessPartnerByIdQuery } from '@app/business-partner-portal/business-partner';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalFindBusinessPartnerByIdHandler {
  constructor(private readonly queryBus: IQueryBus) {}

  async main(
    id: string,
    constraint?: QueryStatement,
    timezone?: string,
  ): Promise<BusinessPartnerPortalBusinessPartner> {
    const businessPartner = await this.queryBus.ask(
      new BusinessPartnerPortalFindBusinessPartnerByIdQuery(id, constraint, {
        timezone,
      }),
    );

    if (!businessPartner) {
      throw new NotFoundException(
        `BusinessPartnerPortalBusinessPartner with id: ${id}, not found`,
      );
    }

    return businessPartner;
  }
}
