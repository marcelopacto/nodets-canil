import {Router} from 'express';
import * as PageController from '../controllers/pageController'
import * as SearchController from '../controllers/searchController'
const router = Router();

router.get('/', PageController.home);
router.get('/', PageController.caes);
router.get('/', PageController.gatos);
router.get('/', PageController.peixes);

router.get('/', SearchController.busca);


export default router;