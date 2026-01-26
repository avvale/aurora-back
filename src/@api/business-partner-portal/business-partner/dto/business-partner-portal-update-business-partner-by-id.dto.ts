/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import { ApiProperty } from '@nestjs/swagger';

export class BusinessPartnerPortalUpdateBusinessPartnerByIdDto {
  @ApiProperty({
    type: String,
    description:
      'Unique identifier for the business partner. UUID v4 format, generated automatically on creation. Used as primary key for referencing this partner across the system and in all related modules (contacts, addresses, collection modes).',
  })
  id: string;

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
  type?: string[];

  @ApiProperty({
    type: String,
    description:
      'Legal or commercial name of the business partner. Used in official documents, contracts, and communications. Must be the complete registered business name for legal entities. For individuals, use full legal name. Required field for partner identification and documentation. Indexed for fast search operations.',
  })
  name?: string;

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
  isActive?: boolean;

  @ApiProperty({
    type: Object,
    description: 'meta [input here api field description]',
  })
  meta?: any;
}
