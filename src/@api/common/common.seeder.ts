// ignored file
/**
 * @aurora-generated
 * @source cliter/common
 */
import {
  boundedContexts,
  countries,
  langs,
  permissions,
} from '@app/common/common.seed';
import { CommonCreateCountriesCommand } from '@app/common/country';
import { CommonCreateLangsCommand } from '@app/common/lang';
import { IamCreateBoundedContextsCommand } from '@app/iam/bounded-context';
import { IamCreatePermissionsCommand } from '@app/iam/permission';
import { ICommandBus } from '@aurorajs.dev/core';
import { Injectable, OnApplicationBootstrap } from '@nestjs/common';

@Injectable()
export class CommonSeeder implements OnApplicationBootstrap {
  constructor(private readonly commandBus: ICommandBus) {}

  async onApplicationBootstrap(): Promise<void> {
    await this.commandBus.dispatch(
      new IamCreateBoundedContextsCommand(boundedContexts, {
        timezone: process.env.TZ,
        repositoryOptions: {
          updateOnDuplicate: ['name', 'root', 'sort', 'isActive'],
          conflictAttributes: ['id'],
        },
      }),
    );

    void this.commandBus.dispatch(
      new IamCreatePermissionsCommand(permissions, {
        timezone: process.env.TZ,
        repositoryOptions: {
          updateOnDuplicate: ['name', 'boundedContextId'],
          conflictAttributes: ['id'],
        },
      }),
    );

    void this.commandBus.dispatch(
      new CommonCreateLangsCommand(langs, {
        timezone: process.env.TZ,
        repositoryOptions: {
          updateOnDuplicate: [
            'name',
            'image',
            'iso6392',
            'iso6393',
            'ietf',
            'customCode',
            'dir',
            'sort',
            'isActive',
          ],
          conflictAttributes: ['id'],
        },
      }),
    );

    void this.commandBus.dispatch(
      new CommonCreateCountriesCommand(countries, {
        timezone: process.env.TZ,
        repositoryOptions: {
          updateOnDuplicate: [
            'iso3166Alpha2',
            'iso3166Alpha3',
            'iso3166Numeric',
            'customCode',
            'prefix',
            'image',
            'sor',
            'administrativeAreas',
            'latitude',
            'longitude',
            'zoom',
            'mapType',
            'availableLangs',
          ],
          conflictAttributes: ['id'],
        },
      }),
    );
  }
}
