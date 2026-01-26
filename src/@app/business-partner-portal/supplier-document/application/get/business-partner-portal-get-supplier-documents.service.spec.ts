/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import {
  BusinessPartnerPortalISupplierDocumentRepository,
  BusinessPartnerPortalMockSupplierDocumentRepository,
} from '@app/business-partner-portal/supplier-document';
import { BusinessPartnerPortalGetSupplierDocumentsService } from '@app/business-partner-portal/supplier-document/application/get/business-partner-portal-get-supplier-documents.service';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalGetSupplierDocumentsService', () => {
  let service: BusinessPartnerPortalGetSupplierDocumentsService;
  let repository: BusinessPartnerPortalISupplierDocumentRepository;
  let mockRepository: BusinessPartnerPortalMockSupplierDocumentRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalGetSupplierDocumentsService,
        BusinessPartnerPortalMockSupplierDocumentRepository,
        {
          provide: BusinessPartnerPortalISupplierDocumentRepository,
          useValue: {
            get: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(BusinessPartnerPortalGetSupplierDocumentsService);
    repository = module.get(BusinessPartnerPortalISupplierDocumentRepository);
    mockRepository = module.get(
      BusinessPartnerPortalMockSupplierDocumentRepository,
    );
  });

  describe('main', () => {
    test('GetSupplierDocumentsService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should get supplierDocuments', async () => {
      jest
        .spyOn(repository, 'get')
        .mockImplementation(
          () =>
            new Promise((resolve) => resolve(mockRepository.collectionSource)),
        );
      expect(await service.main()).toBe(mockRepository.collectionSource);
    });
  });
});
