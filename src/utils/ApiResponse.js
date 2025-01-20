class ApiResponse {
    constructor(statusCode, data, message = "Success"){
        thid.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}