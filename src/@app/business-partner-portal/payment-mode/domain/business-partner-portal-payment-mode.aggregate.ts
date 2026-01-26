/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalCreatedPaymentModeEvent,
  BusinessPartnerPortalDeletedPaymentModeEvent,
  BusinessPartnerPortalUpdatedPaymentModeEvent,
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
import { CQMetadata, LiteralObject } from '@aurorajs.dev/core';
import { AggregateRoot } from '@nestjs/cqrs';

export class BusinessPartnerPortalPaymentMode extends AggregateRoot {
  id: BusinessPartnerPortalPaymentModeId;
  rowId: BusinessPartnerPortalPaymentModeRowId;
  externalId: BusinessPartnerPortalPaymentModeExternalId;
  code: BusinessPartnerPortalPaymentModeCode;
  name: BusinessPartnerPortalPaymentModeName;
  description: BusinessPartnerPortalPaymentModeDescription;
  type: BusinessPartnerPortalPaymentModeType;
  isAccountNumberRequired: BusinessPartnerPortalPaymentModeIsAccountNumberRequired;
  isRoutingInfoRequired: BusinessPartnerPortalPaymentModeIsRoutingInfoRequired;
  isRecurringSupported: BusinessPartnerPortalPaymentModeIsRecurringSupported;
  sort: BusinessPartnerPortalPaymentModeSort;
  isActive: BusinessPartnerPortalPaymentModeIsActive;
  meta: BusinessPartnerPortalPaymentModeMeta;
  createdAt: BusinessPartnerPortalPaymentModeCreatedAt;
  updatedAt: BusinessPartnerPortalPaymentModeUpdatedAt;
  deletedAt: BusinessPartnerPortalPaymentModeDeletedAt;

  constructor(
    id: BusinessPartnerPortalPaymentModeId,
    rowId: BusinessPartnerPortalPaymentModeRowId,
    externalId: BusinessPartnerPortalPaymentModeExternalId,
    code: BusinessPartnerPortalPaymentModeCode,
    name: BusinessPartnerPortalPaymentModeName,
    description: BusinessPartnerPortalPaymentModeDescription,
    type: BusinessPartnerPortalPaymentModeType,
    isAccountNumberRequired: BusinessPartnerPortalPaymentModeIsAccountNumberRequired,
    isRoutingInfoRequired: BusinessPartnerPortalPaymentModeIsRoutingInfoRequired,
    isRecurringSupported: BusinessPartnerPortalPaymentModeIsRecurringSupported,
    sort: BusinessPartnerPortalPaymentModeSort,
    isActive: BusinessPartnerPortalPaymentModeIsActive,
    meta: BusinessPartnerPortalPaymentModeMeta,
    createdAt: BusinessPartnerPortalPaymentModeCreatedAt,
    updatedAt: BusinessPartnerPortalPaymentModeUpdatedAt,
    deletedAt: BusinessPartnerPortalPaymentModeDeletedAt,
  ) {
    super();
    this.id = id;
    this.rowId = rowId;
    this.externalId = externalId;
    this.code = code;
    this.name = name;
    this.description = description;
    this.type = type;
    this.isAccountNumberRequired = isAccountNumberRequired;
    this.isRoutingInfoRequired = isRoutingInfoRequired;
    this.isRecurringSupported = isRecurringSupported;
    this.sort = sort;
    this.isActive = isActive;
    this.meta = meta;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
  }

  static register(
    id: BusinessPartnerPortalPaymentModeId,
    rowId: BusinessPartnerPortalPaymentModeRowId,
    externalId: BusinessPartnerPortalPaymentModeExternalId,
    code: BusinessPartnerPortalPaymentModeCode,
    name: BusinessPartnerPortalPaymentModeName,
    description: BusinessPartnerPortalPaymentModeDescription,
    type: BusinessPartnerPortalPaymentModeType,
    isAccountNumberRequired: BusinessPartnerPortalPaymentModeIsAccountNumberRequired,
    isRoutingInfoRequired: BusinessPartnerPortalPaymentModeIsRoutingInfoRequired,
    isRecurringSupported: BusinessPartnerPortalPaymentModeIsRecurringSupported,
    sort: BusinessPartnerPortalPaymentModeSort,
    isActive: BusinessPartnerPortalPaymentModeIsActive,
    meta: BusinessPartnerPortalPaymentModeMeta,
    createdAt: BusinessPartnerPortalPaymentModeCreatedAt,
    updatedAt: BusinessPartnerPortalPaymentModeUpdatedAt,
    deletedAt: BusinessPartnerPortalPaymentModeDeletedAt,
  ): BusinessPartnerPortalPaymentMode {
    return new BusinessPartnerPortalPaymentMode(
      id,
      rowId,
      externalId,
      code,
      name,
      description,
      type,
      isAccountNumberRequired,
      isRoutingInfoRequired,
      isRecurringSupported,
      sort,
      isActive,
      meta,
      createdAt,
      updatedAt,
      deletedAt,
    );
  }

