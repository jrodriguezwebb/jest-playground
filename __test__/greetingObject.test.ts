import { grettingObject } from '../src/utils/greetingObject';

test('Expects result of the summarized numbers', () => {
    const helloMessage = grettingObject.sayHello();
    expect(helloMessage).toMatchSnapshot();
})