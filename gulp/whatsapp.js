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
 * Copy whatsapp files to publish folder
 */
function copyWhatsapp()
{
    return Promise.all([
        fse.copy('cliter/whatsapp', 'publish/cliter/whatsapp', { overwrite: true }),
        fse.copy('src/@api/whatsapp', 'publish/src/@api/whatsapp', { overwrite: true }),
        fse.copy('src/@app/whatsapp', 'publish/src/@app/whatsapp', { overwrite: true }),
        fse.copy('test/acceptance/whatsapp', 'publish/test/acceptance/whatsapp', { overwrite: true }),
        fse.copy('postman/whatsapp', 'publish/postman/whatsapp', { overwrite: true }),
    ]);
}

function copyToCLI()
{
    // remove old cli whatsapp files
    fs.rmSync('../aurora-cli/src/templates/back/packages/whatsapp', { recursive: true, force: true });
    // copy new cli whatsapp files
    return fse.copy('publish', '../aurora-cli/src/templates/back/packages/whatsapp', { overwrite: true });
}

async function clean()
{
    // remove publish folder
    fs.rmSync('publish', { recursive: true, force: true });
}

exports.publishWhatsapp = series(
    cleanSourceDirectory,
    copyWhatsapp,
    copyToCLI,
    clean,
);