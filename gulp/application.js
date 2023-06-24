/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('node:fs');
const cp = require('node:child_process');
const fse = require('fs-extra');
const { src, dest, series } = require('gulp');
const jeditor = require('gulp-json-editor');
const codeWriter = require('./helpers/code-writer');

function cleanSourceDirectory(cb)
{
    cp.exec('find . -name ".DS_Store" -delete', () => cb());
}

/**
 * Copy application files to publish folder
 */
function copyApplication()
{
    // by default don't copy hidden files
    return src(
        [
            '**/*',
            '.gitignore',
            '.eslintrc.json',
            '!cliter/**',
            '!db/**',
            '!dist/**',
            '!gulp/**',
            '!node_modules/**',
            '!postman/**',
            '!src/@api/**',
            '!src/@app/**',
            '!src/app.queues.ts',
            '!src/index.ts',
            '!nest-cli.json',
            '!test/acceptance/**',
            '!docker-compose.yml',
            '!gulpfile.js',
            '!oauth-private.key',
            '!oauth-public.key',
            '!package.json',
            '!package-lock.json',
        ])
        .pipe(
            dest('publish/'),
        );
}

/**
 * Clean dependencies that will not used in application
 */
function editPackageJson()
{
    return src(
        [
            'package.json',
        ])
        .pipe(
            jeditor(function(json)
            {
                // modify @aurorajs.dev/core version
                delete json.scripts['install:core'];
                json.dependencies['@aurorajs.dev/core'] = '^2.2.0';

                delete json.scripts['install:typesense'];
                delete json.dependencies['@aurorajs.dev/typesense'];
                delete json.dependencies['@narando/nest-axios-interceptor'];
                delete json.dependencies['@nestjs-modules/mailer'];
                delete json.dependencies['@nestjs/axios'];
                delete json.dependencies['@nestjs/bull'];
                delete json.dependencies['@nestjs/jwt'];
                delete json.dependencies['@nestjs/passport'];
                delete json.dependencies['@nestjs/schedule'];
                delete json.dependencies['bull'];
                delete json.dependencies['handlebars'];
                delete json.dependencies['mariadb'];
                delete json.dependencies['nodemailer'];
                delete json.dependencies['passport-azure-ad'];
                delete json.dependencies['passport-jwt'];
                delete json.dependencies['redis'];

                delete json.devDependencies.gulp;
                delete json.devDependencies['@types/cron'];
                delete json.devDependencies['@types/nodemailer'];
                delete json.devDependencies['@types/passport-jwt'];
                delete json.devDependencies['gulp-json-editor'];
                delete json.devDependencies['fs-extra'];
                delete json.devDependencies['through2'];

                return json;
            }),
        )
        .pipe(
            dest('publish'),
        );
}

/**
 * Delete nest-cli.json configuration that will not used in application
 */
function editNestCli()
{
    return src(
        [
            'nest-cli.json',
        ])
        .pipe(
            jeditor(function(json)
            {
                delete json['compilerOptions'];

                return json;
            }),
        )
        .pipe(dest('publish'));
}

async function cleanAppModule()
{
    const project = codeWriter.createProject(['publish', 'tsconfig.json']);
    const sourceFile = codeWriter.createSourceFile(project, ['publish', 'src', 'app.module.ts']);

    // remove ScheduleModule
    codeWriter.removeImport(sourceFile, '@nestjs/schedule');
    codeWriter.removeDecoratorProperty(sourceFile, 'AppModule', 'Module', 'imports', 'ScheduleModule.forRoot()');

    // remove AuditingModule
    codeWriter.removeImport(sourceFile, '@api/auditing/auditing.module');
    codeWriter.removeDecoratorProperty(sourceFile, 'AppModule', 'Module', 'imports', 'AuditingModule');

    // remove CommonModule
    codeWriter.removeImport(sourceFile, '@api/common/common.module');
    codeWriter.removeDecoratorProperty(sourceFile, 'AppModule', 'Module', 'imports', 'CommonModule');

    // remove OAuthModule
    codeWriter.removeImport(sourceFile, '@api/o-auth/o-auth.module');
    codeWriter.removeDecoratorProperty(sourceFile, 'AppModule', 'Module', 'imports', 'OAuthModule');

    // remove IamModule
    codeWriter.removeImport(sourceFile, '@api/iam/iam.module');
    codeWriter.removeDecoratorProperty(sourceFile, 'AppModule', 'Module', 'imports', 'IamModule');

    // remove QueueManagerModule
    codeWriter.removeImport(sourceFile, '@api/queue-manager/queue-manager.module');
    codeWriter.removeDecoratorProperty(sourceFile, 'AppModule', 'Module', 'imports', 'QueueManagerModule');

    // remove QueueManagerModule
    codeWriter.removeImport(sourceFile, '@api/azure-ad/azure-ad.module');
    codeWriter.removeDecoratorProperty(sourceFile, 'AppModule', 'Module', 'imports', 'AzureAdModule');

    sourceFile.saveSync();
}

