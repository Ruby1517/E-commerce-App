import React, { useEffect, useMemo, useState } from 'react'
import "./home.css"
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart'
import axios from 'axios'
import { userData } from '../../dummyData'; 
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import { userRequest } from '../../requestMethods';
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Nzk5ZjQwNTA5Yzc5NjE3M2Y5Y2Q0YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODcxNTY5NiwiZXhwIjoxNjg4OTc0ODk2fQ.YBRYe2xsM7eYHYZqmbkuDLqatFXOVSIRYOyBD6ZewOA"
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

export default function Home() {
  const [userStats, setUserStats] = useState([])

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/users/stats", {token: `Bearer ${TOKEN}`})
        res.data.map(item=> {
          setUserStats((prev) => [
            ...prev,
            {name: MONTHS[item._id -1], "Active User": item.totla}
          ])
        })
      } catch(err){

      }
    };
    getStats()
  }, [MONTHS]);

  return (
    <div className='home'>
        <FeaturedInfo />
        <Chart data={userStats} title="User Analytics" grid dataKey="Active User" />
        <div className='homeWidgets'>
          <WidgetSm />
          <WidgetLg />
        </div>
    </div>
  )
}
