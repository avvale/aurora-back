export class OAuthCreateApplicationsClientsCommand
{
    constructor(
        public readonly applicationsClients: {
            applicationId: string;
            clientId: string;
        } [],
    ) {}
}