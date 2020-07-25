export type IUseCase<I, O> = (input: I) => Promise<O>;
