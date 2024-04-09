import { useEffect, useState } from "react";
import "./widgetSm.css"
import { Visibility } from '@material-ui/icons';
import axios from "axios"
import { userRequest } from "../../requestMethods";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken
  
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Nzk5ZjQwNTA5Yzc5NjE3M2Y5Y2Q0YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODcxNTY5NiwiZXhwIjoxNjg4OTc0ODk2fQ.YBRYe2xsM7eYHYZqmbkuDLqatFXOVSIRYOyBD6ZewOA"


export default function WidgetSm() {
  const [users, setUsers] = useState([]);
  
  
  

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("http://localhost:5000/api/users/?new=true", {token: `Bearer ${TOKEN}`})     
        setUsers(res.data)
      } catch(err) {

      }
    }
    getUsers()
  }, [])

  return (
    <div className='widgetSm'>
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
      {users.map((user)=> (
        <li className="widgetSmListItem" key={user._id}>
            <img src={user.img ||
              "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif" } alt="" 
                   className="widgetSmImg" />
             <div className="widgetSmUser">
               <span className="widgetSmUsername">{user.username}</span>
             </div>
             <button className="widgetSmButton">
               <Visibility className="widgetSmIcon"/>
               Display
             </button>
           </li> 
          ))}
          
      </ul>
    </div>
  )
}
