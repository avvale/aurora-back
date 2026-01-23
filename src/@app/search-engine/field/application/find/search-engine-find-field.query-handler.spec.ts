import {
  SearchEngineFieldMapper,
  SearchEngineFindFieldQuery,
  SearchEngineIFieldRepository,
  SearchEngineMockFieldRepository,
} from '@app/search-engine/field';
import { SearchEngineFindFieldQueryHandler } from '@app/search-engine/field/application/find/search-engine-find-field.query-handler';
import { SearchEngineFindFieldService } from '@app/search-engine/field/application/find/search-engine-find-field.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineFindFieldQueryHandler', () => {
  let queryHandler: SearchEngineFindFieldQueryHandler;
  let service: SearchEngineFindFieldService;
  let repository: SearchEngineMockFieldRepository;
  let mapper: SearchEngineFieldMapper;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SearchEngineFindFieldQueryHandler,
        {
          provide: SearchEngineIFieldRepository,
          useClass: SearchEngineMockFieldRepository,
        },
        {
          provide: SearchEngineFindFieldService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    queryHandler = module.get<SearchEngineFindFieldQueryHandler>(
      SearchEngineFindFieldQueryHandler,
    );
    service = module.get<SearchEngineFindFieldService>(
      SearchEngineFindFieldService,
    );
    repository = <SearchEngineMockFieldRepository>(
      module.get<SearchEngineIFieldRepository>(SearchEngineIFieldRepository)
    );
    mapper = new SearchEngineFieldMapper();
  });

  describe('main', () => {
    test('SearchEngineFindFieldQueryHandler should be defined', () => {
      expect(queryHandler).toBeDefined();
    });

    test('should return an field founded', async () => {
      jest
        .spyOn(service, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) => resolve(repository.collectionSource[0])),
        );
      expect(
        await queryHandler.execute(new SearchEngineFindFieldQuery()),
      ).toStrictEqual(
        mapper.mapAggregateToResponse(repository.collectionSource[0]),
      );
    });
  });
});
