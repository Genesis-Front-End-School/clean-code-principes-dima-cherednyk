import { useAppDispatch, useAppSelector } from './hooks';

describe('hooks ', () => {
  it('all hooks were defined', () => {
    expect(useAppDispatch).toBeDefined();
    expect(useAppSelector).toBeDefined();
  });
});
