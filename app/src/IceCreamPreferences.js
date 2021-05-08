import React, { useMemo } from "react";
import Table from "./Table";
import './App.css';

function IceCreamPreferences() {
    /* 
    - Columns is a simple array right now, but it will contain some logic later on. It is recommended by react-table to memoize the columns data
    - Here in this example, we have grouped our columns into two headers. react-table is flexible enough to create grouped table headers
  */
    const columns = useMemo(
      () => [
        {
          Header: "Ice Cream Preferences",
          columns: [
            {
              Header: "Flavor",
              accessor: "show.flavor"
            },
            {
              Header: "# of votes",
              accessor: "show.count"
            }
          ]
        }
      ],
      []
    );

    const data = [
      {
        "flavor": "vanilla",
        "count": 2
      },
      {
        "flavor": "coffee",
        "count": 1
      }
    ]

  return (
    <div className="App">
      <Table columns={columns} data={data} />
    </div>      
  );
}

export default IceCreamPreferences;
