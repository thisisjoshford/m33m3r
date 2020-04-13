const Meme = require('../lib/models/Meme');
const chance = require('chance').Chance();


module.exports = async({ memesToCreate = 10 } = {}) => {
  await Meme.create([...Array(memesToCreate)]
    .map(() => ({
      top: 'I don\'t always code...',
      image: chance.url(),
      bottom: 'but when I do... I have a dog named spot'
    })));
};
