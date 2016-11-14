import { CommandBus } from './../../../../src/common/command-bus/CommandBus';

describe('Unit: CommandBus class', () => {
  let commandBus: CommandBus;

  beforeEach(() => {
    commandBus = new CommandBus();
  });

  it('should be defined', () => {
    expect(commandBus).toBeDefined();
  });

  describe('#dispatch()', () => {
    it('should return promise', () => {
      expect(commandBus.dispatch({}) instanceof Promise).toBeTruthy();
    });
  });
});
