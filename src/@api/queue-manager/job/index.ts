// controllers
import { QueueManagerCreateJobController } from './controllers/queue-manager-create-job.controller';
import { QueueManagerCreateJobsController } from './controllers/queue-manager-create-jobs.controller';
import { QueueManagerPaginateJobsController } from './controllers/queue-manager-paginate-jobs.controller';
import { QueueManagerGetJobsController } from './controllers/queue-manager-get-jobs.controller';
import { QueueManagerFindJobByIdController } from './controllers/queue-manager-find-job-by-id.controller';
import { QueueManagerFindJobController } from './controllers/queue-manager-find-job.controller';
import { QueueManagerUpdateJobByIdController } from './controllers/queue-manager-update-job-by-id.controller';
import { QueueManagerUpdateJobsController } from './controllers/queue-manager-update-jobs.controller';
import { QueueManagerUpsertJobController } from './controllers/queue-manager-upsert-job.controller';
import { QueueManagerDeleteJobByIdController } from './controllers/queue-manager-delete-job-by-id.controller';
import { QueueManagerDeleteJobsController } from './controllers/queue-manager-delete-jobs.controller';

// resolvers
import { QueueManagerCreateJobResolver } from './resolvers/queue-manager-create-job.resolver';
import { QueueManagerCreateJobsResolver } from './resolvers/queue-manager-create-jobs.resolver';
import { QueueManagerPaginateJobsResolver } from './resolvers/queue-manager-paginate-jobs.resolver';
import { QueueManagerGetJobsResolver } from './resolvers/queue-manager-get-jobs.resolver';
import { QueueManagerFindJobByIdResolver } from './resolvers/queue-manager-find-job-by-id.resolver';
import { QueueManagerFindJobResolver } from './resolvers/queue-manager-find-job.resolver';
import { QueueManagerUpdateJobByIdResolver } from './resolvers/queue-manager-update-job-by-id.resolver';
import { QueueManagerUpdateJobsResolver } from './resolvers/queue-manager-update-jobs.resolver';
import { QueueManagerUpsertJobResolver } from './resolvers/queue-manager-upsert-job.resolver';
import { QueueManagerDeleteJobByIdResolver } from './resolvers/queue-manager-delete-job-by-id.resolver';
import { QueueManagerDeleteJobsResolver } from './resolvers/queue-manager-delete-jobs.resolver';

// handlers
import { QueueManagerCreateJobHandler } from './handlers/queue-manager-create-job.handler';
import { QueueManagerCreateJobsHandler } from './handlers/queue-manager-create-jobs.handler';
import { QueueManagerPaginateJobsHandler } from './handlers/queue-manager-paginate-jobs.handler';
import { QueueManagerGetJobsHandler } from './handlers/queue-manager-get-jobs.handler';
import { QueueManagerFindJobByIdHandler } from './handlers/queue-manager-find-job-by-id.handler';
import { QueueManagerFindJobHandler } from './handlers/queue-manager-find-job.handler';
import { QueueManagerUpdateJobByIdHandler } from './handlers/queue-manager-update-job-by-id.handler';
import { QueueManagerUpdateJobsHandler } from './handlers/queue-manager-update-jobs.handler';
import { QueueManagerUpsertJobHandler } from './handlers/queue-manager-upsert-job.handler';
import { QueueManagerDeleteJobByIdHandler } from './handlers/queue-manager-delete-job-by-id.handler';
import { QueueManagerDeleteJobsHandler } from './handlers/queue-manager-delete-jobs.handler';

// seeder
import { QueueManagerJobSeeder } from './seeder/queue-manager-job.seeder';

export const QueueManagerJobControllers = [
    QueueManagerCreateJobController,
    QueueManagerCreateJobsController,
    QueueManagerPaginateJobsController,
    QueueManagerGetJobsController,
    QueueManagerFindJobByIdController,
    QueueManagerFindJobController,
    QueueManagerUpdateJobByIdController,
    QueueManagerUpdateJobsController,
    QueueManagerUpsertJobController,
    QueueManagerDeleteJobByIdController,
    QueueManagerDeleteJobsController,
];

export const QueueManagerJobResolvers = [
    QueueManagerCreateJobResolver,
    QueueManagerCreateJobsResolver,
    QueueManagerPaginateJobsResolver,
    QueueManagerGetJobsResolver,
    QueueManagerFindJobByIdResolver,
    QueueManagerFindJobResolver,
    QueueManagerUpdateJobByIdResolver,
    QueueManagerUpdateJobsResolver,
    QueueManagerUpsertJobResolver,
    QueueManagerDeleteJobByIdResolver,
    QueueManagerDeleteJobsResolver,
];

export const QueueManagerJobApiHandlers = [
    QueueManagerCreateJobHandler,
    QueueManagerCreateJobsHandler,
    QueueManagerPaginateJobsHandler,
    QueueManagerGetJobsHandler,
    QueueManagerFindJobByIdHandler,
    QueueManagerFindJobHandler,
    QueueManagerUpdateJobByIdHandler,
    QueueManagerUpdateJobsHandler,
    QueueManagerUpsertJobHandler,
    QueueManagerDeleteJobByIdHandler,
    QueueManagerDeleteJobsHandler,
];

export const QueueManagerJobServices = [
    QueueManagerJobSeeder,
];