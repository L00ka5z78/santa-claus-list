class ValidationError extends Error {
}

const handleError = (err, req, res, next) => {
    console.error(err);
    res
        .status(err instanceof ValidationError ? 400 : 500)
        .render('error', {
            message: err instanceof ValidationError ? err.message : 'Try again later...',
        })
    //check if its error we know if yes, send err.msg if not, send msg til user not show
}
module.exports = {
    ValidationError,
    handleError
}