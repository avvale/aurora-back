/* eslint-disable max-len */
/* eslint-disable quotes */
/* eslint-disable key-spacing */
import { TenantPolicy } from '@api/iam/shared';
import { AuthorizationPermissionsGuard } from '@api/iam/shared/guards/authorization-permissions.guard';
import { NotificationModule } from '@api/notification/notification.module';
import { AuthenticationJwtGuard } from '@api/o-auth/shared/guards/authentication-jwt.guard';
import { IamAccountResponse } from '@app/iam/account';
import { NotificationINotificationRepository, notificationMockNotificationData, NotificationMockNotificationSeeder } from '@app/notification/notification';
import { GraphQLConfigModule } from '@aurora/graphql/graphql-config.module';
import { CurrentAccount } from '@aurorajs.dev/core';
import { INestApplication } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Test, TestingModule } from '@nestjs/testing';
import * as _ from 'lodash';
import * as request from 'supertest';

// disable import foreign modules, can be micro-services
const importForeignModules = [];

describe('notification', () =>
{
    let app: INestApplication;
    let notificationRepository: NotificationINotificationRepository;
    let notificationSeeder: NotificationMockNotificationSeeder;

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
                NotificationMockNotificationSeeder,
            ],
        })
            .overrideGuard(AuthenticationJwtGuard)
            .useValue({ canActivate: () => true })
            .overrideGuard(AuthorizationPermissionsGuard)
            .useValue({ canActivate: () => true })
            .compile();

        mockData = notificationMockNotificationData;
        app = module.createNestApplication();
        notificationRepository = module.get<NotificationINotificationRepository>(NotificationINotificationRepository);
        notificationSeeder = module.get<NotificationMockNotificationSeeder>(NotificationMockNotificationSeeder);

        // seed mock data in memory database
        await notificationRepository.insert(notificationSeeder.collectionSource);

        await app.init();
    });

    test('/REST:POST notification/notification/create - Got 400 Conflict, NotificationId property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/notification/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationNotificationId must be defined, can not be null');
            });
    });

    test('/REST:POST notification/notification/create - Got 400 Conflict, NotificationStatus property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/notification/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                status: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationNotificationStatus must be defined, can not be null');
            });
    });

    test('/REST:POST notification/notification/create - Got 400 Conflict, NotificationIsImportant property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/notification/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                isImportant: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationNotificationIsImportant must be defined, can not be null');
            });
    });

    test('/REST:POST notification/notification/create - Got 400 Conflict, NotificationSubject property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/notification/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                subject: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationNotificationSubject must be defined, can not be null');
            });
    });

    test('/REST:POST notification/notification/create - Got 400 Conflict, NotificationBody property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/notification/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                body: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationNotificationBody must be defined, can not be null');
            });
    });

    test('/REST:POST notification/notification/create - Got 400 Conflict, NotificationTotalRecipients property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/notification/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                totalRecipients: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationNotificationTotalRecipients must be defined, can not be null');
            });
    });

    test('/REST:POST notification/notification/create - Got 400 Conflict, NotificationReads property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/notification/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                reads: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationNotificationReads must be defined, can not be null');
            });
    });

    test('/REST:POST notification/notification/create - Got 400 Conflict, NotificationId property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/notification/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationNotificationId must be defined, can not be undefined');
            });
    });

    test('/REST:POST notification/notification/create - Got 400 Conflict, NotificationStatus property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/notification/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                status: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationNotificationStatus must be defined, can not be undefined');
            });
    });

    test('/REST:POST notification/notification/create - Got 400 Conflict, NotificationIsImportant property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/notification/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                isImportant: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationNotificationIsImportant must be defined, can not be undefined');
            });
    });

    test('/REST:POST notification/notification/create - Got 400 Conflict, NotificationSubject property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/notification/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                subject: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationNotificationSubject must be defined, can not be undefined');
            });
    });

    test('/REST:POST notification/notification/create - Got 400 Conflict, NotificationBody property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/notification/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                body: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationNotificationBody must be defined, can not be undefined');
            });
    });

    test('/REST:POST notification/notification/create - Got 400 Conflict, NotificationTotalRecipients property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/notification/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                totalRecipients: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationNotificationTotalRecipients must be defined, can not be undefined');
            });
    });

    test('/REST:POST notification/notification/create - Got 400 Conflict, NotificationReads property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/notification/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                reads: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationNotificationReads must be defined, can not be undefined');
            });
    });

    test('/REST:POST notification/notification/create - Got 400 Conflict, NotificationId is not allowed, must be a length of 36', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/notification/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: '*************************************',
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationNotificationId is not allowed, must be a length of 36');
            });
    });

    test('/REST:POST notification/notification/create - Got 400 Conflict, NotificationSubject is too large, has a maximum length of 255', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/notification/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                subject: '****************************************************************************************************************************************************************************************************************************************************************',
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationNotificationSubject is too large, has a maximum length of 255');
            });
    });

    test('/REST:POST notification/notification/create - Got 400 Conflict, NotificationTotalRecipients has to be a integer value', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/notification/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                totalRecipients: 100.10,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationNotificationTotalRecipients has to be a integer value');
            });
    });
    test('/REST:POST notification/notification/create - Got 400 Conflict, NotificationReads has to be a integer value', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/notification/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                reads: 100.10,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationNotificationReads has to be a integer value');
            });
    });
    test('/REST:POST notification/notification/create - Got 400 Conflict, NotificationTotalRecipients must have a positive sign', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/notification/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                totalRecipients: -1,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('The numerical Value for NotificationNotificationTotalRecipients must have a positive sign, this field does not accept negative values');
            });
    });
    test('/REST:POST notification/notification/create - Got 400 Conflict, NotificationReads must have a positive sign', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/notification/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                reads: -1,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('The numerical Value for NotificationNotificationReads must have a positive sign, this field does not accept negative values');
            });
    });
    test('/REST:POST notification/notification/create - Got 400 Conflict, NotificationIsImportant has to be a boolean value', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/notification/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                isImportant: 'true',
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationNotificationIsImportant has to be a boolean value');
            });
    });
    test('/REST:POST notification/notification/create - Got 400 Conflict, NotificationStatus has to be a enum option of DRAFT, PENDING, SENT', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/notification/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                status: '****',
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationNotificationStatus has to be any of this options: DRAFT, PENDING, SENT');
            });
    });
    test('/REST:POST notification/notification/create - Got 400 Conflict, NotificationSendAt has to be a timestamp value', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/notification/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                sendAt: '****',
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationNotificationSendAt has to be a timestamp value');
            });
    });

    test('/REST:POST notification/notification/create - Got 409 Conflict, item already exist in database', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/notification/create')
            .set('Accept', 'application/json')
            .send(mockData[0])
            .expect(409);
    });

    test('/REST:POST notification/notifications/paginate', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/notifications/paginate')
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
                    total: notificationSeeder.collectionResponse.length,
                    count: notificationSeeder.collectionResponse.length,
                    rows : notificationSeeder.collectionResponse.map(item => expect.objectContaining(_.omit(item, ['createdAt', 'updatedAt', 'deletedAt']))).slice(0, 5),
                });
            });
    });

    test('/REST:POST notification/notifications/get', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/notifications/get')
            .set('Accept', 'application/json')
            .expect(200)
            .then(res =>
            {
                expect(res.body).toEqual(
                    notificationSeeder.collectionResponse.map(item => expect.objectContaining(_.omit(item, ['createdAt', 'updatedAt', 'deletedAt']))),
                );
            });
    });

    test('/REST:POST notification/notification/find - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/notification/find')
            .set('Accept', 'application/json')
            .send({
                query:
                {
                    where:
                    {
                        id: '17500921-b890-58c4-9526-f9bb4a6ee095',
                    },
                },
            })
            .expect(404);
    });

    test('/REST:POST notification/notification/create', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/notification/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
            })
            .expect(201);
    });

    test('/REST:POST notification/notification/find', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/notification/find')
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

    test('/REST:POST notification/notification/find/{id} - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/notification/find/f7c945a3-0dca-5de5-b3b3-a96202d198ea')
            .set('Accept', 'application/json')
            .expect(404);
    });

    test('/REST:POST notification/notification/find/{id}', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/notification/find/5b19d6ac-4081-573b-96b3-56964d5326a8')
            .set('Accept', 'application/json')
            .expect(200)
            .then(res =>
            {
                expect(res.body).toHaveProperty('id', '5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/REST:PUT notification/notification/update - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .put('/notification/notification/update')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: '01b790c2-d2a0-5e3a-970c-2ec35c677a2a',
            })
            .expect(404);
    });

    test('/REST:PUT notification/notification/update', () =>
    {
        return request(app.getHttpServer())
            .put('/notification/notification/update')
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

    test('/REST:DELETE notification/notification/delete/{id} - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .delete('/notification/notification/delete/e2624630-c850-515f-8391-61fbe06bafcf')
            .set('Accept', 'application/json')
            .expect(404);
    });

    test('/REST:DELETE notification/notification/delete/{id}', () =>
    {
        return request(app.getHttpServer())
            .delete('/notification/notification/delete/5b19d6ac-4081-573b-96b3-56964d5326a8')
            .set('Accept', 'application/json')
            .expect(200);
    });

    test('/GraphQL notificationCreateNotification - Got 409 Conflict, item already exist in database', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:NotificationCreateNotificationInput!)
                    {
                        notificationCreateNotification (payload:$payload)
                        {
                            id
                            tenantIds
                            status
                            accountRecipientIds
                            tenantRecipientIds
                            scopeRecipientIds
                            sendAt
                            isImportant
                            subject
                            body
                            attachments
                            totalRecipients
                            reads
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

    test('/GraphQL notificationPaginateNotifications', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement $constraint:QueryStatement)
                    {
                        notificationPaginateNotifications (query:$query constraint:$constraint)
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
                expect(res.body.data.notificationPaginateNotifications).toEqual({
                    total: notificationSeeder.collectionResponse.length,
                    count: notificationSeeder.collectionResponse.length,
                    rows : notificationSeeder.collectionResponse.map(item => expect.objectContaining(_.omit(item, ['createdAt', 'updatedAt', 'deletedAt']))).slice(0, 5),
                });
            });
    });

    test('/GraphQL notificationGetNotifications', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement)
                    {
                        notificationGetNotifications (query:$query)
                        {
                            id
                            tenantIds
                            status
                            accountRecipientIds
                            tenantRecipientIds
                            scopeRecipientIds
                            sendAt
                            isImportant
                            subject
                            body
                            attachments
                            totalRecipients
                            reads
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
                for (const [index, value] of res.body.data.notificationGetNotifications.entries())
                {
                    expect(notificationSeeder.collectionResponse[index]).toEqual(expect.objectContaining(_.omit(value, ['createdAt', 'updatedAt', 'deletedAt'])));
                }
            });
    });

    test('/GraphQL notificationCreateNotification', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:NotificationCreateNotificationInput!)
                    {
                        notificationCreateNotification (payload:$payload)
                        {
                            id
                            tenantIds
                            status
                            accountRecipientIds
                            tenantRecipientIds
                            scopeRecipientIds
                            sendAt
                            isImportant
                            subject
                            body
                            attachments
                            totalRecipients
                            reads
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
                expect(res.body.data.notificationCreateNotification).toHaveProperty('id', '5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL notificationFindNotification - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement)
                    {
                        notificationFindNotification (query:$query)
                        {
                            id
                            tenantIds
                            status
                            accountRecipientIds
                            tenantRecipientIds
                            scopeRecipientIds
                            sendAt
                            isImportant
                            subject
                            body
                            attachments
                            totalRecipients
                            reads
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
                            id: 'd004b91f-95c3-549d-a1bf-4670556659b9',
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

    test('/GraphQL notificationFindNotification', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement)
                    {
                        notificationFindNotification (query:$query)
                        {
                            id
                            tenantIds
                            status
                            accountRecipientIds
                            tenantRecipientIds
                            scopeRecipientIds
                            sendAt
                            isImportant
                            subject
                            body
                            attachments
                            totalRecipients
                            reads
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
                expect(res.body.data.notificationFindNotification.id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL notificationFindNotificationById - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($id:ID!)
                    {
                        notificationFindNotificationById (id:$id)
                        {
                            id
                            tenantIds
                            status
                            accountRecipientIds
                            tenantRecipientIds
                            scopeRecipientIds
                            sendAt
                            isImportant
                            subject
                            body
                            attachments
                            totalRecipients
                            reads
                            meta
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    id: '52d626b2-2f59-536f-ab0b-9d438a37dd68',
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

    test('/GraphQL notificationFindNotificationById', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($id:ID!)
                    {
                        notificationFindNotificationById (id:$id)
                        {
                            id
                            tenantIds
                            status
                            accountRecipientIds
                            tenantRecipientIds
                            scopeRecipientIds
                            sendAt
                            isImportant
                            subject
                            body
                            attachments
                            totalRecipients
                            reads
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
                expect(res.body.data.notificationFindNotificationById.id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL notificationUpdateNotificationById - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:NotificationUpdateNotificationByIdInput!)
                    {
                        notificationUpdateNotificationById (payload:$payload)
                        {
                            id
                            tenantIds
                            status
                            accountRecipientIds
                            tenantRecipientIds
                            scopeRecipientIds
                            sendAt
                            isImportant
                            subject
                            body
                            attachments
                            totalRecipients
                            reads
                            meta
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    payload: {
                        ...mockData[0],
                        id: 'e720c5d9-49c5-5906-9f20-e4b35ab01e1f',
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

    test('/GraphQL notificationUpdateNotificationById', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:NotificationUpdateNotificationByIdInput!)
                    {
                        notificationUpdateNotificationById (payload:$payload)
                        {
                            id
                            tenantIds
                            status
                            accountRecipientIds
                            tenantRecipientIds
                            scopeRecipientIds
                            sendAt
                            isImportant
                            subject
                            body
                            attachments
                            totalRecipients
                            reads
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
                expect(res.body.data.notificationUpdateNotificationById.id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL notificationUpdateNotifications', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:NotificationUpdateNotificationsInput! $query: QueryStatement)
                    {
                        notificationUpdateNotifications (payload:$payload query:$query)
                        {
                            id
                            tenantIds
                            status
                            accountRecipientIds
                            tenantRecipientIds
                            scopeRecipientIds
                            sendAt
                            isImportant
                            subject
                            body
                            attachments
                            totalRecipients
                            reads
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
                expect(res.body.data.notificationUpdateNotifications[0].id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL notificationDeleteNotificationById - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($id:ID!)
                    {
                        notificationDeleteNotificationById (id:$id)
                        {
                            id
                            tenantIds
                            status
                            accountRecipientIds
                            tenantRecipientIds
                            scopeRecipientIds
                            sendAt
                            isImportant
                            subject
                            body
                            attachments
                            totalRecipients
                            reads
                            meta
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    id: 'df43429d-2137-513c-a19c-b86bba238e46',
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

    test('/GraphQL notificationDeleteNotificationById', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($id:ID!)
                    {
                        notificationDeleteNotificationById (id:$id)
                        {
                            id
                            tenantIds
                            status
                            accountRecipientIds
                            tenantRecipientIds
                            scopeRecipientIds
                            sendAt
                            isImportant
                            subject
                            body
                            attachments
                            totalRecipients
                            reads
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
                expect(res.body.data.notificationDeleteNotificationById.id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    afterAll(async () =>
    {
        await notificationRepository.delete({
            queryStatement: {
                where: {},
            },
        });
        await app.close();
    });
});
