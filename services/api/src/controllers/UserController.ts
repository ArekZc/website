import * as express from 'express';

export class UserController {
    public detail(req: express.Request) {
        return {name: 'Arek'};
    }
}
