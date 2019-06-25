import { MyPipePipe } from './my-pipe.pipe';

describe('MyPipePipe', () => {
  let pipe;

  beforeEach(() => {
    pipe = new MyPipePipe
  });
  
  it('create an instance', () => {
    const pipe = new MyPipePipe();
    expect(pipe).toBeTruthy();
  });

  it('should return null when pass invalid date string ', () => {
    const input = 'ciasteczko';
    const output = null;
    expect(pipe.transform(input)).toEqual(output);
  });

  it(' should return proper date  when pass invalid date string', () => {
    const input = 'Thu Sep 20 2018 14:09:57 GMT+0200';
    const output = '20 września 2018, 14:09:57';
    expect(pipe.transform(input)).toEqual(output);
  })
});

