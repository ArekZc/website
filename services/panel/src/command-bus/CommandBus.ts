export function behaviourable() {
    console.log("f(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("f(): called");
    }
}

export default class CommandBus {
    dispatch(command: any): any {
        let Behaviour: FunctionConstructor = command.__behaviour__;

        return (<any>new Behaviour()).handle(command);
    }
}