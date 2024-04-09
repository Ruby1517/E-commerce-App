
import { useState, useEffect } from "react";
import "./widgetLg.css"
import axios from 'axios'
import { userRequest } from "../../requestMethods";
import { format } from "timeago.js"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Nzk5ZjQwNTA5Yzc5NjE3M2Y5Y2Q0YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODcxNTY5NiwiZXhwIjoxNjg4OTc0ODk2fQ.YBRYe2xsM7eYHYZqmbkuDLqatFXOVSIRYOyBD6ZewOA"


export default function WidgetLg() {  
  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/orders", {token: `Bearer ${TOKEN}`})     
        setOrders(res.data)
      } catch(err) {

      }
    }
    getOrders()
  }, []);

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="wdgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {orders.map((order) => (        
        <tr className="widgetLgTr" key={order._id}>
          <td className="widgetLgUser">
            <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" 
                 className="widgetLgImg" />
            <span className="widgetLgName">{order.userId}</span>     
          </td>
          <td className="widgetLgDate">{format(order.createdAt)}</td>
          <td className="widgetLgAmount">${order.amount}</td>
          <td className="widgetLgStatus">
            <Button type={order.status} />
          </td>
        </tr>
        ))}
      </table>

    </div>
  )
}
