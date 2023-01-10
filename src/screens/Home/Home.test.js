import { render } from '@testing-library/react-native';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Home } from '@/screens/Home/Home';
import { withProviders } from '@/test-utils';
import { mockGetMoviesService } from '@/mocks/mockGetMoviesService';

const queryClient = new QueryClient();
const QueryClientWrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

jest.mock('@react-navigation/native', () => {
  const navigation = jest.requireActual('@react-navigation/native');
  return { ...navigation };
});

describe('Home', () => {
  it('should match the snapshot', async () => {
    const { toJSON } = await render(
      withProviders(
        <QueryClientWrapper>
          <Home />
        </QueryClientWrapper>,
        { networkService: mockGetMoviesService }
      )
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
