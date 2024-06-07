import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { SERVICEMONITOR_TITLE_FIELD } from "./ServiceMonitorTitle";

export const ServiceMonitorShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="isActive" source="isActive" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="url" source="url" />
        <ReferenceManyField
          reference="ServiceStatus"
          target="serviceMonitorId"
          label="ServiceStatuses"
        >
          <Datagrid rowClick="show">
            <TextField label="checkedAt" source="checkedAt" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="ServiceMonitor"
              source="servicemonitor.id"
              reference="ServiceMonitor"
            >
              <TextField source={SERVICEMONITOR_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
