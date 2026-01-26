/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
// export commands
export { BusinessPartnerPortalCreatePartnerAddressCommand } from './application/create/business-partner-portal-create-partner-address.command';
export { BusinessPartnerPortalDeletePartnerAddressByIdCommand } from './application/delete/business-partner-portal-delete-partner-address-by-id.command';
export { BusinessPartnerPortalUpdatePartnerAddressByIdCommand } from './application/update/business-partner-portal-update-partner-address-by-id.command';

// export queries
export { BusinessPartnerPortalFindPartnerAddressByIdQuery } from './application/find/business-partner-portal-find-partner-address-by-id.query';
export { BusinessPartnerPortalFindPartnerAddressQuery } from './application/find/business-partner-portal-find-partner-address.query';
export { BusinessPartnerPortalGetPartnerAddressesQuery } from './application/get/business-partner-portal-get-partner-addresses.query';
export { BusinessPartnerPortalPaginatePartnerAddressesQuery } from './application/paginate/business-partner-portal-paginate-partner-addresses.query';

// export mocks
export { businessPartnerPortalMockPartnerAddressData } from './infrastructure/mock/business-partner-portal-mock-partner-address.data';
export { BusinessPartnerPortalMockPartnerAddressRepository } from './infrastructure/mock/business-partner-portal-mock-partner-address.repository';
export { BusinessPartnerPortalMockPartnerAddressSeeder } from './infrastructure/mock/business-partner-portal-mock-partner-address.seeder';

// export events
export { BusinessPartnerPortalAddPartnerAddressesContextEvent } from './application/events/business-partner-portal-add-partner-addresses-context.event';
export { BusinessPartnerPortalCreatedPartnerAddressEvent } from './application/events/business-partner-portal-created-partner-address.event';
export { BusinessPartnerPortalCreatedPartnerAddressesEvent } from './application/events/business-partner-portal-created-partner-addresses.event';
export { BusinessPartnerPortalDeletedPartnerAddressEvent } from './application/events/business-partner-portal-deleted-partner-address.event';
export { BusinessPartnerPortalUpdatedPartnerAddressEvent } from './application/events/business-partner-portal-updated-partner-address.event';

// export command handlers
// can not export application command handlers, because Nest can't resolve dependencies

// export command services
// can not export application services, because Nest can't resolve dependencies

// domain
export { BusinessPartnerPortalPartnerAddress } from './domain/business-partner-portal-partner-address.aggregate';
export { BusinessPartnerPortalPartnerAddressMapper } from './domain/business-partner-portal-partner-address.mapper';
export { BusinessPartnerPortalIPartnerAddressRepository } from './domain/business-partner-portal-partner-address.repository';
export { BusinessPartnerPortalPartnerAddressResponse } from './domain/business-partner-portal-partner-address.response';

// infrastructure
export { BusinessPartnerPortalPartnerAddressModel } from './infrastructure/sequelize/business-partner-portal-sequelize-partner-address.model';
export { BusinessPartnerPortalSequelizePartnerAddressRepository } from './infrastructure/sequelize/business-partner-portal-sequelize-partner-address.repository';

// sagas
export { BusinessPartnerPortalPartnerAddressSagas } from './application/sagas/business-partner-portal-partner-address.sagas';

// command handlers
import { BusinessPartnerPortalCreatePartnerAddressCommandHandler } from './application/create/business-partner-portal-create-partner-address.command-handler';
import { BusinessPartnerPortalDeletePartnerAddressByIdCommandHandler } from './application/delete/business-partner-portal-delete-partner-address-by-id.command-handler';
import { BusinessPartnerPortalUpdatePartnerAddressByIdCommandHandler } from './application/update/business-partner-portal-update-partner-address-by-id.command-handler';

// query handlers
import { BusinessPartnerPortalFindPartnerAddressByIdQueryHandler } from './application/find/business-partner-portal-find-partner-address-by-id.query-handler';
import { BusinessPartnerPortalFindPartnerAddressQueryHandler } from './application/find/business-partner-portal-find-partner-address.query-handler';
import { BusinessPartnerPortalGetPartnerAddressesQueryHandler } from './application/get/business-partner-portal-get-partner-addresses.query-handler';
import { BusinessPartnerPortalPaginatePartnerAddressesQueryHandler } from './application/paginate/business-partner-portal-paginate-partner-addresses.query-handler';

// event handlers
import { BusinessPartnerPortalCreatedPartnerAddressEventHandler } from './application/events/business-partner-portal-created-partner-address.event-handler';
import { BusinessPartnerPortalCreatedPartnerAddressesEventHandler } from './application/events/business-partner-portal-created-partner-addresses.event-handler';
import { BusinessPartnerPortalDeletedPartnerAddressEventHandler } from './application/events/business-partner-portal-deleted-partner-address.event-handler';
import { BusinessPartnerPortalUpdatedPartnerAddressEventHandler } from './application/events/business-partner-portal-updated-partner-address.event-handler';

// services
import { BusinessPartnerPortalCreatePartnerAddressService } from './application/create/business-partner-portal-create-partner-address.service';
import { BusinessPartnerPortalDeletePartnerAddressByIdService } from './application/delete/business-partner-portal-delete-partner-address-by-id.service';
import { BusinessPartnerPortalFindPartnerAddressByIdService } from './application/find/business-partner-portal-find-partner-address-by-id.service';
import { BusinessPartnerPortalFindPartnerAddressService } from './application/find/business-partner-portal-find-partner-address.service';
import { BusinessPartnerPortalGetPartnerAddressesService } from './application/get/business-partner-portal-get-partner-addresses.service';
import { BusinessPartnerPortalPaginatePartnerAddressesService } from './application/paginate/business-partner-portal-paginate-partner-addresses.service';
import { BusinessPartnerPortalUpdatePartnerAddressByIdService } from './application/update/business-partner-portal-update-partner-address-by-id.service';

export const BusinessPartnerPortalPartnerAddressHandlers = [
  // commands
  BusinessPartnerPortalCreatePartnerAddressCommandHandler,
  BusinessPartnerPortalUpdatePartnerAddressByIdCommandHandler,
  BusinessPartnerPortalDeletePartnerAddressByIdCommandHandler,

  // queries
  BusinessPartnerPortalPaginatePartnerAddressesQueryHandler,
  BusinessPartnerPortalGetPartnerAddressesQueryHandler,
  BusinessPartnerPortalFindPartnerAddressQueryHandler,
  BusinessPartnerPortalFindPartnerAddressByIdQueryHandler,

  // events
  BusinessPartnerPortalCreatedPartnerAddressEventHandler,
  BusinessPartnerPortalCreatedPartnerAddressesEventHandler,
  BusinessPartnerPortalUpdatedPartnerAddressEventHandler,
  BusinessPartnerPortalDeletedPartnerAddressEventHandler,
];

export const BusinessPartnerPortalPartnerAddressServices = [
  BusinessPartnerPortalCreatePartnerAddressService,
  BusinessPartnerPortalPaginatePartnerAddressesService,
  BusinessPartnerPortalGetPartnerAddressesService,
  BusinessPartnerPortalFindPartnerAddressService,
  BusinessPartnerPortalFindPartnerAddressByIdService,
  BusinessPartnerPortalUpdatePartnerAddressByIdService,
  BusinessPartnerPortalDeletePartnerAddressByIdService,
];
