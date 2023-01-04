import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import axios from "axios";
import UserActions from "../UserActions/UserActions";
import './dataTable.css'
import { TextField } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select"
import InputLabel from "@mui/material/InputLabel";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";


interface Users {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  roles: any;
}

async function fetchUsers() {
  let users: Users[] = [];

  let tempArr = [{
    "id": 1,
    "firstName": "Sabeen",
    "middleName": "",
    "lastName": "Shrestha",
    "email": "sabeensstha@gmail.com",
    "roles": [
      "Admin",
      "Manager",
      "Staff"
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
    "firstName": "New",
    "middleName": "",
    "lastName": "Usre",
    "email": "sad@fsa.dsa",
    "roles": [
      "Admin",
      "Manager",
      "Staff"
    ],
    "id": 10
  }];


  // const FixedUsers = await axios.get(`http://localhost:3000/users`);
  // tempArr.push(FixedUsers.data);

  users = [
    ...tempArr.map((user: any, id: number) => {
      return {
        ...user,
        sortID: id + 1,
        id
      } as Users;
    })
  ];

  return users;
}




export default function DataTable() {
  let [users, setUsers] = React.useState([] as Users[]);
  let [rows, setRows] = React.useState([] as Users[]);
  const [rowId, setRowId] = React.useState(null)
  const [pageSize, setPageSize] = React.useState<number>(5)
  const roles = [
    "Admin",
    "Manager",
    "Staff"
  ]
  const [rolesFilter, setRolesFilter] = React.useState<string[]>([]);
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


  const columns: GridColDef[] = [
    { field: "sortId", headerName: "S.N.", width: 70, headerClassName: "bold" },
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
    fetchUsers().then((rows: Users[]) => {
      setUsers(rows);
      setRows(rows);
    });
  };
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
       * after filtering from the designation variable, we use the filtered rows to set state of rows, which in turn updates the datagrid since datagrid's rows attribute is linked to rows variable
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
      typeof value === "string" ? value.split(",") : value
    );
    let result = users.filter((user) => {
      for (let role of value) {
        if (!user.roles.includes(role)) {
          return false;
        }
      }
      return true;
    }
    );
    setRows(result);
  };
  return (
    <div style={{ height: 500, width: "100%" }}>
      <span style={{ display: "flex" }}>
        <TextField
          label="Search"
          variant="outlined"
          size="medium"
          onChange={handleSearch}
        />
        <FormControl sx={{ ml: 2, width: 200 }}>
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
            style={{
              width: "200px"
            }}
          >

            {roles.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={rolesFilter.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </span>
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
