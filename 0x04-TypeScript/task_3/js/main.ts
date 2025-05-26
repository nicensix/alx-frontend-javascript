/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

// Create row object
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// Insert row and store generated RowID
const newRowID: RowID = CRUD.insertRow(row);

// Create updated row object
const updatedRow: RowElement = { 
  ...row, 
  age: 23 
};

// Update row
CRUD.updateRow(newRowID, updatedRow);

// Delete row
CRUD.deleteRow(newRowID);