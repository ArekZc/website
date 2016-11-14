export interface Behaviourable {
  procced(command: any): Promise<any>;
}

class Behaviour implements Behaviourable {
  procced(command: any): Promise<any> {
    return new Promise(resolve => resolve());
  }
}

export class CommandBus {
  dispatch(command: any) {
    let behaviour = new Behaviour();

    return behaviour.procced(command);
  }
}
