import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreatePersonDto {
  @IsOptional()
  @IsInt()
  id: number;

  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  name: string;

  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  age: number;
}
