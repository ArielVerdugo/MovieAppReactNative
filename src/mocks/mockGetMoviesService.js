const breedsListResponse = {
  message: {
    boxer: [],
    cattledog: [],
    dalmatian: [],
    husky: [],
  },
};

export const mockGetMoviesService = {
  ok: true,
  status: 200,
  json: async () => breedsListResponse,
};
