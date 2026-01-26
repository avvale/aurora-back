/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import {
  BusinessPartnerPortalSupplierDocumentDocumentType,
  BusinessPartnerPortalSupplierDocumentStatus,
} from '@api/graphql';
import { ApiProperty } from '@nestjs/swagger';

export class BusinessPartnerPortalUpdateSupplierDocumentByIdDto {
  @ApiProperty({
    type: String,
    description:
      'Unique identifier for the supplier document upload. UUID v4 format, generated automatically on creation. Used as primary key for tracking document lifecycle and referencing in external system integration callbacks.',
  })
  id: string;

  @ApiProperty({
    type: String,
    description:
      'Foreign key to the business partner (supplier) who uploaded this document. Required field - every document must be associated with a supplier. Used to filter documents by supplier in the portal view, validate upload permissions, and associate with supplier master data. Partner type should be SUPPLIER or VENDOR.',
    example: '5eae823f-032a-5688-8aaf-89dc17cea8a0',
  })
  businessPartnerId?: string;

  @ApiProperty({
    type: String,
    description:
      'Unique internal document number assigned on upload. Follows sequential format (e.g., &quot;SDOC-2024-000001&quot;). Used as primary reference in communications with supplier and integration logs. Cannot be changed after creation. Generated automatically by the system.',
  })
  documentNumber?: string;

  @ApiProperty({
    enum: BusinessPartnerPortalSupplierDocumentDocumentType,
    description:
      'Classification of the uploaded document. INVOICE: Standard supplier invoice for goods/services. CREDIT_NOTE: Adjustment reducing amount owed. DEBIT_NOTE: Adjustment increasing amount owed. PROFORMA: Preliminary invoice for review. OTHER: Miscellaneous supporting documents. Used by the processing system to apply appropriate processing rules.',
  })
  documentType?: BusinessPartnerPortalSupplierDocumentDocumentType;

  @ApiProperty({
    enum: BusinessPartnerPortalSupplierDocumentStatus,
    description:
      'Current processing status of the document. PENDING_UPLOAD: Upload initiated but file not yet received. UPLOADED: File received and stored successfully. VALIDATING: Basic validation in progress (format, size, virus scan). SENT_FOR_PROCESSING: Document transmitted to external system for OCR processing. PROCESSING: External system actively processing (OCR, data extraction). PROCESSED: Processing completed, data available. LINKED: Purchase invoice created and linked to this document. ERROR: Processing failed (see errorCode/errorMessage). REJECTED: Document rejected by external system or manually.',
  })
  status?: BusinessPartnerPortalSupplierDocumentStatus;

  @ApiProperty({
    type: Object,
    description:
      'File metadata and storage information in JSON format. Contains file name, original name, MIME type, size in bytes, storage path/URL, and upload timestamp. Used for file retrieval, display in portal, and storage management. NULL if upload not completed. Structure: {fileName: string, originalName: string, mimeType: string, size: number, path: string, uploadedAt: timestamp}.',
  })
  file?: any;

  @ApiProperty({
    type: String,
    description:
      'SHA-256 hash of the uploaded file content. Used for duplicate detection (prevent same invoice uploaded twice), integrity verification, and audit trail. Calculated server-side after upload completes. NULL during upload or if calculation fails. Indexed for fast duplicate lookups. 64 chars for hex-encoded SHA-256.',
  })
  fileHash?: string;

  @ApiProperty({
    type: String,
    description:
      'Invoice number as provided by the supplier on upload or extracted from document by OCR. Used for reference before processing completes. May differ from OCR-extracted value (see ocrInvoiceNumber). NULL if not provided by supplier. Indexed for supplier lookups when checking upload status.',
  })
  supplierInvoiceNumber?: string;

  @ApiProperty({
    type: String,
    description:
      'Invoice date as provided by the supplier on upload. Used for reference and initial validation before processing. May be corrected by OCR results. NULL if not provided by supplier. Helps prioritize processing by invoice age.',
  })
  supplierInvoiceDate?: string;

  @ApiProperty({
    type: Number,
    description:
      'Total invoice amount as declared by supplier on upload. Used for initial validation and matching against OCR results. NULL if not provided. Discrepancies between declared and OCR-extracted amounts may trigger review workflow. Stored in supplier&#x27;s declared currency.',
  })
  supplierInvoiceAmount?: number;

  @ApiProperty({
    type: String,
    description:
      'ISO 4217 currency code for the invoice amount (e.g., &quot;USD&quot;, &quot;EUR&quot;, &quot;MXN&quot;). As declared by supplier or extracted by OCR. NULL if not specified. Used for amount validation and purchase invoice creation.',
  })
  currencyCode?: string;

  @ApiProperty({
    type: String,
    description:
      'Document ID assigned by the external processing system after successful processing. Format depends on external system configuration. NULL until processing completes. Used to query external system for processing results and link back. Primary reference for external integration. Indexed for fast lookups on webhook callbacks.',
  })
  externalDocumentId?: string;

