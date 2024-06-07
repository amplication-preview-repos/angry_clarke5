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
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { ServiceMonitorWhereUniqueInput } from "../../serviceMonitor/base/ServiceMonitorWhereUniqueInput";
import { EnumServiceStatusStatus } from "./EnumServiceStatusStatus";

@InputType()
class ServiceStatusWhereInput {
  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  checkedAt?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => ServiceMonitorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ServiceMonitorWhereUniqueInput)
  @IsOptional()
  @Field(() => ServiceMonitorWhereUniqueInput, {
    nullable: true,
  })
  serviceMonitor?: ServiceMonitorWhereUniqueInput;

  @ApiProperty({
    required: false,
    enum: EnumServiceStatusStatus,
  })
  @IsEnum(EnumServiceStatusStatus)
  @IsOptional()
  @Field(() => EnumServiceStatusStatus, {
    nullable: true,
  })
  status?: "Option1";
}

export { ServiceStatusWhereInput as ServiceStatusWhereInput };
