/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import { ApiProperty } from '@nestjs/swagger';

export class BusinessPartnerPortalCreatePaymentCollectionModeDto {
  @ApiProperty({
    type: String,
    description:
      'Unique identifier for the payment collection mode. UUID v4 format, generated automatically on creation. Used as primary key for referencing this collection configuration in payment processing, invoicing, and financial transactions.',
  })
  id: string;

  @ApiProperty({
    type: String,
    description:
      'Foreign key reference to the business partner this payment collection mode belongs to. Each payment collection mode is owned by exactly one partner. Required field establishing the many-to-one relationship. Indexed for efficient queries when loading all payment collection modes for a specific partner. Constraint enforced to maintain referential integrity. Partners can have multiple payment collection modes for different payment scenarios.',
    example: '5eae823f-032a-5688-8aaf-89dc17cea8a0',
  })
  businessPartnerId: string;

  @ApiProperty({
    type: String,
    description:
      'Foreign key reference to the payment mode catalog defining the type of payment method (credit card, bank transfer, etc.). Required field establishing the many-to-one relationship. Indexed for efficient queries and reporting by payment type. Constraint enforced to ensure valid payment methods. Determines which fields are required (e.g., account number for bank transfer).',
    example: '1e214fed-1c7c-5488-9543-e07349eb2804',
  })
  paymentModeId: string;

  @ApiProperty({
    type: String,
    description:
      'User-friendly label or nickname for this payment collection mode (e.g., &quot;Main Bank Account&quot;, &quot;Business Credit Card&quot;, &quot;Backup Payment Method&quot;). Used for quick identification in selection lists and UI. NULL indicates no label specified (system generates label from payment mode and last digits). Makes it easier to distinguish between multiple payment collection modes of the same type.',
  })
  label?: string;

  @ApiProperty({
    type: String,
    description:
      'Bank account number, credit card number (last 4 digits only for security), or digital wallet identifier. Required when paymentMode.isAccountNumberRequired is true. Should be masked or partially hidden in UI for security (e.g., show only last 4 digits). NULL indicates not applicable for this payment mode. Used in payment processing. Format varies by payment mode and country.',
  })
  accountNumber?: string;

  @ApiProperty({
    type: String,
    description:
      'Name of the account holder as it appears on bank statements or credit cards. Used for verification and matching during payment processing. Should match legal name or authorized user. NULL indicates not required or not applicable. Examples: &quot;John Smith&quot;, &quot;ABC Corporation&quot;, &quot;John Smith DBA Smith&#x27;s Shop&quot;. Important for avoiding payment rejections.',
  })
  accountHolderName?: string;

  @ApiProperty({
    type: String,
    description:
      'Name of the financial institution or bank. Used for reference and documentation. NULL indicates not applicable (e.g., for digital wallets or credit cards). Examples: &quot;Chase Bank&quot;, &quot;HSBC&quot;, &quot;Banco Santander&quot;. Useful for financial reporting and partner communication. Not used for routing (see routingNumber).',
  })
  bankName?: string;

  @ApiProperty({
    type: String,
    description:
      'Bank routing number, SWIFT code, sort code, or other routing identifier. Required when paymentMode.isRoutingInfoRequired is true. Format varies by country and payment network. NULL indicates not required or not applicable. Examples: &quot;026009593&quot; (US routing), &quot;CHASUS33&quot; (SWIFT), &quot;20-00-00&quot; (UK sort code). Critical for wire transfers and international payments.',
  })
  routingNumber?: string;

  @ApiProperty({
    type: String,
    description:
      'International Bank Account Number (IBAN). ISO 13616 standard format, up to 34 alphanumeric characters. Used for SEPA and international transfers within Europe and supported countries. NULL indicates not applicable or not required. Example: DE89370400440532013000. Validated against checksum algorithm. Required for European bank transfers and recommended for international payments.',
  })
  iban?: string;

  @ApiProperty({
    type: String,
    description:
      'SWIFT/BIC code for international wire transfers. 8 or 11 characters identifying the bank (ISO 9362 standard). Required for cross-border payments outside SEPA zone. NULL indicates not applicable or domestic-only account. Example: COBADEFFXXX. Used together with IBAN for international transfers or with accountNumber for non-IBAN countries.',
  })
  swiftCode?: string;

  @ApiProperty({
    type: String,
    description:
      'ISO 4217 three-letter currency code for this payment collection mode (e.g., &quot;USD&quot;, &quot;EUR&quot;, &quot;GBP&quot;, &quot;MXN&quot;). Indicates the currency in which payments will be processed. NULL indicates base system currency is used. Important for multi-currency operations and exchange rate calculations. Must be a valid, supported currency in the system.',
  })
  currencyCode?: string;

  @ApiProperty({
    type: String,
    description:
      'Expiration date for time-limited payment methods (credit cards, prepaid cards). NULL indicates no expiration or not applicable. Used to alert users about expiring payment methods and prevent failed transactions. Format: YYYY-MM-DD. System should warn before expiration and block use after expiration. Only month and year are typically relevant (day defaults to last day of month).',
  })
  expirationDate?: string;

  @ApiProperty({
    type: Boolean,
    description:
      'Indicates if this is the primary payment collection mode for the business partner. Primary payment collection mode is used as default in payment processing when no specific method is requested. Only one payment collection mode per partner should be primary. When true, this method is displayed first and used as fallback. Defaults to false. Required field.',
  })
  isPrimary: boolean;

  @ApiProperty({
    type: Boolean,
    description:
      'Indicates whether the payment collection mode is currently valid and usable. When false, the payment method is disabled (e.g., expired card, closed account, payment method removed by partner) but preserved for historical records. Inactive payment collection modes cannot be used in new transactions but existing payment history remains valid. Use instead of hard deletion to maintain audit trail. Required field, defaults to true.',
  })
  isActive: boolean;

  @ApiProperty({
    type: String,
    description:
      'Free-text field for additional notes about this payment collection mode. Can include special instructions, limitations, processing notes, or verification details. NULL indicates no notes. Examples: &quot;Use only for large transactions&quot;, &quot;Requires 3D Secure verification&quot;, &quot;Partner prefers this for recurring payments&quot;, &quot;Contact before processing&quot;. Not used for structured data or business logic.',
  })
  notes?: string;

  @ApiProperty({
    type: String,
    description:
      'Timestamp of the last successful payment processed using this payment collection mode. NULL indicates never used. Automatically updated when a payment is successfully processed. Used to identify unused payment methods, track payment patterns, and alert about stale configurations. Useful for cleanup and optimization of payment method records.',
  })
  lastUsedAt?: string;
}
