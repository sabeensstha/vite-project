import * as React from "react";
import { DataGrid, GridColDef, GridColumnsPanel, GridValueGetterParams } from "@mui/x-data-grid";
import axios from "axios";
import UserActions from "../UserActions/UserActions";
import { Box, Checkbox, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, SelectChangeEvent, TextField } from "@mui/material";


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


export interface User {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  roles: any;
}




async function fetchUser() {
  let users: User[] = [];

  let tempArr = [{
    "id": 1,
    "firstName": "Sabeen",
    "middleName": "",
    "lastName": "Shrestha",
    "email": "sabeensstha@gmail.com",
    "roles": [
      "Admin",
      "Manager",
      "Staffs"
    ]
  },
  {
    "firstName": "Nikesh",
    "middleName": "Raj ",
    "lastName": "Maharjan",
    "email": "nks@gmail.com",
    "roles": [
      "Staff"
    ],
    "id": 2
  },
  {
    "firstName": "New",
    "middleName": "1 ",
    "lastName": "User",
    "email": "new@new.com",
    "roles": [
      "Staff"
    ],
    "id": 3
  },
  {
    "firstName": "Nabin",
    "middleName": "Kumar",
    "lastName": "Pradhan",
    "email": "nbnaki@gmail.com",
    "roles": [
      "Manager",
      "Staff"
    ],
    "id": 4
  },
  {
    "firstName": "Ranjan",
    "middleName": "Dev",
    "lastName": "Shrestha",
    "email": "rnjn@gmial.com",
    "roles": [
      "Staff"
    ],
    "id": 5
  },
  {
    "firstName": "Rani",
    "middleName": "Kumari",
    "lastName": "Jha",
    "email": "rkj@gmail.com",
    "roles": [
      "Staff"
    ],
    "id": 6
  },
  {
    "firstName": "Admin",
    "middleName": "",
    "lastName": "New",
    "email": "admin@admin.com",
    "roles": [
      "Admin"
    ],
    "id": 7
  },
  {
    "firstName": "User ",
    "middleName": "",
    "lastName": "One",
    "email": "user1@gmail.com",
    "roles": [
      "Staff"
    ],
    "id": 8
  },
  {
    "firstName": "New User",
    "middleName": "",
    "lastName": "Two",
    "email": "newuser2@gmail.com",
    "roles": [
      "Staff"
    ],
    "id": 9
  },
  {
    "firstName": "New User",
    "middleName": "",
    "lastName": "Two",
    "email": "sabeensstha@gmail.com",
    "roles": [
      "Staff"
    ],
    "id": 9
  },
  ];


  users = [
    ...tempArr.map((user, id) => {
      return {
        ...user,
        sortID: id + 1,
        id
      } as User;
    })
  ];

  return users;
}

export default function DataTable() {
  let [users, setUsers] = React.useState([] as User[]); // fetch data from the api to this state first, this never gets mutated/changed whatsoever
  let [rows, setRows] = React.useState([] as User[]);
  const [rowId, setRowId] = React.useState(null)
  const [pageSize, setPageSize] = React.useState<number>(5)
  const [rolesFilter, setRolesFilter] = React.useState<string[]>([]);

  const columns: GridColDef[] = [
    { field: "id", headerName: "S.N.", width: 70, headerClassName: "bold" },
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
  const roles = [
    "Admin",
    "Manager",
    "Staff"
  ]

  React.useEffect(() => {
    fetchUser().then((rows: User[]) => {
      setUsers(rows);
      setRows(rows);
    });
  }, []);

  const debounceMs = 500;
  const debounceRef = React.useRef<any>(null);
  function handleSearch(e: React.FormEvent) {
    let input = e.target as HTMLInputElement;

    if (debounceRef.current !== null) {
      clearInterval(debounceRef.current);
    }

    function search(str: string) {
      /** this is where the actual search happens
       * we're searching from the initial designation state because that is constant throughout the page
       * after filtering from the designation variable, we use the filtered data to set state of rows, which in turn updates the datagrid since datagrid's rows attribute is linked to rows variable
       */
      let result = users.filter((user) =>
        user.firstName.toLowerCase().includes(str.toLowerCase())
      );
      let resultEmail = users.filter((user) =>
        user.email.toLowerCase().includes(str.toLowerCase())
      );

      setRows(result);
      setRows(resultEmail);
      debounceRef.current = null;
    }

    debounceRef.current = setTimeout(() => search(input.value), debounceMs);
  }
  const handleRoleChange = (event: SelectChangeEvent<typeof rolesFilter>) => {
    const {
      target: { value },
    } = event;
    console.log(value);
    setRolesFilter(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    let resultEmail = users.filter((user) => {
      for (let role of (value as string[])) {
        if (!user.roles.includes(role))
          return false
      }
      return true;
    });
    setRows(resultEmail)
  };


  // React.useEffect(() => {
  //   getData();
  // }, []);
  // const getData = async () => {
  //   const users = await axios.get(`http://localhost:3000/users`);
  //   setData(users.data);
  //   console.log(users);
  // };
  // console.log(data);
  return (
    <div style={{ height: 500, width: "100%" }}>
      <Box sx={{ display: "flex" }}>
        <TextField
          id="input-with-sx"
          label="Search"
          variant="filled"
          sx={{
            width: "500px",
            paddingBottom: "10px",
          }}
          onChange={handleSearch}
        />
        <InputLabel id="demo-multiple-checkbox-label">Roles</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={rolesFilter}
          onChange={handleRoleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
          sx={{
            width: 350,
            m: 0
          }}
        >
          {roles.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={rolesFilter.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>

      </Box>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        rowsPerPageOptions={[5, 10, 20]}
        checkboxSelection
        rowSpacingType={"margin"}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
      />
    </div>
  );
}
