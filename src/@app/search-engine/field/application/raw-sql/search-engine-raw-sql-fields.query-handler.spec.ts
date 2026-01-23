import {
  SearchEngineFieldMapper,
  SearchEngineIFieldRepository,
  SearchEngineMockFieldRepository,
  SearchEngineRawSQLFieldsQuery,
} from '@app/search-engine/field';
import { SearchEngineRawSQLFieldsQueryHandler } from '@app/search-engine/field/application/raw-sql/search-engine-raw-sql-fields.query-handler';
import { SearchEngineRawSQLFieldsService } from '@app/search-engine/field/application/raw-sql/search-engine-raw-sql-fields.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('RawSQLFieldsQueryHandler', () => {
  let queryHandler: SearchEngineRawSQLFieldsQueryHandler;
  let service: SearchEngineRawSQLFieldsService;
  let repository: SearchEngineMockFieldRepository;
  let mapper: SearchEngineFieldMapper;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SearchEngineRawSQLFieldsQueryHandler,
        {
          provide: SearchEngineIFieldRepository,
          useClass: SearchEngineMockFieldRepository,
        },
        {
          provide: SearchEngineRawSQLFieldsService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    queryHandler = module.get<SearchEngineRawSQLFieldsQueryHandler>(
      SearchEngineRawSQLFieldsQueryHandler,
    );
    service = module.get<SearchEngineRawSQLFieldsService>(
      SearchEngineRawSQLFieldsService,
    );
    repository = <SearchEngineMockFieldRepository>(
      module.get<SearchEngineIFieldRepository>(SearchEngineIFieldRepository)
    );
    mapper = new SearchEngineFieldMapper();
  });

  describe('main', () => {
    test('SearchEngineRawSQLFieldsQueryHandler should be defined', () => {
      expect(queryHandler).toBeDefined();
    });

    test('should return an fields founded', async () => {
      jest
        .spyOn(service, 'main')
        .mockImplementation(
          () => new Promise((resolve) => resolve(repository.collectionSource)),
        );
      expect(
        await queryHandler.execute(new SearchEngineRawSQLFieldsQuery()),
      ).toStrictEqual(
        mapper.mapAggregatesToResponses(repository.collectionSource),
      );
    });
  });
});
