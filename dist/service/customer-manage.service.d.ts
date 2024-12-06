import { Repository } from 'typeorm';
import { CustomerManage } from '../entity/customer_manage.entity';
import { CreateCustomerManageDto } from '../dto/create-customer-manage.dto';
import { UpdateCustomerManageDto } from '../dto/update-customer-manage.dto';
import { ApiResponseReturn } from 'src/common/api-response-return';
export declare class CustomerManageService {
    private readonly customerManageRepository;
    constructor(customerManageRepository: Repository<CustomerManage>);
    findAllByStatus(): Promise<ApiResponseReturn<any>>;
    findOne(id: number): Promise<CustomerManage>;
    create(createCustomerManageDto: CreateCustomerManageDto): Promise<ApiResponseReturn<null>>;
    update(id: number, updateCustomerManageDto: UpdateCustomerManageDto): Promise<ApiResponseReturn<null>>;
    initPassword(ids: number): Promise<ApiResponseReturn<any>>;
    updateStatus(id: number, status: number): Promise<ApiResponseReturn<unknown>>;
    remove(id: number[]): Promise<ApiResponseReturn<null>>;
    findAll(paginationQuery: {
        page: number;
        limit: number;
        abbreviation?: string;
        id?: number;
        status?: string;
    }): Promise<ApiResponseReturn<any>>;
}
