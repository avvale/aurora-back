import { IamAccountResponse } from '@app/iam/account';

export class SupportIssueResponse
{
    constructor(
        public readonly id: string,
        public readonly externalId: string,
        public readonly externalStatus: string,
        public readonly accountId: string,
        public readonly accountUsername: string,
        public readonly frontVersion: string,
        public readonly backVersion: string,
        public readonly environment: string,
        public readonly subject: string,
        public readonly description: string,
        public readonly attachments: any,
        public readonly video: any,
        public readonly meta: any,
        public readonly createdAt: string,
        public readonly updatedAt: string,
        public readonly deletedAt: string,
        public readonly account: IamAccountResponse,
    ) {}
}
