import { useEffect, useState } from 'react';
import './featuredInfo.css'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import axios from 'axios'
import { userRequest } from '../../requestMethods';
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Nzk5ZjQwNTA5Yzc5NjE3M2Y5Y2Q0YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODcxNTY5NiwiZXhwIjoxNjg4OTc0ODk2fQ.YBRYe2xsM7eYHYZqmbkuDLqatFXOVSIRYOyBD6ZewOA"

export default function FeaturedInfo() {
    const [income, setIncome] = useState([])
    const [perc, setPerc] = useState(0)

    useEffect(() => {
        const getIncome = async() => {
            try {
                const res = await axios.get("http://localhost:5000/api/orders/income", {token: `Bearer ${TOKEN}`})
                setIncome(res.data)
                setPerc((res.data[1].total * 100) / res.data[0].total - 100)
                
            } catch(err){

            }
        }
        getIncome()
    },[]);

    console.log(income)
    
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="featredTitle">Revanue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">${income[1]?.total}</span>
                <span className="featuredMoneyRate">%{Math.floor(perc)}{" "}
                {perc < 0 ? (

                
                    <ArrowDownward  className='featuredIcon negative'/>
                    ) : (
                        <ArrowUpward className='featuredIcon' />
                    )}
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>    
        </div>
        <div className="featuredItem">
            <span className="featredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$4,415</span>
                <span className="featuredMoneyRate">-1.4
                    <ArrowDownward className='featuredIcon negative'/>
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>    
        </div>
        <div className="featuredItem">
            <span className="featredTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$1,215</span>
                <span className="featuredMoneyRate">
                    2.4
                    <ArrowUpward className='featuredIcon' />
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>    
        </div>

    </div>
  )
}
