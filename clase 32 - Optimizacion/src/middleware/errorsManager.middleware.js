import EErros from "../tools/EErrors.js";

export default (err, req, res, next) => {
    console.log(err.cause);
    switch (err.code) {
        case EErros.INVALID_TYPE:
            res.status(400).send({ status: "error", error: err.name });
            break;
        default:
            res.status(500).send({ status: "error", error: "Internal Server Error" });
            break;
    }
};