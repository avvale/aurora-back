/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalSalesInvoiceHeaderDto } from '@api/business-partner-portal/sales-invoice-header';
import { ApiProperty } from '@nestjs/swagger';

export class BusinessPartnerPortalSalesInvoicePositionDto {
  @ApiProperty({
    type: String,
    description:
      'Unique identifier for the sales invoice position. UUID v4 format, generated automatically on creation. Used as primary key for referencing this position across the system and in related operations (accounting entries, inventory movements, reporting).',
  })
  id: string;

  @ApiProperty({
    type: Number,
    description:
      'Auto-incrementing sequential identifier for the sales invoice position. Used for internal ordering, human-readable reference numbers, and optimized queries. Not exposed in external APIs. Provides a stable, predictable identifier for database operations.',
  })
  rowId: number;

  @ApiProperty({
    type: String,
    description:
      'Foreign key linking to the parent sales invoice header. Required field - every position must belong to an invoice. Used to group positions by invoice, calculate invoice totals, and maintain referential integrity. Links to the sales-invoice-header module. Deleting an invoice should cascade delete or handle its positions appropriately.',
    example: 'fdcc7999-559c-5836-8c62-6126adfc8a7f',
  })
  salesInvoiceHeaderId: string;

  @ApiProperty({
    type: () => BusinessPartnerPortalSalesInvoiceHeaderDto,
    description:
      'BusinessPartnerPortalSalesInvoiceHeader [input here api field description]',
  })
  salesInvoiceHeader?: BusinessPartnerPortalSalesInvoiceHeaderDto;

  @ApiProperty({
    type: Number,
    description:
      'Sequential position number within the invoice (1, 2, 3, etc.). Used for display order and reference in customer communications. Required field. Should be unique within the same invoice. Helps customers and staff identify specific positions when discussing or querying the invoice. Typically auto-assigned when adding positions.',
  })
  positionNumber: number;

  @ApiProperty({
    type: String,
    description:
      'Description of the product, service, or charge for this position. Should be clear and detailed enough for the customer to understand what they are being charged for. Required field. Displayed on the invoice and used for customer communication. May include product name, model, specifications, or service details. Max 510 characters to allow detailed descriptions while maintaining indexing efficiency.',
  })
  description: string;

  @ApiProperty({
    type: String,
    description:
      'Product or service code/SKU for this position. Used for inventory tracking, product analytics, and integration with catalog systems. NULL indicates a custom item or one-time charge without a standard product code. When set, can be used to auto-populate description, price, and tax information from product catalog. Indexed for fast product-based queries and reporting.',
  })
  productCode?: string;

  @ApiProperty({
    type: Number,
    description:
      'Quantity of items or units for this position. Supports up to 4 decimal places to handle fractional quantities (e.g., 2.5 hours, 1.75 kg, 0.5 units). Required field, defaults to 1.0000. Used to calculate position subtotal (quantity × unitPrice). Must be greater than zero. For service hours, weight-based pricing, or partial units. Decimal precision allows flexible pricing models.',
  })
  quantity: number;

  @ApiProperty({
    type: Number,
    description:
      'Price per unit in the invoice currency. Required field, defaults to 0.00 (for complimentary items or to be set later). Used to calculate position subtotal before discounts and taxes (quantity × unitPrice). Should be the standard or agreed-upon price for one unit of the product/service. Can be zero for promotional items. Stored with 2 decimal places for standard currency precision.',
  })
  unitPrice: number;

  @ApiProperty({
    type: Number,
    description:
      'Discount percentage applied to this position (0.00 to 100.00). Required field, defaults to 0.00 (no discount). Used to calculate discountAmount (subtotalBeforeDiscount × discountPercent / 100). Allows position-level discounts for promotions, volume pricing, or customer-specific agreements. Display as &quot;10%&quot; for 10.00 value. Max 100.00 for full discount (free item).',
  })
  discountPercent: number;

  @ApiProperty({
    type: Number,
    description:
      'Absolute discount amount in the invoice currency. Calculated from discountPercent or entered directly for fixed-amount discounts. Required field, defaults to 0.00. Subtracted from subtotalBeforeDiscount to calculate net subtotal. Used for both percentage-based and fixed-amount discounts. Should not exceed subtotalBeforeDiscount.',
  })
  discountAmount: number;

  @ApiProperty({
    type: Number,
    description:
      'Tax percentage applied to this position (e.g., VAT, sales tax). Required field, defaults to 0.00 (no tax or tax-exempt). Used to calculate taxAmount (subtotal after discount × taxPercent / 100). Tax rate depends on product type, customer location, and tax regulations. Display as &quot;21%&quot; for 21.00 value. Multiple tax rates may apply to different positions in the same invoice.',
  })
  taxPercent: number;

  @ApiProperty({
    type: Number,
    description:
      'Tax amount in the invoice currency. Calculated from taxPercent applied to the net subtotal (after discount). Required field, defaults to 0.00. Used to calculate position total and contribute to invoice tax total. Should be calculated consistently based on applicable tax rules and regulations. Part of the final amount for this position.',
  })
  taxAmount: number;

  @ApiProperty({
    type: Number,
    description:
      'Position subtotal before discounts and taxes. Calculated as quantity × unitPrice. Required field, defaults to 0.00. Used as the base for applying discounts and taxes. Important for showing pricing breakdown to customers. This is the gross amount before any adjustments. Part of invoice subtotal calculation.',
  })
  subtotal: number;

  @ApiProperty({
    type: Number,
    description:
      'Final total for this position. Calculated as subtotal - discountAmount + taxAmount. Required field, defaults to 0.00. This is the amount contributed by this position to the invoice totalAmount. Used for displaying itemized totals and calculating invoice total. Sum of all position totals across the invoice should equal invoice totalAmount (plus any invoice-level adjustments).',
  })
  positionTotal: number;

  @ApiProperty({
    type: String,
    description:
      'Additional notes or comments about this specific position. Can include special instructions, customization details, or context. NULL indicates no notes. May be displayed on the invoice or kept internal depending on implementation. Used for clarification, special handling, or customer communication about this item.',
  })
  notes?: string;

  @ApiProperty({
    type: String,
    description:
      'Timestamp when the sales invoice position was created. Automatically set on record creation. Part of the audit trail for tracking position lifecycle. Used for reporting on invoice detail patterns and workflow analysis.',
  })
  createdAt?: string;

  @ApiProperty({
    type: String,
    description:
      'Timestamp of the last modification to this sales invoice position. Automatically updated on any field change. Used for tracking position evolution, cache invalidation, and audit compliance. Important for monitoring invoice changes and identifying modifications after initial creation.',
  })
  updatedAt?: string;

  @ApiProperty({
    type: String,
    description:
      'Soft delete timestamp. NULL indicates an active position. When set, the position is hidden from normal queries but preserved for audit purposes and historical data integrity. Deleted positions are excluded from total calculations. Used for data retention policies while maintaining referential integrity. Typically deleted when parent invoice is deleted or when positions are removed during editing.',
  })
  deletedAt?: string;
}
