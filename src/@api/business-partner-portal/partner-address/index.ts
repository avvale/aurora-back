/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
// export DTOs
export { BusinessPartnerPortalCreatePartnerAddressDto } from './dto/business-partner-portal-create-partner-address.dto';
export { BusinessPartnerPortalPartnerAddressDto } from './dto/business-partner-portal-partner-address.dto';
export { BusinessPartnerPortalUpdatePartnerAddressByIdDto } from './dto/business-partner-portal-update-partner-address-by-id.dto';
export { BusinessPartnerPortalUpdatePartnerAddressesDto } from './dto/business-partner-portal-update-partner-addresses.dto';

// export handlers
export { BusinessPartnerPortalCreatePartnerAddressHandler } from './handlers/business-partner-portal-create-partner-address.handler';
export { BusinessPartnerPortalDeletePartnerAddressByIdHandler } from './handlers/business-partner-portal-delete-partner-address-by-id.handler';
export { BusinessPartnerPortalFindPartnerAddressByIdHandler } from './handlers/business-partner-portal-find-partner-address-by-id.handler';
export { BusinessPartnerPortalFindPartnerAddressHandler } from './handlers/business-partner-portal-find-partner-address.handler';
export { BusinessPartnerPortalGetPartnerAddressesHandler } from './handlers/business-partner-portal-get-partner-addresses.handler';
export { BusinessPartnerPortalPaginatePartnerAddressesHandler } from './handlers/business-partner-portal-paginate-partner-addresses.handler';
export { BusinessPartnerPortalUpdatePartnerAddressByIdHandler } from './handlers/business-partner-portal-update-partner-address-by-id.handler';

// export controllers
export { BusinessPartnerPortalCreatePartnerAddressController } from './controllers/business-partner-portal-create-partner-address.controller';
export { BusinessPartnerPortalDeletePartnerAddressByIdController } from './controllers/business-partner-portal-delete-partner-address-by-id.controller';
export { BusinessPartnerPortalFindPartnerAddressByIdController } from './controllers/business-partner-portal-find-partner-address-by-id.controller';
export { BusinessPartnerPortalFindPartnerAddressController } from './controllers/business-partner-portal-find-partner-address.controller';
export { BusinessPartnerPortalGetPartnerAddressesController } from './controllers/business-partner-portal-get-partner-addresses.controller';
export { BusinessPartnerPortalPaginatePartnerAddressesController } from './controllers/business-partner-portal-paginate-partner-addresses.controller';
export { BusinessPartnerPortalUpdatePartnerAddressByIdController } from './controllers/business-partner-portal-update-partner-address-by-id.controller';

// export resolvers
export { BusinessPartnerPortalCreatePartnerAddressResolver } from './resolvers/business-partner-portal-create-partner-address.resolver';
export { BusinessPartnerPortalDeletePartnerAddressByIdResolver } from './resolvers/business-partner-portal-delete-partner-address-by-id.resolver';
export { BusinessPartnerPortalFindPartnerAddressByIdResolver } from './resolvers/business-partner-portal-find-partner-address-by-id.resolver';
export { BusinessPartnerPortalFindPartnerAddressResolver } from './resolvers/business-partner-portal-find-partner-address.resolver';
export { BusinessPartnerPortalGetPartnerAddressesResolver } from './resolvers/business-partner-portal-get-partner-addresses.resolver';
export { BusinessPartnerPortalPaginatePartnerAddressesResolver } from './resolvers/business-partner-portal-paginate-partner-addresses.resolver';
export { BusinessPartnerPortalUpdatePartnerAddressByIdResolver } from './resolvers/business-partner-portal-update-partner-address-by-id.resolver';

// import controllers
import { BusinessPartnerPortalCreatePartnerAddressController } from './controllers/business-partner-portal-create-partner-address.controller';
import { BusinessPartnerPortalDeletePartnerAddressByIdController } from './controllers/business-partner-portal-delete-partner-address-by-id.controller';
import { BusinessPartnerPortalFindPartnerAddressByIdController } from './controllers/business-partner-portal-find-partner-address-by-id.controller';
import { BusinessPartnerPortalFindPartnerAddressController } from './controllers/business-partner-portal-find-partner-address.controller';
import { BusinessPartnerPortalGetPartnerAddressesController } from './controllers/business-partner-portal-get-partner-addresses.controller';
import { BusinessPartnerPortalPaginatePartnerAddressesController } from './controllers/business-partner-portal-paginate-partner-addresses.controller';
import { BusinessPartnerPortalUpdatePartnerAddressByIdController } from './controllers/business-partner-portal-update-partner-address-by-id.controller';

