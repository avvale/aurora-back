/* eslint-disable max-len */
/* eslint-disable quotes */
/* eslint-disable key-spacing */
import { AuthorizationPermissionsGuard } from '@api/iam/shared/guards/authorization-permissions.guard';
import { AuthenticationJwtGuard } from '@api/o-auth/shared/guards/authentication-jwt.guard';
import { SupportModule } from '@api/support/support.module';
import {
    SupportIConfigRepository,
    supportMockConfigData,
    SupportMockConfigSeeder,
} from '@app/support/config';
import { GraphQLConfigModule } from '@aurora/modules';
import { INestApplication } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Test, TestingModule } from '@nestjs/testing';
import * as _ from 'lodash';
import * as request from 'supertest';

// disable import foreign modules, can be micro-services
const importForeignModules = [];

describe('config', () => {
    let app: INestApplication;
    let configRepository: SupportIConfigRepository;
    let configSeeder: SupportMockConfigSeeder;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let mockData: any;

    // set timeout to 60s by default are 5s
    jest.setTimeout(60000);

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
                ...importForeignModules,
                SupportModule,
                GraphQLConfigModule,
                SequelizeModule.forRootAsync({
                    imports: [ConfigModule],
                    inject: [ConfigService],
                    useFactory: (configService: ConfigService) => {
                        return {
                            dialect: configService.get('TEST_DATABASE_DIALECT'),
                            storage: configService.get('TEST_DATABASE_STORAGE'),
                            host: configService.get('TEST_DATABASE_HOST'),
                            port: +configService.get('TEST_DATABASE_PORT'),
                            username: configService.get('TEST_DATABASE_USER'),
                            password: configService.get(
                                'TEST_DATABASE_PASSWORD',
                            ),
                            database: configService.get('TEST_DATABASE_SCHEMA'),
                            synchronize: configService.get(
                                'TEST_DATABASE_SYNCHRONIZE',
                            ),
                            logging:
                                configService.get('TEST_DATABASE_LOGGIN') ===
                                'true'
                                    ? console.log
                                    : false,
                            autoLoadModels: true,
                            models: [],
                        };
                    },
                }),
            ],
            providers: [SupportMockConfigSeeder],
        })
            .overrideGuard(AuthenticationJwtGuard)
            .useValue({ canActivate: () => true })
            .overrideGuard(AuthorizationPermissionsGuard)
            .useValue({ canActivate: () => true })
            .compile();

        mockData = supportMockConfigData;
        app = module.createNestApplication();
        configRepository = module.get<SupportIConfigRepository>(
            SupportIConfigRepository,
        );
        configSeeder = module.get<SupportMockConfigSeeder>(
            SupportMockConfigSeeder,
        );

        // seed mock data in memory database
        await configRepository.insert(configSeeder.collectionSource);

        await app.init();
    });

    test('/REST:POST support/config/create - Got 400 Conflict, ConfigId property can not to be null', () => {
        return request(app.getHttpServer())
            .post('/support/config/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: null,
            })
            .expect(400)
            .then((res) => {
                expect(res.body.message).toContain(
                    'Value for SupportConfigId must be defined, can not be null',
                );
            });
    });

    test('/REST:POST support/config/create - Got 400 Conflict, ConfigRowId property can not to be null', () => {
        return request(app.getHttpServer())
            .post('/support/config/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                rowId: null,
            })
            .expect(400)
            .then((res) => {
                expect(res.body.message).toContain(
                    'Value for SupportConfigRowId must be defined, can not be null',
                );
            });
    });

    test('/REST:POST support/config/create - Got 400 Conflict, ConfigId property can not to be undefined', () => {
        return request(app.getHttpServer())
            .post('/support/config/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: undefined,
            })
            .expect(400)
            .then((res) => {
                expect(res.body.message).toContain(
                    'Value for SupportConfigId must be defined, can not be undefined',
                );
            });
    });

    test('/REST:POST support/config/create - Got 400 Conflict, ConfigRowId property can not to be undefined', () => {
        return request(app.getHttpServer())
            .post('/support/config/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                rowId: undefined,
            })
            .expect(400)
            .then((res) => {
                expect(res.body.message).toContain(
                    'Value for SupportConfigRowId must be defined, can not be undefined',
                );
            });
    });

    test('/REST:POST support/config/create - Got 400 Conflict, ConfigId is not allowed, must be a length of 36', () => {
        return request(app.getHttpServer())
            .post('/support/config/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: '*************************************',
            })
            .expect(400)
            .then((res) => {
                expect(res.body.message).toContain(
                    'Value for SupportConfigId is not allowed, must be a length of 36',
                );
            });
    });

    test('/REST:POST support/config/create - Got 400 Conflict, ConfigApiKey is too large, has a maximum length of 255', () => {
        return request(app.getHttpServer())
            .post('/support/config/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                apiKey: '****************************************************************************************************************************************************************************************************************************************************************',
            })
            .expect(400)
            .then((res) => {
                expect(res.body.message).toContain(
                    'Value for SupportConfigApiKey is too large, has a maximum length of 255',
                );
            });
    });

    test('/REST:POST support/config/create - Got 400 Conflict, ConfigListId is too large, has a maximum length of 255', () => {
        return request(app.getHttpServer())
            .post('/support/config/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                listId: '****************************************************************************************************************************************************************************************************************************************************************',
            })
            .expect(400)
            .then((res) => {
                expect(res.body.message).toContain(
                    'Value for SupportConfigListId is too large, has a maximum length of 255',
                );
            });
    });

    test('/REST:POST support/config/create - Got 409 Conflict, item already exist in database', () => {
        return request(app.getHttpServer())
            .post('/support/config/create')
            .set('Accept', 'application/json')
            .send(mockData[0])
            .expect(409);
    });

    test('/REST:POST support/configs/paginate', () => {
        return request(app.getHttpServer())
            .post('/support/configs/paginate')
            .set('Accept', 'application/json')
            .send({
                query: {
                    offset: 0,
                    limit: 5,
                },
            })
            .expect(200)
            .then((res) => {
                expect(res.body).toEqual({
                    total: configSeeder.collectionResponse.length,
                    count: configSeeder.collectionResponse.length,
                    rows: configSeeder.collectionResponse
                        .map((item) =>
                            expect.objectContaining(
                                _.omit(item, [
                                    'createdAt',
                                    'updatedAt',
                                    'deletedAt',
                                ]),
                            ),
                        )
                        .slice(0, 5),
                });
            });
    });

    test('/REST:POST support/configs/get', () => {
        return request(app.getHttpServer())
            .post('/support/configs/get')
            .set('Accept', 'application/json')
            .expect(200)
            .then((res) => {
                expect(res.body).toEqual(
                    configSeeder.collectionResponse.map((item) =>
                        expect.objectContaining(
                            _.omit(item, [
                                'createdAt',
                                'updatedAt',
                                'deletedAt',
                            ]),
                        ),
                    ),
                );
            });
    });

    test('/REST:POST support/config/find - Got 404 Not Found', () => {
        return request(app.getHttpServer())
            .post('/support/config/find')
            .set('Accept', 'application/json')
            .send({
                query: {
                    where: {
                        id: 'f89c8d60-3149-5fcd-b95e-731642307da3',
                    },
                },
            })
            .expect(404);
    });

    test('/REST:POST support/config/create', () => {
        return request(app.getHttpServer())
            .post('/support/config/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
            })
            .expect(201);
    });

    test('/REST:POST support/config/find', () => {
        return request(app.getHttpServer())
            .post('/support/config/find')
            .set('Accept', 'application/json')
            .send({
                query: {
                    where: {
                        id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
                    },
                },
            })
            .expect(200)
            .then((res) => {
                expect(res.body).toHaveProperty(
                    'id',
                    '5b19d6ac-4081-573b-96b3-56964d5326a8',
                );
            });
    });

    test('/REST:POST support/config/find/{id} - Got 404 Not Found', () => {
        return request(app.getHttpServer())
            .post('/support/config/find/c85720b9-675c-52f9-86ba-fc6a936455db')
            .set('Accept', 'application/json')
            .expect(404);
    });

    test('/REST:POST support/config/find/{id}', () => {
        return request(app.getHttpServer())
            .post('/support/config/find/5b19d6ac-4081-573b-96b3-56964d5326a8')
            .set('Accept', 'application/json')
            .expect(200)
            .then((res) => {
                expect(res.body).toHaveProperty(
                    'id',
                    '5b19d6ac-4081-573b-96b3-56964d5326a8',
                );
            });
    });

    test('/REST:PUT support/config/update - Got 404 Not Found', () => {
        return request(app.getHttpServer())
            .put('/support/config/update')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: '81f53921-7186-5f85-a3f2-fd6760374cf0',
            })
            .expect(404);
    });

    test('/REST:PUT support/config/update', () => {
        return request(app.getHttpServer())
            .put('/support/config/update')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
            })
            .expect(200)
            .then((res) => {
                expect(res.body).toHaveProperty(
                    'id',
                    '5b19d6ac-4081-573b-96b3-56964d5326a8',
                );
            });
    });

    test('/REST:DELETE support/config/delete/{id} - Got 404 Not Found', () => {
        return request(app.getHttpServer())
            .delete(
                '/support/config/delete/a2fd0d69-9bf1-5546-9dd5-75087c28de21',
            )
            .set('Accept', 'application/json')
            .expect(404);
    });

    test('/REST:DELETE support/config/delete/{id}', () => {
        return request(app.getHttpServer())
            .delete(
                '/support/config/delete/5b19d6ac-4081-573b-96b3-56964d5326a8',
            )
            .set('Accept', 'application/json')
            .expect(200);
    });

    test('/GraphQL supportCreateConfig - Got 409 Conflict, item already exist in database', () => {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:SupportCreateConfigInput!)
                    {
                        supportCreateConfig (payload:$payload)
                        {
                            id
                            rowId
                            apiKey
                            listId
                        }
                    }
                `,
                variables: {
                    payload: _.omit(mockData[0], [
                        'createdAt',
                        'updatedAt',
                        'deletedAt',
                    ]),
                },
            })
            .expect(200)
            .then((res) => {
                expect(res.body).toHaveProperty('errors');
                expect(
                    res.body.errors[0].extensions.originalError.statusCode,
                ).toBe(409);
                expect(
                    res.body.errors[0].extensions.originalError.message,
                ).toContain('already exist in database');
            });
    });

    test('/GraphQL supportPaginateConfigs', () => {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement $constraint:QueryStatement)
                    {
                        supportPaginateConfigs (query:$query constraint:$constraint)
                        {
                            total
                            count
                            rows
                        }
                    }
                `,
                variables: {
                    query: {
                        offset: 0,
                        limit: 5,
                    },
                },
            })
            .expect(200)
            .then((res) => {
                expect(res.body.data.supportPaginateConfigs).toEqual({
                    total: configSeeder.collectionResponse.length,
                    count: configSeeder.collectionResponse.length,
                    rows: configSeeder.collectionResponse
                        .map((item) =>
                            expect.objectContaining(
                                _.omit(item, [
                                    'createdAt',
                                    'updatedAt',
                                    'deletedAt',
                                ]),
                            ),
                        )
                        .slice(0, 5),
                });
            });
    });

    test('/GraphQL supportGetConfigs', () => {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement)
                    {
                        supportGetConfigs (query:$query)
                        {
                            id
                            rowId
                            apiKey
                            listId
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {},
            })
            .expect(200)
            .then((res) => {
                for (const [
                    index,
                    value,
                ] of res.body.data.supportGetConfigs.entries()) {
                    expect(configSeeder.collectionResponse[index]).toEqual(
                        expect.objectContaining(
                            _.omit(value, [
                                'createdAt',
                                'updatedAt',
                                'deletedAt',
                            ]),
                        ),
                    );
                }
            });
    });

    test('/GraphQL supportCreateConfig', () => {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:SupportCreateConfigInput!)
                    {
                        supportCreateConfig (payload:$payload)
                        {
                            id
                            rowId
                            apiKey
                            listId
                        }
                    }
                `,
                variables: {
                    payload: {
                        ...mockData[0],
                        id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
                    },
                },
            })
            .expect(200)
            .then((res) => {
                expect(res.body.data.supportCreateConfig).toHaveProperty(
                    'id',
                    '5b19d6ac-4081-573b-96b3-56964d5326a8',
                );
            });
    });

    test('/GraphQL supportFindConfig - Got 404 Not Found', () => {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement)
                    {
                        supportFindConfig (query:$query)
                        {
                            id
                            rowId
                            apiKey
                            listId
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    query: {
                        where: {
                            id: '11ee3512-a6c1-5db4-a60c-0655ae679730',
                        },
                    },
                },
            })
            .expect(200)
            .then((res) => {
                expect(res.body).toHaveProperty('errors');
                expect(
                    res.body.errors[0].extensions.originalError.statusCode,
                ).toBe(404);
                expect(
                    res.body.errors[0].extensions.originalError.message,
                ).toContain('not found');
            });
    });

    test('/GraphQL supportFindConfig', () => {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement)
                    {
                        supportFindConfig (query:$query)
                        {
                            id
                            rowId
                            apiKey
                            listId
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    query: {
                        where: {
                            id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
                        },
                    },
                },
            })
            .expect(200)
            .then((res) => {
                expect(res.body.data.supportFindConfig.id).toStrictEqual(
                    '5b19d6ac-4081-573b-96b3-56964d5326a8',
                );
            });
    });

    test('/GraphQL supportFindConfigById - Got 404 Not Found', () => {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($id:ID!)
                    {
                        supportFindConfigById (id:$id)
                        {
                            id
                            rowId
                            apiKey
                            listId
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    id: 'eb1f0334-d532-50d7-9cc4-dc4d07a3820b',
                },
            })
            .expect(200)
            .then((res) => {
                expect(res.body).toHaveProperty('errors');
                expect(
                    res.body.errors[0].extensions.originalError.statusCode,
                ).toBe(404);
                expect(
                    res.body.errors[0].extensions.originalError.message,
                ).toContain('not found');
            });
    });

    test('/GraphQL supportFindConfigById', () => {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($id:ID!)
                    {
                        supportFindConfigById (id:$id)
                        {
                            id
                            rowId
                            apiKey
                            listId
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
                },
            })
            .expect(200)
            .then((res) => {
                expect(res.body.data.supportFindConfigById.id).toStrictEqual(
                    '5b19d6ac-4081-573b-96b3-56964d5326a8',
                );
            });
    });

    test('/GraphQL supportUpdateConfigById - Got 404 Not Found', () => {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:SupportUpdateConfigByIdInput!)
                    {
                        supportUpdateConfigById (payload:$payload)
                        {
                            id
                            rowId
                            apiKey
                            listId
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    payload: {
                        ...mockData[0],
                        id: '9d5e7fcb-751b-59d2-8505-76fb863250f3',
                    },
                },
            })
            .expect(200)
            .then((res) => {
                expect(res.body).toHaveProperty('errors');
                expect(
                    res.body.errors[0].extensions.originalError.statusCode,
                ).toBe(404);
                expect(
                    res.body.errors[0].extensions.originalError.message,
                ).toContain('not found');
            });
    });

    test('/GraphQL supportUpdateConfigById', () => {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:SupportUpdateConfigByIdInput!)
                    {
                        supportUpdateConfigById (payload:$payload)
                        {
                            id
                            rowId
                            apiKey
                            listId
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    payload: {
                        ...mockData[0],
                        id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
                    },
                },
            })
            .expect(200)
            .then((res) => {
                expect(res.body.data.supportUpdateConfigById.id).toStrictEqual(
                    '5b19d6ac-4081-573b-96b3-56964d5326a8',
                );
            });
    });

    test('/GraphQL supportUpdateConfigs', () => {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:SupportUpdateConfigsInput! $query: QueryStatement)
                    {
                        supportUpdateConfigs (payload:$payload query:$query)
                        {
                            id
                            rowId
                            apiKey
                            listId
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    payload: {
                        ...mockData[0],
                        id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
                    },
                    query: {
                        where: {
                            id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
                        },
                    },
                },
            })
            .expect(200)
            .then((res) => {
                expect(res.body.data.supportUpdateConfigs[0].id).toStrictEqual(
                    '5b19d6ac-4081-573b-96b3-56964d5326a8',
                );
            });
    });

    test('/GraphQL supportDeleteConfigById - Got 404 Not Found', () => {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($id:ID!)
                    {
                        supportDeleteConfigById (id:$id)
                        {
                            id
                            rowId
                            apiKey
                            listId
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    id: 'ee1202a0-e368-5c38-a5c1-b9e5b3ce8949',
                },
            })
            .expect(200)
            .then((res) => {
                expect(res.body).toHaveProperty('errors');
                expect(
                    res.body.errors[0].extensions.originalError.statusCode,
                ).toBe(404);
                expect(
                    res.body.errors[0].extensions.originalError.message,
                ).toContain('not found');
            });
    });

    test('/GraphQL supportDeleteConfigById', () => {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($id:ID!)
                    {
                        supportDeleteConfigById (id:$id)
                        {
                            id
                            rowId
                            apiKey
                            listId
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
                },
            })
            .expect(200)
            .then((res) => {
                expect(res.body.data.supportDeleteConfigById.id).toStrictEqual(
                    '5b19d6ac-4081-573b-96b3-56964d5326a8',
                );
            });
    });

    afterAll(async () => {
        await configRepository.delete({
            queryStatement: {
                where: {},
            },
        });
        await app.close();
    });
});
