import React from "react";
import { Formik, Form, Field } from "formik";
import s from "./SearchBox.module.css";

function SearchBox({ value, onChange }) {
  return (
    <Formik
      initialValues={{ search: value }}
      enableReinitialize={true}
      onSubmit={() => {}}
    >
      {() => (
        <Form className={s.wrapper}>
          <label htmlFor="search" className={s.label}>
            Find contacts by name:
          </label>
          <Field
            id="search"
            name="search"
            className={s.input}
            type="text"
            onChange={onChange}
          />
        </Form>
      )}
    </Formik>
  );
}

export default SearchBox;
