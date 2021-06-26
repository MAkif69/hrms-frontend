import React, { useState,useEffect } from "react";
import { Table } from "semantic-ui-react";
import JobSeekerCvService from "../services/JobSeekerCvService";

export default function JobSeekerCVs() {

    const [jobSeekerCvs, setjobSeekerCvs] = useState([]);

    useEffect(() => {
        let jobSeekerCvService = new JobSeekerCvService();
        jobSeekerCvService.getJobSeekerCvSummary().then(result => setjobSeekerCvs(result.data.data))
    },[])

  return (
    <div>
      <div>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>İsim</Table.HeaderCell>
              <Table.HeaderCell>Soyİsim</Table.HeaderCell>
              <Table.HeaderCell>Mezun Olduğu Okul</Table.HeaderCell>
              <Table.HeaderCell>Mezun Olduğu Bölüm</Table.HeaderCell>
              <Table.HeaderCell>Mezuniyet Yılı</Table.HeaderCell>
              <Table.HeaderCell>Detaylar</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {jobSeekerCvs.map((jobSeekerCv) => (
              <Table.Row key={jobSeekerCv.id}>
                <Table.Cell>{jobSeekerCv.firstName}</Table.Cell>
                <Table.Cell>{jobSeekerCv.lastName}</Table.Cell>
                <Table.Cell>{jobSeekerCv.schoolName}</Table.Cell>
                <Table.Cell>{jobSeekerCv.departmentName}</Table.Cell>
                <Table.Cell>{jobSeekerCv.graduateYear}</Table.Cell>
                <Table.Cell>Detay</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
