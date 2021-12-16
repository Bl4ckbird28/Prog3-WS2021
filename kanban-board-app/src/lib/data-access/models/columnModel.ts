import { ItemModel } from './itemModel';

export interface ColumnModel {
  id: number;
  name: String;
  position: number;
  items: ItemModel[];
}

// {
//   "id": 0,
//   "name": "string",
//   "position": 0,
//   "items": [
//     {
//       "id": 0,
//       "title": "string",
//       "position": 0,
//       "timestamp": "2021-12-09T10:04:42.058Z"
//     }
//   ]
// }
