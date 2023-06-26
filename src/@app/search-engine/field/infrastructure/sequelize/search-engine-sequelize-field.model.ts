/* eslint-disable indent */
/* eslint-disable key-spacing */
import { Column, Model, Table, ForeignKey, BelongsTo, HasMany, BelongsToMany, HasOne } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { SearchEngineCollectionModel } from '@app/search-engine/collection';

@Table({
    modelName: 'SearchEngineField',
    freezeTableName: true,
    timestamps: false,
})
export class SearchEngineFieldModel extends Model<SearchEngineFieldModel>
{
    @Column({
        field: 'id',
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
    })
    id: string;

    @ForeignKey(() => SearchEngineCollectionModel)
    @Column({
        field: 'collectionId',
        allowNull: false,
        type: DataTypes.UUID,
    })
    collectionId: string;

    @BelongsTo(() => SearchEngineCollectionModel, {
        constraints: false,
        foreignKey: 'collectionId',
    })
    collection: SearchEngineCollectionModel;

    @Column({
        field: 'name',
        allowNull: false,
        type: DataTypes.STRING(255),
    })
    name: string;

    @Column({
        field: 'type',
        allowNull: false,
        type: DataTypes.STRING(20),
    })
    type: string;

    @Column({
        field: 'isNullable',
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    })
    isNullable: boolean;

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