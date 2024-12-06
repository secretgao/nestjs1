"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadService = void 0;
const common_1 = require("@nestjs/common");
const path = require("path");
const fs_extra_1 = require("fs-extra");
const fs_1 = require("fs");
let UploadService = class UploadService {
    async saveImg(file) {
        const uploadDir = path.join(__dirname, '..', '..', 'uploads', 'img');
        await (0, fs_extra_1.ensureDir)(uploadDir);
        const filePath = path.join(uploadDir, file.originalname);
        await (0, fs_extra_1.writeFile)(filePath, file.buffer);
        return filePath;
    }
    async saveFile(file) {
        const uploadDir = path.join(__dirname, '..', '..', 'uploads', 'file');
        await (0, fs_extra_1.ensureDir)(uploadDir);
        const filePath = path.join(uploadDir, file.originalname);
        await (0, fs_extra_1.writeFile)(filePath, file.buffer);
        return filePath;
    }
    async getFilePath(filename) {
        const uploadPath = path.join(__dirname, '..', '..', 'uploads', 'file');
        const filePath = path.join(uploadPath, filename);
        await fs_1.promises.access(filePath);
        return filePath;
    }
};
exports.UploadService = UploadService;
exports.UploadService = UploadService = __decorate([
    (0, common_1.Injectable)()
], UploadService);
//# sourceMappingURL=upload.service.js.map