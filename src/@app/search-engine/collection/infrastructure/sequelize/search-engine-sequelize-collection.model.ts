/* eslint-disable indent */
/* eslint-disable key-spacing */
import { Column, Model, Table, ForeignKey, BelongsTo, HasMany, BelongsToMany, HasOne } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { SearchEngineFieldModel } from '@app/search-engine/field';

@Table({
    modelName: 'SearchEngineCollection',
    freezeTableName: true,
    timestamps: false,
    indexes: [
		{
			fields: ['name'],
			unique: true,
		},
		{
			fields: ['alias'],
			unique: true,
		},

    ],
})
export class SearchEngineCollectionModel extends Model<SearchEngineCollectionModel>
{
    @Column({
        field: 'id',
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
    })
    id: string;

    @Column({
        field: 'name',
        allowNull: false,
        type: DataTypes.STRING(255),
    })
    name: string;

    @Column({
        field: 'alias',
        allowNull: true,
        type: DataTypes.STRING(255),
    })
    alias: string;

    @Column({
        field: 'status',
        allowNull: false,
        type: DataTypes.ENUM('CONSOLIDATED','INDEXING'),
        defaultValue: 'CONSOLIDATED',
    })
    status: string;

    @Column({
        field: 'documentsNumber',
        allowNull: true,
        type: DataTypes.INTEGER.UNSIGNED,
    })
    documentsNumber: number;

    @Column({
        field: 'defaultSortingField',
        allowNull: true,
        type: DataTypes.STRING(255),
    })
    defaultSortingField: string;

    @Column({
        field: 'numMemoryShards',
        allowNull: true,
        type: DataTypes.SMALLINT.UNSIGNED,
    })
    numMemoryShards: number;

    @Column({
        field: 'timestampCreatedAt',
        allowNull: true,
        type: DataTypes.INTEGER.UNSIGNED,
    })
    timestampCreatedAt: number;

    @Column({
        field: 'isEnableNestedFields',
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    })
    isEnableNestedFields: boolean;


    @HasMany(() => SearchEngineFieldModel, {
        foreignKey: 'collectionId',
        constraints: false,
    })
    fields: SearchEngineFieldModel[];

    @Column({
        field: 'createdAt',
        allowNull: true,
        type: DataTypes.DATE,
    })
    createdAt: string;

    @Column({
        field: 'updatedAt',
        allowNull: true,
        type: DataTypes.DATE,
    })
    updatedAt: string;

    @Column({
        field: 'deletedAt',
        allowNull: true,
        type: DataTypes.DATE,
    })
    deletedAt: string;

}
