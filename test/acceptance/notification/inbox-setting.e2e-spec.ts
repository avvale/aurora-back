/* eslint-disable max-len */
/* eslint-disable quotes */
/* eslint-disable key-spacing */
import { AuthorizationPermissionsGuard } from '@api/iam/shared/guards/authorization-permissions.guard';
import { NotificationModule } from '@api/notification/notification.module';
import { AuthenticationJwtGuard } from '@api/o-auth/shared/guards/authentication-jwt.guard';
import { NotificationIInboxSettingRepository, notificationMockInboxSettingData, NotificationMockInboxSettingSeeder } from '@app/notification/inbox-setting';
import { GraphQLConfigModule } from '@aurora/graphql/graphql-config.module';
import { INestApplication } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Test, TestingModule } from '@nestjs/testing';
import * as _ from 'lodash';
import * as request from 'supertest';

// disable import foreign modules, can be micro-services
const importForeignModules = [];

describe('inbox-setting', () =>
{
    let app: INestApplication;
    let inboxSettingRepository: NotificationIInboxSettingRepository;
    let inboxSettingSeeder: NotificationMockInboxSettingSeeder;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let mockData: any;

    // set timeout to 60s by default are 5s
    jest.setTimeout(60000);

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
                ...importForeignModules,
                NotificationModule,
                GraphQLConfigModule,
                SequelizeModule.forRootAsync({
                    imports   : [ConfigModule],
                    inject    : [ConfigService],
                    useFactory: (configService: ConfigService) =>
                    {
                        return {
                            dialect       : configService.get('TEST_DATABASE_DIALECT'),
                            storage       : configService.get('TEST_DATABASE_STORAGE'),
                            host          : configService.get('TEST_DATABASE_HOST'),
                            port          : +configService.get('TEST_DATABASE_PORT'),
                            username      : configService.get('TEST_DATABASE_USER'),
                            password      : configService.get('TEST_DATABASE_PASSWORD'),
                            database      : configService.get('TEST_DATABASE_SCHEMA'),
                            synchronize   : configService.get('TEST_DATABASE_SYNCHRONIZE'),
                            logging       : configService.get('TEST_DATABASE_LOGGIN') === 'true' ? console.log : false,
                            autoLoadModels: true,
                            models        : [],
                        };
                    },
                }),
            ],
            providers: [
                NotificationMockInboxSettingSeeder,
            ],
        })
            .overrideGuard(AuthenticationJwtGuard)
            .useValue({ canActivate: () => true })
            .overrideGuard(AuthorizationPermissionsGuard)
            .useValue({ canActivate: () => true })
            .compile();

        mockData = notificationMockInboxSettingData;
        app = module.createNestApplication();
        inboxSettingRepository = module.get<NotificationIInboxSettingRepository>(NotificationIInboxSettingRepository);
        inboxSettingSeeder = module.get<NotificationMockInboxSettingSeeder>(NotificationMockInboxSettingSeeder);

        // seed mock data in memory database
        await inboxSettingRepository.insert(inboxSettingSeeder.collectionSource);

        await app.init();
    });

    test('/REST:POST notification/inbox-setting/create - Got 400 Conflict, InboxSettingId property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/inbox-setting/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationInboxSettingId must be defined, can not be null');
            });
    });

    test('/REST:POST notification/inbox-setting/create - Got 400 Conflict, InboxSettingAccountId property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/inbox-setting/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                accountId: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationInboxSettingAccountId must be defined, can not be null');
            });
    });

    test('/REST:POST notification/inbox-setting/create - Got 400 Conflict, InboxSettingSort property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/inbox-setting/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                sort: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationInboxSettingSort must be defined, can not be null');
            });
    });

    test('/REST:POST notification/inbox-setting/create - Got 400 Conflict, InboxSettingId property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/inbox-setting/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationInboxSettingId must be defined, can not be undefined');
            });
    });

    test('/REST:POST notification/inbox-setting/create - Got 400 Conflict, InboxSettingAccountId property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/inbox-setting/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                accountId: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationInboxSettingAccountId must be defined, can not be undefined');
            });
    });

    test('/REST:POST notification/inbox-setting/create - Got 400 Conflict, InboxSettingSort property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/inbox-setting/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                sort: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationInboxSettingSort must be defined, can not be undefined');
            });
    });

    test('/REST:POST notification/inbox-setting/create - Got 400 Conflict, InboxSettingId is not allowed, must be a length of 36', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/inbox-setting/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: '*************************************',
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationInboxSettingId is not allowed, must be a length of 36');
            });
    });

    test('/REST:POST notification/inbox-setting/create - Got 400 Conflict, InboxSettingAccountId is not allowed, must be a length of 36', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/inbox-setting/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                accountId: '*************************************',
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationInboxSettingAccountId is not allowed, must be a length of 36');
            });
    });

    test('/REST:POST notification/inbox-setting/create - Got 400 Conflict, InboxSettingSort has to be a integer value', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/inbox-setting/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                sort: 100.10,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationInboxSettingSort has to be a integer value');
            });
    });

    test('/REST:POST notification/inbox-setting/create - Got 409 Conflict, item already exist in database', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/inbox-setting/create')
            .set('Accept', 'application/json')
            .send(mockData[0])
            .expect(409);
    });

    test('/REST:POST notification/inbox-settings/paginate', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/inbox-settings/paginate')
            .set('Accept', 'application/json')
            .send({
                query:
                {
                    offset: 0,
                    limit: 5,
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body).toEqual({
                    total: inboxSettingSeeder.collectionResponse.length,
                    count: inboxSettingSeeder.collectionResponse.length,
                    rows : inboxSettingSeeder.collectionResponse.map(item => expect.objectContaining(_.omit(item, ['createdAt', 'updatedAt', 'deletedAt']))).slice(0, 5),
                });
            });
    });

    test('/REST:POST notification/inbox-settings/get', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/inbox-settings/get')
            .set('Accept', 'application/json')
            .expect(200)
            .then(res =>
            {
                expect(res.body).toEqual(
                    inboxSettingSeeder.collectionResponse.map(item => expect.objectContaining(_.omit(item, ['createdAt', 'updatedAt', 'deletedAt']))),
                );
            });
    });

    test('/REST:POST notification/inbox-setting/find - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/inbox-setting/find')
            .set('Accept', 'application/json')
            .send({
                query:
                {
                    where:
                    {
                        id: 'ba54f852-b68b-5649-af2c-d16f4d812354',
                    },
                },
            })
            .expect(404);
    });

    test('/REST:POST notification/inbox-setting/create', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/inbox-setting/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
            })
            .expect(201);
    });

    test('/REST:POST notification/inbox-setting/find', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/inbox-setting/find')
            .set('Accept', 'application/json')
            .send({
                query:
                {
                    where:
                    {
                        id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
                    },
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body).toHaveProperty('id', '5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/REST:POST notification/inbox-setting/find/{id} - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/inbox-setting/find/d9cd1100-d79a-5672-a5ef-e3ee11643f12')
            .set('Accept', 'application/json')
            .expect(404);
    });

    test('/REST:POST notification/inbox-setting/find/{id}', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/inbox-setting/find/5b19d6ac-4081-573b-96b3-56964d5326a8')
            .set('Accept', 'application/json')
            .expect(200)
            .then(res =>
            {
                expect(res.body).toHaveProperty('id', '5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/REST:PUT notification/inbox-setting/update - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .put('/notification/inbox-setting/update')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: '8838b1d1-d8d4-58f7-a760-ebb380da9a11',
            })
            .expect(404);
    });

    test('/REST:PUT notification/inbox-setting/update', () =>
    {
        return request(app.getHttpServer())
            .put('/notification/inbox-setting/update')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body).toHaveProperty('id', '5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/REST:DELETE notification/inbox-setting/delete/{id} - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .delete('/notification/inbox-setting/delete/e3e844a4-19ed-53b3-a569-7791dccf1973')
            .set('Accept', 'application/json')
            .expect(404);
    });

    test('/REST:DELETE notification/inbox-setting/delete/{id}', () =>
    {
        return request(app.getHttpServer())
            .delete('/notification/inbox-setting/delete/5b19d6ac-4081-573b-96b3-56964d5326a8')
            .set('Accept', 'application/json')
            .expect(200);
    });

    test('/GraphQL notificationCreateInboxSetting - Got 409 Conflict, item already exist in database', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:NotificationCreateInboxSettingInput!)
                    {
                        notificationCreateInboxSetting (payload:$payload)
                        {
                            id
                            accountId
                            sort
                        }
                    }
                `,
                variables:
                {
                    payload: _.omit(mockData[0], ['createdAt','updatedAt','deletedAt']),
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body).toHaveProperty('errors');
                expect(res.body.errors[0].extensions.originalError.statusCode).toBe(409);
                expect(res.body.errors[0].extensions.originalError.message).toContain('already exist in database');
            });
    });

    test('/GraphQL notificationPaginateInboxSettings', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement $constraint:QueryStatement)
                    {
                        notificationPaginateInboxSettings (query:$query constraint:$constraint)
                        {
                            total
                            count
                            rows
                        }
                    }
                `,
                variables:
                {
                    query:
                    {
                        offset: 0,
                        limit: 5,
                    },
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body.data.notificationPaginateInboxSettings).toEqual({
                    total: inboxSettingSeeder.collectionResponse.length,
                    count: inboxSettingSeeder.collectionResponse.length,
                    rows : inboxSettingSeeder.collectionResponse.map(item => expect.objectContaining(_.omit(item, ['createdAt', 'updatedAt', 'deletedAt']))).slice(0, 5),
                });
            });
    });

    test('/GraphQL notificationGetInboxSettings', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement)
                    {
                        notificationGetInboxSettings (query:$query)
                        {
                            id
                            accountId
                            sort
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {},
            })
            .expect(200)
            .then(res =>
            {
                for (const [index, value] of res.body.data.notificationGetInboxSettings.entries())
                {
                    expect(inboxSettingSeeder.collectionResponse[index]).toEqual(expect.objectContaining(_.omit(value, ['createdAt', 'updatedAt', 'deletedAt'])));
                }
            });
    });

    test('/GraphQL notificationCreateInboxSetting', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:NotificationCreateInboxSettingInput!)
                    {
                        notificationCreateInboxSetting (payload:$payload)
                        {
                            id
                            accountId
                            sort
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
            .then(res =>
            {
                expect(res.body.data.notificationCreateInboxSetting).toHaveProperty('id', '5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL notificationFindInboxSetting - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement)
                    {
                        notificationFindInboxSetting (query:$query)
                        {
                            id
                            accountId
                            sort
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables:
                {
                    query:
                    {
                        where:
                        {
                            id: '7ae0ad76-b5bd-5a2f-92e9-82792720c741',
                        },
                    },
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body).toHaveProperty('errors');
                expect(res.body.errors[0].extensions.originalError.statusCode).toBe(404);
                expect(res.body.errors[0].extensions.originalError.message).toContain('not found');
            });
    });

    test('/GraphQL notificationFindInboxSetting', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement)
                    {
                        notificationFindInboxSetting (query:$query)
                        {
                            id
                            accountId
                            sort
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables:
                {
                    query:
                    {
                        where:
                        {
                            id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
                        },
                    },
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body.data.notificationFindInboxSetting.id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL notificationFindInboxSettingById - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($id:ID!)
                    {
                        notificationFindInboxSettingById (id:$id)
                        {
                            id
                            accountId
                            sort
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    id: 'e2003b0d-7ac7-52b4-bd39-e327b67c51de',
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body).toHaveProperty('errors');
                expect(res.body.errors[0].extensions.originalError.statusCode).toBe(404);
                expect(res.body.errors[0].extensions.originalError.message).toContain('not found');
            });
    });

    test('/GraphQL notificationFindInboxSettingById', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($id:ID!)
                    {
                        notificationFindInboxSettingById (id:$id)
                        {
                            id
                            accountId
                            sort
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
            .then(res =>
            {
                expect(res.body.data.notificationFindInboxSettingById.id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL notificationUpdateInboxSettingById - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:NotificationUpdateInboxSettingByIdInput!)
                    {
                        notificationUpdateInboxSettingById (payload:$payload)
                        {
                            id
                            accountId
                            sort
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    payload: {
                        ...mockData[0],
                        id: 'e6a36075-3cee-5f40-8e4d-9cf5ab5d22fb',
                    },
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body).toHaveProperty('errors');
                expect(res.body.errors[0].extensions.originalError.statusCode).toBe(404);
                expect(res.body.errors[0].extensions.originalError.message).toContain('not found');
            });
    });

    test('/GraphQL notificationUpdateInboxSettingById', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:NotificationUpdateInboxSettingByIdInput!)
                    {
                        notificationUpdateInboxSettingById (payload:$payload)
                        {
                            id
                            accountId
                            sort
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
            .then(res =>
            {
                expect(res.body.data.notificationUpdateInboxSettingById.id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL notificationUpdateInboxSettings', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:NotificationUpdateInboxSettingsInput! $query: QueryStatement)
                    {
                        notificationUpdateInboxSettings (payload:$payload query:$query)
                        {
                            id
                            accountId
                            sort
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
            .then(res =>
            {
                expect(res.body.data.notificationUpdateInboxSettings[0].id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL notificationDeleteInboxSettingById - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($id:ID!)
                    {
                        notificationDeleteInboxSettingById (id:$id)
                        {
                            id
                            accountId
                            sort
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    id: '85fa682f-d09c-5722-9479-488bd4ae8037',
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body).toHaveProperty('errors');
                expect(res.body.errors[0].extensions.originalError.statusCode).toBe(404);
                expect(res.body.errors[0].extensions.originalError.message).toContain('not found');
            });
    });

    test('/GraphQL notificationDeleteInboxSettingById', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($id:ID!)
                    {
                        notificationDeleteInboxSettingById (id:$id)
                        {
                            id
                            accountId
                            sort
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
            .then(res =>
            {
                expect(res.body.data.notificationDeleteInboxSettingById.id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    afterAll(async () =>
    {
        await inboxSettingRepository.delete({
            queryStatement: {
                where: {},
            },
        });
        await app.close();
    });
});
