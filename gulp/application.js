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
                delete json.dependencies['@narando/nest-axios-interceptor'];
                delete json.dependencies['@nestjs-modules/mailer'];
                delete json.dependencies['@nestjs/axios'];
                delete json.dependencies['@nestjs/bull'];
                delete json.dependencies['@nestjs/jwt'];
                delete json.dependencies['@nestjs/passport'];
                delete json.dependencies['bull'];
                delete json.dependencies['handlebars'];
                delete json.dependencies['mariadb'];
                delete json.dependencies['nodemailer'];
                delete json.dependencies['passport-jwt'];

                delete json.devDependencies.gulp;
                delete json.devDependencies['@types/bull'];
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

function copyToCLI()
{
    // remove old cli application files
    fs.rmSync('../aurora-cli/src/templates/back/application', { recursive: true, force: true });
    // copy new cli application files
    return fse.copy('publish', '../aurora-cli/src/templates/back/application', { overwrite: true });
}

async function cleanAppModule()
{
    const project = codeWriter.createProject(['publish', 'tsconfig.json']);
    const sourceFile = codeWriter.createSourceFile(project, ['publish', 'src', 'app.module.ts']);

    // remove AuditingModule
    codeWriter.removeImport(sourceFile, '@api/auditing/auditing.module');
    codeWriter.removeDecoratorProperty(sourceFile, 'AppModule', 'imports', 'AuditingModule');

    // remove OAuthModule
    codeWriter.removeImport(sourceFile, '@api/o-auth/o-auth.module');
    codeWriter.removeDecoratorProperty(sourceFile, 'AppModule', 'imports', 'OAuthModule');

    // remove IamModule
    codeWriter.removeImport(sourceFile, '@api/iam/iam.module');
    codeWriter.removeDecoratorProperty(sourceFile, 'AppModule', 'imports', 'IamModule');

    sourceFile.saveSync();
}

async function cleanShareModule()
{
    const project = codeWriter.createProject(['publish', 'tsconfig.json']);
    const sourceFile = codeWriter.createSourceFile(project, ['publish', 'src', '@aurora', 'shared.module.ts']);

    // remove LoggingAxiosInterceptorService
    codeWriter.removeImport(sourceFile, '@api/auditing/shared/services/auditing-axios-interceptor.service');
    codeWriter.removeDecoratorProperty(sourceFile, 'SharedModule', 'providers', 'AuditingAxiosInterceptorService');

    // remove HttpModule
    codeWriter.removeImport(sourceFile, '@nestjs/axios');
    codeWriter.removeDecoratorProperty(sourceFile, 'SharedModule', 'imports', 'HttpModule');

    // remove AuthJwtStrategyRegistryModule
    codeWriter.removeImport(sourceFile, '@app/o-auth/shared/modules/auth-jwt-strategy-registry.module');
    codeWriter.removeDecoratorProperty(sourceFile, 'SharedModule', 'exports', 'AuthJwtStrategyRegistryModule');

    // remove AuthJwtStrategyRegistryModule
    codeWriter.removeImport(sourceFile, '@app/o-auth/shared/jwt-config');
    codeWriter.removeDecoratorProperty(sourceFile, 'SharedModule', 'imports', 'AuthJwtStrategyRegistryModule.forRoot(jwtConfig)');

    // disabled auditing runner implementation
    codeWriter.removeImport(sourceFile, '@api/auditing/shared/services/auditing-runner-aurora-implementation.service');
    codeWriter.changeDecoratorPropertyAdapter(sourceFile, 'SharedModule', 'providers', 'AuditingRunner', 'AuditingRunnerDisabledImplementationService');

    // remove whatsapp service
    codeWriter.removeImport(sourceFile, '@api/whatsapp/whatsapp-shared.module');
    codeWriter.removeDecoratorProperty(sourceFile, 'SharedModule', 'imports', 'WhatsappSharedModule');
    codeWriter.removeDecoratorProperty(sourceFile, 'SharedModule', 'exports', 'WhatsappSharedModule');

    sourceFile.saveSync();
}

async function cleanAuthGuard()
{
    const project = codeWriter.createProject(['publish', 'tsconfig.json']);
    const sourceFile = codeWriter.createSourceFile(project, ['publish', 'src', '@aurora', 'decorators', 'auth.decorator.ts']);

    codeWriter.removeImport(sourceFile, '@api/o-auth/shared/guards/authentication-jwt.guard');
    codeWriter.removeImport(sourceFile, '@api/iam/shared/guards/authorization-permissions.guard');
    codeWriter.removeCallExpressionArgument(sourceFile, 'UseGuards', 'AuthenticationJwtGuard');
    codeWriter.removeCallExpressionArgument(sourceFile, 'UseGuards', 'AuthorizationPermissionsGuard');
    codeWriter.addCallExpressionArgument(sourceFile, 'UseGuards', 'AuthenticationDisabledAdapterGuard');
    codeWriter.addCallExpressionArgument(sourceFile, 'UseGuards', 'AuthorizationDisabledAdapterGuard');

    sourceFile.saveSync();
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
    copyToCLI,
    clean,
);