import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DnsMonitorList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DNSMonitors"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="domain" source="domain" />
        <TextField label="ID" source="id" />
        <TextField label="lastChecked" source="lastChecked" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
