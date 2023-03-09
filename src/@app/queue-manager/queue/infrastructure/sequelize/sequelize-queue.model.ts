/* eslint-disable indent */
/* eslint-disable key-spacing */
import { Column, Model, Table, ForeignKey, BelongsTo, HasMany, BelongsToMany, HasOne } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';

@Table({
    modelName: 'QueueManagerQueue',
    freezeTableName: true,
    timestamps: false,
    indexes: [
        {
            fields: ['prefix'],
            unique: true,
        },
        {
            fields: ['name'],
            unique: true,
        },
    ],
})
export class QueueManagerQueueModel extends Model<QueueManagerQueueModel>
{
    @Column({
        field: 'id',
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
    })
    id: string;

    @Column({
        field: 'prefix',
        allowNull: false,
        type: DataTypes.STRING(50),
    })
    prefix: string;

    @Column({
        field: 'name',
        allowNull: false,
        type: DataTypes.STRING(50),
    })
    name: string;

    @Column({
        field: 'waitingJobs',
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 0,
    })
    waitingJobs: number;

    @Column({
        field: 'activeJobs',
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 0,
    })
    activeJobs: number;

    @Column({
        field: 'completedJobs',
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 0,
    })
    completedJobs: number;

    @Column({
        field: 'failedJobs',
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 0,
    })
    failedJobs: number;

    @Column({
        field: 'delayedJobs',
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 0,
    })
    delayedJobs: number;

    @Column({
        field: 'pausedJobs',
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 0,
    })
    pausedJobs: number;

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