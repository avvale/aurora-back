/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalISalesInvoicePositionRepository,
  BusinessPartnerPortalMockSalesInvoicePositionRepository,
} from '@app/business-partner-portal/sales-invoice-position';
import { BusinessPartnerPortalPaginateSalesInvoicePositionsService } from '@app/business-partner-portal/sales-invoice-position/application/paginate/business-partner-portal-paginate-sales-invoice-positions.service';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalPaginateSalesInvoicePositionsService', () => {
  let service: BusinessPartnerPortalPaginateSalesInvoicePositionsService;
  let repository: BusinessPartnerPortalISalesInvoicePositionRepository;
  let mockRepository: BusinessPartnerPortalMockSalesInvoicePositionRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalPaginateSalesInvoicePositionsService,
        BusinessPartnerPortalMockSalesInvoicePositionRepository,
        {
          provide: BusinessPartnerPortalISalesInvoicePositionRepository,
          useValue: {
            paginate: (queryStatement, constraints) => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(
      BusinessPartnerPortalPaginateSalesInvoicePositionsService,
    );
    repository = module.get(
      BusinessPartnerPortalISalesInvoicePositionRepository,
    );
    mockRepository = module.get(
      BusinessPartnerPortalMockSalesInvoicePositionRepository,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalPaginateSalesInvoicePositionsService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should paginate salesInvoicePositions', async () => {
      jest.spyOn(repository, 'paginate').mockImplementation(
        () =>
          new Promise((resolve) =>
            resolve({
              total: mockRepository.collectionSource.slice(0, 10).length,
              count: mockRepository.collectionSource.slice(0, 10).length,
              rows: mockRepository.collectionSource.slice(0, 10),
            }),
          ),
      );
      expect(
        await service.main({
          offset: 0,
          limit: 10,
        }),
      ).toStrictEqual({
        total: mockRepository.collectionSource.slice(0, 10).length,
        count: mockRepository.collectionSource.slice(0, 10).length,
        rows: mockRepository.collectionSource.slice(0, 10),
      });
    });
  });
});
