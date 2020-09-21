import {StrengthPipe} from './strength.pipe';

describe('StrengthPipe', () => {

  it('should display weak if strength is 5 ', () => {
    const pipe = new StrengthPipe();

    const result = pipe.transform(5);

    expect(result).toBe('5 (weak)');
  });

  it('should display strong if strength is 15 ', () => {
    const pipe = new StrengthPipe();

    const result = pipe.transform(15);

    expect(result).toBe('15 (strong)');
  });
});
