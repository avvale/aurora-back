/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import { BusinessPartnerPortalFindBusinessPartnerHandler } from '@api/business-partner-portal/business-partner';
import { businessPartnerPortalMockBusinessPartnerData } from '@app/business-partner-portal/business-partner';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindBusinessPartnerHandler', () => {
  let handler: BusinessPartnerPortalFindBusinessPartnerHandler;
  let queryBus: IQueryBus;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalFindBusinessPartnerHandler,
        {
          provide: IQueryBus,
          useValue: {
            ask: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    handler = module.get<BusinessPartnerPortalFindBusinessPartnerHandler>(
      BusinessPartnerPortalFindBusinessPartnerHandler,
    );
    queryBus = module.get<IQueryBus>(IQueryBus);
  });

  test('BusinessPartnerPortalFindBusinessPartnerHandler should be defined', () => {
    expect(handler).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindBusinessPartnerHandler should be defined', () => {
      expect(handler).toBeDefined();
    });

    test('should return a businessPartner', async () => {
      jest
        .spyOn(queryBus, 'ask')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockBusinessPartnerData[0]),
            ),
        );
      expect(await handler.main({}, {}, 'Europe/Madrid')).toBe(
        businessPartnerPortalMockBusinessPartnerData[0],
      );
    });
  });
});
