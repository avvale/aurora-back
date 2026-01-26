/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import { BusinessPartnerPortalBusinessPartnerMapper } from '@app/business-partner-portal/business-partner';
import {
  BusinessPartnerPortalPaymentCollectionMode,
  BusinessPartnerPortalPaymentCollectionModeResponse,
} from '@app/business-partner-portal/payment-collection-mode';
import {
  BusinessPartnerPortalPaymentCollectionModeAccountHolderName,
  BusinessPartnerPortalPaymentCollectionModeAccountNumber,
  BusinessPartnerPortalPaymentCollectionModeBankName,
  BusinessPartnerPortalPaymentCollectionModeBusinessPartnerId,
  BusinessPartnerPortalPaymentCollectionModeCreatedAt,
  BusinessPartnerPortalPaymentCollectionModeCurrencyCode,
  BusinessPartnerPortalPaymentCollectionModeDeletedAt,
  BusinessPartnerPortalPaymentCollectionModeExpirationDate,
  BusinessPartnerPortalPaymentCollectionModeIban,
  BusinessPartnerPortalPaymentCollectionModeId,
  BusinessPartnerPortalPaymentCollectionModeIsActive,
  BusinessPartnerPortalPaymentCollectionModeIsPrimary,
  BusinessPartnerPortalPaymentCollectionModeLabel,
  BusinessPartnerPortalPaymentCollectionModeLastUsedAt,
  BusinessPartnerPortalPaymentCollectionModeNotes,
  BusinessPartnerPortalPaymentCollectionModePaymentModeId,
  BusinessPartnerPortalPaymentCollectionModeRoutingNumber,
  BusinessPartnerPortalPaymentCollectionModeRowId,
  BusinessPartnerPortalPaymentCollectionModeSwiftCode,
  BusinessPartnerPortalPaymentCollectionModeUpdatedAt,
} from '@app/business-partner-portal/payment-collection-mode/domain/value-objects';
import { BusinessPartnerPortalPaymentModeMapper } from '@app/business-partner-portal/payment-mode';
import {
  CQMetadata,
  IMapper,
  LiteralObject,
  MapperOptions,
} from '@aurorajs.dev/core';

