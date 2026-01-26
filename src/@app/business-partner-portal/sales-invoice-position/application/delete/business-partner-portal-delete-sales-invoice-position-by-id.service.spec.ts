/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalISalesInvoicePositionRepository,
  businessPartnerPortalMockSalesInvoicePositionData,
  BusinessPartnerPortalMockSalesInvoicePositionRepository,
} from '@app/business-partner-portal/sales-invoice-position';
import { BusinessPartnerPortalDeleteSalesInvoicePositionByIdService } from '@app/business-partner-portal/sales-invoice-position/application/delete/business-partner-portal-delete-sales-invoice-position-by-id.service';
import { BusinessPartnerPortalSalesInvoicePositionId } from '@app/business-partner-portal/sales-invoice-position/domain/value-objects';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalDeleteSalesInvoicePositionByIdService', () => {
  let service: BusinessPartnerPortalDeleteSalesInvoicePositionByIdService;
  let repository: BusinessPartnerPortalISalesInvoicePositionRepository;
  let mockRepository: BusinessPartnerPortalMockSalesInvoicePositionRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalDeleteSalesInvoicePositionByIdService,
        BusinessPartnerPortalMockSalesInvoicePositionRepository,
        {
          provide: BusinessPartnerPortalISalesInvoicePositionRepository,
          useValue: {
            deleteById: (id) => {
              /**/
            },
            findById: (id) => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(
      BusinessPartnerPortalDeleteSalesInvoicePositionByIdService,
    );
    repository = module.get(
      BusinessPartnerPortalISalesInvoicePositionRepository,
    );
    mockRepository = module.get(
      BusinessPartnerPortalMockSalesInvoicePositionRepository,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalDeleteSalesInvoicePositionByIdService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should delete salesInvoicePosition and emit event', async () => {
      jest
        .spyOn(repository, 'findById')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(mockRepository.collectionSource[0]),
            ),
        );
      expect(
        await service.main(
          new BusinessPartnerPortalSalesInvoicePositionId(
            businessPartnerPortalMockSalesInvoicePositionData[0].id,
          ),
          {},
        ),
      ).toBe(undefined);
    });
  });
});
