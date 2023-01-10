import { routes } from '@/controllers/routes';

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
