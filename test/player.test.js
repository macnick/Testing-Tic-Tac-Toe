import Player from '../src/player';

const pl = Player('Nick', 'X');

describe('The player should be complete', () => {
  it('Returns an object', () => {
    expect(typeof pl).toBe('object');
  });

  it('Player has name', () => {
    expect(pl.getName()).toBe('Nick');
  });

  test('Player has a marker', () => {
    expect(pl.getMarker()).toBe('X');
  });

  it('Player starts with zero points', () => {
    expect(pl.updateScore()).toEqual(1);
  });
});
