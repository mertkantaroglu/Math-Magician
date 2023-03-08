import operate from '../../logic/operate';

describe('operate', () => {
  it('should add two numbers', () => {
    expect(operate(2, 3, '+')).toEqual('5');
  });

  it('should subtract two numbers', () => {
    expect(operate(5, 2, '-')).toEqual('3');
  });

  it('should multiply two numbers', () => {
    expect(operate(4, 5, 'x')).toEqual('20');
  });

  it('should divide two numbers', () => {
    expect(operate(10, 2, '÷')).toEqual('5');
  });

  it('should handle division by zero', () => {
    expect(operate(10, 0, '÷')).toEqual("Can't divide by 0.");
  });

  it('should find modulo of two numbers', () => {
    expect(operate(10, 3, '%')).toEqual('1');
  });

  it('should handle modulo when dividing by zero', () => {
    expect(operate(10, 0, '%')).toEqual("Can't find modulo as can't divide by 0.");
  });

  it('should throw an error for an unknown operation', () => {
    expect(() => operate(2, 3, '*')).toThrowError("Unknown operation '*'");
  });
});
