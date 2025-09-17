// export DTOs
export { SupportIssueDto } from './dto/support-issue.dto';
export { SupportCreateIssueDto } from './dto/support-create-issue.dto';
export { SupportUpdateIssueByIdDto } from './dto/support-update-issue-by-id.dto';
export { SupportUpdateIssuesDto } from './dto/support-update-issues.dto';

// export handlers
export { SupportCreateIssueHandler } from './handlers/support-create-issue.handler';
export { SupportPaginateIssuesHandler } from './handlers/support-paginate-issues.handler';
export { SupportGetIssuesHandler } from './handlers/support-get-issues.handler';
export { SupportFindIssueByIdHandler } from './handlers/support-find-issue-by-id.handler';
export { SupportFindIssueHandler } from './handlers/support-find-issue.handler';
export { SupportUpdateIssueByIdHandler } from './handlers/support-update-issue-by-id.handler';
export { SupportDeleteIssueByIdHandler } from './handlers/support-delete-issue-by-id.handler';

// export controllers
export { SupportCreateIssueController } from './controllers/support-create-issue.controller';
export { SupportPaginateIssuesController } from './controllers/support-paginate-issues.controller';
export { SupportGetIssuesController } from './controllers/support-get-issues.controller';
export { SupportFindIssueByIdController } from './controllers/support-find-issue-by-id.controller';
export { SupportFindIssueController } from './controllers/support-find-issue.controller';
export { SupportUpdateIssueByIdController } from './controllers/support-update-issue-by-id.controller';
export { SupportDeleteIssueByIdController } from './controllers/support-delete-issue-by-id.controller';

// export resolvers
export { SupportCreateIssueResolver } from './resolvers/support-create-issue.resolver';
export { SupportPaginateIssuesResolver } from './resolvers/support-paginate-issues.resolver';
export { SupportGetIssuesResolver } from './resolvers/support-get-issues.resolver';
export { SupportFindIssueByIdResolver } from './resolvers/support-find-issue-by-id.resolver';
export { SupportFindIssueResolver } from './resolvers/support-find-issue.resolver';
export { SupportUpdateIssueByIdResolver } from './resolvers/support-update-issue-by-id.resolver';
export { SupportDeleteIssueByIdResolver } from './resolvers/support-delete-issue-by-id.resolver';

// import controllers
import { SupportCreateIssueController } from './controllers/support-create-issue.controller';
import { SupportPaginateIssuesController } from './controllers/support-paginate-issues.controller';
import { SupportGetIssuesController } from './controllers/support-get-issues.controller';
import { SupportFindIssueByIdController } from './controllers/support-find-issue-by-id.controller';
import { SupportFindIssueController } from './controllers/support-find-issue.controller';
import { SupportUpdateIssueByIdController } from './controllers/support-update-issue-by-id.controller';
import { SupportDeleteIssueByIdController } from './controllers/support-delete-issue-by-id.controller';

// import resolvers
import { SupportCreateIssueResolver } from './resolvers/support-create-issue.resolver';
import { SupportPaginateIssuesResolver } from './resolvers/support-paginate-issues.resolver';
import { SupportGetIssuesResolver } from './resolvers/support-get-issues.resolver';
import { SupportFindIssueByIdResolver } from './resolvers/support-find-issue-by-id.resolver';
import { SupportFindIssueResolver } from './resolvers/support-find-issue.resolver';
import { SupportUpdateIssueByIdResolver } from './resolvers/support-update-issue-by-id.resolver';
import { SupportDeleteIssueByIdResolver } from './resolvers/support-delete-issue-by-id.resolver';

// import handlers
import { SupportCreateIssueHandler } from './handlers/support-create-issue.handler';
import { SupportPaginateIssuesHandler } from './handlers/support-paginate-issues.handler';
import { SupportGetIssuesHandler } from './handlers/support-get-issues.handler';
import { SupportFindIssueByIdHandler } from './handlers/support-find-issue-by-id.handler';
import { SupportFindIssueHandler } from './handlers/support-find-issue.handler';
import { SupportUpdateIssueByIdHandler } from './handlers/support-update-issue-by-id.handler';
import { SupportDeleteIssueByIdHandler } from './handlers/support-delete-issue-by-id.handler';

// import seeder
import { SupportIssueSeeder } from './seeder/support-issue.seeder';

export const SupportIssueApiControllers = [
    SupportCreateIssueController,
    SupportPaginateIssuesController,
    SupportGetIssuesController,
    SupportFindIssueByIdController,
    SupportFindIssueController,
    SupportUpdateIssueByIdController,
    SupportDeleteIssueByIdController,
];

export const SupportIssueApiResolvers = [
    SupportCreateIssueResolver,
    SupportPaginateIssuesResolver,
    SupportGetIssuesResolver,
    SupportFindIssueByIdResolver,
    SupportFindIssueResolver,
    SupportUpdateIssueByIdResolver,
    SupportDeleteIssueByIdResolver,
];

export const SupportIssueApiHandlers = [
    SupportCreateIssueHandler,
    SupportPaginateIssuesHandler,
    SupportGetIssuesHandler,
    SupportFindIssueByIdHandler,
    SupportFindIssueHandler,
    SupportUpdateIssueByIdHandler,
    SupportDeleteIssueByIdHandler,
];

export const SupportIssueApiServices = [
    SupportIssueSeeder,
];
