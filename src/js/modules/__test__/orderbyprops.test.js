import orderByProps from '../orderbyprops';

test('orderByProps of satisfactory conditions, two parameters', () => {
  const swordsman = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  const sort = ['name', 'level'];

  const answer = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];

  const result = orderByProps(swordsman, sort);

  expect(result).toEqual(answer);
});

test('orderByProps of satisfactory conditions, all parameters', () => {
  const swordsman = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  const sort = ['name', 'level', 'health', 'defence', 'attack'];

  const answer = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'health', value: 10 },
    { key: 'defence', value: 40 },
    { key: 'attack', value: 80 },
  ];

  const result = orderByProps(swordsman, sort);

  expect(result).toEqual(answer);
});

test('orderByProps of no sorting parameters', () => {
  const swordsman = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  const answer = [
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ];

  const result = orderByProps(swordsman);

  expect(result).toEqual(answer);
});

test('orderByProps of no all parameters', () => {
  const sort = ['name', 'level'];

  const result = orderByProps(null, sort);

  expect(result).toEqual([]);
});
