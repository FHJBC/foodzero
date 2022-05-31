import "./newMenu.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { menuInputs } from "../../formSource";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const NewHotel = () => {
  const [files, setFiles] = useState<any>("");
  const [info, setInfo] = useState({});
  const [menus, setMenus] = useState([]);

  const { data, loading, error } = useFetch("/menus")

  const handleChange = (e: any) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleClick = async (e: any) => {
    e.preventDefault()
    try {
      const list = await Promise.all(
        Object.values(files).map(async (file: any) => {
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "upload")
          const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/foodzero/image/upload",
            data
          );

          const { url } = uploadRes.data;
          return url;
        })
      );

      const newMenu = {
        ...info,
        photos: list,
      };

      await axios.post("/menus", newMenu);
    } catch (err) {console.log(err)}
  };
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Menu</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                files
                  ? URL.createObjectURL(files[0])
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                  style={{ display: "none" }}
                />
              </div>

              {menuInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id.toString()}
                    onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                  />
                </div>
              ))}
              
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewHotel
