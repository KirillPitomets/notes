export const isErrWithMessage = err => {
	return (
		typeof err === 'object' &&
		err !== null &&
		'data' in err &&
		typeof err.data?.message === 'string'
	)
}