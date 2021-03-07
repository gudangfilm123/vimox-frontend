import React from 'react';
import { useQuery } from 'react-query';
import { getSeries } from '@services/series';
import { Provider } from './Provider';
import { CoverImage } from './CoverImage';
import { Content } from './Content';
import { NavSlider } from './NavSlider';
import { Skeleton } from './Skeleton';
import { CarouselBox } from './styled';

export const CarouselLatestSeries = () => {
  const { isLoading, data, error } = useQuery(
    ['latestSeries_home', { sort_createdAt: 'desc', limit_items: 10, type: 'tv' }],
    async ({ queryKey }) => getSeries(queryKey[1])
  );

  if (error) return <p>{error}</p>;

  if (isLoading) return <Skeleton />;

  return (
    <Provider data={data.series}>
      <CarouselBox>
        <CoverImage />
        <Content />
        <NavSlider />
      </CarouselBox>
    </Provider>
  );
};