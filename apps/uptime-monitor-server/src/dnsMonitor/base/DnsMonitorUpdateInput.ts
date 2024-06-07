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
import { IsString, IsOptional, IsDate, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { EnumDnsMonitorStatus } from "./EnumDnsMonitorStatus";

@InputType()
class DnsMonitorUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  domain?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  lastChecked?: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumDnsMonitorStatus,
  })
  @IsEnum(EnumDnsMonitorStatus)
  @IsOptional()
  @Field(() => EnumDnsMonitorStatus, {
    nullable: true,
  })
  status?: "Option1" | null;
}

export { DnsMonitorUpdateInput as DnsMonitorUpdateInput };
