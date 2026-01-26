/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import { BusinessPartnerPortalPartnerAddressDto } from '@api/business-partner-portal/partner-address';
import { BusinessPartnerPortalPartnerContactDto } from '@api/business-partner-portal/partner-contact';
import { BusinessPartnerPortalPaymentCollectionModeDto } from '@api/business-partner-portal/payment-collection-mode';
import { ApiProperty } from '@nestjs/swagger';

export class BusinessPartnerPortalBusinessPartnerDto {
  @ApiProperty({
    type: String,
    description:
      'Unique identifier for the business partner. UUID v4 format, generated automatically on creation. Used as primary key for referencing this partner across the system and in all related modules (contacts, addresses, collection modes).',
  })
  id: string;

  @ApiProperty({
    type: Number,
    description:
      'Auto-incrementing sequential identifier for the business partner. Used for internal ordering, human-readable reference numbers, and optimized queries. Not exposed in external APIs. Provides a stable, predictable identifier for database operations.',
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
      'Unique business partner code used for identification and reference. Can be alphanumeric and follow company-specific conventions (e.g., &quot;BP-2024-001&quot;, &quot;VENDOR-123&quot;). Must be unique across all partners. Used in invoices, reports, and integrations. Cannot be changed once assigned to maintain referential integrity.',
  })
  code?: string;

  @ApiProperty({
    type: Array,
    description:
      'Classification of the business partner relationship. CUSTOMER: Buys products/services. SUPPLIER: Provides goods to the company. VENDOR: Provides services to the company. AFFILIATE: Marketing or referral partner. PARTNER: Strategic business partner. OTHER: Any other relationship type. Used to filter partners and apply specific business rules based on relationship type.',
  })
  type: string[];

  @ApiProperty({
    type: String,
    description:
      'Legal or commercial name of the business partner. Used in official documents, contracts, and communications. Must be the complete registered business name for legal entities. For individuals, use full legal name. Required field for partner identification and documentation. Indexed for fast search operations.',
  })
  name: string;

  @ApiProperty({
    type: String,
    description:
      'Tax identification number or VAT number for the business partner. Format varies by country (e.g., EIN in US, VAT in EU, RFC in Mexico). Used for tax reporting, invoice generation, and legal compliance. NULL indicates no tax ID registered (may be required based on business rules). Must be validated against country-specific formats where applicable.',
  })
  tin?: string;

  @ApiProperty({
    type: String,
    description:
      'Primary email address for official communications with the business partner. Used for sending invoices, contracts, notifications, and general correspondence. Should be a valid business email address. NULL indicates no email on record. Not necessarily the email of a specific contact person (use partner-contact for that).',
  })
  email?: string;

  @ApiProperty({
    type: String,
    description:
      'Official website URL of the business partner. Used for reference and due diligence. Should be a complete URL including protocol (e.g., https://example.com). NULL indicates no website on record. Not validated for accessibility but should be a well-formed URL.',
  })
  website?: string;

  @ApiProperty({
    type: String,
    description: 'phone [input here api field description]',
  })
  phone?: string;

  @ApiProperty({
    type: String,
    description: 'phoneCountryPrefix [input here api field description]',
  })
  phoneCountryPrefix?: string;

  @ApiProperty({
    type: String,
    description: 'phoneSanitized [input here api field description]',
  })
  phoneSanitized?: string;

  @ApiProperty({
    type: Boolean,
    description:
      'Indicates whether the business partner is currently active. When false, the partner is inactive and should not appear in normal operations (no new transactions, not visible in selection lists). Inactive partners are preserved for historical data and audit purposes. Use instead of hard deletion to maintain referential integrity. Required field, defaults to true.',
  })
  isActive: boolean;

  @ApiProperty({
    type: () => [BusinessPartnerPortalPartnerContactDto],
    description:
      'One-to-many relationship with partner contacts. Represents all contact persons associated with this business partner. Each partner can have multiple contacts (e.g., sales representative, technical contact, billing contact). NULL or empty indicates no contacts registered. Used to manage communication channels and relationship points with the partner organization.',
  })
  contacts?: BusinessPartnerPortalPartnerContactDto[];

  @ApiProperty({
    type: () => [BusinessPartnerPortalPartnerAddressDto],
    description:
      'One-to-many relationship with partner addresses. Represents all physical locations associated with this business partner (headquarters, warehouses, branches, billing address, shipping address). Each partner can have multiple addresses with different purposes. NULL or empty indicates no addresses registered. Used for shipping, billing, and visiting the partner.',
  })
  addresses?: BusinessPartnerPortalPartnerAddressDto[];

  @ApiProperty({
    type: () => [BusinessPartnerPortalPaymentCollectionModeDto],
    description:
      'One-to-many relationship with payment collection modes. Represents all configured payment collection methods for this business partner (bank accounts, credit cards, payment gateways). Each partner can have multiple payment collection modes for different payment scenarios. NULL or empty indicates no payment collection modes configured. Used during payment processing and invoice generation.',
  })
  paymentCollectionModes?: BusinessPartnerPortalPaymentCollectionModeDto[];

  @ApiProperty({
    type: Object,
    description: 'meta [input here api field description]',
  })
  meta?: any;

  @ApiProperty({
    type: String,
    description:
      'Timestamp when the business partner record was created. Automatically set on record creation. Part of the audit trail for tracking partner lifecycle and onboarding history. Used for reporting on partner acquisition patterns.',
  })
  createdAt?: string;

  @ApiProperty({
    type: String,
    description:
      'Timestamp of the last modification to this business partner record. Automatically updated on any field change. Used for tracking partner data evolution, cache invalidation, and audit compliance. Important for monitoring partner data quality and identifying stale records.',
  })
  updatedAt?: string;

  @ApiProperty({
    type: String,
    description:
      'Soft delete timestamp. NULL indicates an active partner. When set, the partner is hidden from normal queries but preserved for audit purposes and historical data integrity. Deleted partners cannot be used in new transactions but existing relationships and history remain accessible. Used for compliance with data retention policies while maintaining referential integrity.',
  })
  deletedAt?: string;
}
