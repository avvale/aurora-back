/* eslint-disable indent */
import { ApiProperty } from '@nestjs/swagger';

export class QueueManagerCreateJobDto
{
    @ApiProperty({
        type       : String,
        description: 'id [input here api field description]',
    })
    id: string;

    @ApiProperty({
        type       : Number,
        description: 'priority [input here api field description]',
    })
    priority: number;

    @ApiProperty({
        type       : Number,
        description: 'delay [input here api field description]',
    })
    delay: number;

    @ApiProperty({
        type       : Number,
        description: 'attempts [input here api field description]',
    })
    attempts?: number;

    @ApiProperty({
        type       : String,
        description: 'repeat [input here api field description]',
    })
    repeat: string;

    @ApiProperty({
        type       : Number,
        description: 'backoff [input here api field description]',
    })
    backoff?: number;

    @ApiProperty({
        type       : Boolean,
        description: 'lifo [input here api field description]',
    })
    lifo: boolean;

    @ApiProperty({
        type       : Number,
        description: 'timeout [input here api field description]',
    })
    timeout: number;

    @ApiProperty({
        type       : Number,
        description: 'jobId [input here api field description]',
    })
    jobId: number;

    @ApiProperty({
        type       : Boolean,
        description: 'removeOnComplete [input here api field description]',
    })
    removeOnComplete: boolean;

    @ApiProperty({
        type       : Boolean,
        description: 'removeOnFail [input here api field description]',
    })
    removeOnFail: boolean;

    @ApiProperty({
        type       : Number,
        description: 'stackTraceLimit [input here api field description]',
    })
    stackTraceLimit: number;

}