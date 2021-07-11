import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'semantic-ui-react';

export default function JobPostingAdd() {
    return (
        <div>
        <div>
          <Button as={NavLink} to="/JobPosting/Add">
            İş İlanı Ekle
          </Button>
        </div>
      </div>
    );
}

