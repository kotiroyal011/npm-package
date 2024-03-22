import React, { FC, ReactNode } from 'react';

interface Props {
    children: ReactNode | ReactNode[];
}
declare const Button: FC<Props>;

declare const Typography: () => React.JSX.Element;

export { Button, Typography };
