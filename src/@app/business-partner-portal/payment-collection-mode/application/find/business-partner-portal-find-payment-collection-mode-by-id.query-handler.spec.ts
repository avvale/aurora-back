/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPaymentCollectionModeByIdQuery,
  BusinessPartnerPortalIPaymentCollectionModeRepository,
  businessPartnerPortalMockPaymentCollectionModeData,
  BusinessPartnerPortalMockPaymentCollectionModeRepository,
  BusinessPartnerPortalPaymentCollectionModeMapper,
} from '@app/business-partner-portal/payment-collection-mode';
import { BusinessPartnerPortalFindPaymentCollectionModeByIdQueryHandler } from '@app/business-partner-portal/payment-collection-mode/application/find/business-partner-portal-find-payment-collection-mode-by-id.query-handler';
import { BusinessPartnerPortalFindPaymentCollectionModeByIdService } from '@app/business-partner-portal/payment-collection-mode/application/find/business-partner-portal-find-payment-collection-mode-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindPaymentCollectionModeByIdQueryHandler', () => {
  let queryHandler: BusinessPartnerPortalFindPaymentCollectionModeByIdQueryHandler;
  let service: BusinessPartnerPortalFindPaymentCollectionModeByIdService;
  let repository: BusinessPartnerPortalMockPaymentCollectionModeRepository;
  let mapper: BusinessPartnerPortalPaymentCollectionModeMapper;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalFindPaymentCollectionModeByIdQueryHandler,
        {
          provide: BusinessPartnerPortalIPaymentCollectionModeRepository,
          useClass: BusinessPartnerPortalMockPaymentCollectionModeRepository,
        },
        {
          provide: BusinessPartnerPortalFindPaymentCollectionModeByIdService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    queryHandler =
      module.get<BusinessPartnerPortalFindPaymentCollectionModeByIdQueryHandler>(
        BusinessPartnerPortalFindPaymentCollectionModeByIdQueryHandler,
      );
    service =
      module.get<BusinessPartnerPortalFindPaymentCollectionModeByIdService>(
        BusinessPartnerPortalFindPaymentCollectionModeByIdService,
      );
    repository = <BusinessPartnerPortalMockPaymentCollectionModeRepository>(
      module.get<BusinessPartnerPortalIPaymentCollectionModeRepository>(
        BusinessPartnerPortalIPaymentCollectionModeRepository,
      )
    );
    mapper = new BusinessPartnerPortalPaymentCollectionModeMapper();
  });

  describe('main', () => {
    test('FindPaymentCollectionModeByIdQueryHandler should be defined', () => {
      expect(queryHandler).toBeDefined();
    });

    test('should return an paymentCollectionMode founded', async () => {
      jest
        .spyOn(service, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) => resolve(repository.collectionSource[0])),
        );
      expect(
        await queryHandler.execute(
          new BusinessPartnerPortalFindPaymentCollectionModeByIdQuery(
            businessPartnerPortalMockPaymentCollectionModeData[0].id,
          ),
        ),
      ).toStrictEqual(
        mapper.mapAggregateToResponse(repository.collectionSource[0]),
      );
    });
  });
});
