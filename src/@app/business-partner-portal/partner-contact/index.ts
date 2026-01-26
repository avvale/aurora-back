/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
// export commands
export { BusinessPartnerPortalCreatePartnerContactCommand } from './application/create/business-partner-portal-create-partner-contact.command';
export { BusinessPartnerPortalDeletePartnerContactByIdCommand } from './application/delete/business-partner-portal-delete-partner-contact-by-id.command';
export { BusinessPartnerPortalUpdatePartnerContactByIdCommand } from './application/update/business-partner-portal-update-partner-contact-by-id.command';

// export queries
export { BusinessPartnerPortalFindPartnerContactByIdQuery } from './application/find/business-partner-portal-find-partner-contact-by-id.query';
export { BusinessPartnerPortalFindPartnerContactQuery } from './application/find/business-partner-portal-find-partner-contact.query';
export { BusinessPartnerPortalGetPartnerContactsQuery } from './application/get/business-partner-portal-get-partner-contacts.query';
export { BusinessPartnerPortalPaginatePartnerContactsQuery } from './application/paginate/business-partner-portal-paginate-partner-contacts.query';

// export mocks
export { businessPartnerPortalMockPartnerContactData } from './infrastructure/mock/business-partner-portal-mock-partner-contact.data';
export { BusinessPartnerPortalMockPartnerContactRepository } from './infrastructure/mock/business-partner-portal-mock-partner-contact.repository';
export { BusinessPartnerPortalMockPartnerContactSeeder } from './infrastructure/mock/business-partner-portal-mock-partner-contact.seeder';

// export events
export { BusinessPartnerPortalAddPartnerContactsContextEvent } from './application/events/business-partner-portal-add-partner-contacts-context.event';
export { BusinessPartnerPortalCreatedPartnerContactEvent } from './application/events/business-partner-portal-created-partner-contact.event';
export { BusinessPartnerPortalCreatedPartnerContactsEvent } from './application/events/business-partner-portal-created-partner-contacts.event';
export { BusinessPartnerPortalDeletedPartnerContactEvent } from './application/events/business-partner-portal-deleted-partner-contact.event';
export { BusinessPartnerPortalUpdatedPartnerContactEvent } from './application/events/business-partner-portal-updated-partner-contact.event';

// export command handlers
// can not export application command handlers, because Nest can't resolve dependencies

// export command services
// can not export application services, because Nest can't resolve dependencies

// domain
export { BusinessPartnerPortalPartnerContact } from './domain/business-partner-portal-partner-contact.aggregate';
export { BusinessPartnerPortalPartnerContactMapper } from './domain/business-partner-portal-partner-contact.mapper';
export { BusinessPartnerPortalIPartnerContactRepository } from './domain/business-partner-portal-partner-contact.repository';
export { BusinessPartnerPortalPartnerContactResponse } from './domain/business-partner-portal-partner-contact.response';

// infrastructure
export { BusinessPartnerPortalPartnerContactModel } from './infrastructure/sequelize/business-partner-portal-sequelize-partner-contact.model';
export { BusinessPartnerPortalSequelizePartnerContactRepository } from './infrastructure/sequelize/business-partner-portal-sequelize-partner-contact.repository';

// sagas
export { BusinessPartnerPortalPartnerContactSagas } from './application/sagas/business-partner-portal-partner-contact.sagas';

// command handlers
import { BusinessPartnerPortalCreatePartnerContactCommandHandler } from './application/create/business-partner-portal-create-partner-contact.command-handler';
import { BusinessPartnerPortalDeletePartnerContactByIdCommandHandler } from './application/delete/business-partner-portal-delete-partner-contact-by-id.command-handler';
import { BusinessPartnerPortalUpdatePartnerContactByIdCommandHandler } from './application/update/business-partner-portal-update-partner-contact-by-id.command-handler';

// query handlers
import { BusinessPartnerPortalFindPartnerContactByIdQueryHandler } from './application/find/business-partner-portal-find-partner-contact-by-id.query-handler';
import { BusinessPartnerPortalFindPartnerContactQueryHandler } from './application/find/business-partner-portal-find-partner-contact.query-handler';
import { BusinessPartnerPortalGetPartnerContactsQueryHandler } from './application/get/business-partner-portal-get-partner-contacts.query-handler';
import { BusinessPartnerPortalPaginatePartnerContactsQueryHandler } from './application/paginate/business-partner-portal-paginate-partner-contacts.query-handler';

// event handlers
import { BusinessPartnerPortalCreatedPartnerContactEventHandler } from './application/events/business-partner-portal-created-partner-contact.event-handler';
import { BusinessPartnerPortalCreatedPartnerContactsEventHandler } from './application/events/business-partner-portal-created-partner-contacts.event-handler';
import { BusinessPartnerPortalDeletedPartnerContactEventHandler } from './application/events/business-partner-portal-deleted-partner-contact.event-handler';
import { BusinessPartnerPortalUpdatedPartnerContactEventHandler } from './application/events/business-partner-portal-updated-partner-contact.event-handler';

// services
import { BusinessPartnerPortalCreatePartnerContactService } from './application/create/business-partner-portal-create-partner-contact.service';
import { BusinessPartnerPortalDeletePartnerContactByIdService } from './application/delete/business-partner-portal-delete-partner-contact-by-id.service';
import { BusinessPartnerPortalFindPartnerContactByIdService } from './application/find/business-partner-portal-find-partner-contact-by-id.service';
import { BusinessPartnerPortalFindPartnerContactService } from './application/find/business-partner-portal-find-partner-contact.service';
import { BusinessPartnerPortalGetPartnerContactsService } from './application/get/business-partner-portal-get-partner-contacts.service';
import { BusinessPartnerPortalPaginatePartnerContactsService } from './application/paginate/business-partner-portal-paginate-partner-contacts.service';
import { BusinessPartnerPortalUpdatePartnerContactByIdService } from './application/update/business-partner-portal-update-partner-contact-by-id.service';

export const BusinessPartnerPortalPartnerContactHandlers = [
  // commands
  BusinessPartnerPortalCreatePartnerContactCommandHandler,
  BusinessPartnerPortalUpdatePartnerContactByIdCommandHandler,
  BusinessPartnerPortalDeletePartnerContactByIdCommandHandler,

  // queries
  BusinessPartnerPortalPaginatePartnerContactsQueryHandler,
  BusinessPartnerPortalGetPartnerContactsQueryHandler,
  BusinessPartnerPortalFindPartnerContactQueryHandler,
  BusinessPartnerPortalFindPartnerContactByIdQueryHandler,

  // events
  BusinessPartnerPortalCreatedPartnerContactEventHandler,
  BusinessPartnerPortalCreatedPartnerContactsEventHandler,
  BusinessPartnerPortalUpdatedPartnerContactEventHandler,
  BusinessPartnerPortalDeletedPartnerContactEventHandler,
];

export const BusinessPartnerPortalPartnerContactServices = [
  BusinessPartnerPortalCreatePartnerContactService,
  BusinessPartnerPortalPaginatePartnerContactsService,
  BusinessPartnerPortalGetPartnerContactsService,
  BusinessPartnerPortalFindPartnerContactService,
  BusinessPartnerPortalFindPartnerContactByIdService,
  BusinessPartnerPortalUpdatePartnerContactByIdService,
  BusinessPartnerPortalDeletePartnerContactByIdService,
];
