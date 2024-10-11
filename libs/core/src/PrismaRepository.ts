import { IPrismaRepository, PrismaOperations } from './interfaces/IPrismaRepository';

export type DelegateArgs<T> = {
  [K in keyof T]: T[K] extends (args: infer A) => Promise<unknown> ? A : never;
};

export type DelegateReturnTypes<T> = {
  [K in keyof T]: T[K] extends (args: infer A) => Promise<infer R> ? R : never;
};

export abstract class PrismaRepository<
  D extends { [K in PrismaOperations]: (args: unknown) => unknown },
  A extends { [K in PrismaOperations]: unknown },
  R extends { [K in PrismaOperations]: unknown }
> implements IPrismaRepository<A, R>
{
  constructor(protected model: D) {}

  async findUnique(args: A['findUnique']): Promise<R['findUnique']> {
    return this.model.findUnique(args);
  }

  async findFirst(args: A['findFirst']): Promise<R['findFirst']> {
    return this.model.findFirst(args);
  }

  async findMany(args: A['findMany']): Promise<R['findMany']> {
    return this.model.findMany(args);
  }

  async create(args: A['create']): Promise<R['create']> {
    return this.model.create(args);
  }

  async update(args: A['update']): Promise<R['update']> {
    return this.model.update(args);
  }

  async delete(args: A['delete']): Promise<R['delete']> {
    return this.model.delete(args);
  }

  async count(args: A['count']): Promise<R['count']> {
    return this.model.count(args);
  }
}
