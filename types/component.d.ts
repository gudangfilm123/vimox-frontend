import React from 'react';

interface TypesMap {
  props: Record<string, unknown>;
  element: React.ElementType;
}

type Props<
  Element extends React.ElementType
> = React.ComponentPropsWithoutRef<Element>;

type PropsWithRef<
  Element extends React.ElementType
> = React.PropsWithRef<Element>;

// eslint-disable-next-line @typescript-eslint/ban-types
type MergeProps<CustomProps = {}, Props = {}> = Omit<Props, keyof CustomProps> &
  CustomProps;

export type Component<M extends TypesMap> = <Element extends React.ElementType>(
  props:
    | MergeProps<M['props'], Props<M['element']>>
    | ({ as: Element } & MergeProps<M['props'], Props<Element>>)
) => JSX.Element;

export type ComponentWithRef<M extends TypesMap> = <
  Element extends React.ElementType
>(
  props: PropsWithRef<M['element']> | ({ as: Element } & PropsWithRef<Element>)
) => JSX.Element;
