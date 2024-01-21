import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
export default function BudgetCard({ row, handleClick }) {
  return (
    <TableRow className="rowCard">
      <TableCell>{row.title}</TableCell>
      <TableCell align="right">{row.type}</TableCell>
      <TableCell align="right">{row.amount}</TableCell>
      <TableCell align="right">{row.category}</TableCell>
      <TableCell align="right">
        <button
          onClick={() => {
            handleClick(row);
          }}
          className="btnDelete"
        >
          Delete
        </button>
      </TableCell>
    </TableRow>
  );
}
