import React from 'react';
import { Svg } from '../styled';
import type { SvgProps } from '../types';

export const Bookmark = (props: SvgProps) => (
  <Svg
    width='1em'
    height='1em'
    viewBox='0 0 1024 1024'
    fill='currentColor'
    {...props}
  >
    <path d='M248 913.6a40.8 40.8 0 0 1-18.72-4.48A40.32 40.32 0 0 1 208 873.6V216A120 120 0 0 1 328 96h384a120 120 0 0 1 120 120v656a40 40 0 0 1-64 32l-1.44-1.12-230.08-208a23.68 23.68 0 0 0-32 0L273.12 904.64l-2.56 2.08a39.84 39.84 0 0 1-22.56 6.88z m80-769.6a72.16 72.16 0 0 0-72 72v640l215.68-196.64a71.84 71.84 0 0 1 96 0L784 853.6V216A72.16 72.16 0 0 0 712 144zM376 304a40 40 0 1 1 40-40 40 40 0 0 1-40 40z m0-48a8 8 0 1 0 8 8 8 8 0 0 0-8-8z'></path>
  </Svg>
);