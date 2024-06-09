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
import { DnsMonitor } from "./DnsMonitor";
import { DnsMonitorCountArgs } from "./DnsMonitorCountArgs";
import { DnsMonitorFindManyArgs } from "./DnsMonitorFindManyArgs";
import { DnsMonitorFindUniqueArgs } from "./DnsMonitorFindUniqueArgs";
import { CreateDnsMonitorArgs } from "./CreateDnsMonitorArgs";
import { UpdateDnsMonitorArgs } from "./UpdateDnsMonitorArgs";
import { DeleteDnsMonitorArgs } from "./DeleteDnsMonitorArgs";
import { DnsMonitorService } from "../dnsMonitor.service";
@graphql.Resolver(() => DnsMonitor)
export class DnsMonitorResolverBase {
  constructor(protected readonly service: DnsMonitorService) {}

  async _dnsMonitorsMeta(
    @graphql.Args() args: DnsMonitorCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [DnsMonitor])
  async dnsMonitors(
    @graphql.Args() args: DnsMonitorFindManyArgs
  ): Promise<DnsMonitor[]> {
    return this.service.dnsMonitors(args);
  }

  @graphql.Query(() => DnsMonitor, { nullable: true })
  async dnsMonitor(
    @graphql.Args() args: DnsMonitorFindUniqueArgs
  ): Promise<DnsMonitor | null> {
    const result = await this.service.dnsMonitor(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => DnsMonitor)
  async createDnsMonitor(
    @graphql.Args() args: CreateDnsMonitorArgs
  ): Promise<DnsMonitor> {
    return await this.service.createDnsMonitor({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => DnsMonitor)
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