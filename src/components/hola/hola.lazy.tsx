import { lazy, Suspense, ComponentProps } from 'react';

const Lazyhola = lazy(() => import('./hola'));

const hola = (props: ComponentProps<typeof Lazyhola>) => (
  <Suspense fallback={null}>
    <Lazyhola {...props} />
  </Suspense>
);

export default hola;
