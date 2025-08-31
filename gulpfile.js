/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const { publishApplication } = require('./gulp/application');
const { publishAuditing } = require('./gulp/auditing');
const { publishCommon } = require('./gulp/common');
const { publishIam } = require('./gulp/iam');
const { publishMessage } = require('./gulp/message');
const { publishMcp } = require('./gulp/mcp');
const { publishMsEmail } = require('./gulp/ms-email');
const { publishMsEntraId } = require('./gulp/ms-entra-id');
const { publishOAuth } = require('./gulp/o-auth');
const { publishQueueManager } = require('./gulp/queue-manager');
const { publishSearchEngine } = require('./gulp/search-engine');
const { publishStorageAccount } = require('./gulp/storage-account');
const { publishStorageAccountAzure } = require('./gulp/storage-account-azure');
const { publishTools } = require('./gulp/tools');
const { publishWhatsapp } = require('./gulp/whatsapp');

function defaultTask(cb)
{
    // place code for your default task here
    cb();
}

exports.default = defaultTask;

// commands
exports.publishApplication = publishApplication;
exports.publishAuditing = publishAuditing;
exports.publishCommon = publishCommon;
exports.publishIam = publishIam;
exports.publishMessage = publishMessage;
exports.publishMcp = publishMcp;
exports.publishMsEmail = publishMsEmail;
exports.publishMsEntraId = publishMsEntraId;
exports.publishOAuth = publishOAuth;
exports.publishQueueManager = publishQueueManager;
exports.publishSearchEngine = publishSearchEngine;
exports.publishStorageAccount = publishStorageAccount;
exports.publishStorageAccountAzure = publishStorageAccountAzure;
exports.publishTools = publishTools;
exports.publishWhatsapp = publishWhatsapp;