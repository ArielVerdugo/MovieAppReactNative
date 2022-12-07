import { routes } from '@/controllers/routes';

//AGREGAR CONSTRUCTOR

export class MovieController {
  constructor(networkService) {
    this.networkService = networkService;
  }

  getMovies = () => {
    return this.networkService.request({
      method: 'GET',
      url: routes.movies.getAllMovies,
    });
  };
}
