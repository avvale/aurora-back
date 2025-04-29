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
function copyMsEntraIdAd()
{
    return Promise.all([
        fse.copy('src/@api/ms-entra-id', 'publish/src/@api/ms-entra-id', { overwrite: true }),
    ]);
}

function copyToCLI()
{
    // remove old cli azureAd files
    fs.rmSync('../aurora-cli/src/templates/back/packages/ms-entra-id', { recursive: true, force: true });
    // copy new cli azureAd files
    return fse.copy('publish', '../aurora-cli/src/templates/back/packages/ms-entra-id', { overwrite: true });
}

async function clean()
{
    // remove publish folder
    fs.rmSync('publish', { recursive: true, force: true });
}

exports.publishMsEntraId = series(
    cleanSourceDirectory,
    copyMsEntraIdAd,
    copyToCLI,
    clean,
);