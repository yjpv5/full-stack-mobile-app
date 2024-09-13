const express = require('express');
const app = express();
const News = require('./news/news');
const newsRouter = require('./routers/news');

app.use(express.static('public'));
app.use(express.static('data/uploads'));
app.use('/api', newsRouter) //=>> localhost:3000/api/create





app.listen(5000, () => {
    console.log('listening on port 5000');
})



//***create news and test */

// const news = new News();
// news.create({ title: 'some title', content: 'some contents', category: 'political' })
// const test = async () => {
//     const data = await news.getByCategory('tech');
//     console.log(data);
// }
// test()