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
exports.ProdectController = void 0;
const common_1 = require("@nestjs/common");
const prodect_service_1 = require("./prodect.service");
const create_prodect_dto_1 = require("./dto/create-prodect.dto");
const update_prodect_dto_1 = require("./dto/update-prodect.dto");
let ProdectController = class ProdectController {
    prodectService;
    constructor(prodectService) {
        this.prodectService = prodectService;
    }
    create(createProdectDto) {
        return this.prodectService.create(createProdectDto);
    }
    findAll() {
        return this.prodectService.findAll();
    }
    findOne(id) {
        return this.prodectService.findOne(+id);
    }
    update(id, updateProdectDto) {
        return this.prodectService.update(+id, updateProdectDto);
    }
    remove(id) {
        return this.prodectService.remove(+id);
    }
};
exports.ProdectController = ProdectController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_prodect_dto_1.CreateProdectDto]),
    __metadata("design:returntype", void 0)
], ProdectController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProdectController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProdectController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_prodect_dto_1.UpdateProdectDto]),
    __metadata("design:returntype", void 0)
], ProdectController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProdectController.prototype, "remove", null);
exports.ProdectController = ProdectController = __decorate([
    (0, common_1.Controller)('prodect'),
    __metadata("design:paramtypes", [prodect_service_1.ProdectService])
], ProdectController);
//# sourceMappingURL=prodect.controller.js.map