/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import { BusinessPartnerPortalPaymentModeType } from '@api/graphql';
import { ApiProperty } from '@nestjs/swagger';

export class BusinessPartnerPortalPaymentModeDto {
  @ApiProperty({
    type: String,
    description:
      'Unique identifier for the payment mode. UUID v4 format, generated automatically on creation. Used as primary key for referencing this payment method across the system and in payment-collection-mode configurations.',
  })
  id: string;

  @ApiProperty({
    type: Number,
    description:
      'Auto-incrementing sequential identifier for the payment mode. Used for internal ordering, human-readable reference, and optimized queries. Not exposed in external APIs. Provides a stable identifier for database operations and sorting.',
  })
  rowId: number;

  @ApiProperty({
    type: String,
    description:
      'External system identifier for the business partner. Used to link this record to the source ERP system (e.g., customer/vendor number in SAP, Oracle, or Dynamics). Enables bidirectional synchronization with external systems. NULL indicates standalone operation without ERP integration. Example: &quot;CUST-00012345&quot; or &quot;0000001234&quot; (SAP customer number).',
  })
  externalId?: string;

  @ApiProperty({
    type: String,
    description:
      'Unique payment mode code used for identification and system integrations. Should be uppercase, alphanumeric, and follow consistent naming conventions (e.g., &quot;CREDIT_CARD&quot;, &quot;BANK_TRANSFER&quot;, &quot;CASH&quot;, &quot;WIRE&quot;, &quot;PAYPAL&quot;, &quot;CHECK&quot;). Must be unique across all payment modes. Used in business logic, integrations, and reports. Cannot be changed once assigned to maintain consistency.',
  })
  code?: string;

  @ApiProperty({
    type: String,
    description:
      'Human-readable name of the payment mode displayed in user interfaces and reports. Should clearly describe the payment method (e.g., &quot;Credit Card&quot;, &quot;Bank Transfer&quot;, &quot;Cash Payment&quot;, &quot;Wire Transfer&quot;, &quot;PayPal&quot;). Required field for user identification. Used in selection lists, invoices, and documents. Can be localized for multi-language support.',
  })
  name: string;

  @ApiProperty({
    type: String,
    description:
      'Detailed description of the payment mode, including usage guidelines, processing time, fees, or special considerations. NULL indicates no description provided. Examples: &quot;Credit card payments are processed immediately with a 2.9% fee&quot;, &quot;Bank transfers may take 1-3 business days to clear&quot;. Used for user guidance and documentation. Not used for business logic.',
  })
  description?: string;

  @ApiProperty({
    enum: BusinessPartnerPortalPaymentModeType,
    description:
      'Classification of the payment mode category. ELECTRONIC: Electronic bank transfers, ACH credit (push payments). CASH: Physical cash payments. CHECK: Paper or electronic checks. CARD: Credit/debit card payments. WIRE: Wire transfers, SWIFT. DIRECT_DEBIT: Direct debit, SEPA DD, ACH debit (pull payments initiated by creditor, requires mandate). DIGITAL_WALLET: PayPal, Apple Pay, Google Pay, etc. OTHER: Any other payment method. Used to apply category-specific business rules and reporting. Required field.',
  })
  type: BusinessPartnerPortalPaymentModeType;

  @ApiProperty({
    type: Boolean,
    description:
      'Indicates whether this payment mode requires a bank account number or similar identifier. When true, payment-collection-mode records using this payment mode must include account details. Used in validation and form rendering. Examples: true for bank transfers (need account number), false for cash (no account needed). Required field, defaults to false.',
  })
  isAccountNumberRequired: boolean;

  @ApiProperty({
    type: Boolean,
    description:
      'Indicates whether this payment mode requires routing information (routing number, SWIFT code, sort code, etc.). When true, payment-collection-mode records must include routing details. Used in validation for international transfers and bank processing. Examples: true for wire transfers (need SWIFT), false for credit cards (no routing needed). Required field, defaults to false.',
  })
  isRoutingInfoRequired: boolean;

  @ApiProperty({
    type: Boolean,
    description:
      'Indicates whether this payment mode supports recurring or automatic payments. When true, this payment method can be used for subscriptions, automatic billing, or scheduled payments. Used in subscription management and billing systems. Examples: true for credit cards and direct debit, false for cash or checks. Required field, defaults to false.',
  })
  isRecurringSupported: boolean;

  @ApiProperty({
    type: Number,
    description:
      'Sort order for displaying payment modes in user interfaces. Lower numbers appear first. NULL indicates no specific order preference (alphabetical fallback). Used to prioritize common or preferred payment methods in selection lists and forms. Examples: 10 (credit card - most common), 20 (bank transfer), 30 (cash), 100 (other methods).',
  })
  sort?: number;

  @ApiProperty({
    type: Boolean,
    description:
      'Indicates whether the payment mode is currently available for use. When false, the payment mode is disabled and should not appear in selection lists or be available for new payment-collection-mode configurations. Inactive modes are preserved for historical records. Use instead of hard deletion to maintain referential integrity. Required field, defaults to true.',
  })
  isActive: boolean;

  @ApiProperty({
    type: Object,
    description: 'meta [input here api field description]',
  })
  meta?: any;

  @ApiProperty({
    type: String,
    description:
      'Timestamp when the payment mode was created. Automatically set on record creation. Part of the audit trail for tracking payment method configuration history. Used for reporting on payment method adoption patterns.',
  })
  createdAt?: string;

  @ApiProperty({
    type: String,
    description:
      'Timestamp of the last modification to this payment mode. Automatically updated on any field change. Used for tracking payment method configuration evolution, cache invalidation, and audit compliance. Important for monitoring changes to payment processing rules.',
  })
  updatedAt?: string;

  @ApiProperty({
    type: String,
    description:
      'Soft delete timestamp. NULL indicates an active payment mode. When set, the payment mode is hidden from normal queries but preserved for audit purposes and historical transaction records. Deleted payment modes cannot be used in new payment-collection-mode configurations but existing configurations and historical data remain accessible. Used for compliance with data retention policies while maintaining referential integrity.',
  })
  deletedAt?: string;
}
