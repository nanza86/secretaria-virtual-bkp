import React from "react";
import { Field } from "formik";
import {
  Input,
  Textarea,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { format } from "date-fns";

const FormField = (props: any) => {
  const { label, name, isRequired, type, ...rest } = props;
  const hoje = format(new Date(), "yyyy-MM-dd");

  switch (type) {
    case "textarea":
      return (
        <Field name={name}>
          {({ field, form }: any) => {
            return (
              <FormControl
                isInvalid={form.errors[name] && form.touched[name]}
                style={{ paddingBottom: "1em" }}
              >
                {label && (
                  <FormLabel htmlFor={name}>
                    {label}{" "}
                    {isRequired && (
                      <Text as="span" textColor="red">
                        *
                      </Text>
                    )}
                  </FormLabel>
                )}
                <Textarea name={name} {...rest} {...field}></Textarea>
                <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
              </FormControl>
            );
          }}
        </Field>
      );
      break;

    case "datepicker":
      return (
        <Field name={name}>
          {({ field, form }: any) => {
            return (
              <FormControl
                isInvalid={form.errors[name] && form.touched[name]}
                style={{ paddingBottom: "1em" }}
              >
                {label && (
                  <FormLabel htmlFor={name}>
                    {label}{" "}
                    {isRequired && (
                      <Text as="span" textColor="red">
                        *
                      </Text>
                    )}
                  </FormLabel>
                )}
                <Input
                  type="date"
                  name={name}
                  {...rest}
                  {...field}
                  min={hoje}
                  max="2023-12-31"
                />
                <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
              </FormControl>
            );
          }}
        </Field>
      );
      break;

    default:
      return (
        <Field name={name}>
          {({ field, form }: any) => {
            return (
              <FormControl
                isInvalid={form.errors[name] && form.touched[name]}
                style={{ paddingBottom: "1em" }}
              >
                {label && (
                  <FormLabel htmlFor={name}>
                    {label}{" "}
                    {isRequired && (
                      <Text as="span" textColor="red">
                        *
                      </Text>
                    )}
                  </FormLabel>
                )}
                <Input name={name} {...rest} {...field} />
                <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
              </FormControl>
            );
          }}
        </Field>
      );
      break;
  }
};

export default FormField;
