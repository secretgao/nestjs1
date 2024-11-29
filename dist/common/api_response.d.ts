export declare class ApiResponse<T> {
    statusCode: number;
    message: string;
    data?: T;
    constructor(statusCode: number, message: string, data?: T);
}
