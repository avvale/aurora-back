/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalGetPurchaseInvoicePositionsQuery,
  BusinessPartnerPortalIPurchaseInvoicePositionRepository,
  BusinessPartnerPortalMockPurchaseInvoicePositionRepository,
  BusinessPartnerPortalPurchaseInvoicePositionMapper,
} from '@app/business-partner-portal/purchase-invoice-position';
import { BusinessPartnerPortalGetPurchaseInvoicePositionsQueryHandler } from '@app/business-partner-portal/purchase-invoice-position/application/get/business-partner-portal-get-purchase-invoice-positions.query-handler';
import { BusinessPartnerPortalGetPurchaseInvoicePositionsService } from '@app/business-partner-portal/purchase-invoice-position/application/get/business-partner-portal-get-purchase-invoice-positions.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('GetPurchaseInvoicePositionsQueryHandler', () => {
  let queryHandler: BusinessPartnerPortalGetPurchaseInvoicePositionsQueryHandler;
  let service: BusinessPartnerPortalGetPurchaseInvoicePositionsService;
  let repository: BusinessPartnerPortalMockPurchaseInvoicePositionRepository;
  let mapper: BusinessPartnerPortalPurchaseInvoicePositionMapper;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalGetPurchaseInvoicePositionsQueryHandler,
        {
          provide: BusinessPartnerPortalIPurchaseInvoicePositionRepository,
          useClass: BusinessPartnerPortalMockPurchaseInvoicePositionRepository,
        },
        {
          provide: BusinessPartnerPortalGetPurchaseInvoicePositionsService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    queryHandler =
      module.get<BusinessPartnerPortalGetPurchaseInvoicePositionsQueryHandler>(
        BusinessPartnerPortalGetPurchaseInvoicePositionsQueryHandler,
      );
    service =
      module.get<BusinessPartnerPortalGetPurchaseInvoicePositionsService>(
        BusinessPartnerPortalGetPurchaseInvoicePositionsService,
      );
    repository = <BusinessPartnerPortalMockPurchaseInvoicePositionRepository>(
      module.get<BusinessPartnerPortalIPurchaseInvoicePositionRepository>(
        BusinessPartnerPortalIPurchaseInvoicePositionRepository,
      )
    );
    mapper = new BusinessPartnerPortalPurchaseInvoicePositionMapper();
  });

  describe('main', () => {
    test('BusinessPartnerPortalGetPurchaseInvoicePositionsQueryHandler should be defined', () => {
      expect(queryHandler).toBeDefined();
    });

    test('should return an purchaseInvoicePositions founded', async () => {
      jest
        .spyOn(service, 'main')
        .mockImplementation(
          () => new Promise((resolve) => resolve(repository.collectionSource)),
        );
      expect(
        await queryHandler.execute(
          new BusinessPartnerPortalGetPurchaseInvoicePositionsQuery(),
        ),
      ).toStrictEqual(
        mapper.mapAggregatesToResponses(repository.collectionSource),
      );
    });
  });
});
