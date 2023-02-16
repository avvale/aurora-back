/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('node:fs');
const fse = require('fs-extra');
const { series } = require('gulp');

function copyAuditing()
{
    return Promise.all([
        fse.copy('cliter/auditing', 'publish/cliter/auditing', { overwrite: true }),
        fse.copy('src/@api/auditing', 'publish/src/@api/auditing', { overwrite: true }),
        fse.copy('src/@app/auditing', 'publish/src/@app/auditing', { overwrite: true }),
    ]);
}

function copyToCLI()
{
    fs.rmSync('../aurora-cli/src/templates/back/packages/auditing', { recursive: true, force: true });
    return fse.copy('publish', '../aurora-cli/src/templates/back/packages/auditing', { overwrite: true });
}

async function clean()
{
    fs.rmSync('publish', { recursive: true, force: true });
}

exports.publishAuditing = series(
    copyAuditing,
    copyToCLI,
    clean,
);