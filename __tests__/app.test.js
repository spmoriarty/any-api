const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('games routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/games should return a list of games', async () => {
    const res = await request(app).get('/games');
    const expected = [{
      id: 1,
      name: 'chess',
      type: 'strategy',
      players: 2,
    },
    {
      id: 2,
      name: 'Backgammon',
      type: 'strategy',
      players: 2,
    }
    ];
    console.log(res.body);
    expect(res.body[3]).toEqual({
      id: '3',
      name: 'Go',
      type: 'strategy',
      players: 2,
    });
  });
  it('/games/:id should return game detail', async () => {
    const res = await request(app).get('/games/1');
    const XGAME = {
      id: 4,
      name: 'Catan',
      type: 'resource',
      players: 4,
    };
    expect(res.body).toEqual(XGAME);
  });
  afterAll(() => {
    pool.end();
  });
});
