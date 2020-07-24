import { createContext } from 'react';
import { AwilixContainer } from 'awilix';
import { ICradle } from '~/web//view/container';

export const DIContainerContext = createContext<AwilixContainer<ICradle>>(
  null as any
);
