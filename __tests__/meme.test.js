const request = require('supertest');
const app = require('../lib/app');
const { getMeme, getMemes } = require('../db/data-helpers');

describe('meme routes', () => {
  it('creates a meme', () => {

    return request(app)
      .post('/api/v1/memes')
      .send({
        top: 'I don\'t always code...',
        image: 'http://www.memeguy.com/image.jpg',
        bottom: '...but when I do... I have a dog named spot.'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          top: 'I don\'t always code...',
          image: 'http://www.memeguy.com/image.jpg',
          bottom: '...but when I do... I have a dog named spot.',
          __v: 0
        });
      });
  });

  it('gets all the memes', async() => {

    const memes = await getMemes();
    // console.log(memes);

    return request(app)
      .get('/api/v1/memes')
      .then(res => {
        expect(res.body).toEqual(memes);
      });
  });

  it('gets a meme by id', async() => {
    const meme = await getMeme();
    return request(app)
      .get(`/api/v1/memes/${meme._id}`)
      .then(res => {
        expect(res.body).toEqual(meme);
      });
  });
});
