/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import { BusinessPartnerPortalPartnerAddressType } from '@api/graphql';
import { ApiProperty } from '@nestjs/swagger';

export class BusinessPartnerPortalUpdatePartnerAddressByIdDto {
  @ApiProperty({
    type: String,
    description:
      'Unique identifier for the partner address. UUID v4 format, generated automatically on creation. Used as primary key for referencing this address in shipping, billing, and logistics operations.',
  })
  id: string;

  @ApiProperty({
    type: String,
    description:
      'Foreign key reference to the business partner this address belongs to. Each address is associated with exactly one partner organization. Required field establishing the many-to-one relationship. Indexed for efficient queries when loading all addresses for a specific partner. Constraint enforced to maintain referential integrity.',
    example: '5eae823f-032a-5688-8aaf-89dc17cea8a0',
  })
  businessPartnerId?: string;

  @ApiProperty({
    enum: BusinessPartnerPortalPartnerAddressType,
    description:
      'Classification of the address purpose. BILLING: Address for invoices and financial documents. SHIPPING: Address for delivering goods. OFFICE: General office location. WAREHOUSE: Storage or distribution center. HEADQUARTERS: Main company location. OTHER: Any other address type. Used to select appropriate address for different operations (e.g., invoice generation uses BILLING, delivery uses SHIPPING). Required field.',
  })
  type?: BusinessPartnerPortalPartnerAddressType;

  @ApiProperty({
    type: String,
    description:
      'User-friendly label or nickname for the address (e.g., &quot;Main Office&quot;, &quot;Seattle Warehouse&quot;, &quot;European HQ&quot;). Used for quick identification in dropdowns and reports. NULL indicates no label specified (system generates label from type and location). Makes it easier to distinguish between multiple addresses of the same type.',
  })
  label?: string;

  @ApiProperty({
    type: String,
    description:
      'Primary street address line. Should include street number, street name, and any primary location identifiers. Required field for a complete address. Used in shipping labels, maps, and official documents. Example: &quot;123 Main Street&quot; or &quot;Av. Reforma 500, Col. Centro&quot;. Cannot be empty.',
  })
  addressLine1?: string;

  @ApiProperty({
    type: String,
    description:
      'Secondary street address line for additional location details. Can include apartment/suite/floor numbers, building names, or additional instructions (e.g., &quot;Suite 200&quot;, &quot;Building B, 3rd Floor&quot;, &quot;c/o Receiving Department&quot;). NULL indicates no additional address details needed. Used to ensure accurate delivery and location identification.',
  })
  addressLine2?: string;

  @ApiProperty({
    type: String,
    description:
      'City or municipality name. Required field for a complete address. Used in shipping, billing, and geographic analysis. Should be the official city name in local language. Examples: &quot;New York&quot;, &quot;Ciudad de México&quot;, &quot;São Paulo&quot;. Combined with state/province and country for full location identification.',
  })
  city?: string;

  @ApiProperty({
    type: String,
    description:
      'Postal code, ZIP code, or postcode. Format varies by country (e.g., &quot;10001&quot; in US, &quot;28001&quot; in Spain, &quot;SW1A 1AA&quot; in UK). NULL indicates no postal code available (some countries or rural areas). Used for shipping cost calculation, delivery routing, and geographic analysis. Not strictly validated to accommodate international formats.',
  })
  postalCode?: string;

  @ApiProperty({
    type: String,
    description:
      'Foreign key reference to the country from the common bounded context. Required field specifying which country this address is located in. Used for international shipping, tax calculations, and geographic reporting. Links to common/country module for standardized country data. Constraint avoided to prevent circular dependencies across bounded contexts.',
    example: 'f117d0ca-6c95-5bdd-9e9d-ffa16c621e74',
  })
  countryId?: string;

  @ApiProperty({
    type: String,
    description:
      'Foreign key reference to the first-level administrative division (state, province, region) from the common bounded context. NULL indicates not specified or not applicable. Used for regional analysis, shipping zones, and tax calculations. Examples: California (US state), Ontario (Canadian province), Cataluña (Spanish autonomous community). Links to common/administrative-area-level-1 module.',
    example: '018e2f70-60e0-5606-89d2-9380ed78e8ff',
  })
  administrativeAreaLevel1Id?: string;

  @ApiProperty({
    type: String,
    description:
      'Foreign key reference to the second-level administrative division (county, district, comarca) from the common bounded context. NULL indicates not specified or not applicable. Used for detailed regional analysis and local regulations. Examples: Los Angeles County (US), Greater London (UK). Links to common/administrative-area-level-2 module.',
    example: 'c77e1c2d-0807-59c9-98e9-337d6ca40b95',
  })
  administrativeAreaLevel2Id?: string;

  @ApiProperty({
    type: String,
    description:
      'Foreign key reference to the third-level administrative division (municipality, township, city district) from the common bounded context. NULL indicates not specified or not applicable. Used for precise local identification and municipal-level regulations. Examples: Manhattan (NYC borough), Coyoacán (Mexico City borough). Links to common/administrative-area-level-3 module.',
    example: 'fa3cddd9-0f98-520d-830b-ca2f42ead922',
  })
  administrativeAreaLevel3Id?: string;

  @ApiProperty({
    type: Number,
    description:
      'Geographic latitude coordinate in decimal degrees format. Range: -90 to +90. NULL indicates coordinates not geocoded. Used for mapping, distance calculations, and location-based services. Example: 40.7128 (New York City). High precision (14 decimals) for accurate positioning. Should be populated through geocoding services when possible.',
  })
  latitude?: number;

  @ApiProperty({
    type: Number,
    description:
      'Geographic longitude coordinate in decimal degrees format. Range: -180 to +180. NULL indicates coordinates not geocoded. Used for mapping, distance calculations, and route optimization. Example: -74.0060 (New York City). High precision (14 decimals) for accurate positioning. Should be populated through geocoding services when possible.',
  })
  longitude?: number;

  @ApiProperty({
    type: Boolean,
    description:
      'Indicates if this is the primary address for the business partner. Primary address is used as default in documents and operations when no specific address type is requested. Only one address per partner should be primary. When true, this address is displayed first and used as fallback. Defaults to false. Required field.',
  })
  isPrimary?: boolean;

  @ApiProperty({
    type: Boolean,
    description:
      'Indicates whether the address is currently valid and usable. When false, the address is no longer valid (e.g., partner moved, location closed) but preserved for historical records. Inactive addresses cannot be used in new transactions but existing references remain valid. Use instead of hard deletion to maintain audit trail. Required field, defaults to true.',
  })
  isActive?: boolean;

  @ApiProperty({
    type: String,
    description:
      'Free-text field for additional address-specific notes or delivery instructions. Can include access codes, delivery time restrictions, special handling requirements, or any other relevant information. NULL indicates no notes. Examples: &quot;Use loading dock entrance&quot;, &quot;Call before delivery&quot;, &quot;No deliveries on weekends&quot;. Not used for structured data or business logic.',
  })
  notes?: string;
}