  created(event: {
    payload: BusinessPartnerPortalPaymentMode;
    cQMetadata?: CQMetadata;
  }): void {
    this.apply(
      new BusinessPartnerPortalCreatedPaymentModeEvent({
        payload: {
          id: event.payload.id.value,
          externalId: event.payload.externalId?.value,
          code: event.payload.code?.value,
          name: event.payload.name.value,
          description: event.payload.description?.value,
          type: event.payload.type.value,
          isAccountNumberRequired: event.payload.isAccountNumberRequired.value,
          isRoutingInfoRequired: event.payload.isRoutingInfoRequired.value,
          isRecurringSupported: event.payload.isRecurringSupported.value,
          sort: event.payload.sort?.value,
          isActive: event.payload.isActive.value,
          meta: event.payload.meta?.value,
          createdAt: event.payload.createdAt?.value,
          updatedAt: event.payload.updatedAt?.value,
          deletedAt: event.payload.deletedAt?.value,
        },
        cQMetadata: event.cQMetadata,
      }),
    );
  }

  updated(event: {
    payload: BusinessPartnerPortalPaymentMode;
    cQMetadata?: CQMetadata;
  }): void {
    this.apply(
      new BusinessPartnerPortalUpdatedPaymentModeEvent({
        payload: {
          id: event.payload.id?.value,
          externalId: event.payload.externalId?.value,
          code: event.payload.code?.value,
          name: event.payload.name?.value,
          description: event.payload.description?.value,
          type: event.payload.type?.value,
          isAccountNumberRequired: event.payload.isAccountNumberRequired?.value,
          isRoutingInfoRequired: event.payload.isRoutingInfoRequired?.value,
          isRecurringSupported: event.payload.isRecurringSupported?.value,
          sort: event.payload.sort?.value,
          isActive: event.payload.isActive?.value,
          meta: event.payload.meta?.value,
          createdAt: event.payload.createdAt?.value,
          updatedAt: event.payload.updatedAt?.value,
          deletedAt: event.payload.deletedAt?.value,
        },
        cQMetadata: event.cQMetadata,
      }),
    );
  }

  deleted(event: {
    payload: BusinessPartnerPortalPaymentMode;
    cQMetadata?: CQMetadata;
  }): void {
    this.apply(
      new BusinessPartnerPortalDeletedPaymentModeEvent({
        payload: {
          id: event.payload.id.value,
          rowId: event.payload.rowId.value,
          externalId: event.payload.externalId?.value,
          code: event.payload.code?.value,
          name: event.payload.name.value,
          description: event.payload.description?.value,
          type: event.payload.type.value,
          isAccountNumberRequired: event.payload.isAccountNumberRequired.value,
          isRoutingInfoRequired: event.payload.isRoutingInfoRequired.value,
          isRecurringSupported: event.payload.isRecurringSupported.value,
          sort: event.payload.sort?.value,
          isActive: event.payload.isActive.value,
          meta: event.payload.meta?.value,
          createdAt: event.payload.createdAt?.value,
          updatedAt: event.payload.updatedAt?.value,
          deletedAt: event.payload.deletedAt?.value,
        },
        cQMetadata: event.cQMetadata,
      }),
    );
  }

  toDTO(): LiteralObject {
    return {
      id: this.id.value,
      rowId: this.rowId.value,
      externalId: this.externalId?.value,
      code: this.code?.value,
      name: this.name.value,
      description: this.description?.value,
      type: this.type.value,
      isAccountNumberRequired: this.isAccountNumberRequired.value,
      isRoutingInfoRequired: this.isRoutingInfoRequired.value,
      isRecurringSupported: this.isRecurringSupported.value,
      sort: this.sort?.value,
      isActive: this.isActive.value,
      meta: this.meta?.value,
      createdAt: this.createdAt?.value,
      updatedAt: this.updatedAt?.value,
      deletedAt: this.deletedAt?.value,
    };
  }

  // function called to get data for repository side effect methods
  toRepository(): LiteralObject {
    return {
      id: this.id.value,
      externalId: this.externalId?.value,
      code: this.code?.value,
      name: this.name.value,
      description: this.description?.value,
      type: this.type.value,
      isAccountNumberRequired: this.isAccountNumberRequired.value,
      isRoutingInfoRequired: this.isRoutingInfoRequired.value,
      isRecurringSupported: this.isRecurringSupported.value,
      sort: this.sort?.value,
      isActive: this.isActive.value,
      meta: this.meta?.value,
      createdAt: this.createdAt?.value,
      updatedAt: this.updatedAt?.value,
      deletedAt: this.deletedAt?.value,
    };
  }
}
