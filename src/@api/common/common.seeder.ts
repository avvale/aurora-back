import { Injectable } from '@nestjs/common';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';

// data
import { CreateLangsCommand } from '@app/common/lang/application/create/create-langs.command';
import { langs } from '@app/common/lang/infrastructure/mock/mock-lang.data';

// permissions and bounded contexts
// import { CreatePermissionsCommand } from '@app/iam/permission/application/create/create-permissions.command';
// import { CreateBoundedContextsCommand } from '@app/iam/bounded-context/application/create/create-bounded-contexts.command';
// import { boundedContexts, permissions } from '@app/common/common.seed';

@Injectable()
export class CommonSeeder
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(): Promise<boolean>
    {
        // seed permissions and bounded contexts
        // await this.commandBus.dispatch(new CreateBoundedContextsCommand(boundedContexts, { timezone: process.env.TZ }));
        // await this.commandBus.dispatch(new CreatePermissionsCommand(permissions, { timezone: process.env.TZ }));

        // seed tabla with lands
        await this.commandBus.dispatch(new CreateLangsCommand(langs));

        return true;
    }
}