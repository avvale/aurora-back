/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalBusinessPartnerDto } from '@api/business-partner-portal/business-partner';
import { BusinessPartnerPortalSalesInvoicePositionDto } from '@api/business-partner-portal/sales-invoice-position';
import { BusinessPartnerPortalSalesInvoiceHeaderStatus } from '@api/graphql';
import { ApiProperty } from '@nestjs/swagger';

export class BusinessPartnerPortalSalesInvoiceHeaderDto {
  @ApiProperty({
    type: String,
    description:
      'Unique identifier for the sales invoice. UUID v4 format, generated automatically on creation. Used as primary key for referencing this invoice across the system and in related modules (invoice positions, payments, accounting entries).',
  })
  id: string;

  @ApiProperty({
    type: Number,
    description:
      'Auto-incrementing sequential identifier for the sales invoice. Used for internal ordering, human-readable reference numbers, and optimized queries. Not exposed in external APIs. Provides a stable, predictable identifier for database operations.',
  })
  rowId: number;

  @ApiProperty({
    type: String,
    description:
      'Unique invoice number used for identification and legal compliance. Follows company-specific or country-specific numbering conventions (e.g., &quot;INV-2024-001&quot;, &quot;FAC-A-00001234&quot;). Must be unique across all sales invoices. Used in customer communications, accounting, and tax reporting. Cannot be changed once issued to maintain legal and audit integrity.',
  })
  invoiceNumber: string;

  @ApiProperty({
    type: String,
    description:
      'External system document identifier. Links this invoice to the source document in the origin ERP (e.g., SAP billing document number, Oracle invoice ID). Used for data synchronization, cross-reference queries, and audit trails. NULL indicates standalone invoice not synchronized from external system. Indexed for efficient lookup during synchronization operations.',
  })
  externalId?: string;

  @ApiProperty({
    type: String,
    description:
      'Code identifying the source system or company in multi-system environments. Allows filtering invoices by origin when integrating with multiple ERPs or company codes (e.g., &quot;SAP_US&quot;, &quot;ORACLE_EU&quot;, &quot;D365_MX&quot;). NULL indicates local system or single-ERP environment. Used together with externalId for unique identification across federated systems.',
  })
  externalSystemCode?: string;

  @ApiProperty({
    type: String,
    description:
      'Foreign key linking to the business partner (customer) receiving this invoice. Required field - every sales invoice must be associated with a customer. Used to retrieve customer information, apply customer-specific terms, and track customer purchase history. Links to the business-partner module.',
    example: '5eae823f-032a-5688-8aaf-89dc17cea8a0',
  })
  businessPartnerId: string;

  @ApiProperty({
    type: () => BusinessPartnerPortalBusinessPartnerDto,
    description:
      'BusinessPartnerPortalBusinessPartner [input here api field description]',
  })
  businessPartner?: BusinessPartnerPortalBusinessPartnerDto;

  @ApiProperty({
    type: String,
    description:
      'Date when the invoice was issued. Used for accounting period classification, aging reports, and legal compliance. Cannot be in the future. Required field for all invoices. Typically set to today&#x27;s date when creating new invoices. Used as reference point for calculating due dates and payment terms.',
  })
  invoiceDate: string;

  @ApiProperty({
    type: String,
    description:
      'Date when payment is due. Calculated from invoiceDate plus payment terms (paymentTermDays). Used for accounts receivable aging, overdue tracking, and payment reminders. NULL indicates no specific due date (pay on receipt or special terms). When set, invoices become overdue if unpaid after this date.',
  })
  dueDate?: string;

  @ApiProperty({
    enum: BusinessPartnerPortalSalesInvoiceHeaderStatus,
    description:
      'Current status of the sales invoice. DRAFT: Not yet finalized or sent. SENT: Issued to customer, awaiting payment. PAID: Fully paid. PARTIALLY_PAID: Partial payment received, balance outstanding. OVERDUE: Past due date without full payment. CANCELLED: Voided before payment. REFUNDED: Paid but refunded to customer. Used for workflow control, filtering, and reporting.',
  })
  status: BusinessPartnerPortalSalesInvoiceHeaderStatus;

  @ApiProperty({
    type: Number,
    description:
      'Sum of all positions before taxes and discounts. Calculated automatically from invoice positions (sum of position subtotals). Stored in the invoice currency. Required field, defaults to 0.00 for new invoices. Used as base for tax calculations and for displaying invoice breakdown to customers.',
  })
  subtotal: number;

