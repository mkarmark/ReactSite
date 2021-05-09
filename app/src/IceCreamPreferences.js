import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";
import Table from "./Table";
import './App.css';

function IceCreamPreferences() {
    /* 
    - Columns is a simple array right now, but it will contain some logic later on. It is recommended by react-table to memoize the columns data
    - Here in this example, we have grouped our columns into two headers. react-table is flexible enough to create grouped table headers
  */
    const [loadingData, setLoadingData] = useState(true);
    const columns = useMemo(
      () => [
        {
          Header: "Ice Cream Preferences",
          columns: [
            {
              Header: "Flavor",
              accessor: "flavor"
            },
            {
              Header: "# of votes",
              accessor: "count"
            }
          ]
        }
      ],
      []
    );

    const [data, setData] = useState([]);
    
    useEffect(() => {
      async function getData() {
        await axios
          .get("/api/GetIceCreamPreferences")
          .then((response) => {
            // check if the data is populated
            console.log(response.data);
            setData(response.data);
            // you tell it that you had the result
            setLoadingData(false);
          });
      }
      if (loadingData) {
        // if the result is not ready so you make the axios call
        getData();
      }
    }, [loadingData, setData, setLoadingData]);  

  return (
    <div className="App">
      <header className="App-header">
      <img src="https://media.timeout.com/images/105680295/image.jpg" alt="" width="300" />
        {loadingData ? (
          <p>Loading Please wait...</p>
        ) : (
          <div>
        <Table columns={columns} data={data} />
                  <br/>
                  <a 
                  className="App-link"
                  href="/vote"
                >
                  Vote for your ice cream flavor!!
                </a>
          </div>
          
        )}
      </header>
    </div>      
  );
}

export default IceCreamPreferences;
