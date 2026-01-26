/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalIPaymentModeRepository,
  businessPartnerPortalMockPaymentModeData,
  BusinessPartnerPortalMockPaymentModeRepository,
} from '@app/business-partner-portal/payment-mode';
import { BusinessPartnerPortalCreatePaymentModeService } from '@app/business-partner-portal/payment-mode/application/create/business-partner-portal-create-payment-mode.service';
import {
  BusinessPartnerPortalPaymentModeCode,
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
} from '@app/business-partner-portal/payment-mode/domain/value-objects';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalCreatePaymentModeService', () => {
  let service: BusinessPartnerPortalCreatePaymentModeService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalCreatePaymentModeService,
        BusinessPartnerPortalMockPaymentModeRepository,
        {
          provide: BusinessPartnerPortalIPaymentModeRepository,
          useValue: {
            create: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(BusinessPartnerPortalCreatePaymentModeService);
  });

  describe('main', () => {
    test('BusinessPartnerPortalCreatePaymentModeService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should create a paymentMode and emit event', async () => {
      expect(
        await service.main({
          id: new BusinessPartnerPortalPaymentModeId(
            businessPartnerPortalMockPaymentModeData[0].id,
          ),
          rowId: new BusinessPartnerPortalPaymentModeRowId(
            businessPartnerPortalMockPaymentModeData[0].rowId,
          ),
          externalId: new BusinessPartnerPortalPaymentModeExternalId(
            businessPartnerPortalMockPaymentModeData[0].externalId,
          ),
          code: new BusinessPartnerPortalPaymentModeCode(
            businessPartnerPortalMockPaymentModeData[0].code,
          ),
          name: new BusinessPartnerPortalPaymentModeName(
            businessPartnerPortalMockPaymentModeData[0].name,
          ),
          description: new BusinessPartnerPortalPaymentModeDescription(
            businessPartnerPortalMockPaymentModeData[0].description,
          ),
          type: new BusinessPartnerPortalPaymentModeType(
            businessPartnerPortalMockPaymentModeData[0].type,
          ),
          isAccountNumberRequired:
            new BusinessPartnerPortalPaymentModeIsAccountNumberRequired(
              businessPartnerPortalMockPaymentModeData[0].isAccountNumberRequired,
            ),
          isRoutingInfoRequired:
            new BusinessPartnerPortalPaymentModeIsRoutingInfoRequired(
              businessPartnerPortalMockPaymentModeData[0].isRoutingInfoRequired,
            ),
          isRecurringSupported:
            new BusinessPartnerPortalPaymentModeIsRecurringSupported(
              businessPartnerPortalMockPaymentModeData[0].isRecurringSupported,
            ),
          sort: new BusinessPartnerPortalPaymentModeSort(
            businessPartnerPortalMockPaymentModeData[0].sort,
          ),
          isActive: new BusinessPartnerPortalPaymentModeIsActive(
            businessPartnerPortalMockPaymentModeData[0].isActive,
          ),
          meta: new BusinessPartnerPortalPaymentModeMeta(
            businessPartnerPortalMockPaymentModeData[0].meta,
          ),
        }),
      ).toBe(undefined);
    });
  });
});
