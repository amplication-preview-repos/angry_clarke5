import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ServiceMonitorList } from "./serviceMonitor/ServiceMonitorList";
import { ServiceMonitorCreate } from "./serviceMonitor/ServiceMonitorCreate";
import { ServiceMonitorEdit } from "./serviceMonitor/ServiceMonitorEdit";
import { ServiceMonitorShow } from "./serviceMonitor/ServiceMonitorShow";
import { ServiceStatusList } from "./serviceStatus/ServiceStatusList";
import { ServiceStatusCreate } from "./serviceStatus/ServiceStatusCreate";
import { ServiceStatusEdit } from "./serviceStatus/ServiceStatusEdit";
import { ServiceStatusShow } from "./serviceStatus/ServiceStatusShow";
import { DnsMonitorList } from "./dnsMonitor/DnsMonitorList";
import { DnsMonitorCreate } from "./dnsMonitor/DnsMonitorCreate";
import { DnsMonitorEdit } from "./dnsMonitor/DnsMonitorEdit";
import { DnsMonitorShow } from "./dnsMonitor/DnsMonitorShow";
import { UserLoginList } from "./userLogin/UserLoginList";
import { UserLoginCreate } from "./userLogin/UserLoginCreate";
import { UserLoginEdit } from "./userLogin/UserLoginEdit";
import { UserLoginShow } from "./userLogin/UserLoginShow";
import { RoleList } from "./role/RoleList";
import { RoleCreate } from "./role/RoleCreate";
import { RoleEdit } from "./role/RoleEdit";
import { RoleShow } from "./role/RoleShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Uptime Monitor"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ServiceMonitor"
          list={ServiceMonitorList}
          edit={ServiceMonitorEdit}
          create={ServiceMonitorCreate}
          show={ServiceMonitorShow}
        />
        <Resource
          name="ServiceStatus"
          list={ServiceStatusList}
          edit={ServiceStatusEdit}
          create={ServiceStatusCreate}
          show={ServiceStatusShow}
        />
        <Resource
          name="DnsMonitor"
          list={DnsMonitorList}
          edit={DnsMonitorEdit}
          create={DnsMonitorCreate}
          show={DnsMonitorShow}
        />
        <Resource
          name="UserLogin"
          list={UserLoginList}
          edit={UserLoginEdit}
          create={UserLoginCreate}
          show={UserLoginShow}
        />
        <Resource
          name="Role"
          list={RoleList}
          edit={RoleEdit}
          create={RoleCreate}
          show={RoleShow}
        />
      </Admin>
    </div>
  );
};

export default App;
