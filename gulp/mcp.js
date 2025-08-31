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
 * Copy mcp files to publish folder
 */
function copyMcp()
{
    return Promise.all([
        fse.copy('src/@api/mcp', 'publish/src/@api/mcp', { overwrite: true }),
    ]);
}

function copyToCLI()
{
    // remove old cli mcp files
    fs.rmSync('../aurora-cli/src/templates/back/packages/mcp', { recursive: true, force: true });
    // copy new cli mcp files
    return fse.copy('publish', '../aurora-cli/src/templates/back/packages/mcp', { overwrite: true });
}

async function clean()
{
    // remove publish folder
    fs.rmSync('publish', { recursive: true, force: true });
}

exports.publishMcp = series(
    cleanSourceDirectory,
    copyMcp,
    copyToCLI,
    clean,
);