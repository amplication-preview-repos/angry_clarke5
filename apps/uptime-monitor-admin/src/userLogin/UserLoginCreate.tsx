import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { RoleTitle } from "../role/RoleTitle";

export const UserLoginCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="lastLoginDate" source="lastLoginDate" />
        <TextInput label="passwordHash" source="passwordHash" />
        <ReferenceInput source="role.id" reference="Role" label="Role">
          <SelectInput optionText={RoleTitle} />
        </ReferenceInput>
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Create>
  );
};
