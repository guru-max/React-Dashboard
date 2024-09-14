import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { deepPurple, yellow, pink, blue, orange } from "@mui/material/colors";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontFamily: "poppins-medium",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 13,
    fontFamily: "poppins-medium",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const rows = [
  {
    no: 1,
    bcolor: deepPurple[100],
    color: deepPurple[700],
    name: "Landing design",
    date: "May 21,2019",
    startTime: "1.10 pm",
    stoptime: "9:20 pm",
    Duration: "8:10:37",
  },
  {
    no: 3,
    bcolor: yellow[200],
    color: yellow[900],
    name: "Mobile App",
    date: "May 22,2019",
    startTime: "12:00pm",
    stoptime: "8:00pm",
    Duration: "8:00:00",
  },
  {
    no: 5,
    bcolor: pink[50],
    color: pink[400],
    name: "UI/UX",
    date: "May 23,2019",
    startTime: "12:00pm",
    stoptime: "8:00pm",
    Duration: "0:10:37",
  },
  {
    no: 2,
    bcolor: blue[100],
    color: blue[600],
    name: "Website/apps",
    date: "May 24,2019",
    startTime: "1:11pm",
    stoptime: "9:00pm",
    Duration: "7:49:37",
  },
  {
    no: 9,
    bcolor: orange[100],
    color: orange[500],
    name: "Branding",
    date: "May 26,2019",
    startTime: "1:10pm",
    stoptime: "1:20pm",
    Duration: "0:10:37",
  },
];

export default function Tableui() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>
              <b>Project</b>
            </StyledTableCell>
            <StyledTableCell align="center">
              <b>Date</b>
            </StyledTableCell>
            <StyledTableCell align="center">
              <b>Start time</b>
            </StyledTableCell>
            <StyledTableCell align="center">
              <b>End Time</b>
            </StyledTableCell>

            <StyledTableCell align="center">
              <b>Duration</b>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: row.bcolor,
                      color: row.color,
                      fontFamily: "poppins-medium",
                      padding: "5px",
                      height: "20px",
                      width: "20px",
                      textAlign: "center",
                      borderRadius: "5px",
                    }}
                  >
                    {row.no}
                  </div>
                  {row.name}
                </div>
              </StyledTableCell>
              <StyledTableCell align="center">{row.date}</StyledTableCell>
              <StyledTableCell align="center">{row.startTime}</StyledTableCell>
              <StyledTableCell align="center">{row.stoptime}</StyledTableCell>
              <StyledTableCell align="center">{row.Duration}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
