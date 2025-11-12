import { Str } from '@aurorajs.dev/core';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class ClickUpService {
    apiUrl = 'https://api.clickup.com';
    apiCreateTask = '/api/v2/list/:listId/task';
    apiGetTask = '/api/v2/task/:taskId';
    apiCreateTaskComment = '/api/v2/task/:taskId/comment';
    apiGetFolders = '/api/v2/space/:spaceId/folder';

    constructor(private readonly httpService: HttpService) {}

    getFolders(
        spaceId: string,
        options: { authorization: string },
    ): Observable<any> {
        return this.httpService.get(
            `${this.apiUrl}${Str.replaceParams(this.apiGetFolders, { spaceId })}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: options.authorization,
                },
            },
        );
    }

    createTask(
        listId: string,
        task: {
            name: string;
            description?: string;
            status?: string;
            priority?: number;
        },
        options: { authorization: string },
    ): Observable<any> {
        return this.httpService.post(
            `${this.apiUrl}${Str.replaceParams(this.apiCreateTask, { listId })}`,
            {
                ...task,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: options.authorization,
                },
            },
        );
    }
}
