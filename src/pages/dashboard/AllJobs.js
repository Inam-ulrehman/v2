import { React, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import JobsHolder from '../../components/JobsHolder'
import { getAllJobs } from '../../features/jobs/jobsReducer'

const AllJobs = () => {
  const dispatch = useDispatch()
  const { job, deletingJob } = useSelector((state) => state.jobs)

  //  all jobs use effect

  useEffect(() => {
    dispatch(getAllJobs())
    // eslint-disable-next-line
  }, [deletingJob])
  return (
    <Wrapper>
      {job.map((item, index) => {
        return <JobsHolder key={index} {...item} />
      })}
    </Wrapper>
  )
}
const Wrapper = styled.section`
  text-align: center;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 1rem;
    text-align: center;
    max-width: 900px;
    margin: 1rem auto;
  }
`
export default AllJobs
