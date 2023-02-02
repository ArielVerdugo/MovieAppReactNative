import { useInfiniteQuery } from '@tanstack/react-query';
import { useCallback } from 'react';
import { MovieController } from '@/controllers/MovieController';
import { networkService } from '@/networking';
import { NAVIGATION } from '@/constants';

export const useMovies = (navigation) => {
  const movieController = new MovieController(networkService);
  var movies;
  const { isLoading, data, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    ['moviesByPage'],
    ({ pageParam = 1 }) => movieController.getByPageMovies(pageParam),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.data.page === lastPage.data.totalPages) {
          return false;
        }
        return lastPage.data.page + 1;
      },
    }
  );

  if (!isLoading) {
    movies = data.pages.map((page) => page.data.results).flat();
  }

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  const goDetails = useCallback(
    (item) => {
      navigation.navigate(NAVIGATION.details, { item: item });
    },
    [navigation]
  );

  return {
    isLoading,
    movies,
    data,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    loadMore,
    goDetails,
  };
};
