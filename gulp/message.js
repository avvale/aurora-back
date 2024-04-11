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
 * Copy message files to publish folder
 */
function copyMessage()
{
    return Promise.all([
        fse.copy('cliter/message', 'publish/cliter/message', { overwrite: true }),
        fse.copy('src/@api/message', 'publish/src/@api/message', { overwrite: true }),
        fse.copy('src/@app/message', 'publish/src/@app/message', { overwrite: true }),
        fse.copy('test/acceptance/message', 'publish/test/acceptance/message', { overwrite: true }),
        fse.copy('postman/message', 'publish/postman/message', { overwrite: true }),
    ]);
}

function copyToCLI()
{
    // remove old cli message files
    fs.rmSync('../aurora-cli/src/templates/back/packages/message', { recursive: true, force: true });
    // copy new cli message files
    return fse.copy('publish', '../aurora-cli/src/templates/back/packages/message', { overwrite: true });
}

async function clean()
{
    // remove publish folder
    fs.rmSync('publish', { recursive: true, force: true });
}

exports.publishMessage = series(
    cleanSourceDirectory,
    copyMessage,
    copyToCLI,
    clean,
);