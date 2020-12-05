const add = (a,b) => a + b;
const greeting = (name) => `hello, ${name}`;

test('should greet by name', () => {
    const greet = greeting('Pacey');
    expect(greet).toBe('hello, Pacey');
})

test('should add two numbers', () => {
    const result = add(3,4);
    expect(result).toBe(7);
})