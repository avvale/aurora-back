/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPaymentModeByIdQuery,
  BusinessPartnerPortalIPaymentModeRepository,
  businessPartnerPortalMockPaymentModeData,
  BusinessPartnerPortalMockPaymentModeRepository,
  BusinessPartnerPortalPaymentModeMapper,
} from '@app/business-partner-portal/payment-mode';
import { BusinessPartnerPortalFindPaymentModeByIdQueryHandler } from '@app/business-partner-portal/payment-mode/application/find/business-partner-portal-find-payment-mode-by-id.query-handler';
import { BusinessPartnerPortalFindPaymentModeByIdService } from '@app/business-partner-portal/payment-mode/application/find/business-partner-portal-find-payment-mode-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindPaymentModeByIdQueryHandler', () => {
  let queryHandler: BusinessPartnerPortalFindPaymentModeByIdQueryHandler;
  let service: BusinessPartnerPortalFindPaymentModeByIdService;
  let repository: BusinessPartnerPortalMockPaymentModeRepository;
  let mapper: BusinessPartnerPortalPaymentModeMapper;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalFindPaymentModeByIdQueryHandler,
        {
          provide: BusinessPartnerPortalIPaymentModeRepository,
          useClass: BusinessPartnerPortalMockPaymentModeRepository,
        },
        {
          provide: BusinessPartnerPortalFindPaymentModeByIdService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    queryHandler =
      module.get<BusinessPartnerPortalFindPaymentModeByIdQueryHandler>(
        BusinessPartnerPortalFindPaymentModeByIdQueryHandler,
      );
    service = module.get<BusinessPartnerPortalFindPaymentModeByIdService>(
      BusinessPartnerPortalFindPaymentModeByIdService,
    );
    repository = <BusinessPartnerPortalMockPaymentModeRepository>(
      module.get<BusinessPartnerPortalIPaymentModeRepository>(
        BusinessPartnerPortalIPaymentModeRepository,
      )
    );
    mapper = new BusinessPartnerPortalPaymentModeMapper();
  });

  describe('main', () => {
    test('FindPaymentModeByIdQueryHandler should be defined', () => {
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
          new BusinessPartnerPortalFindPaymentModeByIdQuery(
            businessPartnerPortalMockPaymentModeData[0].id,
          ),
        ),
      ).toStrictEqual(
        mapper.mapAggregateToResponse(repository.collectionSource[0]),
      );
    });
  });
});
