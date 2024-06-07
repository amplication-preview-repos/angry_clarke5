import { Module } from "@nestjs/common";
import { UiModuleService } from "./uimodule.service";
import { UiModuleController } from "./uimodule.controller";
import { UiModuleResolver } from "./uimodule.resolver";

@Module({
  controllers: [UiModuleController],
  providers: [UiModuleService, UiModuleResolver],
  exports: [UiModuleService],
})
export class UiModuleModule {}
