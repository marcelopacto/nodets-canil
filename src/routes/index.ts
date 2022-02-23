import {Router} from 'express';
import * as PageController from '../controllers/pageController'
import * as SearchController from '../controllers/searchController'
const router = Router();

router.get('/', PageController.home);
router.get('/caes', PageController.caes);
router.get('/gatos', PageController.gatos);
router.get('/peixes', PageController.peixes);

router.get('/busca', SearchController.busca);


export default router;