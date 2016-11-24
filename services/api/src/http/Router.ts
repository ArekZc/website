import * as express from 'express';

export class Router {
    private app: express.Application;

    constructor(app: express.Application) {
        this.app = app;
    }

    get(path: string | RegExp | (string | RegExp)[], Controller: FunctionConstructor, methodName: string): void {
        let controller = new Controller();

        this.app.get(path, this.wrapRequestHandler(controller[methodName]));
    }

    post(path: string | RegExp | (string | RegExp)[], Controller: FunctionConstructor, methodName: string): void {
        let controller = new Controller();

        this.app.post(path, this.wrapRequestHandler(controller[methodName]));
    }

    put(path: string | RegExp | (string | RegExp)[], action: express.RequestHandler): void {
        this.app.put(path, this.wrapRequestHandler(action));
    }

    patch(path: string | RegExp | (string | RegExp)[], action: express.RequestHandler): void {
        this.app.patch(path, this.wrapRequestHandler(action));
    }

    delete(path: string | RegExp | (string | RegExp)[], action: express.RequestHandler): void {
        this.app.delete(path, this.wrapRequestHandler(action));
    }

    private wrapRequestHandler(action: Function): express.RequestHandler {
        return (req: express.Request, resp: express.Response, next: express.NextFunction) => {
            resp.json(action(req));
        };
    }
}
