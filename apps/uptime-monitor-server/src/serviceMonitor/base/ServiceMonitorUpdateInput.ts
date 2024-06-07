/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsBoolean,
  IsOptional,
  IsString,
  ValidateNested,
} from "class-validator";
import { ServiceStatusUpdateManyWithoutServiceMonitorsInput } from "./ServiceStatusUpdateManyWithoutServiceMonitorsInput";
import { Type } from "class-transformer";

@InputType()
class ServiceMonitorUpdateInput {
  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isActive?: boolean | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => ServiceStatusUpdateManyWithoutServiceMonitorsInput,
  })
  @ValidateNested()
  @Type(() => ServiceStatusUpdateManyWithoutServiceMonitorsInput)
  @IsOptional()
  @Field(() => ServiceStatusUpdateManyWithoutServiceMonitorsInput, {
    nullable: true,
  })
  serviceStatuses?: ServiceStatusUpdateManyWithoutServiceMonitorsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  url?: string | null;
}

export { ServiceMonitorUpdateInput as ServiceMonitorUpdateInput };
