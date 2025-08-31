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
 * Copy msEmail files to publish folder
 */
function copyMsEmail()
{
    return Promise.all([
        fse.copy('src/@app/ms-email', 'publish/src/@app/ms-email', { overwrite: true }),
    ]);
}

function copyToCLI()
{
    // remove old cli ms-email files
    fs.rmSync('../aurora-cli/src/templates/back/packages/ms-email', { recursive: true, force: true });
    // copy new cli ms-email files
    return fse.copy('publish', '../aurora-cli/src/templates/back/packages/ms-email', { overwrite: true });
}

async function clean()
{
    // remove publish folder
    fs.rmSync('publish', { recursive: true, force: true });
}

exports.publishMsEmail = series(
    cleanSourceDirectory,
    copyMsEmail,
    copyToCLI,
    clean,
);