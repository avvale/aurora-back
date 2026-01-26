/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalIPurchaseInvoicePositionRepository,
  BusinessPartnerPortalMockPurchaseInvoicePositionRepository,
  BusinessPartnerPortalPaginatePurchaseInvoicePositionsQuery,
} from '@app/business-partner-portal/purchase-invoice-position';
import { BusinessPartnerPortalPaginatePurchaseInvoicePositionsQueryHandler } from '@app/business-partner-portal/purchase-invoice-position/application/paginate/business-partner-portal-paginate-purchase-invoice-positions.query-handler';
import { BusinessPartnerPortalPaginatePurchaseInvoicePositionsService } from '@app/business-partner-portal/purchase-invoice-position/application/paginate/business-partner-portal-paginate-purchase-invoice-positions.service';
import { PaginationResponse } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalPaginatePurchaseInvoicePositionsQueryHandler', () => {
  let queryHandler: BusinessPartnerPortalPaginatePurchaseInvoicePositionsQueryHandler;
  let service: BusinessPartnerPortalPaginatePurchaseInvoicePositionsService;
  let repository: BusinessPartnerPortalMockPurchaseInvoicePositionRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalPaginatePurchaseInvoicePositionsQueryHandler,
        {
          provide: BusinessPartnerPortalIPurchaseInvoicePositionRepository,
          useClass: BusinessPartnerPortalMockPurchaseInvoicePositionRepository,
        },
        {
          provide: BusinessPartnerPortalPaginatePurchaseInvoicePositionsService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    queryHandler =
      module.get<BusinessPartnerPortalPaginatePurchaseInvoicePositionsQueryHandler>(
        BusinessPartnerPortalPaginatePurchaseInvoicePositionsQueryHandler,
      );
    service =
      module.get<BusinessPartnerPortalPaginatePurchaseInvoicePositionsService>(
        BusinessPartnerPortalPaginatePurchaseInvoicePositionsService,
      );
    repository = <BusinessPartnerPortalMockPurchaseInvoicePositionRepository>(
      module.get<BusinessPartnerPortalIPurchaseInvoicePositionRepository>(
        BusinessPartnerPortalIPurchaseInvoicePositionRepository,
      )
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalPaginatePurchaseInvoicePositionsQueryHandler should be defined', () => {
      expect(queryHandler).toBeDefined();
    });

    test('should return an purchaseInvoicePositions paginated', async () => {
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
          new BusinessPartnerPortalPaginatePurchaseInvoicePositionsQuery({
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
