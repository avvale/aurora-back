/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalFindSalesInvoicePositionByIdQuery,
  BusinessPartnerPortalISalesInvoicePositionRepository,
  businessPartnerPortalMockSalesInvoicePositionData,
  BusinessPartnerPortalMockSalesInvoicePositionRepository,
  BusinessPartnerPortalSalesInvoicePositionMapper,
} from '@app/business-partner-portal/sales-invoice-position';
import { BusinessPartnerPortalFindSalesInvoicePositionByIdQueryHandler } from '@app/business-partner-portal/sales-invoice-position/application/find/business-partner-portal-find-sales-invoice-position-by-id.query-handler';
import { BusinessPartnerPortalFindSalesInvoicePositionByIdService } from '@app/business-partner-portal/sales-invoice-position/application/find/business-partner-portal-find-sales-invoice-position-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindSalesInvoicePositionByIdQueryHandler', () => {
  let queryHandler: BusinessPartnerPortalFindSalesInvoicePositionByIdQueryHandler;
  let service: BusinessPartnerPortalFindSalesInvoicePositionByIdService;
  let repository: BusinessPartnerPortalMockSalesInvoicePositionRepository;
  let mapper: BusinessPartnerPortalSalesInvoicePositionMapper;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalFindSalesInvoicePositionByIdQueryHandler,
        {
          provide: BusinessPartnerPortalISalesInvoicePositionRepository,
          useClass: BusinessPartnerPortalMockSalesInvoicePositionRepository,
        },
        {
          provide: BusinessPartnerPortalFindSalesInvoicePositionByIdService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    queryHandler =
      module.get<BusinessPartnerPortalFindSalesInvoicePositionByIdQueryHandler>(
        BusinessPartnerPortalFindSalesInvoicePositionByIdQueryHandler,
      );
    service =
      module.get<BusinessPartnerPortalFindSalesInvoicePositionByIdService>(
        BusinessPartnerPortalFindSalesInvoicePositionByIdService,
      );
    repository = <BusinessPartnerPortalMockSalesInvoicePositionRepository>(
      module.get<BusinessPartnerPortalISalesInvoicePositionRepository>(
        BusinessPartnerPortalISalesInvoicePositionRepository,
      )
    );
    mapper = new BusinessPartnerPortalSalesInvoicePositionMapper();
  });

  describe('main', () => {
    test('FindSalesInvoicePositionByIdQueryHandler should be defined', () => {
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
          new BusinessPartnerPortalFindSalesInvoicePositionByIdQuery(
            businessPartnerPortalMockSalesInvoicePositionData[0].id,
          ),
        ),
      ).toStrictEqual(
        mapper.mapAggregateToResponse(repository.collectionSource[0]),
      );
    });
  });
});
