import { MicrosoftGraphTransport } from '@app/ms-email';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { HttpModule, HttpService } from '@nestjs/axios';
import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as handlebarsHelpers from 'handlebars-helpers';
import { AcceptLanguageResolver, I18nModule, I18nService, QueryResolver } from 'nestjs-i18n';
import { join } from 'node:path';

const customI18nHelper = (i18nService: I18nService) =>
{
    return (key: string, context: any) =>
    {
        const lang = context?.data?.root?.lang || 'en';
        const args = context?.hash || {};
        return i18nService.t(key, { lang, args });
    };
};

@Module({})
export class MicrosoftGraphMailerClientModule
{
    public static forRootAsync(): DynamicModule
    {
        if (process.env.MAILER_ENABLED !== 'true')
        {
            return {
                module: MicrosoftGraphMailerClientModule,
            };
        }

        const srcPath = join(__dirname, '..', '..');

        return {
            module : MicrosoftGraphMailerClientModule,
            imports: [
                I18nModule.forRoot({
                    fallbackLanguage: 'en',
                    loaderOptions   : {
                        path : join(srcPath, 'i18n'),
                        watch: true,
                    },
                    resolvers: [
                        {
                            use: QueryResolver, options: ['lang'],
                        },
                        AcceptLanguageResolver,
                    ],
                }),
                MailerModule.forRootAsync({
                    imports: [
                        ConfigModule,
                        HttpModule,
                    ],
                    inject: [
                        ConfigService,
                        I18nService,
                        HttpService,
                    ],
                    useFactory: (
                        configService: ConfigService,
                        i18nService: I18nService,
                        httpService: HttpService,
                    ) => ({
                        transport: new MicrosoftGraphTransport(
                            httpService,
                            {
                                tenantId    : configService.get<string>('MS_GRAPH_TENANT_ID'),
                                clientId    : configService.get<string>('MS_GRAPH_CLIENT_ID'),
                                clientSecret: configService.get<string>('MS_GRAPH_CLIENT_SECRET'),
                                from        : configService.get<string>('MS_GRAPH_MAIL_FROM'),
                                userId      : configService.get<string>('MS_GRAPH_USER_ID'),
                            },
                        ),
                        defaults: {
                            from: configService.get<string>('MAILER_FROM'),
                        },
                        template: {
                            dir    : join(srcPath, 'assets', 'email', 'templates'),
                            adapter: new HandlebarsAdapter({
                                ...handlebarsHelpers(),
                                t: customI18nHelper(i18nService),
                            }),
                            options: {
                                strict: true,
                            },
                        },
                    }),
                }),
            ],
        };
    }
}
