const player = {
  O : 'O',
  X : 'X'
};

const nextPlayer = now => (
  now === player.O ? player.X : player.O
);

export default {
  player,
  nextPlayer
};
