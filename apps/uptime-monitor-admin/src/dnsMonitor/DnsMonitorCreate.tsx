import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  SelectInput,
} from "react-admin";

export const DnsMonitorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="domain" source="domain" />
        <DateTimeInput label="lastChecked" source="lastChecked" />
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
