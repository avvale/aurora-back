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
function copyAzureStorageAccount()
{
    return Promise.all([
        fse.copy('src/@api/azure-storage-account', 'publish/src/@api/azure-storage-account', { overwrite: true }),
    ]);
}

function copyToCLI()
{
    // remove old cli azureStorageAccount files
    fs.rmSync('../aurora-cli/src/templates/back/packages/azure-storage-account', { recursive: true, force: true });
    // copy new cli azureStorageAccount files
    return fse.copy('publish', '../aurora-cli/src/templates/back/packages/azure-storage-account', { overwrite: true });
}

async function clean()
{
    // remove publish folder
    fs.rmSync('publish', { recursive: true, force: true });
}

exports.publishAzureStorageAccount = series(
    cleanSourceDirectory,
    copyAzureStorageAccount,
    copyToCLI,
    clean,
);