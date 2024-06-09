/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { DnsMonitor } from "./DnsMonitor";
import { DnsMonitorCountArgs } from "./DnsMonitorCountArgs";
import { DnsMonitorFindManyArgs } from "./DnsMonitorFindManyArgs";
import { DnsMonitorFindUniqueArgs } from "./DnsMonitorFindUniqueArgs";
import { CreateDnsMonitorArgs } from "./CreateDnsMonitorArgs";
import { UpdateDnsMonitorArgs } from "./UpdateDnsMonitorArgs";
import { DeleteDnsMonitorArgs } from "./DeleteDnsMonitorArgs";
import { DnsMonitorService } from "../dnsMonitor.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DnsMonitor)
export class DnsMonitorResolverBase {
  constructor(
    protected readonly service: DnsMonitorService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "DnsMonitor",
    action: "read",
    possession: "any",
  })
  async _dnsMonitorsMeta(
    @graphql.Args() args: DnsMonitorCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [DnsMonitor])
  @nestAccessControl.UseRoles({
    resource: "DnsMonitor",
    action: "read",
    possession: "any",
  })
  async dnsMonitors(
    @graphql.Args() args: DnsMonitorFindManyArgs
  ): Promise<DnsMonitor[]> {
    return this.service.dnsMonitors(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => DnsMonitor, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "DnsMonitor",
    action: "read",
    possession: "own",
  })
  async dnsMonitor(
    @graphql.Args() args: DnsMonitorFindUniqueArgs
  ): Promise<DnsMonitor | null> {
    const result = await this.service.dnsMonitor(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => DnsMonitor)
  @nestAccessControl.UseRoles({
    resource: "DnsMonitor",
    action: "create",
    possession: "any",
  })
  async createDnsMonitor(
    @graphql.Args() args: CreateDnsMonitorArgs
  ): Promise<DnsMonitor> {
    return await this.service.createDnsMonitor({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => DnsMonitor)
  @nestAccessControl.UseRoles({
    resource: "DnsMonitor",
    action: "update",
    possession: "any",
  })
  async updateDnsMonitor(
    @graphql.Args() args: UpdateDnsMonitorArgs
  ): Promise<DnsMonitor | null> {
    try {
      return await this.service.updateDnsMonitor({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => DnsMonitor)
  @nestAccessControl.UseRoles({
    resource: "DnsMonitor",
    action: "delete",
    possession: "any",
  })
  async deleteDnsMonitor(
    @graphql.Args() args: DeleteDnsMonitorArgs
  ): Promise<DnsMonitor | null> {
    try {
      return await this.service.deleteDnsMonitor(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
