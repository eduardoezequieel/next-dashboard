'use client';

import { Provider } from 'react-redux';
import { store } from '.';

export const Providers = ({ children }: React.PropsWithChildren) => (
  <Provider store={store}>{children}</Provider>
);
