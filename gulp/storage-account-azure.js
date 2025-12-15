/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('node:fs');
const cp = require('node:child_process');
const fse = require('fs-extra');
const { series } = require('gulp');

function cleanSourceDirectory(cb) {
    cp.exec('find . -name ".DS_Store" -delete', () => cb());
}

/**
 * Copy iam files to publish folder
 */
function copyStorageAccountAzure() {
    return Promise.all([
        fse.copy(
            'src/@api/storage-account-azure',
            'publish/src/@api/storage-account-azure',
            { overwrite: true },
        ),
        fse.copy(
            'src/@app/storage-account-azure',
            'publish/src/@app/storage-account-azure',
            { overwrite: true },
        ),
    ]);
}

function copyToCLI() {
    // remove old cli azureStorageAccount files
    fs.rmSync(
        '../aurora-cli/src/templates/back/packages/storage-account-azure',
        { recursive: true, force: true },
    );
    // copy new cli azureStorageAccount files
    return fse.copy(
        'publish',
        '../aurora-cli/src/templates/back/packages/storage-account-azure',
        { overwrite: true },
    );
}

async function clean() {
    // remove publish folder
    fs.rmSync('publish', { recursive: true, force: true });
}

exports.publishStorageAccountAzure = series(
    cleanSourceDirectory,
    copyStorageAccountAzure,
    copyToCLI,
    clean,
);
