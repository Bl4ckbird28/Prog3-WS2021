import { ColumnModel } from "./columnModel";

export interface BoardModel {
  title: string;
  columns: ColumnModel[];
}

// {
//   "title": "string",
//   "columns": [
//     {
//       "id": 0,
//       "name": "string",
//       "position": 0,
//       "items": [
//         {
//           "id": 0,
//           "title": "string",
//           "position": 0,
//           "timestamp": "2021-12-09T10:07:18.747Z"
//         }
//       ]
//     }
//   ]
// }
