/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalPaymentMode,
  BusinessPartnerPortalPaymentModeResponse,
} from '@app/business-partner-portal/payment-mode';
import {
  BusinessPartnerPortalPaymentModeCode,
  BusinessPartnerPortalPaymentModeCreatedAt,
  BusinessPartnerPortalPaymentModeDeletedAt,
  BusinessPartnerPortalPaymentModeDescription,
  BusinessPartnerPortalPaymentModeExternalId,
  BusinessPartnerPortalPaymentModeId,
  BusinessPartnerPortalPaymentModeIsAccountNumberRequired,
  BusinessPartnerPortalPaymentModeIsActive,
  BusinessPartnerPortalPaymentModeIsRecurringSupported,
  BusinessPartnerPortalPaymentModeIsRoutingInfoRequired,
  BusinessPartnerPortalPaymentModeMeta,
  BusinessPartnerPortalPaymentModeName,
  BusinessPartnerPortalPaymentModeRowId,
  BusinessPartnerPortalPaymentModeSort,
  BusinessPartnerPortalPaymentModeType,
  BusinessPartnerPortalPaymentModeUpdatedAt,
} from '@app/business-partner-portal/payment-mode/domain/value-objects';
import {
  CQMetadata,
  IMapper,
  LiteralObject,
  MapperOptions,
} from '@aurorajs.dev/core';

export class BusinessPartnerPortalPaymentModeMapper implements IMapper {
  constructor(public options: MapperOptions = { eagerLoading: true }) {}

  /**
   * Map object to aggregate
   * @param paymentMode
   */
  mapModelToAggregate(
    paymentMode: LiteralObject,
    cQMetadata?: CQMetadata,
  ): BusinessPartnerPortalPaymentMode {
    if (!paymentMode) return;

    return this.makeAggregate(paymentMode, cQMetadata);
  }

  /**
   * Map array of objects to array aggregates
   * @param paymentModes
   */
  mapModelsToAggregates(
    paymentModes: LiteralObject[],
    cQMetadata?: CQMetadata,
  ): BusinessPartnerPortalPaymentMode[] {
    if (!Array.isArray(paymentModes)) return;

    return paymentModes.map((paymentMode) =>
      this.makeAggregate(paymentMode, cQMetadata),
    );
  }

  /**
   * Map aggregate to response
   * @param paymentMode
   */
  mapAggregateToResponse(
    paymentMode: BusinessPartnerPortalPaymentMode,
  ): BusinessPartnerPortalPaymentModeResponse {
    return this.makeResponse(paymentMode);
  }

  /**
   * Map array of aggregates to array responses
   * @param paymentModes
   */
  mapAggregatesToResponses(
    paymentModes: BusinessPartnerPortalPaymentMode[],
  ): BusinessPartnerPortalPaymentModeResponse[] {
    if (!Array.isArray(paymentModes)) return;

    return paymentModes.map((paymentMode) => this.makeResponse(paymentMode));
  }

  private makeAggregate(
    paymentMode: LiteralObject,
    cQMetadata?: CQMetadata,
  ): BusinessPartnerPortalPaymentMode {
    return BusinessPartnerPortalPaymentMode.register(
      new BusinessPartnerPortalPaymentModeId(paymentMode.id, {
        undefinable: true,
      }),
      new BusinessPartnerPortalPaymentModeRowId(paymentMode.rowId, {
        undefinable: true,
      }),
      new BusinessPartnerPortalPaymentModeExternalId(paymentMode.externalId, {
        undefinable: true,
      }),
      new BusinessPartnerPortalPaymentModeCode(paymentMode.code, {
        undefinable: true,
      }),
      new BusinessPartnerPortalPaymentModeName(paymentMode.name, {
        undefinable: true,
      }),
      new BusinessPartnerPortalPaymentModeDescription(paymentMode.description, {
        undefinable: true,
      }),
      new BusinessPartnerPortalPaymentModeType(paymentMode.type, {
        undefinable: true,
      }),
      new BusinessPartnerPortalPaymentModeIsAccountNumberRequired(
        paymentMode.isAccountNumberRequired,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPaymentModeIsRoutingInfoRequired(
        paymentMode.isRoutingInfoRequired,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPaymentModeIsRecurringSupported(
        paymentMode.isRecurringSupported,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPaymentModeSort(paymentMode.sort, {
        undefinable: true,
      }),
      new BusinessPartnerPortalPaymentModeIsActive(paymentMode.isActive, {
        undefinable: true,
      }),
      new BusinessPartnerPortalPaymentModeMeta(paymentMode.meta, {
        undefinable: true,
      }),
      new BusinessPartnerPortalPaymentModeCreatedAt(
        paymentMode.createdAt,
        { undefinable: true },
        { addTimezone: cQMetadata?.timezone },
      ),
      new BusinessPartnerPortalPaymentModeUpdatedAt(
        paymentMode.updatedAt,
        { undefinable: true },
        { addTimezone: cQMetadata?.timezone },
      ),
      new BusinessPartnerPortalPaymentModeDeletedAt(
        paymentMode.deletedAt,
        { undefinable: true },
        { addTimezone: cQMetadata?.timezone },
      ),
    );
  }

  private makeResponse(
    paymentMode: BusinessPartnerPortalPaymentMode,
  ): BusinessPartnerPortalPaymentModeResponse {
    if (!paymentMode) return null;

    return new BusinessPartnerPortalPaymentModeResponse(
      paymentMode.id.value,
      paymentMode.rowId.value,
      paymentMode.externalId.value,
      paymentMode.code.value,
      paymentMode.name.value,
      paymentMode.description.value,
      paymentMode.type.value,
      paymentMode.isAccountNumberRequired.value,
      paymentMode.isRoutingInfoRequired.value,
      paymentMode.isRecurringSupported.value,
      paymentMode.sort.value,
      paymentMode.isActive.value,
      paymentMode.meta.value,
      paymentMode.createdAt.value,
      paymentMode.updatedAt.value,
      paymentMode.deletedAt.value,
    );
  }
}
