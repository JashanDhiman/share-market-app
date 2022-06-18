import React from "react";
import "../App.css";
import { useState } from "react";
import Chart from "./Chart";
import axios from "axios";
import { useEffect } from "react";

const DataStored = () => {
  const [optionData, setOptionData] = useState([]);
  const fetchData = async (token) => {
    var config = {
      method: "post",
      url: `http://192.168.83.183:4000/historical`,
      data: token,
    };
    await axios(config)
      .then((response) => {
        setOptionData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/*<Chart data={dataObject.records.data} />*/}

      <h1>Current Underlying Value : {1555.55}</h1>

      <table style={{ margin: "auto" }}>
        <thead>
          {/*<tr>
            <th className="text-center" colSpan="10">
              CALLS
            </th>
            <th></th>
            <th className="text-center" colSpan="10">
              PUTS
            </th>
          </tr>
          <tr>
            <th title="Open Interest in contracts">
              OI<span> </span>
            </th>
            <th title="Change in Open Interest (Contracts)">
              Chng in OI<span> </span>
            </th>
            <th title="Volume in Contracts">
              Volume<span> </span>
            </th>
            <th title="Implied Volatility">
              IV<span> </span>
            </th>
            <th title="Last Traded Price">
              LTP<span> </span>
            </th>
            <th title="Change w.r.t to Previous Close">
              Chng<span> </span>
            </th>
            <th title="Best Bid/Buy Price">
              Bid Price<span> </span>
            </th>
            <th title="Best Ask/Sell Price">
              Ask Price<span> </span>
            </th>
            <th title="Best Bid/Buy Qty">
              Bid Qty<span> </span>
            </th>
            <th title="Best Ask/Sell Qty">
              Ask Qty<span> </span>
            </th>
            <th style={{ width: "1re8" }}>
              Strike Price<span> </span>
            </th>
            <th title="Best Bid/Buy Qty">
              Bid Qty<span> </span>
            </th>
            <th title="Best Bid/Buy Price">
              Bid Price<span> </span>
            </th>
            <th title="Best Ask/Sell Price">
              Ask Price<span> </span>
            </th>
            <th title="Best Ask/Sell Qty">
              Ask Qty<span> </span>
            </th>
            <th title="Change w.r.t to Previous Close">
              Chng<span> </span>
            </th>
            <th title="Last Traded Price">
              LTP<span> </span>
            </th>
            <th title="Implied Volatility">
              IV<span> </span>
            </th>
            <th title="Volume in Contracts">
              Volume<span> </span>
            </th>
            <th title="Change in Open Interest (Contracts)">
              Chng in OI<span> </span>
            </th>
            <th title="Open Interest in contracts">
              OI<span> </span>
            </th>
          </tr>*/}
        </thead>
        <tbody>
          <tr>
            <th>close</th>
            <th>high</th>
            <th>low</th>
            <th>oi</th>
            <th>open</th>
            <th>timestamp</th>
            <th>volume</th>
          </tr>
          {optionData &&
            optionData.map(
              ({ close, high, low, oi, open, timestamp, volume }, index) => {
                //setUnderlying(155.45);
                return (
                  <tr key={index}>
                    <>
                      <td>{close}</td>
                      <td>{high}</td>
                      <td>{low}</td>
                      <td>{oi}</td>
                      <td>{open}</td>
                      <td>{timestamp}</td>
                      <td>{volume}</td>
                      {/*</>*/}
                      {/*<td style={{ width: "8rem" }}>{data.strikePrice}</td>*/}
                      {/*<>*/}
                      {/*<td>{}</td>
                      <td>{}</td>
                      <td>{}</td>
                      <td>{}</td>
                      <td>{}</td>
                      <td>{}</td>
                      <td>{}</td>
                      <td>{}</td>
                      <td>{}</td>
                      <td>{}</td>*/}
                    </>
                  </tr>
                );
              }
            )}
        </tbody>
      </table>
    </>
  );
};
//combination of two columns,
//show all together in one graph and also have option to show any one of them,
//OI as line  and change in OI as shdow in graph

export default DataStored;
