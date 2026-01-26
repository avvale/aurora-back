/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */

export class BusinessPartnerPortalPaymentModeResponse {
  constructor(
    public readonly id: string,
    public readonly rowId: number,
    public readonly externalId: string,
    public readonly code: string,
    public readonly name: string,
    public readonly description: string,
    public readonly type:
      | 'ELECTRONIC'
      | 'CASH'
      | 'CHECK'
      | 'CARD'
      | 'WIRE'
      | 'DIRECT_DEBIT'
      | 'DIGITAL_WALLET'
      | 'OTHER',
    public readonly isAccountNumberRequired: boolean,
    public readonly isRoutingInfoRequired: boolean,
    public readonly isRecurringSupported: boolean,
    public readonly sort: number,
    public readonly isActive: boolean,
    public readonly meta: any,
    public readonly createdAt: string,
    public readonly updatedAt: string,
    public readonly deletedAt: string,
  ) {}
}
