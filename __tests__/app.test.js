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
      id: ,
      name: ,
      type: ,
      players: ,
    },
  {
      id: ,
      name: ,
      type: ,
      players: ,
  }
];
console.log(res.body);
    expect(res.body[1]).toEqual({
      id: '2',
      name: ,
      type: ,
      players: ,
    });
  });
  it('/games/:id should return game detail', async () =>{
    const res = await request(app).get('/games/1');
    const XGAME = {
      id: ,
      name: ,
      type: ,
      players: ,
    };
    expect(res.body).toEqual(XGAME);
  });
  afterAll(() => {
    pool.end();
  });
});
