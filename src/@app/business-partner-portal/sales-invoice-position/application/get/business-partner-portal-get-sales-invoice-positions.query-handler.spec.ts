/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalGetSalesInvoicePositionsQuery,
  BusinessPartnerPortalISalesInvoicePositionRepository,
  BusinessPartnerPortalMockSalesInvoicePositionRepository,
  BusinessPartnerPortalSalesInvoicePositionMapper,
} from '@app/business-partner-portal/sales-invoice-position';
import { BusinessPartnerPortalGetSalesInvoicePositionsQueryHandler } from '@app/business-partner-portal/sales-invoice-position/application/get/business-partner-portal-get-sales-invoice-positions.query-handler';
import { BusinessPartnerPortalGetSalesInvoicePositionsService } from '@app/business-partner-portal/sales-invoice-position/application/get/business-partner-portal-get-sales-invoice-positions.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('GetSalesInvoicePositionsQueryHandler', () => {
  let queryHandler: BusinessPartnerPortalGetSalesInvoicePositionsQueryHandler;
  let service: BusinessPartnerPortalGetSalesInvoicePositionsService;
  let repository: BusinessPartnerPortalMockSalesInvoicePositionRepository;
  let mapper: BusinessPartnerPortalSalesInvoicePositionMapper;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalGetSalesInvoicePositionsQueryHandler,
        {
          provide: BusinessPartnerPortalISalesInvoicePositionRepository,
          useClass: BusinessPartnerPortalMockSalesInvoicePositionRepository,
        },
        {
          provide: BusinessPartnerPortalGetSalesInvoicePositionsService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    queryHandler =
      module.get<BusinessPartnerPortalGetSalesInvoicePositionsQueryHandler>(
        BusinessPartnerPortalGetSalesInvoicePositionsQueryHandler,
      );
    service = module.get<BusinessPartnerPortalGetSalesInvoicePositionsService>(
      BusinessPartnerPortalGetSalesInvoicePositionsService,
    );
    repository = <BusinessPartnerPortalMockSalesInvoicePositionRepository>(
      module.get<BusinessPartnerPortalISalesInvoicePositionRepository>(
        BusinessPartnerPortalISalesInvoicePositionRepository,
      )
    );
    mapper = new BusinessPartnerPortalSalesInvoicePositionMapper();
  });

  describe('main', () => {
    test('BusinessPartnerPortalGetSalesInvoicePositionsQueryHandler should be defined', () => {
      expect(queryHandler).toBeDefined();
    });

    test('should return an salesInvoicePositions founded', async () => {
      jest
        .spyOn(service, 'main')
        .mockImplementation(
          () => new Promise((resolve) => resolve(repository.collectionSource)),
        );
      expect(
        await queryHandler.execute(
          new BusinessPartnerPortalGetSalesInvoicePositionsQuery(),
        ),
      ).toStrictEqual(
        mapper.mapAggregatesToResponses(repository.collectionSource),
      );
    });
  });
});
