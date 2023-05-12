export const getTimeString = (date, options) =>
	new Date(date).toLocaleTimeString('en-US', options)
