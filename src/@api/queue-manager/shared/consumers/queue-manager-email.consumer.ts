import { Utils } from '@aurora-ts/core';
import { Processor, Process } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
import { QueueStorage } from 'src/app.queues';

@Processor(QueueStorage.COMMON_MAIL)
export class QueueManagerEmailConsumer
{
    @Process()
    async transcode(job: Job<unknown>): Promise<unknown>
    {
        try
        {
            console.log(job.data);
            await Utils.wait(5000);
            Logger.log('Email sent successfully');
        }
        catch (error)
        {
            Logger.error('Error to send email');
        }

        return {
            status: 'success',
            text  : 'Email sent successfully',
        };
    }
}