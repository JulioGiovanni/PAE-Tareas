import axios from 'axios';

export function homePage(req, res) {
  return res.render('home', { title: 'Home' });
}

export async function searchNews(req, res) {
  const query = req.query.query || {};
  const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.API_KEY}`;
  const news = await axios.get(url);
  return res.render('news', { news: news.data.articles });
}
