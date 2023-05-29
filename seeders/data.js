const userSeed = [
  {
    username: 'username1',
    email: 'email1@example.com',
    friends: [],
    thoughts: []
  },
  {
    username: 'username2',
    email: 'email2@example.com',
    friends: [],
    thoughts: []
  },
  {
    username: 'username3',
    email: 'email3@example.com',
    friends: [],
    thoughts: []
  },
  {
    username: 'username4',
    email: 'email4@example.com',
    friends: [],
    thoughts: []
  },
  {
    username: 'username5',
    email: 'email5@example.com',
    friends: [],
    thoughts: []
  },
  {
    username: 'username6',
    email: 'email6@example.com',
    friends: [],
    thoughts: []
  },
];

const thoughtSeed = [
  {
    thoughtText: 'This is a thought',
    username: 'username1',
    reactions: []
  },
  {
    thoughtText: 'This is another thought',
    username: 'username2',
    reactions: []
  },
  {
    thoughtText: 'This is yet another thought',
    username: 'username3',
    reactions: []
  },
  {
    thoughtText: 'Here is a fourth thought',
    username: 'username4',
    reactions: []
  },
  {
    thoughtText: 'Yet another thought comes to mind',
    username: 'username5',
    reactions: []
  },
  {
    thoughtText: 'Six thoughts in total',
    username: 'username6',
    reactions: []
  },
];

module.exports = {
  thoughtSeed, userSeed
};
