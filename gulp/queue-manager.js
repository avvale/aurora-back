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
 * Copy auditing files to publish folder
 */
function copyQueueManager()
{
    return Promise.all([
        fse.copy('cliter/queue-manager', 'publish/cliter/queue-manager', { overwrite: true }),
        fse.copy('src/@api/queue-manager', 'publish/src/@api/queue-manager', { overwrite: true }),
        fse.copy('src/@app/queue-manager', 'publish/src/@app/queue-manager', { overwrite: true }),
        fse.copy('test/acceptance/queue-manager', 'publish/test/acceptance/queue-manager', { overwrite: true }),
        fse.copy('postman/queue-manager', 'publish/postman/queue-manager', { overwrite: true }),
    ]);
}

function copyToCLI()
{
    // remove old cli queueManager files
    fs.rmSync('../aurora-cli/src/templates/back/packages/queue-manager', { recursive: true, force: true });
    // copy new cli queueManager files
    return fse.copy('publish', '../aurora-cli/src/templates/back/packages/queue-manager', { overwrite: true });
}

async function clean()
{
    // remove publish folder
    fs.rmSync('publish', { recursive: true, force: true });
}

exports.publishQueueManager = series(
    cleanSourceDirectory,
    copyQueueManager,
    copyToCLI,
    clean,
);