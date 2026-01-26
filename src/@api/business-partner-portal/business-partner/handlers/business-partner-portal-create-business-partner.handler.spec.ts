/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import { BusinessPartnerPortalCreateBusinessPartnerHandler } from '@api/business-partner-portal/business-partner';
import { businessPartnerPortalMockBusinessPartnerData } from '@app/business-partner-portal/business-partner';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalCreateBusinessPartnerHandler', () => {
  let handler: BusinessPartnerPortalCreateBusinessPartnerHandler;
  let queryBus: IQueryBus;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalCreateBusinessPartnerHandler,
        {
          provide: IQueryBus,
          useValue: {
            ask: () => {
              /**/
            },
          },
        },
        {
          provide: ICommandBus,
          useValue: {
            dispatch: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    handler = module.get<BusinessPartnerPortalCreateBusinessPartnerHandler>(
      BusinessPartnerPortalCreateBusinessPartnerHandler,
    );
    queryBus = module.get<IQueryBus>(IQueryBus);
  });

  describe('main', () => {
    test('BusinessPartnerPortalCreateBusinessPartnerHandler should be defined', () => {
      expect(handler).toBeDefined();
    });

    test('should return an businessPartner created', async () => {
      jest
        .spyOn(queryBus, 'ask')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockBusinessPartnerData[0]),
            ),
        );
      expect(
        await handler.main(
          businessPartnerPortalMockBusinessPartnerData[0],
          'Europe/Madrid',
        ),
      ).toBe(businessPartnerPortalMockBusinessPartnerData[0]);
    });
  });
});
