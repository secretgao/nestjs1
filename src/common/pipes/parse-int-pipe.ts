// src/common/pipes/parse-int-pipe.ts
import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata): number {
    const val = parseInt(value, 10);

    if (isNaN(val)) {
       throw new BadRequestException(`Validation failed. ${metadata.data} must be a number`);
    }

    return val;
  }
}