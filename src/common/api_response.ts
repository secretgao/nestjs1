/**
 * api 统一返回格式
 */
export class ApiResponse<T> {
    constructor(
      public statusCode: number,
      public message: string,
      public data?: T,
    ) {}
  }
  