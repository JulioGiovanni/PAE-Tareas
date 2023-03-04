import express from 'express';
import {
  homePage,
  searchNews,
} from '../controllers/news.controller.js';

const router = express.Router();

router.get('/', homePage);
router.get('/search', searchNews);

export default router;
