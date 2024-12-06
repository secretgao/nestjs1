import { SetMetadata } from '@nestjs/common';
/**
 * 
 * 设置守卫白名单 在指定的 action 中 使用 @Public()  该方法就不需要登陆才能访问
 * @returns 
 */
export const Public = () => SetMetadata('isPublic', true);
