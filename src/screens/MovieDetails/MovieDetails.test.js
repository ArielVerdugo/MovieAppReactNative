import { render } from '@testing-library/react-native';
import React from 'react';
import { MovieDetails } from '@/screens';
import { withProviders } from '@/test-utils';

describe('MovieDetails', () => {
  it('should match the snapshot', () => {
    const { toJSON } = render(withProviders(<MovieDetails route={{ params: 'some param' }} />));
    expect(toJSON()).toMatchSnapshot();
  });
});
