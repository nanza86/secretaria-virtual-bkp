import React from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { pt } from 'date-fns/locale';
registerLocale("pt", pt)
import "react-datepicker/dist/react-datepicker.css";
import { Field } from "formik";
import {
  Input,
  Textarea,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";

interface dateProps {
  isClearable?: boolean;
  onChange: (date: Date) => any;
  selectedDate: Date | undefined;
  showPopperArrow?: boolean;
}

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

    case "datepicker":
      return (
        <Field name={name}>
          {({ field, form }: any) => {
            const { setFieldValue } = form;
            const { value } = field;
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
                <DatePicker
                  name={name}
                  minDate={new Date()}
                  {...rest}
                  {...field}
                  selected={value}
                  locale="pt"
                  dateFormat="dd/MM/yy"
                  onChange={(val) => setFieldValue(name, val)}
                  className="react-datapicker__input-text"
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
