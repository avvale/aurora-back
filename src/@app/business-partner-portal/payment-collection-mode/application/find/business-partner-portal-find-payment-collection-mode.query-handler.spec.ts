/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPaymentCollectionModeQuery,
  BusinessPartnerPortalIPaymentCollectionModeRepository,
  BusinessPartnerPortalMockPaymentCollectionModeRepository,
  BusinessPartnerPortalPaymentCollectionModeMapper,
} from '@app/business-partner-portal/payment-collection-mode';
import { BusinessPartnerPortalFindPaymentCollectionModeQueryHandler } from '@app/business-partner-portal/payment-collection-mode/application/find/business-partner-portal-find-payment-collection-mode.query-handler';
import { BusinessPartnerPortalFindPaymentCollectionModeService } from '@app/business-partner-portal/payment-collection-mode/application/find/business-partner-portal-find-payment-collection-mode.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindPaymentCollectionModeQueryHandler', () => {
  let queryHandler: BusinessPartnerPortalFindPaymentCollectionModeQueryHandler;
  let service: BusinessPartnerPortalFindPaymentCollectionModeService;
  let repository: BusinessPartnerPortalMockPaymentCollectionModeRepository;
  let mapper: BusinessPartnerPortalPaymentCollectionModeMapper;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalFindPaymentCollectionModeQueryHandler,
        {
          provide: BusinessPartnerPortalIPaymentCollectionModeRepository,
          useClass: BusinessPartnerPortalMockPaymentCollectionModeRepository,
        },
        {
          provide: BusinessPartnerPortalFindPaymentCollectionModeService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    queryHandler =
      module.get<BusinessPartnerPortalFindPaymentCollectionModeQueryHandler>(
        BusinessPartnerPortalFindPaymentCollectionModeQueryHandler,
      );
    service = module.get<BusinessPartnerPortalFindPaymentCollectionModeService>(
      BusinessPartnerPortalFindPaymentCollectionModeService,
    );
    repository = <BusinessPartnerPortalMockPaymentCollectionModeRepository>(
      module.get<BusinessPartnerPortalIPaymentCollectionModeRepository>(
        BusinessPartnerPortalIPaymentCollectionModeRepository,
      )
    );
    mapper = new BusinessPartnerPortalPaymentCollectionModeMapper();
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindPaymentCollectionModeQueryHandler should be defined', () => {
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
          new BusinessPartnerPortalFindPaymentCollectionModeQuery(),
        ),
      ).toStrictEqual(
        mapper.mapAggregateToResponse(repository.collectionSource[0]),
      );
    });
  });
});
