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
 * Copy support files to publish folder
 */
function copySupport() {
    return Promise.all([
        fse.copy('cliter/support', 'publish/cliter/support', {
            overwrite: true,
        }),
        fse.copy('src/@api/support', 'publish/src/@api/support', {
            overwrite: true,
        }),
        fse.copy('src/@app/support', 'publish/src/@app/support', {
            overwrite: true,
        }),
        fse.copy('test/acceptance/support', 'publish/test/acceptance/support', {
            overwrite: true,
        }),
        fse.copy('postman/support', 'publish/postman/support', {
            overwrite: true,
        }),
    ]);
}

function copyToCLI() {
    // remove old cli support files
    fs.rmSync('../aurora-cli/src/templates/back/packages/support', {
        recursive: true,
        force: true,
    });
    // copy new cli support files
    return fse.copy(
        'publish',
        '../aurora-cli/src/templates/back/packages/support',
        { overwrite: true },
    );
}

async function clean() {
    // remove publish folder
    fs.rmSync('publish', { recursive: true, force: true });
}

exports.publishSupport = series(
    cleanSourceDirectory,
    copySupport,
    copyToCLI,
    clean,
);
