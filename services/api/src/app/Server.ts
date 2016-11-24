import { NotFoundError } from './../http/errors/NotFoundError';
import { Router } from './../http/Router';
import { UserController } from '../controllers/UserController';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';

export class Server {
    private app: express.Application;
    private router: Router;

    public static bootstrap(port = 3000): Server {
        return new Server(port);
    }

    private constructor(port: number) {
        this.app = express();
        this.router = new Router(this.app);
        this.configure();
        this.app.listen(port);
    }

    private configure() {
        this.app.use(logger('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cookieParser());

        let controller = new UserController();

        this.router.get('/users/:id', UserController, 'detail');

        // catch 404 and forward to error handler
        this.app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
            next(new NotFoundError('Not Found'));
        });

        // error handler
        this.app.use((err: HttpError, req: express.Request, res: express.Response, next: express.NextFunction) => {
            // set locals, only providing error in development
            res.locals.message = err.message;
            res.locals.error = req.app.get('env') === 'development' ? err : {};

            // render the error page
            res.status(err.status || 500);
            res.json(err);
        });
    }
}
