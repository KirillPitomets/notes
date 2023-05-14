import { isErrWithMessage } from './isErrWithMessage'

export const identifyError = err => {
	if (!err) return null

	if (isErrWithMessage(err.response)) {
		return err.response.data.message
	}

	return { message: 'Error has occurred. Please try next time' }
}
