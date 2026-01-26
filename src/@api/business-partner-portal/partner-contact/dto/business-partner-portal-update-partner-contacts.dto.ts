/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import { ApiProperty } from '@nestjs/swagger';

export class BusinessPartnerPortalUpdatePartnerContactsDto {
  @ApiProperty({
    type: String,
    description:
      'Unique identifier for the partner contact. UUID v4 format, generated automatically on creation. Used as primary key for referencing this contact across the system, in communications tracking, and interaction logs.',
  })
  id?: string;

  @ApiProperty({
    type: String,
    description:
      'Foreign key reference to the business partner this contact belongs to. Each contact is associated with exactly one partner organization. Required field establishing the many-to-one relationship. Indexed for efficient queries when loading all contacts for a specific partner. Constraint enforced to maintain referential integrity.',
    example: '5eae823f-032a-5688-8aaf-89dc17cea8a0',
  })
  businessPartnerId?: string;

  @ApiProperty({
    type: String,
    description:
      'First name (given name) of the contact person. Required for personal identification and communication. Used in email greetings, letters, and personal addressing. Should be the preferred first name used by the contact. Cannot be empty to ensure proper identification.',
  })
  firstName?: string;

  @ApiProperty({
    type: String,
    description:
      'Last name (family name) of the contact person. Required for personal identification and formal communications. Used in sorting, searching, and formal addressing. Indexed for fast search operations when looking up contacts by last name. Combined with firstName for full name display.',
  })
  lastName?: string;

  @ApiProperty({
    type: String,
    description:
      'Job title or position of the contact within their organization (e.g., &quot;Sales Manager&quot;, &quot;CEO&quot;, &quot;Technical Lead&quot;, &quot;Purchasing Director&quot;). Used to understand the contact&#x27;s role, authority level, and area of responsibility. NULL indicates position not specified. Helps route communications to appropriate personnel.',
  })
  position?: string;

  @ApiProperty({
    type: String,
    description:
      'Department or division where the contact works (e.g., &quot;Sales&quot;, &quot;Procurement&quot;, &quot;Finance&quot;, &quot;Technical Support&quot;). Used to categorize contacts and route inquiries to the correct department. NULL indicates department not specified. Useful for large partner organizations with multiple departments.',
  })
  department?: string;

  @ApiProperty({
    type: String,
    description:
      'Business email address of the contact person. Required field for direct communication. Must be a valid, active email address. Used for sending notifications, documents, and correspondence. Indexed for fast lookups. Should be unique per contact but not enforced to allow shared departmental emails in some cases.',
  })
  email?: string;

  @ApiProperty({
    type: String,
    description:
      'Direct phone number for the contact person. Should include extension if applicable (e.g., &quot;+1-555-0100 ext. 123&quot;). NULL indicates no direct phone available. Used for urgent communications or when email is not suitable. Format is not strictly validated to allow for various international formats and extensions.',
  })
  phone?: string;

  @ApiProperty({
    type: String,
    description:
      'Mobile phone number for the contact person. Should include country code for international contacts (e.g., &quot;+1-555-0100&quot;). NULL indicates no mobile number on record. Used for urgent communications, SMS notifications, or when contact is not at their desk. Particularly useful for field representatives or executives.',
  })
  mobile?: string;

  @ApiProperty({
    type: Boolean,
    description:
      'Indicates if this is the primary contact for the business partner. Primary contact is the main point of contact and receives general communications by default. Only one contact per partner should be primary. When true, this contact is displayed first and used as default in partner communications. Defaults to false. Required field.',
  })
  isPrimary?: boolean;

  @ApiProperty({
    type: Boolean,
    description:
      'Indicates whether the contact is currently active. When false, the contact is no longer with the organization or should not be contacted. Inactive contacts are preserved for historical records but not used in active communications. Use instead of hard deletion to maintain audit trail. Required field, defaults to true.',
  })
  isActive?: boolean;

  @ApiProperty({
    type: Boolean,
    description:
      'Indicates whether this contact has portal access credentials. When true, the contact can authenticate to the Business Partner Portal to perform operations like uploading invoices, viewing documents, and managing partner data. The associated user account is referenced via userId. When false, the contact is informational only without system access. Defaults to false. Required field.',
  })
  isUser?: boolean;

  @ApiProperty({
    type: String,
    description:
      'Foreign key reference to the IAM user account for portal authentication. One-to-one relationship - each contact can have at most one user account. NULL when isUser is false (contact without portal access). When set, the contact can authenticate using the linked user&#x27;s credentials. Unique index ensures no two contacts share the same user account. Constraint avoided to prevent circular dependencies across bounded contexts (iam ↔ business-partner-portal).',
    example: 'f5f63d36-13de-5ba4-975f-d57136ca645d',
  })
  userId?: string;

  @ApiProperty({
    type: String,
    description:
      'ISO 639-1 two-letter language code for the contact&#x27;s preferred communication language (e.g., &quot;en&quot;, &quot;es&quot;, &quot;fr&quot;, &quot;de&quot;). Used to send communications in the contact&#x27;s preferred language. NULL indicates no preference specified (use system or partner default). Should match available languages in the system.',
  })
  preferredLanguage?: string;

  @ApiProperty({
    type: String,
    description:
      'Free-text field for additional notes about the contact. Can include preferences, communication tips, relationship history, or any other relevant observations. NULL indicates no notes. Examples: &quot;Prefers morning calls&quot;, &quot;Decision maker for technical purchases&quot;, &quot;On vacation until [date]&quot;. Not used for structured data or business logic.',
  })
  notes?: string;
}