  @ApiProperty({
    type: Number,
    description:
      'Total tax amount applied to the invoice. Sum of all taxes from invoice positions. Stored in the invoice currency. Required field, defaults to 0.00. Used for tax reporting, accounting entries, and displaying tax breakdown to customers. Tax rates and rules are applied at position level.',
  })
  taxAmount: number;

  @ApiProperty({
    type: Number,
    description:
      'Total discount amount applied to the invoice. Can include position-level discounts and invoice-level discounts. Stored in the invoice currency. Required field, defaults to 0.00. Used to track promotional offers, customer-specific pricing, and volume discounts. Reduces the total amount due.',
  })
  discountAmount: number;

  @ApiProperty({
    type: Number,
    description:
      'Final total amount due from the customer. Calculated as: subtotal + taxAmount - discountAmount. Stored in the invoice currency. Required field, defaults to 0.00. This is the amount the customer must pay. Used in accounts receivable, payment processing, and financial reporting. Indexed for filtering and sorting.',
  })
  totalAmount: number;

  @ApiProperty({
    type: Number,
    description:
      'Amount already paid by the customer. Accumulated from payment transactions. Stored in the invoice currency. Required field, defaults to 0.00 for new invoices. Used to calculate outstanding balance (totalAmount - paidAmount). When paidAmount equals totalAmount, status should be PAID. When paidAmount is between 0 and totalAmount, status should be PARTIALLY_PAID.',
  })
  paidAmount: number;

  @ApiProperty({
    type: String,
    description:
      'ISO 4217 currency code for this invoice (e.g., USD, EUR, GBP, MXN). All monetary amounts in this invoice are in this currency. Required field, defaults to USD. Used for currency conversion, multi-currency reporting, and display formatting. Must be a valid, supported currency code. Cannot be changed after invoice is sent to maintain consistency.',
  })
  currencyCode: string;

  @ApiProperty({
    type: Number,
    description:
      'Payment terms in days for this specific invoice. Typically copied from the business partner&#x27;s default payment terms but can be overridden per invoice. Used to calculate dueDate (invoiceDate + paymentTermDays). NULL indicates special payment terms or pay on receipt. Common values: 0 (immediate), 15 (net 15), 30 (net 30), 60 (net 60), 90 (net 90).',
  })
  paymentTermDays?: number;

  @ApiProperty({
    type: String,
    description:
      'Internal notes or comments about this invoice. Can include special instructions, payment arrangements, or context about the transaction. NULL indicates no notes. Not displayed to the customer (use customerNotes for customer-facing comments). Used by staff for reference and coordination.',
  })
  notes?: string;

  @ApiProperty({
    type: String,
    description:
      'Notes or messages displayed to the customer on the invoice. Can include payment instructions, terms and conditions, thank you messages, or special notices. NULL indicates no customer-facing notes. Appears on the printed/PDF invoice. Used for customer communication and compliance with legal requirements.',
  })
  customerNotes?: string;

  @ApiProperty({
    type: () => [BusinessPartnerPortalSalesInvoicePositionDto],
    description:
      'One-to-many relationship with sales invoice positions. Each invoice contains one or more positions representing products, services, or charges. NULL or empty is invalid for a complete invoice (at least one position is required). Positions contain detailed information about quantities, prices, taxes, and discounts. Used to calculate invoice totals and provide itemized breakdown to customers.',
  })
  positions?: BusinessPartnerPortalSalesInvoicePositionDto[];

  @ApiProperty({
    type: String,
    description:
      'Timestamp when the sales invoice was created. Automatically set on record creation. Part of the audit trail for tracking invoice lifecycle and workflow. Used for reporting on invoice creation patterns and aging analysis.',
  })
  createdAt?: string;

  @ApiProperty({
    type: String,
    description:
      'Timestamp of the last modification to this sales invoice. Automatically updated on any field change. Used for tracking invoice data evolution, cache invalidation, and audit compliance. Important for monitoring invoice workflow and identifying stale or problematic invoices.',
  })
  updatedAt?: string;

  @ApiProperty({
    type: String,
    description:
      'Soft delete timestamp. NULL indicates an active invoice. When set, the invoice is hidden from normal queries but preserved for audit purposes and historical data integrity. Deleted invoices cannot be modified but remain accessible for reporting and compliance. Used for data retention policies while maintaining referential integrity. Consider using CANCELLED status instead for voided invoices.',
  })
  deletedAt?: string;
}
