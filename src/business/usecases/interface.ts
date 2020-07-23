export type IUseCase<I, O> = (input: I) => Promise<O>;
export type IUseCaseFactory<D, U extends IUseCase<any, any>> = (dataAccess: D) => U;
