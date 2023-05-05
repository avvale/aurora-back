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
            Logger.log(job.data);
            await Utils.wait(5000);
            throw new Error('Error to send email');
            Logger.log('Email sent successfully');

            return {
                status: 'success',
                text  : 'Email sent successfully',
            };
        }
        catch (error)
        {
            Logger.error('Error to send email');
            throw new Error('Error to send emai2');
            return {
                status: 'error',
                text  : 'Error to send email sent successfully',
            };
        }
    }
}