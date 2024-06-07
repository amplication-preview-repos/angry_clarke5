import * as graphql from "@nestjs/graphql";
import { UiModuleService } from "./uimodule.service";

export class UiModuleResolver {
  constructor(protected readonly service: UiModuleService) {}
}
