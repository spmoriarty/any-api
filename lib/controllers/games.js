const { Router } = require('express');
const Game = require('../models/Game');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const matchingGame = await Game.getById(req.params.id);
    res.json(matchingGame);
  })

  .get('/', async (req, res) => {
    const games = await Game.getAll();
    res.json(games);
  });
