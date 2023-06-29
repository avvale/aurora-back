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
 * Copy search engine files to publish folder
 */
function copySearchEngine()
{
    return Promise.all([
        fse.copy('cliter/search-engine', 'publish/cliter/search-engine', { overwrite: true }),
        fse.copy('src/@api/search-engine', 'publish/src/@api/search-engine', { overwrite: true }),
        fse.copy('src/@app/search-engine', 'publish/src/@app/search-engine', { overwrite: true }),
        fse.copy('test/acceptance/search-engine', 'publish/test/acceptance/search-engine', { overwrite: true }),
        fse.copy('postman/search-engine', 'publish/postman/search-engine', { overwrite: true }),
    ]);
}

function copyToCLI()
{
    // remove old cli search-engine files
    fs.rmSync('../aurora-cli/src/templates/back/packages/search-engine', { recursive: true, force: true });
    // copy new cli search-engine files
    return fse.copy('publish', '../aurora-cli/src/templates/back/packages/search-engine', { overwrite: true });
}

async function clean()
{
    // remove publish folder
    fs.rmSync('publish', { recursive: true, force: true });
}

exports.publishAuditing = series(
    cleanSourceDirectory,
    copySearchEngine,
    copyToCLI,
    clean,
);