import type { FC } from 'react';
import { holaWrapper } from './hola.styled';

interface holaProps {}

const hola: FC<holaProps> = () => (
 <holaWrapper data-testid="hola">
    hola Component
 </holaWrapper>
);

export default hola;
