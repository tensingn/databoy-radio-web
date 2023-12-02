export type QueryOptions<TField = string> = {
	whereOptions?: WhereOptions<TField>;
	orderOptions?: OrderOptions<TField>;
	pagingOptions?: PagingOptions<TField>;
};

export type WhereOptions<TField = string> = {
	whereClauses: WhereClause<TField>[];
	pagingOptions: PagingOptions<string>;
};

export type OrderOptions<TField = string> = {
	field: string;
	direction: OrderByDirection;
	pagingOptions: PagingOptions<TField>;
};

export type PagingOptions<T = string> = {
	startAfter: T;
	limit: number;
};

export type WhereClause<TField = string> = {
	field: string;
	value: TField;
	operation: WhereFilterOp;
};

export type WhereFilterOp =
	| "<"
	| "<="
	| "=="
	| "!="
	| ">="
	| ">"
	| "array-contains"
	| "in"
	| "not-in"
	| "array-contains-any";

export type OrderByDirection = "desc" | "asc";

export const STANDARD_QUERY: QueryOptions = {
	pagingOptions: {
		startAfter: null,
		limit: 10,
	},
};

export function GenerateOrderByQuery<TField = string>(
	field: string,
	direction: OrderByDirection,
	pagingOptions: PagingOptions<TField>
): QueryOptions<TField> {
	return {
		orderOptions: {
			field,
			direction,
			pagingOptions,
		},
	};
}

export function GenerateWhereQuery<TField = string>(
	whereClauses: Array<WhereClause<TField>>,
	pagingOptions: PagingOptions<string>
): QueryOptions<TField> {
	return {
		whereOptions: {
			whereClauses,
			pagingOptions,
		},
	};
}

export function GeneratePagingOptions<T = string>(
	startAfter: T,
	limit: number
): PagingOptions<T> {
	return {
		startAfter,
		limit,
	};
}
