/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPaymentModeQuery,
  BusinessPartnerPortalIPaymentModeRepository,
  BusinessPartnerPortalMockPaymentModeRepository,
  BusinessPartnerPortalPaymentModeMapper,
} from '@app/business-partner-portal/payment-mode';
import { BusinessPartnerPortalFindPaymentModeQueryHandler } from '@app/business-partner-portal/payment-mode/application/find/business-partner-portal-find-payment-mode.query-handler';
import { BusinessPartnerPortalFindPaymentModeService } from '@app/business-partner-portal/payment-mode/application/find/business-partner-portal-find-payment-mode.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindPaymentModeQueryHandler', () => {
  let queryHandler: BusinessPartnerPortalFindPaymentModeQueryHandler;
  let service: BusinessPartnerPortalFindPaymentModeService;
  let repository: BusinessPartnerPortalMockPaymentModeRepository;
  let mapper: BusinessPartnerPortalPaymentModeMapper;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalFindPaymentModeQueryHandler,
        {
          provide: BusinessPartnerPortalIPaymentModeRepository,
          useClass: BusinessPartnerPortalMockPaymentModeRepository,
        },
        {
          provide: BusinessPartnerPortalFindPaymentModeService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    queryHandler = module.get<BusinessPartnerPortalFindPaymentModeQueryHandler>(
      BusinessPartnerPortalFindPaymentModeQueryHandler,
    );
    service = module.get<BusinessPartnerPortalFindPaymentModeService>(
      BusinessPartnerPortalFindPaymentModeService,
    );
    repository = <BusinessPartnerPortalMockPaymentModeRepository>(
      module.get<BusinessPartnerPortalIPaymentModeRepository>(
        BusinessPartnerPortalIPaymentModeRepository,
      )
    );
    mapper = new BusinessPartnerPortalPaymentModeMapper();
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindPaymentModeQueryHandler should be defined', () => {
      expect(queryHandler).toBeDefined();
    });

    test('should return an paymentMode founded', async () => {
      jest
        .spyOn(service, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) => resolve(repository.collectionSource[0])),
        );
      expect(
        await queryHandler.execute(
          new BusinessPartnerPortalFindPaymentModeQuery(),
        ),
      ).toStrictEqual(
        mapper.mapAggregateToResponse(repository.collectionSource[0]),
      );
    });
  });
});
