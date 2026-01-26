/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import {
  BusinessPartnerPortalFindSupplierDocumentQuery,
  BusinessPartnerPortalISupplierDocumentRepository,
  BusinessPartnerPortalMockSupplierDocumentRepository,
  BusinessPartnerPortalSupplierDocumentMapper,
} from '@app/business-partner-portal/supplier-document';
import { BusinessPartnerPortalFindSupplierDocumentQueryHandler } from '@app/business-partner-portal/supplier-document/application/find/business-partner-portal-find-supplier-document.query-handler';
import { BusinessPartnerPortalFindSupplierDocumentService } from '@app/business-partner-portal/supplier-document/application/find/business-partner-portal-find-supplier-document.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindSupplierDocumentQueryHandler', () => {
  let queryHandler: BusinessPartnerPortalFindSupplierDocumentQueryHandler;
  let service: BusinessPartnerPortalFindSupplierDocumentService;
  let repository: BusinessPartnerPortalMockSupplierDocumentRepository;
  let mapper: BusinessPartnerPortalSupplierDocumentMapper;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalFindSupplierDocumentQueryHandler,
        {
          provide: BusinessPartnerPortalISupplierDocumentRepository,
          useClass: BusinessPartnerPortalMockSupplierDocumentRepository,
        },
        {
          provide: BusinessPartnerPortalFindSupplierDocumentService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    queryHandler =
      module.get<BusinessPartnerPortalFindSupplierDocumentQueryHandler>(
        BusinessPartnerPortalFindSupplierDocumentQueryHandler,
      );
    service = module.get<BusinessPartnerPortalFindSupplierDocumentService>(
      BusinessPartnerPortalFindSupplierDocumentService,
    );
    repository = <BusinessPartnerPortalMockSupplierDocumentRepository>(
      module.get<BusinessPartnerPortalISupplierDocumentRepository>(
        BusinessPartnerPortalISupplierDocumentRepository,
      )
    );
    mapper = new BusinessPartnerPortalSupplierDocumentMapper();
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindSupplierDocumentQueryHandler should be defined', () => {
      expect(queryHandler).toBeDefined();
    });

    test('should return an supplierDocument founded', async () => {
      jest
        .spyOn(service, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) => resolve(repository.collectionSource[0])),
        );
      expect(
        await queryHandler.execute(
          new BusinessPartnerPortalFindSupplierDocumentQuery(),
        ),
      ).toStrictEqual(
        mapper.mapAggregateToResponse(repository.collectionSource[0]),
      );
    });
  });
});
