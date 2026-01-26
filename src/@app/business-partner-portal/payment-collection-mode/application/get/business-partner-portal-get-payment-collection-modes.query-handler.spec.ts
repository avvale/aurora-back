/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalGetPaymentCollectionModesQuery,
  BusinessPartnerPortalIPaymentCollectionModeRepository,
  BusinessPartnerPortalMockPaymentCollectionModeRepository,
  BusinessPartnerPortalPaymentCollectionModeMapper,
} from '@app/business-partner-portal/payment-collection-mode';
import { BusinessPartnerPortalGetPaymentCollectionModesQueryHandler } from '@app/business-partner-portal/payment-collection-mode/application/get/business-partner-portal-get-payment-collection-modes.query-handler';
import { BusinessPartnerPortalGetPaymentCollectionModesService } from '@app/business-partner-portal/payment-collection-mode/application/get/business-partner-portal-get-payment-collection-modes.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('GetPaymentCollectionModesQueryHandler', () => {
  let queryHandler: BusinessPartnerPortalGetPaymentCollectionModesQueryHandler;
  let service: BusinessPartnerPortalGetPaymentCollectionModesService;
  let repository: BusinessPartnerPortalMockPaymentCollectionModeRepository;
  let mapper: BusinessPartnerPortalPaymentCollectionModeMapper;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalGetPaymentCollectionModesQueryHandler,
        {
          provide: BusinessPartnerPortalIPaymentCollectionModeRepository,
          useClass: BusinessPartnerPortalMockPaymentCollectionModeRepository,
        },
        {
          provide: BusinessPartnerPortalGetPaymentCollectionModesService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    queryHandler =
      module.get<BusinessPartnerPortalGetPaymentCollectionModesQueryHandler>(
        BusinessPartnerPortalGetPaymentCollectionModesQueryHandler,
      );
    service = module.get<BusinessPartnerPortalGetPaymentCollectionModesService>(
      BusinessPartnerPortalGetPaymentCollectionModesService,
    );
    repository = <BusinessPartnerPortalMockPaymentCollectionModeRepository>(
      module.get<BusinessPartnerPortalIPaymentCollectionModeRepository>(
        BusinessPartnerPortalIPaymentCollectionModeRepository,
      )
    );
    mapper = new BusinessPartnerPortalPaymentCollectionModeMapper();
  });

  describe('main', () => {
    test('BusinessPartnerPortalGetPaymentCollectionModesQueryHandler should be defined', () => {
      expect(queryHandler).toBeDefined();
    });

    test('should return an paymentCollectionModes founded', async () => {
      jest
        .spyOn(service, 'main')
        .mockImplementation(
          () => new Promise((resolve) => resolve(repository.collectionSource)),
        );
      expect(
        await queryHandler.execute(
          new BusinessPartnerPortalGetPaymentCollectionModesQuery(),
        ),
      ).toStrictEqual(
        mapper.mapAggregatesToResponses(repository.collectionSource),
      );
    });
  });
});
