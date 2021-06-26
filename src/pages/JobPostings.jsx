import React, { useState, useEffect } from "react";
import { Table } from "semantic-ui-react";
import JobPostingService from "../services/JobPostingService";

export default function JobPostings() {
  const [jobPostings, setjobPostings] = useState([]);

  useEffect(() => {
    let jobPostingService = new JobPostingService();
    jobPostingService.getJobPostings().then(result=>setjobPostings(result.data.data))
  },[]);

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
            <Table.HeaderCell>Pozisyon</Table.HeaderCell>
            <Table.HeaderCell>Alınacak Kişi Sayısı</Table.HeaderCell>
            <Table.HeaderCell>İlana Çıkış Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobPostings.map((jobPost) => (
            <Table.Row key={jobPost.id}>
              <Table.Cell>{jobPost.companyName}</Table.Cell>
              <Table.Cell>{jobPost.positionName}</Table.Cell>
              <Table.Cell>{jobPost.openPositionNumber}</Table.Cell>
              <Table.Cell>{jobPost.createdDate}</Table.Cell>
              <Table.Cell>{jobPost.lastApplyDate}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
