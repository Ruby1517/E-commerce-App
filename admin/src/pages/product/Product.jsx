import './product.css'
import { Link, useLocation } from 'react-router-dom'
import Chart from "../../components/chart/Chart"
import { productData } from "../../dummyData"
import { Publish } from "@material-ui/icons";
import { useSelector } from 'react-redux';
import { useState, useMemo, useEffect } from 'react';
import axios from 'axios';
import { userRequest } from '../../requestMethods';
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Nzk5ZjQwNTA5Yzc5NjE3M2Y5Y2Q0YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODcxNTY5NiwiZXhwIjoxNjg4OTc0ODk2fQ.YBRYe2xsM7eYHYZqmbkuDLqatFXOVSIRYOyBD6ZewOA"

export default function Product() {
    const location = useLocation()
    const productId = location.pathname.split("/")[2];
    const [pStats, setPStats] = useState([])

    const product = useSelector((state) => 
        state.product.products.find((product) => product._id === productId)
    );

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
            const res = await axios.get(`http://localhost:5000/api/orders/income?pid=${productId}`, {token:`Bearer ${TOKEN}`});
            const list = res.data.sort((a,b)=>{
                return a._id - b._id
            })
            list.map((item) =>
              setPStats((prev) => [
                ...prev,
                { name: MONTHS[item._id - 1], Sales: item.total },
              ])
            );
          } catch (err) {
            console.log(err);
          }
        };
        getStats();
      }, [productId, MONTHS]);
    

  return (
    <div className='product'>
        <div className="productTitleContainer">
            <h1 className="productTitle">product</h1>
            <Link to="/newProduct">
                <button className='productAddButton'>Create</button>
            </Link>
        </div>
        <div className="productTop">
            <div className="productTopLeft">
               <Chart data={pStats} dataKey="Sales" title="Sales Performance" /> 
            </div>
            <div className="productTopRight">
                <div className="productInfoTop">
                    <img src={product.img} alt="" className="productInfoImg" />
                    <span className="productName">{product.title}</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="productInfoKey">{product._id}</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">sales:</span>
                        <span className="productInfovalue">5123</span>
                    </div>
                    {/* <div className="productInfoItem">
                        <span className="productInfoKey">active:</span>
                        <span className="productInfovalue">yes</span>
                    </div> */}
                    <div className="productInfoItem">
                        <span className="productInfoKey">in stock:</span>
                        <span className="productInfovalue">
                            {product.inStock}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div className="productBottom">
        <form className="productForm">
              <div className="productFormLeft">
                  <label>Product Name</label>
                  <input type="text" placeholder={product.title} />
                  <label>Product Description</label>
                  <input type="text" placeholder={product.desc} />
                  <label>Price</label>
                  <input type="text" placeholder={product.price} />
                  <label>In Stock</label>
                  <select name="inStock" id="idStock">
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                  </select>
                  {/* <label>Active</label>
                  <select name="active" id="active">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select> */}
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src={product.img} alt="" className="productUploadImg" />
                      <label htmlFor="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Update</button>
              </div>
          </form>
      </div>
    </div>
  )
}
