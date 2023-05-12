export const getDateString = (date, options) =>
	new Date(date).toLocaleDateString('en-US', options)
