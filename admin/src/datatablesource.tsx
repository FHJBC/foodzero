export interface IColumn {
  field: string,
  headerName: string,
  width: number,
  renderCell?: (params: any) => any
}

export const userColumns: IColumn[] = [
  { field: "_id", headerName: "ID", width: 100 },
  {
    field: "user",
    headerName: "User",
    width: 100,
    renderCell: (params: any) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "firstname",
    headerName: "First Name",
    width: 100,
  },
  {
    field: "lastname",
    headerName: "Last Name",
    width: 100,
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 100,
  },
];

export const reservationColumns: IColumn[] = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "date",
    headerName: "Date",
    width: 150,
  },
  {
    field: "time",
    headerName: "Time",
    width: 100,
  },
  {
    field: "guestsNumber",
    headerName: "Number of Persons",
    width: 230,
  },
  {
    field: "client",
    headerName: "Client",
    width: 100,
  },
];

export const menuColumns: IColumn[] = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "description",
    headerName: "Description",
    width: 200,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  }
];
