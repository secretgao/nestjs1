/**
 * api 统一返回格式
 */
export class ApiResponseReturn<T> {
    constructor(
      public statusCode: number,
      public message: string,
      public data?: T,
    ) {}
  }
  