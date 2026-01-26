/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import { ApiProperty } from '@nestjs/swagger';

export class BusinessPartnerPortalUpdatePurchaseInvoicePositionsDto {
  @ApiProperty({
    type: String,
    description:
      'Unique identifier for the purchase invoice position. UUID v4 format, generated automatically on creation. Used as primary key for referencing this position across the system and in related operations (accounting entries, expense tracking, inventory receiving, reporting).',
  })
  id?: string;

  @ApiProperty({
    type: String,
    description:
      'Foreign key linking to the parent purchase invoice header. Required field - every position must belong to an invoice. Used to group positions by invoice, calculate invoice totals, and maintain referential integrity. Links to the purchase-invoice-header module. Deleting an invoice should cascade delete or handle its positions appropriately.',
    example: '1ad4b3cc-054c-548e-9429-c2b846b58148',
  })
  purchaseInvoiceHeaderId?: string;

  @ApiProperty({
    type: Number,
    description:
      'Sequential position number within the invoice (1, 2, 3, etc.). Used for display order and reference in communications and accounting. Required field. Should be unique within the same invoice. Helps staff identify specific positions when processing, reviewing, or querying the invoice. Typically matches the line numbering on the supplier&#x27;s invoice document.',
  })
  positionNumber?: number;

  @ApiProperty({
    type: String,
    description:
      'Description of the product, service, or expense for this position. Should match or clarify what the supplier listed on their invoice. Required field. Used for expense tracking, accounting categorization, and reconciliation. May include product name, service description, specifications, or expense type. Max 510 characters to allow detailed descriptions while maintaining indexing efficiency.',
  })
  description?: string;

  @ApiProperty({
    type: String,
    description:
      'Product or service code/SKU for this position. May be our internal code or the supplier&#x27;s product code. Used for inventory receiving, expense categorization, and analytics. NULL indicates a custom item or one-time expense without a standard product code. When set, can be used for automated expense classification and cost analysis. Indexed for fast product-based queries and reporting.',
  })
  productCode?: string;

  @ApiProperty({
    type: Number,
    description:
      'Quantity of items or units received for this position. Supports up to 4 decimal places to handle fractional quantities (e.g., 2.5 hours, 1.75 kg, 0.5 units). Required field, defaults to 1.0000. Used to calculate position subtotal (quantity × unitPrice). Must be greater than zero. For service hours, weight-based pricing, bulk materials, or partial units. Decimal precision allows flexible purchase scenarios.',
  })
  quantity?: number;

  @ApiProperty({
    type: Number,
    description:
      'Price per unit in the invoice currency charged by the supplier. Required field, defaults to 0.00 (for complimentary items or to be set later). Used to calculate position subtotal before discounts and taxes (quantity × unitPrice). Should match the unit price on the supplier&#x27;s invoice. Used for cost analysis and price variance tracking. Stored with 2 decimal places for standard currency precision.',
  })
  unitPrice?: number;

  @ApiProperty({
    type: Number,
    description:
      'Discount percentage applied by the supplier to this position (0.00 to 100.00). Required field, defaults to 0.00 (no discount). Used to calculate discountAmount (subtotalBeforeDiscount × discountPercent / 100). Reflects supplier pricing strategies, volume discounts, or promotional offers. Display as &quot;10%&quot; for 10.00 value. Max 100.00 for full discount (free item or promotional sample).',
  })
  discountPercent?: number;

  @ApiProperty({
    type: Number,
    description:
      'Absolute discount amount in the invoice currency. Calculated from discountPercent or entered directly for fixed-amount discounts provided by supplier. Required field, defaults to 0.00. Subtracted from subtotalBeforeDiscount to calculate net subtotal. Used for both percentage-based and fixed-amount discounts. Should not exceed subtotalBeforeDiscount. Important for accurate cost tracking.',
  })
  discountAmount?: number;

  @ApiProperty({
    type: Number,
    description:
      'Tax percentage applied to this position (e.g., VAT, sales tax, import duty). Required field, defaults to 0.00 (no tax or tax-exempt). Used to calculate taxAmount (subtotal after discount × taxPercent / 100). Tax rate depends on product type, location, and tax regulations. Display as &quot;21%&quot; for 21.00 value. Important for tax deduction claims and financial reporting. Multiple tax rates may apply to different positions in the same invoice.',
  })
  taxPercent?: number;

  @ApiProperty({
    type: Number,
    description:
      'Tax amount in the invoice currency. Calculated from taxPercent applied to the net subtotal (after discount). Required field, defaults to 0.00. Used to calculate position total and contribute to invoice tax total. Should be calculated consistently based on applicable tax rules. May be recoverable/deductible depending on tax status. Part of the final cost for this position.',
  })
  taxAmount?: number;

  @ApiProperty({
    type: Number,
    description:
      'Position subtotal before discounts and taxes. Calculated as quantity × unitPrice. Required field, defaults to 0.00. Used as the base for applying discounts and taxes. Important for expense tracking and cost analysis. This is the gross cost before any adjustments. Part of invoice subtotal calculation. Used for comparing costs across time periods and suppliers.',
  })
  subtotal?: number;

  @ApiProperty({
    type: Number,
    description:
      'Final total for this position. Calculated as subtotal - discountAmount + taxAmount. Required field, defaults to 0.00. This is the actual cost contributed by this position to the invoice totalAmount. Used for displaying itemized costs and calculating invoice total. Sum of all position totals across the invoice should equal invoice totalAmount (plus any invoice-level adjustments). Critical for expense reporting.',
  })
  positionTotal?: number;

  @ApiProperty({
    type: String,
    description:
      'Expense category or account code for this position. Used for accounting classification, budget tracking, and financial reporting (e.g., &quot;Office Supplies&quot;, &quot;Marketing&quot;, &quot;Travel&quot;, &quot;Cost of Goods Sold&quot;). NULL indicates category not yet assigned or not applicable. Should align with company chart of accounts. Indexed for fast expense reporting and analysis. Important for budget control and cost allocation.',
  })
  expenseCategory?: string;

  @ApiProperty({
    type: String,
    description:
      'Additional notes or comments about this specific position. Can include receiving notes, quality issues, special conditions, or reconciliation comments. NULL indicates no notes. Internal use only. Used for documentation, issue tracking, and providing context for accounting staff. May reference purchase orders, delivery receipts, or quality inspections.',
  })
  notes?: string;
}