async function cleanShareModule()
{
    const project = codeWriter.createProject(['publish', 'tsconfig.json']);
    const sourceFile = codeWriter.createSourceFile(project, ['publish', 'src', '@aurora', 'shared.module.ts']);

    // remove LoggingAxiosInterceptorService
    codeWriter.removeImport(sourceFile, '@api/auditing/shared');
    codeWriter.removeDecoratorProperty(sourceFile, 'SharedModule', 'Module', 'providers', 'AuditingAxiosInterceptorService');

    // remove HttpModule
    codeWriter.removeImport(sourceFile, '@nestjs/axios');
    codeWriter.removeDecoratorProperty(sourceFile, 'SharedModule', 'Module', 'imports', 'HttpModule');

    // remove AuthJwtStrategyRegistryModule
    codeWriter.removeImport(sourceFile, '@app/o-auth/shared');
    codeWriter.removeDecoratorProperty(sourceFile, 'SharedModule', 'Module', 'exports', 'AuthJwtStrategyRegistryModule');

    // remove jwtConfig
    codeWriter.removeDecoratorProperty(
        sourceFile,
        'SharedModule',
        'Module',
        'imports',
        'AuthJwtStrategyRegistryModule.forRoot(jwtConfig)',
    );

    // disabled auditing runner implementation
    codeWriter.changeDecoratorPropertyAdapter(sourceFile, 'SharedModule', 'providers', 'AuditingRunner', 'AuditingRunnerDisabledImplementationService');

    // remove CommonGetLangsFromDbService && CommonGetFallbackLangFromDbService
    codeWriter.removeImport(sourceFile, '@api/common/shared');
    codeWriter.changeDecoratorPropertyAdapter(sourceFile, 'SharedModule', 'providers', 'CoreGetLangsService', 'CoreGetLangsFromJsonService');
    codeWriter.changeDecoratorPropertyAdapter(sourceFile, 'SharedModule', 'providers', 'CoreGetFallbackLangService', 'CoreGetFallbackLangFromJsonService');

    // remove whatsapp service
    codeWriter.removeImport(sourceFile, '@api/whatsapp/whatsapp-shared.module');
    codeWriter.removeDecoratorProperty(sourceFile, 'SharedModule', 'Module', 'imports', 'WhatsappSharedModule');
    codeWriter.removeDecoratorProperty(sourceFile, 'SharedModule', 'Module', 'exports', 'WhatsappSharedModule');

    sourceFile.saveSync();
}

async function cleanAuthGuard()
{
    const project = codeWriter.createProject(['publish', 'tsconfig.json']);
    const sourceFile = codeWriter.createSourceFile(project, ['publish', 'src', '@aurora', 'decorators', 'auth.decorator.ts']);

    codeWriter.removeImport(sourceFile, '@api/o-auth/shared/guards/authentication-jwt.guard');
    codeWriter.removeImport(sourceFile, '@api/iam/shared/guards/authorization-permissions.guard');
    codeWriter.removeImport(sourceFile, '@api/azure-ad/azure-ad.guard');
    codeWriter.removeCallExpressionArgument(sourceFile, 'UseGuards', 'AuthenticationJwtGuard');
    codeWriter.removeCallExpressionArgument(sourceFile, 'UseGuards', 'AuthorizationPermissionsGuard');
    codeWriter.removeCallExpressionArgument(sourceFile, 'UseGuards', 'AzureADGuard');
    codeWriter.addCallExpressionArgument(sourceFile, 'UseGuards', 'AuthenticationDisabledAdapterGuard');
    codeWriter.addCallExpressionArgument(sourceFile, 'UseGuards', 'AuthorizationDisabledAdapterGuard');

    sourceFile.saveSync();
}

async function createIndexFile()
{
    fs.openSync('./publish/src/index.ts', 'w');
}

function copyToCLI()
{
    // remove old cli application files
    fs.rmSync('../aurora-cli/src/templates/back/application', { recursive: true, force: true });
    // copy new cli application files
    return fse.copy('publish', '../aurora-cli/src/templates/back/application', { overwrite: true });
}

async function clean()
{
    // remove publish folder
    fs.rmSync('publish', { recursive: true, force: true });
}

exports.publishApplication = series(
    cleanSourceDirectory,
    copyApplication,
    editPackageJson,
    editNestCli,
    cleanAppModule,
    cleanShareModule,
    cleanAuthGuard,
    createIndexFile,
    copyToCLI,
    clean,
);