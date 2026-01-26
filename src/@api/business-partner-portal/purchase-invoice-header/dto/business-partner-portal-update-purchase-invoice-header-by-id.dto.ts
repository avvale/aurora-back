/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalPurchaseInvoiceHeaderStatus } from '@api/graphql';
import { ApiProperty } from '@nestjs/swagger';

export class BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdDto {
  @ApiProperty({
    type: String,
    description:
      'Unique identifier for the purchase invoice. UUID v4 format, generated automatically on creation. Used as primary key for referencing this invoice across the system and in related modules (invoice lines, payments, accounting entries, expense tracking).',
  })
  id: string;

  @ApiProperty({
    type: String,
    description:
      'Internal unique invoice number for this purchase invoice in our system. Follows company-specific numbering conventions (e.g., &quot;PINV-2024-001&quot;, &quot;PO-INV-00123&quot;). Must be unique across all purchase invoices. Used for internal tracking, accounting, and accounts payable management. Cannot be changed once created to maintain audit integrity. Different from supplierInvoiceNumber which is the supplier&#x27;s reference.',
  })
  invoiceNumber?: string;

  @ApiProperty({
    type: String,
    description:
      'Invoice number provided by the supplier/vendor on their invoice document. Used for cross-referencing with supplier records, payment verification, and dispute resolution. NULL indicates supplier number not yet recorded. Should match exactly what appears on the supplier&#x27;s invoice. Important for reconciliation and communication with suppliers. Indexed for fast lookup when referencing supplier documents.',
  })
  supplierInvoiceNumber?: string;

  @ApiProperty({
    type: String,
    description:
      'External system document identifier. Links this invoice to the source document in the origin ERP (e.g., SAP vendor invoice number, Oracle AP document ID). Used for data synchronization, cross-reference queries, and audit trails. Distinct from supplierInvoiceNumber which is the vendor&#x27;s reference. NULL indicates standalone invoice not synchronized from external system. Indexed for efficient lookup during synchronization operations.',
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
      'Foreign key linking to the business partner (supplier/vendor) who issued this invoice. Required field - every purchase invoice must be associated with a supplier. Used to retrieve supplier information, apply supplier-specific terms, and track supplier payment history. Links to the business-partner module. Partner type should typically be SUPPLIER or VENDOR.',
    example: '5eae823f-032a-5688-8aaf-89dc17cea8a0',
  })
  businessPartnerId?: string;

  @ApiProperty({
    type: String,
    description:
      'Date when the supplier issued their invoice. Used for accounting period classification, aging reports, and legal compliance. Should match the date on the supplier&#x27;s invoice document. Required field. May differ from the date we received or recorded the invoice. Used as reference point for calculating due dates and payment terms.',
  })
  invoiceDate?: string;

  @ApiProperty({
    type: String,
    description:
      'Date when we received the invoice from the supplier. Used for tracking receipt delays, processing time, and workflow monitoring. NULL indicates date not recorded or invoice not yet physically received. May be later than invoiceDate. Important for internal process monitoring and identifying bottlenecks in accounts payable.',
  })
  receivedDate?: string;

  @ApiProperty({
    type: String,
    description:
      'Date when payment to the supplier is due. May be specified on supplier invoice or calculated from invoiceDate plus payment terms (paymentTermDays). Used for accounts payable scheduling, cash flow planning, and avoiding late payment penalties. NULL indicates no specific due date or special terms. Important for managing working capital and supplier relationships.',
  })
  dueDate?: string;

  @ApiProperty({
    enum: BusinessPartnerPortalPurchaseInvoiceHeaderStatus,
    description:
      'Current status of the purchase invoice. DRAFT: Being prepared, not yet received or fully entered. RECEIVED: Invoice received from supplier, pending approval. APPROVED: Approved for payment, awaiting processing. PAID: Fully paid to supplier. PARTIALLY_PAID: Partial payment made, balance outstanding. OVERDUE: Past due date without full payment. CANCELLED: Voided or rejected. REFUNDED: Paid but refunded by supplier. Used for workflow control, approval routing, and payment scheduling.',
  })
  status?: BusinessPartnerPortalPurchaseInvoiceHeaderStatus;

  @ApiProperty({
    type: Number,
    description:
      'Sum of all line items before taxes and discounts. Calculated automatically from invoice lines (sum of line subtotals). Stored in the invoice currency. Required field, defaults to 0.00 for new invoices. Used as base for tax calculations and for expense categorization. Represents the gross cost of goods/services received.',
  })
  subtotal?: number;

  @ApiProperty({
    type: Number,
    description:
      'Total tax amount on the invoice (VAT, sales tax, etc.). Sum of all taxes from invoice lines. Stored in the invoice currency. Required field, defaults to 0.00. Used for tax recovery/deduction, accounting entries, and financial reporting. Tax treatment depends on applicable regulations and company tax status.',
  })
  taxAmount?: number;

  @ApiProperty({
    type: Number,
    description:
      'Total discount amount applied by the supplier. Can include line-level discounts and invoice-level discounts (early payment, volume, promotional). Stored in the invoice currency. Required field, defaults to 0.00. Reduces the total amount owed to supplier. Important for cost analysis and supplier performance evaluation.',
  })
  discountAmount?: number;

  @ApiProperty({
    type: Number,
    description:
      'Final total amount owed to the supplier. Calculated as: subtotal + taxAmount - discountAmount. Stored in the invoice currency. Required field, defaults to 0.00. This is the amount we must pay. Used in accounts payable, payment processing, cash flow planning, and expense reporting. Indexed for filtering and sorting.',
  })
  totalAmount?: number;

  @ApiProperty({
    type: Number,
    description:
      'Amount already paid to the supplier. Accumulated from payment transactions. Stored in the invoice currency. Required field, defaults to 0.00 for new invoices. Used to calculate outstanding balance (totalAmount - paidAmount). When paidAmount equals totalAmount, status should be PAID. When paidAmount is between 0 and totalAmount, status should be PARTIALLY_PAID. Important for cash flow tracking.',
  })
  paidAmount?: number;

  @ApiProperty({
    type: String,
    description:
      'ISO 4217 currency code for this invoice (e.g., USD, EUR, GBP, MXN). All monetary amounts in this invoice are in this currency. Required field, defaults to USD. Used for currency conversion, multi-currency reporting, and payment processing. Must be a valid, supported currency code. Important for international suppliers and foreign exchange management.',
  })
  currencyCode?: string;

  @ApiProperty({
    type: Number,
    description:
      'Payment terms in days for this specific invoice. Typically matches supplier&#x27;s standard terms but can vary per invoice. Used to calculate dueDate (invoiceDate + paymentTermDays). NULL indicates special terms or terms specified directly in dueDate. Common values: 0 (immediate), 15 (net 15), 30 (net 30), 45 (net 45), 60 (net 60), 90 (net 90). Important for cash flow planning and supplier relationship management.',
  })
  paymentTermDays?: number;

  @ApiProperty({
    type: String,
    description:
      'Internal notes or comments about this purchase invoice. Can include approval notes, reconciliation details, payment instructions, or context about the purchase. NULL indicates no notes. Not shared with supplier. Used by accounts payable staff for coordination, issue tracking, and documentation. May include references to purchase orders, delivery notes, or contracts.',
  })
  notes?: string;

  @ApiProperty({
    type: String,
    description:
      'Notes from the approval process. Can include approver comments, conditions, or reasons for approval/rejection. NULL indicates no approval notes or invoice not yet reviewed. Used for audit trail, workflow transparency, and communicating approval decisions. Important for internal controls and compliance.',
  })
  approvalNotes?: string;
}
