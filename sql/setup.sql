-- Use this file to define your SQL tables
DROP table if exists games;
-- The SQL in this file will be executed when you run `npm run setup-db`

CREATE table games (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    type VARCHAR NOT NULL,
    players INT NOT NULL
);

INSERT INTO games (name, type, players) VALUES
('chess', 'strategy', 2),
('Backgammon', 'strategy', 2),
('Go', 'strategy', 2),
('Cribbage', 'card', 4),
('Catan', 'resource', 4),
('Pandemic', 'cooperation' 4),
('Risk', 'war-scenario', 8),
('Trivial Pursuit', 'knowledge', 8),
('Clue', 'myster', 6)