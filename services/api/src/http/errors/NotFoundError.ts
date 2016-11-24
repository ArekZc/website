export class NotFoundError extends Error implements HttpError {
    public status: number = 404;

    constructor(message: string) {
        super(message);
    }
}
