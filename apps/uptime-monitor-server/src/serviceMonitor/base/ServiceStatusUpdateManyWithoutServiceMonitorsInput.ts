/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ServiceStatusWhereUniqueInput } from "../../serviceStatus/base/ServiceStatusWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ServiceStatusUpdateManyWithoutServiceMonitorsInput {
  @Field(() => [ServiceStatusWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ServiceStatusWhereUniqueInput],
  })
  connect?: Array<ServiceStatusWhereUniqueInput>;

  @Field(() => [ServiceStatusWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ServiceStatusWhereUniqueInput],
  })
  disconnect?: Array<ServiceStatusWhereUniqueInput>;

  @Field(() => [ServiceStatusWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ServiceStatusWhereUniqueInput],
  })
  set?: Array<ServiceStatusWhereUniqueInput>;
}

export { ServiceStatusUpdateManyWithoutServiceMonitorsInput as ServiceStatusUpdateManyWithoutServiceMonitorsInput };
