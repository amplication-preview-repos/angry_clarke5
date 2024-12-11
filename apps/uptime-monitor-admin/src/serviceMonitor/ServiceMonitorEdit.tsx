import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ServiceStatusTitle } from "../serviceStatus/ServiceStatusTitle";

export const ServiceMonitorEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="isActive" source="isActive" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="serviceStatuses"
          reference="ServiceStatus"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ServiceStatusTitle} />
        </ReferenceArrayInput>
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Edit>
  );
};
