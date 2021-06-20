import React from 'react'
import JobPostList from '../pages/JobPostList'
import Navi from './Navi'
import SearchBox from './SearchBox'

export default function Dashboard() {
    return (
        <div>
            <Navi/>
            <SearchBox/>
            <JobPostList/>
        </div>
    )
}
