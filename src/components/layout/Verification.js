import React from "react";
import { Grid, Container, Button } from "@mui/material";
import axios from "axios";
import Constants from "../../constants/Constants";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function Verification() {
  const [verificationStreamer, setVerificationStreamer] = React.useState([]);
  const [flag, setFlag] = React.useState(false);

  React.useEffect(() => {
    axios
      .get(`${Constants.ADMIN_SERVER_URL}/api/verification`)
      .then((response) => {
        setVerificationStreamer(response.data);
        console.log(response.data);
      })
      .catch((err) =>
        // setAlert('Choose Proper Image', 'danger')
        console.log(err)
      );
  }, []);

  const handleAccept = (index) => {
    axios
      .post(
        `${Constants.ADMIN_SERVER_URL}/api/verification/${verificationStreamer[index]._id}`
      )
      .then((response) => {
        let temp = verificationStreamer;
        temp.splice(index, 1);
        setVerificationStreamer(temp);
        setFlag(!flag);
      })
      .catch((err) =>
        // setAlert('Choose Proper Image', 'danger')
        console.log(err)
      );
  };

  return (
    <React.Fragment>
      <Grid>
        <Container sx={{ display: "flex", flexDirection: "row", mt: 10 }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Streamer Email</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Gender</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {verificationStreamer.map((streamer, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {streamer.email}
                    </TableCell>
                    <TableCell align="right">
                      {streamer.firstname + streamer.lastname}
                    </TableCell>
                    <TableCell align="right">{streamer.gender}</TableCell>
                    <TableCell
                      align="right"
                      onClick={(e) => handleAccept(index)}
                    >
                      <Button>Accept</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Grid>
    </React.Fragment>
  );
}
