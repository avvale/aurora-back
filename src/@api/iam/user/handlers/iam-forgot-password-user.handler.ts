import { IamFindAccountQuery } from '@app/iam/account';
import { IamForgotPasswordUserDto } from '../dto';
import { IamForgotPasswordUserInput } from '@api/graphql';
import { AuditingMeta, ICommandBus, IQueryBus, now, Operator, uuid } from '@aurorajs.dev/core';
import { Injectable, Logger } from '@nestjs/common';
import { IamUpdateUsersCommand } from '@app/iam/user';
import { MailerService } from '@nestjs-modules/mailer';
import { join } from 'node:path';

@Injectable()
export class IamForgotPasswordUserHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
        private readonly mailerService: MailerService,
    ) {}

    async main(
        payload: IamForgotPasswordUserInput |IamForgotPasswordUserDto,
        auditing?: AuditingMeta,
    ): Promise<boolean>
    {
        const account = await this.queryBus.ask(new IamFindAccountQuery(
            {
                where: {
                    [Operator.or]: [
                        { email: payload.email },
                        { username: payload.email },
                    ],
                },
            },
        ));

        const rememberToken = btoa(account.id + now().format('YYYYMMDDHHmmss') + uuid());

        await this.commandBus.dispatch(new IamUpdateUsersCommand(
            {
                rememberToken,
            },
            {
                where: {
                    accountId: account.id,
                },
            },
        ));

        this.mailerService
            .sendMail({
                to      : account.email,
                subject : 'Recordatorio de contraseña',
                template: join(process.cwd(), 'public', 'email', 'templates', 'forgot-password'), // The `.pug`, `.ejs` or `.hbs` extension is appended automatically.
                context : {
                    link      : 'http://localhost:4200/reset-password/' + rememberToken,
                    buttonText: 'Reset password.',
                },
            })
            .then(data =>
            {
                Logger.log(`[assignedDriverNotification] Mailer for assigned driver for transport , data: ${data}`, 'IamForgotPasswordUserHandler');
            })
            .catch(error =>
            {
                Logger.error(`[assignedDriverNotification] Error mailer, Error: ${error}`, 'IamForgotPasswordUserHandler');
            });

        return true;
    }
}