export class SupportConfigResponse {
    constructor(
        public readonly id: string,
        public readonly rowId: number,
        public readonly apiKey: string,
        public readonly listId: string,
        public readonly createdAt: string,
        public readonly updatedAt: string,
        public readonly deletedAt: string,
    ) {}
}
