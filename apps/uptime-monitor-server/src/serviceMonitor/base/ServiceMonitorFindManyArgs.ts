/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ServiceMonitorWhereInput } from "./ServiceMonitorWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ServiceMonitorOrderByInput } from "./ServiceMonitorOrderByInput";

@ArgsType()
class ServiceMonitorFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ServiceMonitorWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ServiceMonitorWhereInput, { nullable: true })
  @Type(() => ServiceMonitorWhereInput)
  where?: ServiceMonitorWhereInput;

  @ApiProperty({
    required: false,
    type: [ServiceMonitorOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ServiceMonitorOrderByInput], { nullable: true })
  @Type(() => ServiceMonitorOrderByInput)
  orderBy?: Array<ServiceMonitorOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ServiceMonitorFindManyArgs as ServiceMonitorFindManyArgs };
