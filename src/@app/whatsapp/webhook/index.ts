// export commands
export { WhatsappCreateWebhookCommand } from './application/create/whatsapp-create-webhook.command';
export { WhatsappCreateWebhooksCommand } from './application/create/whatsapp-create-webhooks.command';
export { WhatsappUpdateWebhookByIdCommand } from './application/update/whatsapp-update-webhook-by-id.command';
export { WhatsappUpdateWebhooksCommand } from './application/update/whatsapp-update-webhooks.command';
export { WhatsappUpdateAndIncrementWebhooksCommand } from './application/update/whatsapp-update-and-increment-webhooks.command';
export { WhatsappUpsertWebhookCommand } from './application/upsert/whatsapp-upsert-webhook.command';
export { WhatsappDeleteWebhookByIdCommand } from './application/delete/whatsapp-delete-webhook-by-id.command';
export { WhatsappDeleteWebhooksCommand } from './application/delete/whatsapp-delete-webhooks.command';

// export queries
export { WhatsappPaginateWebhooksQuery } from './application/paginate/whatsapp-paginate-webhooks.query';
export { WhatsappGetWebhooksQuery } from './application/get/whatsapp-get-webhooks.query';
export { WhatsappFindWebhookQuery } from './application/find/whatsapp-find-webhook.query';
export { WhatsappFindWebhookByIdQuery } from './application/find/whatsapp-find-webhook-by-id.query';
export { WhatsappRawSQLWebhooksQuery } from './application/raw-sql/whatsapp-raw-sql-webhooks.query';
export { WhatsappCountWebhookQuery } from './application/count/whatsapp-count-webhook.query';
export { WhatsappMaxWebhookQuery } from './application/max/whatsapp-max-webhook.query';
export { WhatsappMinWebhookQuery } from './application/min/whatsapp-min-webhook.query';
export { WhatsappSumWebhookQuery } from './application/sum/whatsapp-sum-webhook.query';

// export mocks
export { whatsappMockWebhookData } from './infrastructure/mock/whatsapp-mock-webhook.data';
export { WhatsappMockWebhookSeeder } from './infrastructure/mock/whatsapp-mock-webhook.seeder';
export { WhatsappMockWebhookRepository } from './infrastructure/mock/whatsapp-mock-webhook.repository';

// export events
export { WhatsappAddWebhooksContextEvent } from './application/events/whatsapp-add-webhooks-context.event';
export { WhatsappCreatedWebhooksEvent } from './application/events/whatsapp-created-webhooks.event';
export { WhatsappCreatedWebhookEvent } from './application/events/whatsapp-created-webhook.event';
export { WhatsappDeletedWebhooksEvent } from './application/events/whatsapp-deleted-webhooks.event';
export { WhatsappDeletedWebhookEvent } from './application/events/whatsapp-deleted-webhook.event';
export { WhatsappUpdatedWebhooksEvent } from './application/events/whatsapp-updated-webhooks.event';
export { WhatsappUpdatedWebhookEvent } from './application/events/whatsapp-updated-webhook.event';
export { WhatsappUpdatedAndIncrementedWebhooksEvent } from './application/events/whatsapp-updated-and-incremented-webhooks.event';
export { WhatsappUpdatedAndIncrementedWebhookEvent } from './application/events/whatsapp-updated-and-incremented-webhook.event';

// export command handlers
// can not export application command handlers, because Nest can't resolve dependencies

// export command services
// can not export application services, because Nest can't resolve dependencies

// domain
export { WhatsappWebhook } from './domain/whatsapp-webhook.aggregate';
export { WhatsappWebhookMapper } from './domain/whatsapp-webhook.mapper';
export { WhatsappIWebhookRepository } from './domain/whatsapp-webhook.repository';
export { WhatsappWebhookResponse } from './domain/whatsapp-webhook.response';

// infrastructure
export { WhatsappWebhookModel } from './infrastructure/sequelize/whatsapp-sequelize-webhook.model';
export { WhatsappSequelizeWebhookRepository } from './infrastructure/sequelize/whatsapp-sequelize-webhook.repository';

// sagas
export { WhatsappWebhookSagas } from './application/sagas/whatsapp-webhook.sagas';

// command handlers
import { WhatsappCreateWebhookCommandHandler } from './application/create/whatsapp-create-webhook.command-handler';
import { WhatsappCreateWebhooksCommandHandler } from './application/create/whatsapp-create-webhooks.command-handler';
import { WhatsappUpdateWebhookByIdCommandHandler } from './application/update/whatsapp-update-webhook-by-id.command-handler';
import { WhatsappUpdateWebhooksCommandHandler } from './application/update/whatsapp-update-webhooks.command-handler';
import { WhatsappUpdateAndIncrementWebhooksCommandHandler } from './application/update/whatsapp-update-and-increment-webhooks.command-handler';
import { WhatsappUpsertWebhookCommandHandler } from './application/upsert/whatsapp-upsert-webhook.command-handler';
import { WhatsappDeleteWebhookByIdCommandHandler } from './application/delete/whatsapp-delete-webhook-by-id.command-handler';
import { WhatsappDeleteWebhooksCommandHandler } from './application/delete/whatsapp-delete-webhooks.command-handler';

