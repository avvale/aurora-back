/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('node:fs');
const cp = require('node:child_process');
const fse = require('fs-extra');
const { series } = require('gulp');

function cleanSourceDirectory(cb)
{
    cp.exec('find . -name ".DS_Store" -delete', () => cb());
}

/**
 * Copy iam files to publish folder
 */
function copyIam()
{
    return Promise.all([
        fse.copy('cliter/iam', 'publish/cliter/iam', { overwrite: true }),
        fse.copy('src/@api/iam', 'publish/src/@api/iam', { overwrite: true }),
        fse.copy('src/@app/iam', 'publish/src/@app/iam', { overwrite: true }),
        fse.copy('src/assets/email/templates', 'publish/src/assets/email/template', { overwrite: true }),
        fse.copy('src/i18n/en/iam.json', 'publish/src/i18n/en/iam.json', { overwrite: true }),
        fse.copy('src/i18n/es/iam.json', 'publish/src/i18n/es/iam.json', { overwrite: true }),
        fse.copy('test/acceptance/iam', 'publish/test/acceptance/iam', { overwrite: true }),
        fse.copy('postman/iam', 'publish/postman/iam', { overwrite: true }),
    ]);
}

function copyToCLI()
{
    // remove old cli iam files
    fs.rmSync('../aurora-cli/src/templates/back/packages/iam', { recursive: true, force: true });
    // copy new cli iam files
    return fse.copy('publish', '../aurora-cli/src/templates/back/packages/iam', { overwrite: true });
}

async function clean()
{
    // remove publish folder
    fs.rmSync('publish', { recursive: true, force: true });
}

exports.publishIam = series(
    cleanSourceDirectory,
    copyIam,
    copyToCLI,
    clean,
);