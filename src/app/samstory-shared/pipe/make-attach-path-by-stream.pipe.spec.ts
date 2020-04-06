import { MakeAttachPathByStreamPipe } from './make-attach-path-by-stream.pipe';

describe('MakeAttachPathByStreamPipe', () => {
  it('create an instance', () => {
    const pipe = new MakeAttachPathByStreamPipe();
    expect(pipe).toBeTruthy();
  });
});
