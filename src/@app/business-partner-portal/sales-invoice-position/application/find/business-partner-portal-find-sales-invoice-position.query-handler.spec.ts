/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalFindSalesInvoicePositionQuery,
  BusinessPartnerPortalISalesInvoicePositionRepository,
  BusinessPartnerPortalMockSalesInvoicePositionRepository,
  BusinessPartnerPortalSalesInvoicePositionMapper,
} from '@app/business-partner-portal/sales-invoice-position';
import { BusinessPartnerPortalFindSalesInvoicePositionQueryHandler } from '@app/business-partner-portal/sales-invoice-position/application/find/business-partner-portal-find-sales-invoice-position.query-handler';
import { BusinessPartnerPortalFindSalesInvoicePositionService } from '@app/business-partner-portal/sales-invoice-position/application/find/business-partner-portal-find-sales-invoice-position.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindSalesInvoicePositionQueryHandler', () => {
  let queryHandler: BusinessPartnerPortalFindSalesInvoicePositionQueryHandler;
  let service: BusinessPartnerPortalFindSalesInvoicePositionService;
  let repository: BusinessPartnerPortalMockSalesInvoicePositionRepository;
  let mapper: BusinessPartnerPortalSalesInvoicePositionMapper;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalFindSalesInvoicePositionQueryHandler,
        {
          provide: BusinessPartnerPortalISalesInvoicePositionRepository,
          useClass: BusinessPartnerPortalMockSalesInvoicePositionRepository,
        },
        {
          provide: BusinessPartnerPortalFindSalesInvoicePositionService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    queryHandler =
      module.get<BusinessPartnerPortalFindSalesInvoicePositionQueryHandler>(
        BusinessPartnerPortalFindSalesInvoicePositionQueryHandler,
      );
    service = module.get<BusinessPartnerPortalFindSalesInvoicePositionService>(
      BusinessPartnerPortalFindSalesInvoicePositionService,
    );
    repository = <BusinessPartnerPortalMockSalesInvoicePositionRepository>(
      module.get<BusinessPartnerPortalISalesInvoicePositionRepository>(
        BusinessPartnerPortalISalesInvoicePositionRepository,
      )
    );
    mapper = new BusinessPartnerPortalSalesInvoicePositionMapper();
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindSalesInvoicePositionQueryHandler should be defined', () => {
      expect(queryHandler).toBeDefined();
    });

    test('should return an salesInvoicePosition founded', async () => {
      jest
        .spyOn(service, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) => resolve(repository.collectionSource[0])),
        );
      expect(
        await queryHandler.execute(
          new BusinessPartnerPortalFindSalesInvoicePositionQuery(),
        ),
      ).toStrictEqual(
        mapper.mapAggregateToResponse(repository.collectionSource[0]),
      );
    });
  });
});
