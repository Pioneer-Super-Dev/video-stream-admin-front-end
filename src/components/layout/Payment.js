import * as React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import Constants from "../../constants/Constants";

const columns = [
  { id: "from", label: "From", minWidth: 170 },
  { id: "to", label: "To", minWidth: 100 },
  {
    id: "amount",
    label: "Amount($)",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "date",
    label: "Date",
    minWidth: 170,
    align: "right",
  },
];

export default function Payment() {
  const [rows, setRows] = React.useState([
    {
      from: "Jackson@gmail.com",
      to: "Pioneer@outlook.com",
      amount: "12.4",
      date: "2021-11-03",
    },
    {
      from: "Jackson@gmail.com",
      to: "Pioneer@outlook.com",
      amount: "12.4",
      date: "2021-11-03",
    },
    {
      from: "Jackson@gmail.com",
      to: "Pioneer@outlook.com",
      amount: "12.4",
      date: "2021-11-03",
    },
    {
      from: "Jackson@gmail.com",
      to: "Pioneer@outlook.com",
      amount: "12.4",
      date: "2021-11-03",
    },
    {
      from: "Jackson@gmail.com",
      to: "Pioneer@outlook.com",
      amount: "12.4",
      date: "2021-11-03",
    },
    {
      from: "Jackson@gmail.com",
      to: "Pioneer@outlook.com",
      amount: "12.4",
      date: "2021-11-03",
    },
    {
      from: "Jackson@gmail.com",
      to: "Pioneer@outlook.com",
      amount: "12.4",
      date: "2021-11-03",
    },
    {
      from: "Jackson@gmail.com",
      to: "Pioneer@outlook.com",
      amount: "12.4",
      date: "2021-11-03",
    },
    {
      from: "Jackson@gmail.com",
      to: "Pioneer@outlook.com",
      amount: "12.4",
      date: "2021-11-03",
    },
    {
      from: "Jackson@gmail.com",
      to: "Pioneer@outlook.com",
      amount: "12.4",
      date: "2021-11-03",
    },
    {
      from: "Jackson@gmail.com",
      to: "Pioneer@outlook.com",
      amount: "12.4",
      date: "2021-11-03",
    },
    {
      from: "Jackson@gmail.com",
      to: "Pioneer@outlook.com",
      amount: "12.4",
      date: "2021-11-03",
    },
  ]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  React.useEffect(() => {
    axios
      .get(`${Constants.ADMIN_SERVER_URL}/api/payment`)
      .then((response) => {
        setRows(response.data);
        console.log(response.data);
      })
      .catch((err) =>
        // setAlert('Choose Proper Image', 'danger')
        console.log(err)
      );
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 800 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
