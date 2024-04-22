import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Badge } from "antd";
import { getCompanyById, updateCompany } from "../redux/slice/companySlice";

const UpdateCompanyList = () => {
  const [update, setUpdate] = useState({});
const navigate = useNavigate();
  const params = useParams();

  const allData = useSelector((state) => state.company);
  console.log(allData,"dattaaaa");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompanyById(params.id));
  }, [params.id]);

  useEffect(() => {
    setUpdate(allData?.data?.data);
  }, [allData]);

  const handleUpdateForm = (e)=>{
    const {name,value} = e.target;
    setUpdate({...update,[name]:value})
  }
  const handleUpdate = ()=>{
    dispatch(updateCompany(update));
    navigate("/companylist")
  }
  return (
    <>
      <h1> this is updatecategory page</h1>
      <div className="row">
        <div className="col-md-3">
          <h4>Person Name</h4>

          {/* <p>{update?.Person_name}</p> */}
          <input
            type="text"
            defaultValue={update?.company_name}
            className="form-control"
            onChange={(e)=>handleUpdateForm(e)}
            name="company_name"
          />
        </div>
        <div className="col-md-3">
          <h4>Person Name</h4>

          {/* <p>{update?.Person_name}</p> */}
          <input
            type="text"
            defaultValue={update?.Person_name}
            className="form-control"
            onChange={(e)=>handleUpdateForm(e)}
            name="Person_name"
          />
        </div>
        <div className="col-md-3">
          <h4>Status</h4>

          <select value={update?.status} name="status" className="form-control" onChange={(e)=>handleUpdateForm(e)}>
            <option value={true} selected={update?.status===true}>Active</option>
            <option value={false} selected={update?.status===false}>InActive</option>
          </select>
        </div>
        <div className="col-md-3">
          <h4>Date</h4>
          <p>{update?.created_at}</p>
        </div>
      </div>

      <button className="btn btn-success" onClick={handleUpdate}>Update</button>
    </>
  );
};
export default UpdateCompanyList;
