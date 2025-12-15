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
function copyStorageAccount() {
    return Promise.all([
        fse.copy(
            'src/@api/storage-account',
            'publish/src/@api/storage-account',
            { overwrite: true },
        ),
        fse.copy(
            'src/@app/storage-account',
            'publish/src/@app/storage-account',
            { overwrite: true },
        ),
    ]);
}

function copyToCLI() {
    // remove old cli azureStorageAccount files
    fs.rmSync('../aurora-cli/src/templates/back/packages/storage-account', {
        recursive: true,
        force: true,
    });
    // copy new cli azureStorageAccount files
    return fse.copy(
        'publish',
        '../aurora-cli/src/templates/back/packages/storage-account',
        { overwrite: true },
    );
}

async function clean() {
    // remove publish folder
    fs.rmSync('publish', { recursive: true, force: true });
}

exports.publishStorageAccount = series(
    cleanSourceDirectory,
    copyStorageAccount,
    copyToCLI,
    clean,
);
