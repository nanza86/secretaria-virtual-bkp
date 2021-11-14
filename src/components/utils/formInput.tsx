import React from "react";
import MaskedInput from "react-text-mask";
import createAutoCorrectedDatePipe from "text-mask-addons/dist/createAutoCorrectedDatePipe";
import { Field } from "formik";
import {
  Input,
  Textarea,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";

const FormField = (props: any) => {
  const { label, name, isRequired, type, ...rest } = props;
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

    case "date":
      const autoCorrectedDatePipe = createAutoCorrectedDatePipe('dd/mm/yyyy', {
        minYear: 2021,
        maxYear: 2022
      });
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
                <MaskedInput
                  guide={false}
                  keepCharPositions={true}
                  pipe={autoCorrectedDatePipe}
                  mask={[
                    /\d/,
                    /\d/,
                    "/",
                    /\d/,
                    /\d/,
                    "/",
                    /\d/,
                    /\d/,
                    /\d/,
                    /\d/,
                  ]}
                  {...rest}
                  {...field}
                  render={(ref, props) => (
                    // @ts-expect-error
                    <Input name={name} ref={ref} {...props} />
                  )}
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
