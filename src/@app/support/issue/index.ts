// export commands
export { SupportCreateIssueCommand } from './application/create/support-create-issue.command';
export { SupportUpdateIssueByIdCommand } from './application/update/support-update-issue-by-id.command';
export { SupportDeleteIssueByIdCommand } from './application/delete/support-delete-issue-by-id.command';

// export queries
export { SupportPaginateIssuesQuery } from './application/paginate/support-paginate-issues.query';
export { SupportGetIssuesQuery } from './application/get/support-get-issues.query';
export { SupportFindIssueQuery } from './application/find/support-find-issue.query';
export { SupportFindIssueByIdQuery } from './application/find/support-find-issue-by-id.query';

// export mocks
export { supportMockIssueData } from './infrastructure/mock/support-mock-issue.data';
export { SupportMockIssueSeeder } from './infrastructure/mock/support-mock-issue.seeder';
export { SupportMockIssueRepository } from './infrastructure/mock/support-mock-issue.repository';

// export events
export { SupportAddIssuesContextEvent } from './application/events/support-add-issues-context.event';
export { SupportCreatedIssuesEvent } from './application/events/support-created-issues.event';
export { SupportCreatedIssueEvent } from './application/events/support-created-issue.event';
export { SupportDeletedIssueEvent } from './application/events/support-deleted-issue.event';
export { SupportUpdatedIssueEvent } from './application/events/support-updated-issue.event';

// export command handlers
// can not export application command handlers, because Nest can't resolve dependencies

// export command services
// can not export application services, because Nest can't resolve dependencies

// domain
export { SupportIssue } from './domain/support-issue.aggregate';
export { SupportIssueMapper } from './domain/support-issue.mapper';
export { SupportIIssueRepository } from './domain/support-issue.repository';
export { SupportIssueResponse } from './domain/support-issue.response';

// infrastructure
export { SupportIssueModel } from './infrastructure/sequelize/support-sequelize-issue.model';
export { SupportSequelizeIssueRepository } from './infrastructure/sequelize/support-sequelize-issue.repository';

// sagas
export { SupportIssueSagas } from './application/sagas/support-issue.sagas';

// command handlers
import { SupportCreateIssueCommandHandler } from './application/create/support-create-issue.command-handler';
import { SupportUpdateIssueByIdCommandHandler } from './application/update/support-update-issue-by-id.command-handler';
import { SupportDeleteIssueByIdCommandHandler } from './application/delete/support-delete-issue-by-id.command-handler';

// query handlers
import { SupportPaginateIssuesQueryHandler } from './application/paginate/support-paginate-issues.query-handler';
import { SupportGetIssuesQueryHandler } from './application/get/support-get-issues.query-handler';
import { SupportFindIssueQueryHandler } from './application/find/support-find-issue.query-handler';
import { SupportFindIssueByIdQueryHandler } from './application/find/support-find-issue-by-id.query-handler';

// event handlers
import { SupportCreatedIssueEventHandler } from './application/events/support-created-issue.event-handler';
import { SupportCreatedIssuesEventHandler } from './application/events/support-created-issues.event-handler';
import { SupportUpdatedIssueEventHandler } from './application/events/support-updated-issue.event-handler';
import { SupportDeletedIssueEventHandler } from './application/events/support-deleted-issue.event-handler';

// services
import { SupportCreateIssueService } from './application/create/support-create-issue.service';
import { SupportPaginateIssuesService } from './application/paginate/support-paginate-issues.service';
import { SupportGetIssuesService } from './application/get/support-get-issues.service';
import { SupportFindIssueService } from './application/find/support-find-issue.service';
import { SupportFindIssueByIdService } from './application/find/support-find-issue-by-id.service';
import { SupportUpdateIssueByIdService } from './application/update/support-update-issue-by-id.service';
import { SupportDeleteIssueByIdService } from './application/delete/support-delete-issue-by-id.service';

export const SupportIssueHandlers = [
    // commands
    SupportCreateIssueCommandHandler,
    SupportUpdateIssueByIdCommandHandler,
    SupportDeleteIssueByIdCommandHandler,

    // queries
    SupportPaginateIssuesQueryHandler,
    SupportGetIssuesQueryHandler,
    SupportFindIssueQueryHandler,
    SupportFindIssueByIdQueryHandler,

    // events
    SupportCreatedIssueEventHandler,
    SupportCreatedIssuesEventHandler,
    SupportUpdatedIssueEventHandler,
    SupportDeletedIssueEventHandler,
];

export const SupportIssueServices = [
    SupportCreateIssueService,
    SupportPaginateIssuesService,
    SupportGetIssuesService,
    SupportFindIssueService,
    SupportFindIssueByIdService,
    SupportUpdateIssueByIdService,
    SupportDeleteIssueByIdService,
];