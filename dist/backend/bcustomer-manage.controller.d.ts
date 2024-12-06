import { CustomerManageService } from '../service/customer-manage.service';
import { CustomerManage } from '../entity/customer_manage.entity';
import { CreateCustomerManageDto } from '../dto/create-customer-manage.dto';
import { UpdateCustomerManageDto } from '../dto/update-customer-manage.dto';
export declare class BCustomerManageController {
    private readonly customerManageService;
    constructor(customerManageService: CustomerManageService);
    findAll(page?: number, limit?: number, abbreviation?: string, id?: number, status?: string): Promise<import("../common/api-response-return").ApiResponseReturn<any>>;
    create(createCustomerManageDto: CreateCustomerManageDto): Promise<import("../common/api-response-return").ApiResponseReturn<null>>;
    update(id: number, updateCustomerManageDto: UpdateCustomerManageDto): Promise<import("../common/api-response-return").ApiResponseReturn<null>>;
    remove(id: string): Promise<import("../common/api-response-return").ApiResponseReturn<null>>;
    updateStatus(id: string, status: number): Promise<import("../common/api-response-return").ApiResponseReturn<unknown>>;
    findAllByStatus(): Promise<import("../common/api-response-return").ApiResponseReturn<any>>;
    initPassword(id: number): Promise<import("../common/api-response-return").ApiResponseReturn<any>>;
    findOne(id: number): Promise<CustomerManage>;
}
