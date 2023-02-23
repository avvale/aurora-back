/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('node:fs');
const fse = require('fs-extra');
const { series } = require('gulp');

/**
 * Copy o-auth files to publish folder
 */
function copyOAuth()
{
    return Promise.all([
        fse.copy('cliter/o-auth', 'publish/cliter/o-auth', { overwrite: true }),
        fse.copy('src/@api/o-auth', 'publish/src/@api/o-auth', { overwrite: true }),
        fse.copy('src/@app/o-auth', 'publish/src/@app/o-auth', { overwrite: true }),
        fse.copy('test/acceptance/o-auth', 'publish/test/acceptance/o-auth', { overwrite: true }),
        fse.copy('postman/o-auth', 'publish/postman/o-auth', { overwrite: true }),
    ]);
}

function copyToCLI()
{
    // remove old cli o-auth files
    fs.rmSync('../aurora-cli/src/templates/back/packages/o-auth', { recursive: true, force: true });
    // copy new cli o-auth files
    return fse.copy('publish', '../aurora-cli/src/templates/back/packages/o-auth', { overwrite: true });
}

async function clean()
{
    // remove publish folder
    fs.rmSync('publish', { recursive: true, force: true });
}

exports.publishOAuth = series(
    copyOAuth,
    copyToCLI,
    clean,
);