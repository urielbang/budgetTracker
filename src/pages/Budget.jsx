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
import { db } from "../config/fireBaseConfig";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth();

export default function Budget() {
  const [rowData, setRowData] = useState([]);
  const [users, setUsers] = useState([]);
  const [signIn, setSignIn] = useState(false);

  const [total, setTotal] = useState(0);

  //! set budget data
  const handleSubmit = async (e) => {
    e.preventDefault();

    //! set data Budget
    const collectionRef = collection(db, "budgets");

    const newDoc = await addDoc(collectionRef, {
      title: e.target[0].value,
      type: e.target[2].value,
      amount: e.target[4].value,
      category: e.target[6].value,
    });

    setRowData([
      ...rowData,
      {
        title: e.target[0].value,
        type: e.target[2].value,
        amount: e.target[4].value,
        category: e.target[6].value,
        id: newDoc.id,
      },
    ]);
    e.target[0].value = "";
    e.target[2].value = "";
    e.target[4].value = "";
    e.target[6].value = "";
  };
  //!dleleteHandle
  const handleClick = async (rowObject) => {
    //! delete from firebase
    const rowRef = doc(db, "budgets", rowObject.id);
    await deleteDoc(rowRef);

    //! delete from state
    const updetedRows = rowData.filter((row) => {
      return row.title !== rowObject.title;
    });

    setRowData(updetedRows);
  };

  const fetchBudgets = () => {
    return onSnapshot(collection(db, "budgets"), (snapshot) => {
      const rowsDataFireBase = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });

      setRowData(rowsDataFireBase);
    });
  };

  //! total
  useEffect(() => {
    const sumWithInitial = rowData.reduce(
      (accumulator, currentValue) => accumulator + Number(currentValue.amount),
      0
    );

    setTotal(sumWithInitial);
  }, [rowData]);

  //! fecth users to check how much users connected
  useEffect(() => {
    //! get data
    try {
      onSnapshot(collection(db, "users"), (snapshot) => {
        const users = snapshot.docs.map((doc) => {
          return doc.data();
        });

        setUsers(users);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);
  useEffect(() => {
    fetchBudgets();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setSignIn(true);
        const uid = user.uid;
      } else {
        setSignIn(false);
      }
    });
  }, []);

  return (
    <div className="budgetIfState">
      {signIn === false ? (
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
                {rowData.map((row, index) => {
                  return (
                    <BudgetCard
                      key={index}
                      handleClick={handleClick}
                      row={row}
                    />
                  );
                })}
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
