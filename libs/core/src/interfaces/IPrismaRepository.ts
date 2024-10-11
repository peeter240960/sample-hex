export type PrismaOperations =
  | 'count'
  | 'create'
  | 'update'
  | 'delete'
  | 'findUnique'
  | 'findFirst'
  | 'findMany';
export interface IPrismaRepository<
  A extends { [K in PrismaOperations]: unknown },
  R extends { [K in PrismaOperations]: unknown }
> {
  findUnique(args: A['findUnique']): Promise<R['findUnique']>;
  findFirst(args: A['findFirst']): Promise<R['findFirst']>;
  findMany(args: A['findMany']): Promise<R['findMany']>;
  create(args: A['create']): Promise<R['create']>;
  update(args: A['update']): Promise<R['update']>;
  delete(args: A['delete']): Promise<R['delete']>;
  count(args: A['count']): Promise<R['count']>;
}
