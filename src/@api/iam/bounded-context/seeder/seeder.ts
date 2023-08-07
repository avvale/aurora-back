import { NestFactory } from '@nestjs/core';
import { ICommandBus } from '@aurorajs.dev/core';
import { IamCreateBoundedContextsCommand, iamMockBoundedContextData } from '@app/iam/bounded-context';
import { SeederModule } from './seeder.module';

export class Seeder
{
    main(): void
    {
        NestFactory.createApplicationContext(SeederModule).then(appContext =>
        {
            const commandBus = appContext.get(ICommandBus);
            commandBus.dispatch(new IamCreateBoundedContextsCommand(iamMockBoundedContextData, { timezone: process.env.TZ }));
            appContext.close();
        });
    }
}
new Seeder().main();