import { Formik,Form} from "formik";
import React from "react";
import { Button} from "semantic-ui-react";
import * as Yup from "yup";
import HrsmTextInput from "../utulities/customFormControls/HrsmTextInput";

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
            <HrsmTextInput name="jobDescription" placeholder="Açıklama"/>
            <HrsmTextInput name="maxSalary" placeholder="Maks maaş bilgisi"/>
            <HrsmTextInput name="minSalary" placeholder="Min maaş bilgisi"/>
            <HrsmTextInput name="openPositionNumber" placeholder="Alınacak eleman sayısı"/>
            <HrsmTextInput name="createdDate" placeholder="İlana Çıkış Tarihi"/>
            <HrsmTextInput name="lastApplyDate" placeholder="Son Başvuru Tarihi"/>
            <HrsmTextInput name="cityId" placeholder="Şehir İsmi Seçiniz."/>
            <HrsmTextInput name="companyId" placeholder="Şirket İsmi Seçiniz"/>
            <HrsmTextInput name="positionId" placeholder="Posziyon İsmini Giriniz"/>
            <HrsmTextInput name="workTimeId" placeholder="Çalışma Zamanını Giriniz"/>   
            <HrsmTextInput name="workTypeId" placeholder="Çalışma Tipini Giriniz"/>  
          <Button color="green" type="submit">Ekle</Button>
        </Form>
      </Formik>
    </div>
  );
}
