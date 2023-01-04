import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import axios from "axios";
import UserActions from "../UserActions/UserActions";


export interface IValues {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  roles: any;
}

export default function DataTable() {
  const [data, setData] = React.useState([] as IValues[]);
  const [rowId, setRowId] = React.useState(null);
  const [pageSizee, setPageSizee] = React.useState<number>(5);

  const columns: GridColDef[] = [
    { field: "id", headerName: "S.N.", width: 70 },
    { field: "image", headerName: "Image", width: 120 },
    {
      field: "name",
      headerName: "Name",
      description: "This column has a value getter and is not sortable.",
      sortable: true,
      filterable: true,
      width: 600,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ""} ${params.row.middleName || ""} ${params.row.lastName || ""
        }`,
    },
    {
      field: "roles",
      headerName: "Roles",
      type: "array",
      editable: true,
      valueOptions: ["Admin", "Manager", "Staff"],
      width: 300,
    },
    {
      field: "email",
      headerName: "Email",
      type: "string",
      filterable: true,
      width: 300,
    },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      width: 300,
      renderCell: (params) => (
        <UserActions {...{ params, rowId, setRowId }} />
      )
    },
  ];
  React.useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const users = await axios.get(`http://localhost:3000/users`);
    setData(users.data);
    console.log(users);
  };
  console.log(data);
  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        checkboxSelection
        rowSpacingType={"margin"}
        pageSize={pageSizee}
        onPageSizeChange={(newPageSize) => setPageSizee(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
      />
    </div>
  );
}
