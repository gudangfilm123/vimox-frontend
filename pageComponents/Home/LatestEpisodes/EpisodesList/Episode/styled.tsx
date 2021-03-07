import styled from 'styled-components';

export const EpisodeBox = styled.article`
  display: flex;
  align-items: center;
  position: relative;
  height: 80px;
  padding-left: calc(130px + 12px);
  cursor: pointer;

  > div:last-child {
    width: 100%;
  }

  h6,
  p {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export const ThumbnailBox = styled.div`
  width: 130px;
  height: inherit;
  background-color: ${({ theme }) => theme.colors.gray[300]};
  border-radius: 6px;
  overflow: hidden;
  flex-shrink: 0;
  position: absolute;
  top: 0;
  left: 0;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;