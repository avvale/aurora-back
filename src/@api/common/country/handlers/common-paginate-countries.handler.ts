import { Pagination } from '@api/graphql';
import { CommonPaginateCountriesQuery } from '@app/common/country';
import { CoreAddI18nConstraintService, CoreGetSearchKeyLangService, IQueryBus, Operator, QueryStatement } from '@aurorajs.dev/core';
import { BadRequestException, Injectable } from '@nestjs/common';
import { omit, get, set } from 'lodash';

const findPath = (ob, key) =>
{
    const path = [];
    const keyExists = obj =>
    {
        if (!obj || (typeof obj !== 'object' && !Array.isArray(obj)))
        {
            return false;
        }
        else if (obj.hasOwnProperty(key))
        {
            return true;
        }
        else if (Array.isArray(obj))
        {
            const parentKey = path.length ? path.pop() : '';

            for (let i = 0; i < obj.length; i++)
            {
                path.push(`${parentKey}[${i}]`);
                const result = keyExists(obj[i]);
                if (result)
                {
                    return result;
                }
                path.pop();
            }
        }
        else
        {
            for (const k in obj)
            {
                if ((<any>Object).values(Operator).includes(k))
                {
                    path.push(`['${k}']`);
                }
                else
                {
                    path.push(k);
                }

                const result = keyExists(obj[k]);
                if (result)
                {
                    return result;
                }
                path.pop();
            }
        }
        return false;
    };

    keyExists(ob);

    return path.join('.');
};

const replaceAllObjKeys = <T = any>(obj: T, getNewKey: (key: string) => string): T =>
{

    if (Array.isArray(obj))
    {
        for (let i = 0; i < obj.length; i++)
        {
            replaceAllObjKeys(obj[i], getNewKey);
        }
    }
    else if (typeof obj === 'object')
    {
        for (const key in obj)
        {
            const newKey = getNewKey(key);
            obj[newKey] = obj[key];
            if (key !== newKey)
            {
                delete obj[key];
            }
            replaceAllObjKeys(obj[newKey], getNewKey);
        }
    }

    return obj;
};

@Injectable()
export class CommonPaginateCountriesHandler
{
    i18nColumns: string[] = ['name', 'slug', 'administrativeAreaLevel1', 'administrativeAreaLevel2', 'administrativeAreaLevel3'];
    i18nRelationship: string = 'countryI18n';
    i18nFunctionReplace = (key: string): string =>
    {
        if (this.i18nColumns.includes(key))
        {
            return `$countryI18n.${key}$`;
        }
        return key;
    };

    constructor(
        private readonly queryBus: IQueryBus,
        private readonly coreAddI18nConstraintService: CoreAddI18nConstraintService,
        private readonly coreGetSearchKeyLangService: CoreGetSearchKeyLangService,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
        contentLanguage?: string,
    ): Promise<Pagination>
    {
        if (!contentLanguage) throw new BadRequestException('To paginate a multi-language objects, the content-language header must be defined.');

        constraint = await this.coreAddI18nConstraintService.add(
            constraint,
            this.i18nRelationship,
            contentLanguage,
            {
                searchKeyLang: this.coreGetSearchKeyLangService.get(),
            },
        );

        return await this.queryBus.ask(new CommonPaginateCountriesQuery(
            replaceAllObjKeys(queryStatement, this.i18nFunctionReplace),
            replaceAllObjKeys(constraint, this.i18nFunctionReplace),
            {
                timezone,
            },
        ));
    }
}
