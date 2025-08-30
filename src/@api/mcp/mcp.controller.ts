import { All, Controller, Logger, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { McpNestGraphQLServer } from './mcp.server';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import { isInitializeRequest } from '@modelcontextprotocol/sdk/types.js';
import { mcpAls } from './mcp.context';
import { uuid } from '@aurorajs.dev/core';

@Controller('mcp')
export class McpController
{
    private transports = new Map<string, StreamableHTTPServerTransport>();
    private readonly logger = new Logger(McpController.name);

    constructor(
        private readonly mcp: McpNestGraphQLServer,
    ) {}

    @All()
    async handle(@Req() req: Request, @Res() res: Response): Promise<void>
    {
        const sessionId = req.header('mcp-session-id') ?? undefined;

        const run = (fn: () => Promise<void>) => mcpAls.run({ sessionId }, fn);

        let transport = sessionId ? this.transports.get(sessionId) : undefined;

        if (!transport)
        {
            if (!isInitializeRequest(req.body))
            {
                const id = (req.body && typeof req.body === 'object' && 'id' in req.body) ? (req.body).id : null;
                this.logger.warn(`Request without valid MCP session. Method: ${(req.body && (req.body).method) || 'unknown'} (GraphQL MCP).`);
                res.status(200).json({
                    jsonrpc: '2.0',
                    id,
                    error  : { code: -32000, message: 'Session not initialized or expired. Please call initialize.' },
                });
                return;
            }

            transport = new StreamableHTTPServerTransport({
                sessionIdGenerator  : () => uuid(),
                onsessioninitialized: (sid: string) =>
                {
                    if (transport) this.transports.set(sid, transport);
                },
                onsessionclosed: (sid: string) =>
                {
                    this.transports.delete(sid);
                },
            });

            transport.onclose = () =>
            {
                if (transport?.sessionId)
                {
                    this.logger.log(`MCP (GraphQL) session closed: ${transport.sessionId}`);
                    this.transports.delete(transport.sessionId);
                }
            };

            await this.mcp.server.connect(transport);
        }

        try
        {
            await run(() => transport.handleRequest(req, res, req.body));
        }
        catch (e)
        {
            const id = (req.body && typeof req.body === 'object' && 'id' in req.body) ? (req.body).id : null;
            const message = e instanceof Error ? e.message : String(e);
            this.logger.error(`Error handling MCP (GraphQL) request: ${message}`);
            if (!res.headersSent)
            {
                res.status(200).json({ jsonrpc: '2.0', id, error: { code: -32000, message }});
            }
        }
    }
}

