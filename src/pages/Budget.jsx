import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";
import TableContainer from "@mui/material/TableContainer";
import TextField from "@mui/material/TextField";
import BudgetCard from "../components/BudgetCard";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";

export default function Budget(props) {
  const [rowData, setRowData] = useState([]);

  const [total, setTotal] = useState(0);
  // const [isHasUser, setisHasUser] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setRowData([
      ...rowData,
      {
        title: e.target[0].value,
        type: e.target[2].value,
        amount: e.target[4].value,
        category: e.target[6].value,
      },
    ]);
    e.target[0].value = "";
    e.target[2].value = "";
    e.target[4].value = "";
    e.target[6].value = "";
  };
  const handleClick = (title) => {
    const updetedRows = rowData.filter((row) => {
      return row.title !== title;
    });
    setRowData(updetedRows);
  };
  const rows = rowData.map((row, index) => {
    return <BudgetCard key={index} handleClick={handleClick} row={row} />;
  });

  useEffect(() => {
    const sumWithInitial = rowData.reduce(
      (accumulator, currentValue) => accumulator + Number(currentValue.amount),
      0
    );
    console.log(sumWithInitial);
    setTotal(sumWithInitial);
  }, [rowData]);

  return (
    <div className="budgetIfState">
      {props.user === null ? (
        <h1>not user connect</h1>
      ) : (
        <div className="budgetContainer">
          <nav>
            <h1 className="headeBudget">Budget tracker</h1>
          </nav>
          <form onSubmit={handleSubmit} className="formSubmit">
            <TextField
              id="outlined-basic"
              label="title"
              variant="outlined"
              name="title"
            />
            <TextField
              id="outlined-basic"
              label="type"
              variant="outlined"
              name="type"
            />
            <TextField
              id="outlined-basic"
              label="amount"
              variant="outlined"
              name="amount"
              type="number"
            />
            <TextField
              id="outlined-basic"
              label="category"
              variant="outlined"
              name="category"
            />
            <Button type="submit" variant="contained">
              Add Budget
            </Button>
          </form>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>title</TableCell>
                  <TableCell align="right">type</TableCell>
                  <TableCell align="right">amount</TableCell>
                  <TableCell align="right">category</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows || false}
                <TableRow className="rowCard">
                  <TableCell> total: {total}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </div>
  );
}
