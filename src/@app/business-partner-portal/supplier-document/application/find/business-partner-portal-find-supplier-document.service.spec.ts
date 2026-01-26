/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import {
  BusinessPartnerPortalISupplierDocumentRepository,
  BusinessPartnerPortalMockSupplierDocumentRepository,
} from '@app/business-partner-portal/supplier-document';
import { BusinessPartnerPortalFindSupplierDocumentService } from '@app/business-partner-portal/supplier-document/application/find/business-partner-portal-find-supplier-document.service';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindSupplierDocumentService', () => {
  let service: BusinessPartnerPortalFindSupplierDocumentService;
  let repository: BusinessPartnerPortalISupplierDocumentRepository;
  let mockRepository: BusinessPartnerPortalMockSupplierDocumentRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalFindSupplierDocumentService,
        BusinessPartnerPortalMockSupplierDocumentRepository,
        {
          provide: BusinessPartnerPortalISupplierDocumentRepository,
          useValue: {
            find: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(BusinessPartnerPortalFindSupplierDocumentService);
    repository = module.get(BusinessPartnerPortalISupplierDocumentRepository);
    mockRepository = module.get(
      BusinessPartnerPortalMockSupplierDocumentRepository,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindSupplierDocumentService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should find supplierDocument', async () => {
      jest
        .spyOn(repository, 'find')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(mockRepository.collectionSource[0]),
            ),
        );
      expect(await service.main()).toBe(mockRepository.collectionSource[0]);
    });
  });
});
