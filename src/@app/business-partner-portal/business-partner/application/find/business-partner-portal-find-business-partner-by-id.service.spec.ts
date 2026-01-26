/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import {
  BusinessPartnerPortalIBusinessPartnerRepository,
  businessPartnerPortalMockBusinessPartnerData,
  BusinessPartnerPortalMockBusinessPartnerRepository,
} from '@app/business-partner-portal/business-partner';
import { BusinessPartnerPortalFindBusinessPartnerByIdService } from '@app/business-partner-portal/business-partner/application/find/business-partner-portal-find-business-partner-by-id.service';
import { BusinessPartnerPortalBusinessPartnerId } from '@app/business-partner-portal/business-partner/domain/value-objects';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindBusinessPartnerByIdService', () => {
  let service: BusinessPartnerPortalFindBusinessPartnerByIdService;
  let repository: BusinessPartnerPortalIBusinessPartnerRepository;
  let mockRepository: BusinessPartnerPortalMockBusinessPartnerRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalFindBusinessPartnerByIdService,
        BusinessPartnerPortalMockBusinessPartnerRepository,
        {
          provide: BusinessPartnerPortalIBusinessPartnerRepository,
          useValue: {
            findById: (id) => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(BusinessPartnerPortalFindBusinessPartnerByIdService);
    repository = module.get(BusinessPartnerPortalIBusinessPartnerRepository);
    mockRepository = module.get(
      BusinessPartnerPortalMockBusinessPartnerRepository,
    );
  });

  describe('main', () => {
    test('FindBusinessPartnerByIdService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should find businessPartner by id', async () => {
      jest
        .spyOn(repository, 'findById')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(mockRepository.collectionSource[0]),
            ),
        );
      expect(
        await service.main(
          new BusinessPartnerPortalBusinessPartnerId(
            businessPartnerPortalMockBusinessPartnerData[0].id,
          ),
        ),
      ).toBe(mockRepository.collectionSource[0]);
    });
  });
});
