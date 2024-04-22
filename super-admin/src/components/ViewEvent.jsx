import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getEventById } from '../redux/slice/eventSlice';

const ViewEvent = () => {
    const params=useParams()
    const dispatch=useDispatch();
    const getData=useSelector((state)=>state.event)
    console.log(getData,"datatatata");

useEffect(()=>{
dispatch(getEventById(params.id))
},[])

  return (
   <>
  
   <div className="container">
        <div className="row">
          <div className="col-md-12">
  <table className="table">
  <thead>
    <tr>
      <th scope="col">Sr.No</th>
      <th scope="col">Company Name</th>
      <th scope="col">Short-Desc</th>
      <th scope="col"> Long-Desc</th>
      <th scope="col">Posted By</th>
      <th scope="col">Status</th>
     
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td >{getData?.data?.data?._id}</td>
      <td>{getData?.data?.data?.event_name}</td>
      <td>{getData?.data?.data?.short_desc}</td>
      <td>{getData?.data?.data?.long_desc}</td>
      <td>{getData?.data?.data?.posted_by}</td>
      <td>{getData?.data?.status?"Active":"Inactive"}</td>
     
    </tr>

  </tbody>
</table>

          </div>
        </div>
      </div>
   </>
  )
}

export default ViewEvent