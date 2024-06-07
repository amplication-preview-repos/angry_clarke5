import { Field } from "@nestjs/graphql";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

class ServiceListComponent {
    @Field(() => [GraphQLJSON])
    services!: InputJsonValue;

    @Field(() => [GraphQLJSON])
    service!: InputJsonValue;

    @Field(() => [GraphQLJSON])
    dnsRecords!: InputJsonValue;

    @Field(() => GraphQLJSON)
    record!: InputJsonValue;
}

export { ServiceListComponent as ServiceListComponent };