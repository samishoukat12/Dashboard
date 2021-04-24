import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { initialStudent } from './data'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function NewTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ backgroundColor: "pink", color: "red" }}>
              Name
            </TableCell>
            <TableCell align="right">Roll No</TableCell>
            <TableCell align="right">Class</TableCell>
            <TableCell align="right">Batch</TableCell>
            <TableCell align="right">City</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {initialStudent.map((student) => {
            return (
              <TableRow>
                <TableCell component="th" scope="row">
                  {student.name}
                </TableCell>
                <TableCell align="right">{student.rollno}</TableCell>
                <TableCell align="right">{student.class}</TableCell>
                <TableCell align="right">{student.batch}</TableCell>
                <TableCell align="right">{student.City}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
