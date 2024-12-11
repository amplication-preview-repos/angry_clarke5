import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ServiceMonitorTitle } from "../serviceMonitor/ServiceMonitorTitle";

export const ServiceStatusEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
