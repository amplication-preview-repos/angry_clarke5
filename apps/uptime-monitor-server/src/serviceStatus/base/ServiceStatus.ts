/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsOptional,
  IsString,
  ValidateNested,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { ServiceMonitor } from "../../serviceMonitor/base/ServiceMonitor";
import { EnumServiceStatusStatus } from "./EnumServiceStatusStatus";

@ObjectType()
class ServiceStatus {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  checkedAt!: Date | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => ServiceMonitor,
  })
  @ValidateNested()
  @Type(() => ServiceMonitor)
  @IsOptional()
  serviceMonitor?: ServiceMonitor | null;

  @ApiProperty({
    required: false,
    enum: EnumServiceStatusStatus,
  })
  @IsEnum(EnumServiceStatusStatus)
  @IsOptional()
  @Field(() => EnumServiceStatusStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { ServiceStatus as ServiceStatus };