  @ApiProperty({
    type: String,
    description:
      'Company code in the external system where the invoice will be posted. Determined by business rules based on supplier and document type. NULL until external system assignment. Used for routing to correct instance in multi-company environments.',
  })
  externalCompanyCode?: string;

  @ApiProperty({
    type: String,
    description:
      'Detailed processing status from the external system. Provides granular status beyond our simplified enum (e.g., &quot;OCR_COMPLETE&quot;, &quot;VALIDATION_PENDING&quot;, &quot;POSTED&quot;, &quot;PARKED&quot;). NULL until external system begins processing. Updated via webhook or polling. Used for detailed status display and troubleshooting.',
  })
  externalProcessingStatus?: string;

  @ApiProperty({
    type: String,
    description:
      'Foreign key to the purchase invoice header created from this document after processing. NULL until processing completes and invoice is created in our system. Establishes the link between uploaded document and registered invoice. Allows supplier to navigate from their upload to the resulting invoice record. Set when status transitions to LINKED.',
    example: '1ad4b3cc-054c-548e-9429-c2b846b58148',
  })
  purchaseInvoiceHeaderId?: string;

  @ApiProperty({
    type: Number,
    description:
      'Overall OCR confidence score from the processing system (0.00 to 100.00). Indicates reliability of extracted data. NULL until OCR completes. Low scores may trigger manual review. Used for quality metrics and processing decisions. Display as percentage in UI. Scores below threshold (e.g., 80%) may require manual verification.',
  })
  ocrConfidenceScore?: number;

  @ApiProperty({
    type: Object,
    description:
      'Raw OCR extraction results from the processing system in JSON format. Contains structured data extracted from document: invoice number, date, line items, amounts, vendor info, tax details, etc. NULL until OCR completes. Used to create purchase invoice and for displaying extracted data to supplier for verification. Schema depends on processing system configuration.',
  })
  ocrData?: any;

  @ApiProperty({
    type: String,
    description:
      'Timestamp when document was transmitted to the external processing system. NULL until transmission occurs. Used for SLA tracking, processing time metrics, and troubleshooting delays. Set when status transitions to SENT_FOR_PROCESSING.',
  })
  sentForProcessingAt?: string;

  @ApiProperty({
    type: String,
    description:
      'Timestamp when the external system completed processing (success or failure). NULL until processing completes. Used for SLA tracking, processing time metrics, and audit trail. Set when status transitions to PROCESSED, ERROR, or REJECTED. Processing time &#x3D; processedAt - sentForProcessingAt.',
  })
  processedAt?: string;

  @ApiProperty({
    type: String,
    description:
      'Timestamp when purchase invoice was created and linked to this document. NULL until linking occurs. Set when status transitions to LINKED. Represents the moment the supplier&#x27;s invoice becomes a registered purchase invoice in the system.',
  })
  linkedAt?: string;

  @ApiProperty({
    type: String,
    description:
      'Error code from the external processing system or internal validation when processing fails. NULL if no error. Standardized codes for programmatic handling (e.g., &quot;OCR_FAILED&quot;, &quot;INVALID_FORMAT&quot;, &quot;DUPLICATE_INVOICE&quot;, &quot;VENDOR_MISMATCH&quot;, &quot;PROCESSING_TIMEOUT&quot;). Indexed for error analysis and reporting. Used with errorMessage for full context.',
  })
  errorCode?: string;

  @ApiProperty({
    type: String,
    description:
      'Human-readable error message when processing fails. NULL if no error. Provides detailed explanation for supplier and support staff. May contain technical details from external system or validation rules. Displayed in portal when status is ERROR or REJECTED. Not used for programmatic decisions (use errorCode instead).',
  })
  errorMessage?: string;

  @ApiProperty({
    type: Number,
    description:
      'Number of times processing has been retried after failure. Starts at 0. Incremented on each retry attempt. Used to limit automatic retries (e.g., max 3) and track problematic documents. High retry count indicates persistent issues requiring manual intervention.',
  })
  retryCount?: number;

  @ApiProperty({
    type: String,
    description:
      'Timestamp of the last retry attempt. NULL if never retried. Used for retry scheduling (exponential backoff), preventing too-frequent retries, and audit trail. Updated each time a retry is initiated.',
  })
  lastRetryAt?: string;

  @ApiProperty({
    type: String,
    description:
      'Internal notes about the document processing. Can include manual review comments, special handling instructions, or resolution notes for errors. NULL indicates no notes. Not visible to supplier unless explicitly shared. Used by accounts payable staff for coordination and documentation.',
  })
  notes?: string;

  @ApiProperty({
    type: String,
    description:
      'Notes provided by the supplier during upload. Can include context about the invoice, special instructions, or references to related documents/POs. NULL if no notes provided. Visible to both supplier and internal staff. May be passed to the processing system as additional context.',
  })
  supplierNotes?: string;

  @ApiProperty({
    type: Boolean,
    description:
      'Indicates if the document has been archived after successful processing. Archived documents may be moved to cold storage and excluded from active listings. Set to true after document is linked and retention period passes. Used for storage optimization and list filtering. Defaults to false.',
  })
  isArchived?: boolean;
}