export class BusinessPartnerPortalPaymentCollectionModeMapper
  implements IMapper
{
  constructor(public options: MapperOptions = { eagerLoading: true }) {}

  /**
   * Map object to aggregate
   * @param paymentCollectionMode
   */
  mapModelToAggregate(
    paymentCollectionMode: LiteralObject,
    cQMetadata?: CQMetadata,
  ): BusinessPartnerPortalPaymentCollectionMode {
    if (!paymentCollectionMode) return;

    return this.makeAggregate(paymentCollectionMode, cQMetadata);
  }

  /**
   * Map array of objects to array aggregates
   * @param paymentCollectionModes
   */
  mapModelsToAggregates(
    paymentCollectionModes: LiteralObject[],
    cQMetadata?: CQMetadata,
  ): BusinessPartnerPortalPaymentCollectionMode[] {
    if (!Array.isArray(paymentCollectionModes)) return;

    return paymentCollectionModes.map((paymentCollectionMode) =>
      this.makeAggregate(paymentCollectionMode, cQMetadata),
    );
  }

  /**
   * Map aggregate to response
   * @param paymentCollectionMode
   */
  mapAggregateToResponse(
    paymentCollectionMode: BusinessPartnerPortalPaymentCollectionMode,
  ): BusinessPartnerPortalPaymentCollectionModeResponse {
    return this.makeResponse(paymentCollectionMode);
  }

  /**
   * Map array of aggregates to array responses
   * @param paymentCollectionModes
   */
  mapAggregatesToResponses(
    paymentCollectionModes: BusinessPartnerPortalPaymentCollectionMode[],
  ): BusinessPartnerPortalPaymentCollectionModeResponse[] {
    if (!Array.isArray(paymentCollectionModes)) return;

    return paymentCollectionModes.map((paymentCollectionMode) =>
      this.makeResponse(paymentCollectionMode),
    );
  }

  private makeAggregate(
    paymentCollectionMode: LiteralObject,
    cQMetadata?: CQMetadata,
  ): BusinessPartnerPortalPaymentCollectionMode {
    return BusinessPartnerPortalPaymentCollectionMode.register(
      new BusinessPartnerPortalPaymentCollectionModeId(
        paymentCollectionMode.id,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPaymentCollectionModeRowId(
        paymentCollectionMode.rowId,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPaymentCollectionModeBusinessPartnerId(
        paymentCollectionMode.businessPartnerId,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPaymentCollectionModePaymentModeId(
        paymentCollectionMode.paymentModeId,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPaymentCollectionModeLabel(
        paymentCollectionMode.label,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPaymentCollectionModeAccountNumber(
        paymentCollectionMode.accountNumber,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPaymentCollectionModeAccountHolderName(
        paymentCollectionMode.accountHolderName,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPaymentCollectionModeBankName(
        paymentCollectionMode.bankName,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPaymentCollectionModeRoutingNumber(
        paymentCollectionMode.routingNumber,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPaymentCollectionModeIban(
        paymentCollectionMode.iban,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPaymentCollectionModeSwiftCode(
        paymentCollectionMode.swiftCode,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPaymentCollectionModeCurrencyCode(
        paymentCollectionMode.currencyCode,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPaymentCollectionModeExpirationDate(
        paymentCollectionMode.expirationDate,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPaymentCollectionModeIsPrimary(
        paymentCollectionMode.isPrimary,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPaymentCollectionModeIsActive(
        paymentCollectionMode.isActive,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPaymentCollectionModeNotes(
        paymentCollectionMode.notes,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPaymentCollectionModeLastUsedAt(
        paymentCollectionMode.lastUsedAt,
        { undefinable: true },
        { addTimezone: cQMetadata?.timezone },
      ),
      new BusinessPartnerPortalPaymentCollectionModeCreatedAt(
        paymentCollectionMode.createdAt,
        { undefinable: true },
        { addTimezone: cQMetadata?.timezone },
      ),
      new BusinessPartnerPortalPaymentCollectionModeUpdatedAt(
        paymentCollectionMode.updatedAt,
        { undefinable: true },
        { addTimezone: cQMetadata?.timezone },
      ),
      new BusinessPartnerPortalPaymentCollectionModeDeletedAt(
        paymentCollectionMode.deletedAt,
        { undefinable: true },
        { addTimezone: cQMetadata?.timezone },
      ),
      this.options.eagerLoading
        ? new BusinessPartnerPortalBusinessPartnerMapper({
            eagerLoading: true,
          }).mapModelToAggregate(
            paymentCollectionMode.businessPartner,
            cQMetadata,
          )
        : undefined,
      this.options.eagerLoading
        ? new BusinessPartnerPortalPaymentModeMapper({
            eagerLoading: true,
          }).mapModelToAggregate(paymentCollectionMode.paymentMode, cQMetadata)
        : undefined,
    );
  }

  private makeResponse(
    paymentCollectionMode: BusinessPartnerPortalPaymentCollectionMode,
  ): BusinessPartnerPortalPaymentCollectionModeResponse {
    if (!paymentCollectionMode) return null;

    return new BusinessPartnerPortalPaymentCollectionModeResponse(
      paymentCollectionMode.id.value,
      paymentCollectionMode.rowId.value,
      paymentCollectionMode.businessPartnerId.value,
      paymentCollectionMode.paymentModeId.value,
      paymentCollectionMode.label.value,
      paymentCollectionMode.accountNumber.value,
      paymentCollectionMode.accountHolderName.value,
      paymentCollectionMode.bankName.value,
      paymentCollectionMode.routingNumber.value,
      paymentCollectionMode.iban.value,
      paymentCollectionMode.swiftCode.value,
      paymentCollectionMode.currencyCode.value,
      paymentCollectionMode.expirationDate.value,
      paymentCollectionMode.isPrimary.value,
      paymentCollectionMode.isActive.value,
      paymentCollectionMode.notes.value,
      paymentCollectionMode.lastUsedAt.value,
      paymentCollectionMode.createdAt.value,
      paymentCollectionMode.updatedAt.value,
      paymentCollectionMode.deletedAt.value,
      this.options.eagerLoading
        ? new BusinessPartnerPortalBusinessPartnerMapper({
            eagerLoading: true,
          }).mapAggregateToResponse(paymentCollectionMode.businessPartner)
        : undefined,
      this.options.eagerLoading
        ? new BusinessPartnerPortalPaymentModeMapper({
            eagerLoading: true,
          }).mapAggregateToResponse(paymentCollectionMode.paymentMode)
        : undefined,
    );
  }
}
