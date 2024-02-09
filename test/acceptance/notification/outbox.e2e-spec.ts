/* eslint-disable max-len */
/* eslint-disable quotes */
/* eslint-disable key-spacing */
import { AuthorizationPermissionsGuard } from '@api/iam/shared/guards/authorization-permissions.guard';
import { NotificationModule } from '@api/notification/notification.module';
import { AuthenticationJwtGuard } from '@api/o-auth/shared/guards/authentication-jwt.guard';
import { NotificationIOutboxRepository, notificationMockOutboxData, NotificationMockOutboxSeeder } from '@app/notification/outbox';
import { GraphQLConfigModule } from '@aurora/graphql/graphql-config.module';
import { INestApplication } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Test, TestingModule } from '@nestjs/testing';
import * as _ from 'lodash';
import * as request from 'supertest';

// disable import foreign modules, can be micro-services
const importForeignModules = [];

describe('outbox', () =>
{
    let app: INestApplication;
    let outboxRepository: NotificationIOutboxRepository;
    let outboxSeeder: NotificationMockOutboxSeeder;

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
                NotificationMockOutboxSeeder,
            ],
        })
            .overrideGuard(AuthenticationJwtGuard)
            .useValue({ canActivate: () => true })
            .overrideGuard(AuthorizationPermissionsGuard)
            .useValue({ canActivate: () => true })
            .compile();

        mockData = notificationMockOutboxData;
        app = module.createNestApplication();
        outboxRepository = module.get<NotificationIOutboxRepository>(NotificationIOutboxRepository);
        outboxSeeder = module.get<NotificationMockOutboxSeeder>(NotificationMockOutboxSeeder);

        // seed mock data in memory database
        await outboxRepository.insert(outboxSeeder.collectionSource);

        await app.init();
    });

    test('/REST:POST notification/outbox/create - Got 400 Conflict, OutboxId property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/outbox/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationOutboxId must be defined, can not be null');
            });
    });

    test('/REST:POST notification/outbox/create - Got 400 Conflict, OutboxNotificationId property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/outbox/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                notificationId: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationOutboxNotificationId must be defined, can not be null');
            });
    });

    test('/REST:POST notification/outbox/create - Got 400 Conflict, OutboxSort property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/outbox/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                sort: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationOutboxSort must be defined, can not be null');
            });
    });

    test('/REST:POST notification/outbox/create - Got 400 Conflict, OutboxId property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/outbox/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationOutboxId must be defined, can not be undefined');
            });
    });

    test('/REST:POST notification/outbox/create - Got 400 Conflict, OutboxNotificationId property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/outbox/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                notificationId: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationOutboxNotificationId must be defined, can not be undefined');
            });
    });

    test('/REST:POST notification/outbox/create - Got 400 Conflict, OutboxSort property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/outbox/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                sort: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationOutboxSort must be defined, can not be undefined');
            });
    });

    test('/REST:POST notification/outbox/create - Got 400 Conflict, OutboxId is not allowed, must be a length of 36', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/outbox/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: '*************************************',
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationOutboxId is not allowed, must be a length of 36');
            });
    });

    test('/REST:POST notification/outbox/create - Got 400 Conflict, OutboxNotificationId is not allowed, must be a length of 36', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/outbox/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                notificationId: '*************************************',
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationOutboxNotificationId is not allowed, must be a length of 36');
            });
    });

    test('/REST:POST notification/outbox/create - Got 400 Conflict, OutboxSort has to be a integer value', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/outbox/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                sort: 100.10,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationOutboxSort has to be a integer value');
            });
    });

    test('/REST:POST notification/outbox/create - Got 409 Conflict, item already exist in database', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/outbox/create')
            .set('Accept', 'application/json')
            .send(mockData[0])
            .expect(409);
    });

    test('/REST:POST notification/outboxes/paginate', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/outboxes/paginate')
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
                    total: outboxSeeder.collectionResponse.length,
                    count: outboxSeeder.collectionResponse.length,
                    rows : outboxSeeder.collectionResponse.map(item => expect.objectContaining(_.omit(item, ['createdAt', 'updatedAt', 'deletedAt']))).slice(0, 5),
                });
            });
    });

    test('/REST:POST notification/outboxes/get', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/outboxes/get')
            .set('Accept', 'application/json')
            .expect(200)
            .then(res =>
            {
                expect(res.body).toEqual(
                    outboxSeeder.collectionResponse.map(item => expect.objectContaining(_.omit(item, ['createdAt', 'updatedAt', 'deletedAt']))),
                );
            });
    });

    test('/REST:POST notification/outbox/find - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/outbox/find')
            .set('Accept', 'application/json')
            .send({
                query:
                {
                    where:
                    {
                        id: '787127c0-e241-5667-93ab-83be8b397b98',
                    },
                },
            })
            .expect(404);
    });

    test('/REST:POST notification/outbox/create', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/outbox/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
            })
            .expect(201);
    });

    test('/REST:POST notification/outbox/find', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/outbox/find')
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

    test('/REST:POST notification/outbox/find/{id} - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/outbox/find/51dadbdc-eea2-58a2-a1b5-b259b83dcc96')
            .set('Accept', 'application/json')
            .expect(404);
    });

    test('/REST:POST notification/outbox/find/{id}', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/outbox/find/5b19d6ac-4081-573b-96b3-56964d5326a8')
            .set('Accept', 'application/json')
            .expect(200)
            .then(res =>
            {
                expect(res.body).toHaveProperty('id', '5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/REST:PUT notification/outbox/update - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .put('/notification/outbox/update')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: '4c742c14-1087-53f2-8c44-ea32947cabbd',
            })
            .expect(404);
    });

    test('/REST:PUT notification/outbox/update', () =>
    {
        return request(app.getHttpServer())
            .put('/notification/outbox/update')
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

    test('/REST:DELETE notification/outbox/delete/{id} - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .delete('/notification/outbox/delete/4961bb87-719a-5503-b584-250ed26f7af4')
            .set('Accept', 'application/json')
            .expect(404);
    });

    test('/REST:DELETE notification/outbox/delete/{id}', () =>
    {
        return request(app.getHttpServer())
            .delete('/notification/outbox/delete/5b19d6ac-4081-573b-96b3-56964d5326a8')
            .set('Accept', 'application/json')
            .expect(200);
    });

    test('/GraphQL notificationCreateOutbox - Got 409 Conflict, item already exist in database', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:NotificationCreateOutboxInput!)
                    {
                        notificationCreateOutbox (payload:$payload)
                        {
                            id
                            notificationId
                            sort
                            accountRecipientIds
                            tenantRecipientIds
                            scopeRecipients
                            meta
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

    test('/GraphQL notificationPaginateOutboxes', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement $constraint:QueryStatement)
                    {
                        notificationPaginateOutboxes (query:$query constraint:$constraint)
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
                expect(res.body.data.notificationPaginateOutboxes).toEqual({
                    total: outboxSeeder.collectionResponse.length,
                    count: outboxSeeder.collectionResponse.length,
                    rows : outboxSeeder.collectionResponse.map(item => expect.objectContaining(_.omit(item, ['createdAt', 'updatedAt', 'deletedAt']))).slice(0, 5),
                });
            });
    });

    test('/GraphQL notificationGetOutboxes', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement)
                    {
                        notificationGetOutboxes (query:$query)
                        {
                            id
                            sort
                            accountRecipientIds
                            tenantRecipientIds
                            scopeRecipients
                            meta
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
                for (const [index, value] of res.body.data.notificationGetOutboxes.entries())
                {
                    expect(outboxSeeder.collectionResponse[index]).toEqual(expect.objectContaining(_.omit(value, ['createdAt', 'updatedAt', 'deletedAt'])));
                }
            });
    });

    test('/GraphQL notificationCreateOutbox', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:NotificationCreateOutboxInput!)
                    {
                        notificationCreateOutbox (payload:$payload)
                        {
                            id
                            notificationId
                            sort
                            accountRecipientIds
                            tenantRecipientIds
                            scopeRecipients
                            meta
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
                expect(res.body.data.notificationCreateOutbox).toHaveProperty('id', '5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL notificationFindOutbox - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement)
                    {
                        notificationFindOutbox (query:$query)
                        {
                            id
                            sort
                            accountRecipientIds
                            tenantRecipientIds
                            scopeRecipients
                            meta
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
                            id: '1717e854-72cb-5f22-86d5-40eb66bbffe8',
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

    test('/GraphQL notificationFindOutbox', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement)
                    {
                        notificationFindOutbox (query:$query)
                        {
                            id
                            sort
                            accountRecipientIds
                            tenantRecipientIds
                            scopeRecipients
                            meta
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
                expect(res.body.data.notificationFindOutbox.id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL notificationFindOutboxById - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($id:ID!)
                    {
                        notificationFindOutboxById (id:$id)
                        {
                            id
                            sort
                            accountRecipientIds
                            tenantRecipientIds
                            scopeRecipients
                            meta
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    id: 'a4998aab-158f-5168-bb1b-647c9301388d',
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

    test('/GraphQL notificationFindOutboxById', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($id:ID!)
                    {
                        notificationFindOutboxById (id:$id)
                        {
                            id
                            sort
                            accountRecipientIds
                            tenantRecipientIds
                            scopeRecipients
                            meta
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
                expect(res.body.data.notificationFindOutboxById.id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL notificationUpdateOutboxById - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:NotificationUpdateOutboxByIdInput!)
                    {
                        notificationUpdateOutboxById (payload:$payload)
                        {
                            id
                            sort
                            accountRecipientIds
                            tenantRecipientIds
                            scopeRecipients
                            meta
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    payload: {
                        ...mockData[0],
                        id: '03fad349-300a-5d4b-9862-a8bd67d0c6f9',
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

    test('/GraphQL notificationUpdateOutboxById', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:NotificationUpdateOutboxByIdInput!)
                    {
                        notificationUpdateOutboxById (payload:$payload)
                        {
                            id
                            sort
                            accountRecipientIds
                            tenantRecipientIds
                            scopeRecipients
                            meta
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
                expect(res.body.data.notificationUpdateOutboxById.id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL notificationUpdateOutboxes', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:NotificationUpdateOutboxesInput! $query: QueryStatement)
                    {
                        notificationUpdateOutboxes (payload:$payload query:$query)
                        {
                            id
                            sort
                            accountRecipientIds
                            tenantRecipientIds
                            scopeRecipients
                            meta
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
                expect(res.body.data.notificationUpdateOutboxes[0].id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL notificationDeleteOutboxById - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($id:ID!)
                    {
                        notificationDeleteOutboxById (id:$id)
                        {
                            id
                            sort
                            accountRecipientIds
                            tenantRecipientIds
                            scopeRecipients
                            meta
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    id: '4a4eaedd-782b-5011-bbc1-6304f108306f',
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

    test('/GraphQL notificationDeleteOutboxById', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($id:ID!)
                    {
                        notificationDeleteOutboxById (id:$id)
                        {
                            id
                            sort
                            accountRecipientIds
                            tenantRecipientIds
                            scopeRecipients
                            meta
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
                expect(res.body.data.notificationDeleteOutboxById.id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    afterAll(async () =>
    {
        await outboxRepository.delete({
            queryStatement: {
                where: {},
            },
        });
        await app.close();
    });
});
