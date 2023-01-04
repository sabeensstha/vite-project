import BodyLayout from "./components/Layouts/BodyLayout";
import { Routes, Route } from "react-router-dom";
import { Requests } from "./components/Requests/Requests";
import { Login } from "./components/Login/Login";
import PrivateRoutes from "./components/AuthRoutes/AuthRoute";
import { useState } from "react";
import { Settings } from "./components/Settings/Settings";
import { UserList } from "./components/UserList/UserList";

function App() {
  const [token, setToken] = useState(false);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login auth={token} setauth={setToken} />} />

        <Route element={<PrivateRoutes setAuth={setToken} auth={token} />}>
          <Route
            element={<BodyLayout setAuth={setToken} auth={token} />}
            path="/dashboard"
          />
          <Route
            path="/requests"
            element={<Requests auth={token} setAuth={setToken} />}
          />
          <Route
            path="/userList"
            element={<UserList auth={token} setAuth={setToken} />}
          />
          <Route
            path="/settings"
            element={<Settings auth={token} setAuth={setToken} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
// import { useRef, FormEvent, useEffect, useState } from "react";
// import { Box, TextField, Button } from "@mui/material";
// import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";

// interface Designation {
//   sortID: number;
//   id: number;
//   name: string;
//   noOfUsers: number;
// }

// async function fetchDesignations() {
//   let designations: Designation[] = [];

//   let tempArr = [];

//   tempArr.push({ name: "FrontEnd Developer", noOfUsers: 10 });
//   tempArr.push({ name: "Backend Developer", noOfUsers: 10 });
//   tempArr.push({ name: "New Developer", noOfUsers: 8 });
//   tempArr.push({ name: "FrontEnd Developer", noOfUsers: 10 });
//   tempArr.push({ name: "FrontEnd Developer", noOfUsers: 10 });
//   tempArr.push({ name: "FrontEnd Developer", noOfUsers: 6 });
//   tempArr.push({ name: "FrontEnd Developer", noOfUsers: 10 });
//   tempArr.push({ name: "FrontEnd Developer", noOfUsers: 10 });
//   tempArr.push({ name: "FrontEnd Developer", noOfUsers: 21 });
//   tempArr.push({ name: "FrontEnd Developer", noOfUsers: 10 });
//   tempArr.push({ name: "FrontEnd Developer", noOfUsers: 10 });
//   tempArr.push({ name: "Software Developer", noOfUsers: 9 });

//   designations = [
//     ...tempArr.map((designation, id) => {
//       return {
//         ...designation,
//         sortID: id + 1,
//         id
//       } as Designation;
//     })
//   ];

//   return designations;
// }

// export default function App() {
//   const DeleteButton = (params: GridRenderCellParams) => {
//     return (
//       <Button
//         variant="contained"
//         size="small"
//         color="error"
//         onClick={(e) => {
//           //delete logic
//         }}
//       >
//         Delete
//       </Button>
//     );
//   };

//   const columns: GridColDef[] = [
//     { field: "sortID", headerName: "ID", width: 40 },
//     {
//       field: "name",
//       headerName: "Designation Name",
//       minWidth: 300,
//       editable: true,
//       flex: 1
//     },
//     {
//       field: "noOfUsers",
//       headerName: "No of Users",
//       editable: false
//     },
//     {
//       headerName: "Actions",
//       field: "actions",
//       width: 150,
//       editable: false,
//       sortable: false,
//       filterable: false,
//       renderCell: DeleteButton
//     }
//   ];

//   let [designations, setDesignations] = useState<Designation[]>([]); // fetch data from the api to this state first, this never gets mutated/changed whatsoever
//   let [rows, setRows] = useState<Designation[]>([]); // this is the data that gets modified and is linked to the datagrid

//   useEffect(() => {
//     fetchDesignations().then((rows: Designation[]) => {
//       setDesignations(rows);
//       setRows(rows);
//     });
//   }, []);

//   const debounceMs = 500;
//   const debounceRef = useRef<any>(null);
//   function handleSearch(e: FormEvent) {
//     let input = e.target as HTMLInputElement;

//     if (debounceRef.current !== null) {
//       clearInterval(debounceRef.current);
//     }

//     function search(str: string) {
//       /** this is where the actual search happens
//        * we're searching from the initial designation state because that is constant throughout the page
//        * after filtering from the designation variable, we use the filtered data to set state of rows, which in turn updates the datagrid since datagrid's rows attribute is linked to rows variable
//        */
//       let result = designations.filter((designation) =>
//         designation.name.toLowerCase().includes(str.toLowerCase())
//       );

//       setRows(result);
//       debounceRef.current = null;
//     }

//     debounceRef.current = setTimeout(() => search(input.value), debounceMs);
//   }

//   return (
//     <>
//       <TextField
//         label="Search"
//         variant="outlined"
//         size="medium"
//         onChange={handleSearch}
//       />
//       <Box height="80vh">
//         <DataGrid
//           columns={columns}
//           pageSize={10}
//           rowsPerPageOptions={[10]}
//           rows={rows} // rows variable is used and not the initial fetched designations
//         />
//       </Box>
//     </>
//   );
// }

