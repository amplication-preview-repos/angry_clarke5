import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { DnsMonitorController } from "../dnsMonitor.controller";
import { DnsMonitorService } from "../dnsMonitor.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  domain: "exampleDomain",
  id: "exampleId",
  lastChecked: new Date(),
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  createdAt: new Date(),
  domain: "exampleDomain",
  id: "exampleId",
  lastChecked: new Date(),
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    domain: "exampleDomain",
    id: "exampleId",
    lastChecked: new Date(),
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  domain: "exampleDomain",
  id: "exampleId",
  lastChecked: new Date(),
  updatedAt: new Date(),
};

const service = {
  createDnsMonitor() {
    return CREATE_RESULT;
  },
  dnsMonitors: () => FIND_MANY_RESULT,
  dnsMonitor: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("DnsMonitor", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: DnsMonitorService,
          useValue: service,
        },
      ],
      controllers: [DnsMonitorController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /dnsMonitors", async () => {
    await request(app.getHttpServer())
      .post("/dnsMonitors")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        lastChecked: CREATE_RESULT.lastChecked.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /dnsMonitors", async () => {
    await request(app.getHttpServer())
      .get("/dnsMonitors")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          lastChecked: FIND_MANY_RESULT[0].lastChecked.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /dnsMonitors/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/dnsMonitors"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /dnsMonitors/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/dnsMonitors"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        lastChecked: FIND_ONE_RESULT.lastChecked.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /dnsMonitors existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/dnsMonitors")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        lastChecked: CREATE_RESULT.lastChecked.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/dnsMonitors")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
