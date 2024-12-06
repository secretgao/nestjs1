"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const platform_express_1 = require("@nestjs/platform-express");
const upload_service_1 = require("./service/upload.service");
const swagger_1 = require("@nestjs/swagger");
let AppController = class AppController {
    constructor(appService, uploadService) {
        this.appService = appService;
        this.uploadService = uploadService;
    }
    getHello() {
        return this.appService.getHello();
    }
    async uploadImg(file, res) {
        try {
            const filePath = await this.uploadService.saveImg(file);
            const imageUrl = `/uploads/img/${file.originalname}`;
            return res.status(common_1.HttpStatus.OK).json({
                statusCode: 200,
                data: { "image_url": imageUrl, "file_path": filePath }
            });
        }
        catch (error) {
            throw new common_1.HttpException('File upload failed', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async uploadFile(file, res) {
        try {
            const filePath = await this.uploadService.saveFile(file);
            const imageUrl = `/uploads/file/${file.originalname}`;
            return res.status(common_1.HttpStatus.OK).json({
                statusCode: 200,
                data: { "image_url": imageUrl, "file_path": filePath }
            });
        }
        catch (error) {
            throw new common_1.HttpException('File upload failed', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async downloadImg(filename, res) {
        try {
            const filePath = await this.uploadService.getFilePath(filename);
            return res.sendFile(filePath);
        }
        catch (error) {
            throw new common_1.HttpException('File not found', common_1.HttpStatus.NOT_FOUND);
        }
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '上传图片' }),
    (0, swagger_1.ApiParam)({ name: 'file', description: '图片' }),
    (0, common_1.Post)('/upload_img'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "uploadImg", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '上传文件' }),
    (0, swagger_1.ApiParam)({ name: 'file', description: '文件' }),
    (0, common_1.Post)('/upload_file'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Get)('/download/file/:filename'),
    __param(0, (0, common_1.Param)('filename')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "downloadImg", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService,
        upload_service_1.UploadService])
], AppController);
//# sourceMappingURL=app.controller.js.map