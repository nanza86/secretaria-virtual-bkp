import { Formik, Form } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import FormField from "../src/components/utils/formInput";

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
            
            <button type="submit">vai</button>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default Index;
