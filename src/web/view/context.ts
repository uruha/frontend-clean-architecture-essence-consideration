import { createContext } from 'react';
import { AwilixContainer } from 'awilix';
import { ICradle } from '~/web//view/container';

export const DIContainerContext = createContext<AwilixContainer<ICradle>>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  null as any
);
