import React from 'react';
import { useQuery } from 'react-query';
import { Typography } from '@components/DataDisplay/Typography';
import { Container } from '@components/Layout/Container';
import { ErrorMessage } from '@components/Feedback/ErrorMessage';
import { getSeries } from '@services/series';
import { Carousel } from './Carousel';
import { Skeleton } from './Skeleton';
import { LatestMoviesBox } from './styled';

export const LatestMovies = () => {
  const { data, isLoading, error, refetch } = useQuery(
    [
      'latestMovies_home',
      { limit_items: 10, type: 'movie', sort_createdAt: 'desc' },
    ],
    async ({ queryKey }) => getSeries(queryKey[1])
  );

  if (error)
    return (
      <ErrorMessage margin='80px 0 0 0' onClickRetry={refetch}>
        {error}
      </ErrorMessage>
    );

  if (isLoading) return <Skeleton />;

  return (
    <LatestMoviesBox>
      <Container>
        <Typography as='h4' white margin='0 0 32px 0'>
          Ultimas peliculas
        </Typography>
        <Carousel data={data.series} />
      </Container>
    </LatestMoviesBox>
  );
};
