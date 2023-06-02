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
 * Copy common files to publish folder
 */
function copyCommon()
{
    return Promise.all([
        fse.copy('cliter/common', 'publish/cliter/common', { overwrite: true }),
        fse.copy('src/@api/common', 'publish/src/@api/common', { overwrite: true }),
        fse.copy('src/@app/common', 'publish/src/@app/common', { overwrite: true }),
        fse.copy('test/acceptance/common', 'publish/test/acceptance/common', { overwrite: true }),
        fse.copy('postman/common', 'publish/postman/common', { overwrite: true }),
    ]);
}

function copyToCLI()
{
    // remove old cli common files
    fs.rmSync('../aurora-cli/src/templates/back/packages/common', { recursive: true, force: true });
    // copy new cli common files
    return fse.copy('publish', '../aurora-cli/src/templates/back/packages/common', { overwrite: true });
}

async function clean()
{
    // remove publish folder
    fs.rmSync('publish', { recursive: true, force: true });
}

exports.publishCommon = series(
    cleanSourceDirectory,
    copyCommon,
    copyToCLI,
    clean,
);