module.exports = {
    getError(erros, prop) {
        try {
            return errors.mapped()[prop].msg
        } catch (err) {
            return '';
        }
    }
}
