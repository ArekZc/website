interface CommandHandler {
    handle(command: any): any;
}

function Handle(handler: CommandHandler) {
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("g(): called");
    }
}

export default class CommandBus {
    private commands: any = {};

    register(command: any): void {

    }

    dispatch(command: any): any {

    }
}