// query handlers
import { WhatsappPaginateWebhooksQueryHandler } from './application/paginate/whatsapp-paginate-webhooks.query-handler';
import { WhatsappGetWebhooksQueryHandler } from './application/get/whatsapp-get-webhooks.query-handler';
import { WhatsappFindWebhookQueryHandler } from './application/find/whatsapp-find-webhook.query-handler';
import { WhatsappFindWebhookByIdQueryHandler } from './application/find/whatsapp-find-webhook-by-id.query-handler';
import { WhatsappRawSQLWebhooksQueryHandler } from './application/raw-sql/whatsapp-raw-sql-webhooks.query-handler';
import { WhatsappCountWebhookQueryHandler } from './application/count/whatsapp-count-webhook.query-handler';
import { WhatsappMaxWebhookQueryHandler } from './application/max/whatsapp-max-webhook.query-handler';
import { WhatsappMinWebhookQueryHandler } from './application/min/whatsapp-min-webhook.query-handler';
import { WhatsappSumWebhookQueryHandler } from './application/sum/whatsapp-sum-webhook.query-handler';

// event handlers
import { WhatsappCreatedWebhookEventHandler } from './application/events/whatsapp-created-webhook.event-handler';
import { WhatsappCreatedWebhooksEventHandler } from './application/events/whatsapp-created-webhooks.event-handler';
import { WhatsappUpdatedWebhookEventHandler } from './application/events/whatsapp-updated-webhook.event-handler';
import { WhatsappUpdatedWebhooksEventHandler } from './application/events/whatsapp-updated-webhooks.event-handler';
import { WhatsappUpdatedAndIncrementedWebhooksEventHandler } from './application/events/whatsapp-updated-and-incremented-webhooks.event-handler';
import { WhatsappDeletedWebhookEventHandler } from './application/events/whatsapp-deleted-webhook.event-handler';
import { WhatsappDeletedWebhooksEventHandler } from './application/events/whatsapp-deleted-webhooks.event-handler';

// services
import { WhatsappCreateWebhookService } from './application/create/whatsapp-create-webhook.service';
import { WhatsappCreateWebhooksService } from './application/create/whatsapp-create-webhooks.service';
import { WhatsappPaginateWebhooksService } from './application/paginate/whatsapp-paginate-webhooks.service';
import { WhatsappGetWebhooksService } from './application/get/whatsapp-get-webhooks.service';
import { WhatsappFindWebhookService } from './application/find/whatsapp-find-webhook.service';
import { WhatsappFindWebhookByIdService } from './application/find/whatsapp-find-webhook-by-id.service';
import { WhatsappRawSQLWebhooksService } from './application/raw-sql/whatsapp-raw-sql-webhooks.service';
import { WhatsappCountWebhookService } from './application/count/whatsapp-count-webhook.service';
import { WhatsappMaxWebhookService } from './application/max/whatsapp-max-webhook.service';
import { WhatsappMinWebhookService } from './application/min/whatsapp-min-webhook.service';
import { WhatsappSumWebhookService } from './application/sum/whatsapp-sum-webhook.service';
import { WhatsappUpdateWebhookByIdService } from './application/update/whatsapp-update-webhook-by-id.service';
import { WhatsappUpdateWebhooksService } from './application/update/whatsapp-update-webhooks.service';
import { WhatsappUpdateAndIncrementWebhooksService } from './application/update/whatsapp-update-and-increment-webhooks.service';
import { WhatsappUpsertWebhookService } from './application/upsert/whatsapp-upsert-webhook.service';
import { WhatsappDeleteWebhookByIdService } from './application/delete/whatsapp-delete-webhook-by-id.service';
import { WhatsappDeleteWebhooksService } from './application/delete/whatsapp-delete-webhooks.service';

export const WhatsappWebhookHandlers = [
    // commands
    WhatsappCreateWebhookCommandHandler,
    WhatsappCreateWebhooksCommandHandler,
    WhatsappUpdateWebhookByIdCommandHandler,
    WhatsappUpdateWebhooksCommandHandler,
    WhatsappUpdateAndIncrementWebhooksCommandHandler,
    WhatsappUpsertWebhookCommandHandler,
    WhatsappDeleteWebhookByIdCommandHandler,
    WhatsappDeleteWebhooksCommandHandler,

    // queries
    WhatsappPaginateWebhooksQueryHandler,
    WhatsappGetWebhooksQueryHandler,
    WhatsappFindWebhookQueryHandler,
    WhatsappFindWebhookByIdQueryHandler,
    WhatsappRawSQLWebhooksQueryHandler,
    WhatsappCountWebhookQueryHandler,
    WhatsappMaxWebhookQueryHandler,
    WhatsappMinWebhookQueryHandler,
    WhatsappSumWebhookQueryHandler,

    // events
    WhatsappCreatedWebhookEventHandler,
    WhatsappCreatedWebhooksEventHandler,
    WhatsappUpdatedWebhookEventHandler,
    WhatsappUpdatedWebhooksEventHandler,
    WhatsappUpdatedAndIncrementedWebhooksEventHandler,
    WhatsappDeletedWebhookEventHandler,
    WhatsappDeletedWebhooksEventHandler,
];

export const WhatsappWebhookServices = [
    WhatsappCreateWebhookService,
    WhatsappCreateWebhooksService,
    WhatsappPaginateWebhooksService,
    WhatsappGetWebhooksService,
    WhatsappFindWebhookService,
    WhatsappFindWebhookByIdService,
    WhatsappRawSQLWebhooksService,
    WhatsappCountWebhookService,
    WhatsappMaxWebhookService,
    WhatsappMinWebhookService,
    WhatsappSumWebhookService,
    WhatsappUpdateWebhookByIdService,
    WhatsappUpdateWebhooksService,
    WhatsappUpdateAndIncrementWebhooksService,
    WhatsappUpsertWebhookService,
    WhatsappDeleteWebhookByIdService,
    WhatsappDeleteWebhooksService,
];