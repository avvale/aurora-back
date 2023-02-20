import { accounts } from '@app/iam/account/infrastructure/mock/mock-account.data';

// ignored file
export const users = [
    // user demo
    {
        id           : 'b94dd025-c538-4a37-b852-a7fee35a3561',
        accountId    : accounts[0].id,
        name         : 'John',
        surname      : 'Doe',
        avatar       : null,
        mobile       : null,
        langId       : null,
        username     : 'john.doe@contoso.com',
        password     : '1111',
        rememberToken: null,
        data         : null,
    },
];