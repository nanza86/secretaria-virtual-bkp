import { Formik, Form } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import FormField from "../src/components/utils/formInput";
import { ptBR } from "date-fns/locale";
import { DatePicker } from "react-nice-dates";
import "react-nice-dates/build/style.css";

const Index = (props: any) => {
  const listMutiroes = props.mutiroes;
  const [date, setDate] = useState();
  const validateSchema = yup.object().shape({
    testeInput: yup.date().required("campo obrigatorio!").nullable(),
  });

  console.log(listMutiroes);
  return (
    <>
      <Formik
        validationSchema={validateSchema}
        initialValues={{ testeInput: null }}
        onSubmit={(values: any) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <DatePicker date={date} onDateChange={setDate} locale={ptBR}>
              {({ inputProps, focused }) => (
                <input
                  className={"input" + (focused ? " -focused" : "")}
                  {...inputProps}
                />
              )}
            </DatePicker>
            <button type="submit">vai</button>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default Index;
