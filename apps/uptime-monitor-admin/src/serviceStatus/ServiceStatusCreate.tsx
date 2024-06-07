import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ServiceMonitorTitle } from "../serviceMonitor/ServiceMonitorTitle";

export const ServiceStatusCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="checkedAt" source="checkedAt" />
        <ReferenceInput
          source="serviceMonitor.id"
          reference="ServiceMonitor"
          label="ServiceMonitor"
        >
          <SelectInput optionText={ServiceMonitorTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
