import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { SERVICEMONITOR_TITLE_FIELD } from "../serviceMonitor/ServiceMonitorTitle";

export const ServiceStatusShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
