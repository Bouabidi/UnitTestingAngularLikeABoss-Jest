import {MessageService} from './message.service';

describe('MessageService', () => {

  it('should have no messages to start', () => {
    const service = new MessageService();
    expect(service.messages.length).toBe(0);
  });

  it('should add a new message to the list when add is called', () => {
    const service = new MessageService();

    const message = 'new Message';
    service.add('new Message');

    expect(service.messages[0]).toBe(message);
    expect(service.messages.length).toBe(1);
  });
});
