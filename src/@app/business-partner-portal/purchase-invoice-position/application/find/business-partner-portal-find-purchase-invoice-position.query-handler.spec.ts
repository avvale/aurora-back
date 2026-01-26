/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPurchaseInvoicePositionQuery,
  BusinessPartnerPortalIPurchaseInvoicePositionRepository,
  BusinessPartnerPortalMockPurchaseInvoicePositionRepository,
  BusinessPartnerPortalPurchaseInvoicePositionMapper,
} from '@app/business-partner-portal/purchase-invoice-position';
import { BusinessPartnerPortalFindPurchaseInvoicePositionQueryHandler } from '@app/business-partner-portal/purchase-invoice-position/application/find/business-partner-portal-find-purchase-invoice-position.query-handler';
import { BusinessPartnerPortalFindPurchaseInvoicePositionService } from '@app/business-partner-portal/purchase-invoice-position/application/find/business-partner-portal-find-purchase-invoice-position.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindPurchaseInvoicePositionQueryHandler', () => {
  let queryHandler: BusinessPartnerPortalFindPurchaseInvoicePositionQueryHandler;
  let service: BusinessPartnerPortalFindPurchaseInvoicePositionService;
  let repository: BusinessPartnerPortalMockPurchaseInvoicePositionRepository;
  let mapper: BusinessPartnerPortalPurchaseInvoicePositionMapper;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalFindPurchaseInvoicePositionQueryHandler,
        {
          provide: BusinessPartnerPortalIPurchaseInvoicePositionRepository,
          useClass: BusinessPartnerPortalMockPurchaseInvoicePositionRepository,
        },
        {
          provide: BusinessPartnerPortalFindPurchaseInvoicePositionService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    queryHandler =
      module.get<BusinessPartnerPortalFindPurchaseInvoicePositionQueryHandler>(
        BusinessPartnerPortalFindPurchaseInvoicePositionQueryHandler,
      );
    service =
      module.get<BusinessPartnerPortalFindPurchaseInvoicePositionService>(
        BusinessPartnerPortalFindPurchaseInvoicePositionService,
      );
    repository = <BusinessPartnerPortalMockPurchaseInvoicePositionRepository>(
      module.get<BusinessPartnerPortalIPurchaseInvoicePositionRepository>(
        BusinessPartnerPortalIPurchaseInvoicePositionRepository,
      )
    );
    mapper = new BusinessPartnerPortalPurchaseInvoicePositionMapper();
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindPurchaseInvoicePositionQueryHandler should be defined', () => {
      expect(queryHandler).toBeDefined();
    });

    test('should return an purchaseInvoicePosition founded', async () => {
      jest
        .spyOn(service, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) => resolve(repository.collectionSource[0])),
        );
      expect(
        await queryHandler.execute(
          new BusinessPartnerPortalFindPurchaseInvoicePositionQuery(),
        ),
      ).toStrictEqual(
        mapper.mapAggregateToResponse(repository.collectionSource[0]),
      );
    });
  });
});
