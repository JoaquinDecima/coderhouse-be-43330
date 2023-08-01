export default class CustomErrors {
    static createError(name = "Error", cause, message, status = 1) {
        const error = new Error(message, { cause });
        error.name = name;
        error.code = status;
        throw error;
    }
}
