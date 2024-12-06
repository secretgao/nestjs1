export declare class ApiResponseReturn<T> {
    statusCode: number;
    message: string;
    data?: T;
    constructor(statusCode: number, message: string, data?: T);
}