// import resolvers
import { BusinessPartnerPortalCreatePartnerAddressResolver } from './resolvers/business-partner-portal-create-partner-address.resolver';
import { BusinessPartnerPortalDeletePartnerAddressByIdResolver } from './resolvers/business-partner-portal-delete-partner-address-by-id.resolver';
import { BusinessPartnerPortalFindPartnerAddressByIdResolver } from './resolvers/business-partner-portal-find-partner-address-by-id.resolver';
import { BusinessPartnerPortalFindPartnerAddressResolver } from './resolvers/business-partner-portal-find-partner-address.resolver';
import { BusinessPartnerPortalGetPartnerAddressesResolver } from './resolvers/business-partner-portal-get-partner-addresses.resolver';
import { BusinessPartnerPortalPaginatePartnerAddressesResolver } from './resolvers/business-partner-portal-paginate-partner-addresses.resolver';
import { BusinessPartnerPortalUpdatePartnerAddressByIdResolver } from './resolvers/business-partner-portal-update-partner-address-by-id.resolver';

// import handlers
import { BusinessPartnerPortalCreatePartnerAddressHandler } from './handlers/business-partner-portal-create-partner-address.handler';
import { BusinessPartnerPortalDeletePartnerAddressByIdHandler } from './handlers/business-partner-portal-delete-partner-address-by-id.handler';
import { BusinessPartnerPortalFindPartnerAddressByIdHandler } from './handlers/business-partner-portal-find-partner-address-by-id.handler';
import { BusinessPartnerPortalFindPartnerAddressHandler } from './handlers/business-partner-portal-find-partner-address.handler';
import { BusinessPartnerPortalGetPartnerAddressesHandler } from './handlers/business-partner-portal-get-partner-addresses.handler';
import { BusinessPartnerPortalPaginatePartnerAddressesHandler } from './handlers/business-partner-portal-paginate-partner-addresses.handler';
import { BusinessPartnerPortalUpdatePartnerAddressByIdHandler } from './handlers/business-partner-portal-update-partner-address-by-id.handler';

// import seeder
import { BusinessPartnerPortalPartnerAddressSeeder } from './seeder/business-partner-portal-partner-address.seeder';

export const BusinessPartnerPortalPartnerAddressApiControllers = [
  BusinessPartnerPortalCreatePartnerAddressController,
  BusinessPartnerPortalPaginatePartnerAddressesController,
  BusinessPartnerPortalGetPartnerAddressesController,
  BusinessPartnerPortalFindPartnerAddressByIdController,
  BusinessPartnerPortalFindPartnerAddressController,
  BusinessPartnerPortalUpdatePartnerAddressByIdController,
  BusinessPartnerPortalDeletePartnerAddressByIdController,
];

export const BusinessPartnerPortalPartnerAddressApiResolvers = [
  BusinessPartnerPortalCreatePartnerAddressResolver,
  BusinessPartnerPortalPaginatePartnerAddressesResolver,
  BusinessPartnerPortalGetPartnerAddressesResolver,
  BusinessPartnerPortalFindPartnerAddressByIdResolver,
  BusinessPartnerPortalFindPartnerAddressResolver,
  BusinessPartnerPortalUpdatePartnerAddressByIdResolver,
  BusinessPartnerPortalDeletePartnerAddressByIdResolver,
];

export const BusinessPartnerPortalPartnerAddressApiHandlers = [
  BusinessPartnerPortalCreatePartnerAddressHandler,
  BusinessPartnerPortalPaginatePartnerAddressesHandler,
  BusinessPartnerPortalGetPartnerAddressesHandler,
  BusinessPartnerPortalFindPartnerAddressByIdHandler,
  BusinessPartnerPortalFindPartnerAddressHandler,
  BusinessPartnerPortalUpdatePartnerAddressByIdHandler,
  BusinessPartnerPortalDeletePartnerAddressByIdHandler,
];

export const BusinessPartnerPortalPartnerAddressApiServices = [
  BusinessPartnerPortalPartnerAddressSeeder,
];
