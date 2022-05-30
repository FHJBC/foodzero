// declare namespace Express {
//     interface Request {
//         yourProperty: <YourType>;
//     }
// }

declare global {
   namespace Express {
   export interface Request {
      user?: Object
   }
}
}