/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import {
  BusinessPartnerPortalISupplierDocumentRepository,
  BusinessPartnerPortalMockSupplierDocumentRepository,
} from '@app/business-partner-portal/supplier-document';
import { BusinessPartnerPortalPaginateSupplierDocumentsService } from '@app/business-partner-portal/supplier-document/application/paginate/business-partner-portal-paginate-supplier-documents.service';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalPaginateSupplierDocumentsService', () => {
  let service: BusinessPartnerPortalPaginateSupplierDocumentsService;
  let repository: BusinessPartnerPortalISupplierDocumentRepository;
  let mockRepository: BusinessPartnerPortalMockSupplierDocumentRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalPaginateSupplierDocumentsService,
        BusinessPartnerPortalMockSupplierDocumentRepository,
        {
          provide: BusinessPartnerPortalISupplierDocumentRepository,
          useValue: {
            paginate: (queryStatement, constraints) => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(BusinessPartnerPortalPaginateSupplierDocumentsService);
    repository = module.get(BusinessPartnerPortalISupplierDocumentRepository);
    mockRepository = module.get(
      BusinessPartnerPortalMockSupplierDocumentRepository,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalPaginateSupplierDocumentsService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should paginate supplierDocuments', async () => {
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
