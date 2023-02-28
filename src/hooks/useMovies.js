import { useInfiniteQuery } from '@tanstack/react-query';
import { useCallback, useState, useEffect } from 'react';
import { MovieController } from '@/controllers/MovieController';
import { networkService } from '@/networking';
import { NAVIGATION } from '@/constants';

const movieController = new MovieController(networkService);

export const useMovies = (navigation) => {
  const [movies, setMovies] = useState([]);
  let page;
  const {
    isLoading,
    data,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    refetch,
  } = useInfiniteQuery(
    ['moviesByPage'],
    ({ pageParam = 1 }) => movieController.getByPageMovies(pageParam),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.data.page === lastPage.data.totalPages) {
          return false;
        }
        page = lastPage.data.page;
        return lastPage.data.page + 1;
      },
    }
  );

  useEffect(() => {
    if (!isLoading) {
      setMovies([...movies, ...data.pages[page - 1].data.results]);
    }
  }, [data]);

  const loadMore = useCallback(() => {
    if (hasNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, fetchNextPage]);

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
    refetch,
  };
};
