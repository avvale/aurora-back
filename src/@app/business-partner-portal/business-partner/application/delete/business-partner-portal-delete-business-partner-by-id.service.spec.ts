/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import {
  BusinessPartnerPortalIBusinessPartnerRepository,
  businessPartnerPortalMockBusinessPartnerData,
  BusinessPartnerPortalMockBusinessPartnerRepository,
} from '@app/business-partner-portal/business-partner';
import { BusinessPartnerPortalDeleteBusinessPartnerByIdService } from '@app/business-partner-portal/business-partner/application/delete/business-partner-portal-delete-business-partner-by-id.service';
import { BusinessPartnerPortalBusinessPartnerId } from '@app/business-partner-portal/business-partner/domain/value-objects';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalDeleteBusinessPartnerByIdService', () => {
  let service: BusinessPartnerPortalDeleteBusinessPartnerByIdService;
  let repository: BusinessPartnerPortalIBusinessPartnerRepository;
  let mockRepository: BusinessPartnerPortalMockBusinessPartnerRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalDeleteBusinessPartnerByIdService,
        BusinessPartnerPortalMockBusinessPartnerRepository,
        {
          provide: BusinessPartnerPortalIBusinessPartnerRepository,
          useValue: {
            deleteById: (id) => {
              /**/
            },
            findById: (id) => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(BusinessPartnerPortalDeleteBusinessPartnerByIdService);
    repository = module.get(BusinessPartnerPortalIBusinessPartnerRepository);
    mockRepository = module.get(
      BusinessPartnerPortalMockBusinessPartnerRepository,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalDeleteBusinessPartnerByIdService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should delete businessPartner and emit event', async () => {
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
          {},
        ),
      ).toBe(undefined);
    });
  });
});
