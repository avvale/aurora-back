/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalISalesInvoicePositionRepository,
  BusinessPartnerPortalMockSalesInvoicePositionRepository,
  BusinessPartnerPortalPaginateSalesInvoicePositionsQuery,
} from '@app/business-partner-portal/sales-invoice-position';
import { BusinessPartnerPortalPaginateSalesInvoicePositionsQueryHandler } from '@app/business-partner-portal/sales-invoice-position/application/paginate/business-partner-portal-paginate-sales-invoice-positions.query-handler';
import { BusinessPartnerPortalPaginateSalesInvoicePositionsService } from '@app/business-partner-portal/sales-invoice-position/application/paginate/business-partner-portal-paginate-sales-invoice-positions.service';
import { PaginationResponse } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalPaginateSalesInvoicePositionsQueryHandler', () => {
  let queryHandler: BusinessPartnerPortalPaginateSalesInvoicePositionsQueryHandler;
  let service: BusinessPartnerPortalPaginateSalesInvoicePositionsService;
  let repository: BusinessPartnerPortalMockSalesInvoicePositionRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalPaginateSalesInvoicePositionsQueryHandler,
        {
          provide: BusinessPartnerPortalISalesInvoicePositionRepository,
          useClass: BusinessPartnerPortalMockSalesInvoicePositionRepository,
        },
        {
          provide: BusinessPartnerPortalPaginateSalesInvoicePositionsService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    queryHandler =
      module.get<BusinessPartnerPortalPaginateSalesInvoicePositionsQueryHandler>(
        BusinessPartnerPortalPaginateSalesInvoicePositionsQueryHandler,
      );
    service =
      module.get<BusinessPartnerPortalPaginateSalesInvoicePositionsService>(
        BusinessPartnerPortalPaginateSalesInvoicePositionsService,
      );
    repository = <BusinessPartnerPortalMockSalesInvoicePositionRepository>(
      module.get<BusinessPartnerPortalISalesInvoicePositionRepository>(
        BusinessPartnerPortalISalesInvoicePositionRepository,
      )
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalPaginateSalesInvoicePositionsQueryHandler should be defined', () => {
      expect(queryHandler).toBeDefined();
    });

    test('should return an salesInvoicePositions paginated', async () => {
      jest.spyOn(service, 'main').mockImplementation(
        () =>
          new Promise((resolve) =>
            resolve({
              count: 10,
              total: 100,
              rows: repository.collectionSource.slice(0, 10),
            }),
          ),
      );
      expect(
        await queryHandler.execute(
          new BusinessPartnerPortalPaginateSalesInvoicePositionsQuery({
            offset: 0,
            limit: 10,
          }),
        ),
      ).toStrictEqual(
        new PaginationResponse(
          100,
          10,
          repository.collectionSource.slice(0, 10).map((item) => item.toDTO()),
        ),
      );
    });
  });
});
