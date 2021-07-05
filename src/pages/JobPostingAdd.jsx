import { Formik,Form,ErrorMessage,Field} from "formik";
import React from "react";
import { Button, FormField, Label } from "semantic-ui-react";
import * as Yup from "yup";

export default function JobPostingAdd() {
  const initialValues = {
    jobDescription: "",
    maxSalary: "",
    minSalary: "",
    openPositionNumber: "",
    createdDate: "",
    lastApplyDate: "",

    cityId: "",
    companyId: "",
    positionId: "",
    workTimeId: "",
    workTypeId: "",
  };

  const schema = Yup.object({
    jobDescription: Yup.string().required("Bu alanı doldurmak zorunludur"),
    maxSalary: Yup.number()
      .min(0, "negatif değer girilemez")
      .required("Bu alanı doldurmak zorunludur"),
    minSalary: Yup.number()
      .min(0, "negatif değer girilemez")
      .required("Bu alanı doldurmak zorunludur"),
    openPositionNumber: Yup.number().required("Bu alanı doldurmak zorunludur"),
    createdDate: Yup.date().required("Bu alanı doldurmak zorunludur"),
    lastApplyDate: Yup.date().required("Bu alanı doldurmak zorunludur"),
    cityId: Yup.string().required("Bu alanı doldurmak zorunludur"),
    companyId: Yup.string().required("Bu alanı doldurmak zorunludur"),
    positionId: Yup.string().required("Bu alanı doldurmak zorunludur"),
    workTimeId: Yup.string().required("Bu alanı doldurmak zorunludur"),
    workTypeId: Yup.string().required("Bu alanı doldurmak zorunludur"),
  });

  return (
    <div>
      <Formik 
      initialValues={initialValues} 
      validationSchema={schema}
      onSubmit={(values)=>{
        console.log(values)
      }}>
        <Form>
          <FormField>
              <Field name="jobDescription" placeholder="Açıklama"></Field>
              <ErrorMessage name="jobDescription" render={error=>
                  <Label pointing basic color="red" content={error}></Label>
              }></ErrorMessage>
          </FormField>
          <FormField>
              <Field name="maxSalary" placeholder="Mak maaş"></Field>
              <ErrorMessage name="jobDescription" render={error=>
                  <Label pointing basic color="red" content={error}></Label>
              }></ErrorMessage>
          </FormField>
          <FormField>
              <Field name="minSalary" placeholder="Min maaş"></Field>
              <ErrorMessage name="jobDescription" render={error=>
                  <Label pointing basic color="red" content={error}></Label>
              }></ErrorMessage>
          </FormField>
          <FormField>
              <Field name="openPositionNumber" placeholder="Alınacak eleman sayısı"></Field>
              <ErrorMessage name="jobDescription" render={error=>
                  <Label pointing basic color="red" content={error}></Label>
              }></ErrorMessage>
          </FormField>
          <FormField>
              <Field name="createdDate" placeholder="İlana Çıkış Tarihi"></Field>
              <ErrorMessage name="jobDescription" render={error=>
                  <Label pointing basic color="red" content={error}></Label>
              }></ErrorMessage>
          </FormField>
          <FormField>
              <Field name="lastApplyDate" placeholder="Son Başvuru Tarihi"></Field>
              <ErrorMessage name="jobDescription" render={error=>
                  <Label pointing basic color="red" content={error}></Label>
              }></ErrorMessage>
          </FormField>
          <FormField>
              <Field name="cityId" placeholder="Şehir İsmi"></Field>
              <ErrorMessage name="jobDescription" render={error=>
                  <Label pointing basic color="red" content={error}></Label>
              }></ErrorMessage>
          </FormField>
          <FormField>
              <Field name="companyId" placeholder="Şirket İsmi"></Field>
              <ErrorMessage name="jobDescription" render={error=>
                  <Label pointing basic color="red" content={error}></Label>
              }></ErrorMessage>
          </FormField>
          <FormField>
              <Field name="positionId" placeholder="Pozisyon İsmi"></Field>
              <ErrorMessage name="jobDescription" render={error=>
                  <Label pointing basic color="red" content={error}></Label>
              }></ErrorMessage>
          </FormField>
          <FormField>
              <Field name="workTimeId" placeholder="Çalışma Zamanı"></Field>
              <ErrorMessage name="jobDescription" render={error=>
                  <Label pointing basic color="red" content={error}></Label>
              }></ErrorMessage>
          </FormField>
          <FormField>
              <Field name="workTypeId" placeholder="Çalışma Tipi"></Field>
              <ErrorMessage name="jobDescription" render={error=>
                  <Label pointing basic color="red" content={error}></Label>
              }></ErrorMessage>
          </FormField>
          <Button color="green" type="submit">Ekle</Button>
        </Form>
      </Formik>
    </div>
  );
}
