import ListItem from "./ListItem";


const ListPassenger = (props) => {
  return (
    <div>
      <table className="listPassenger">
        <tbody>
          <tr>
          <td>Firstname</td>
          <td>Lastname</td>
          <td>Age</td>
          <td>Gender</td>
          <td>Country</td>
          <td>Mail</td>
          <td>Event</td>
          </tr>
        </tbody>
        {props.data?.map((item) => (
          <ListItem
            key={item.id}
            data={item}
            hapusPengunjung={props.hapusPengunjung}
          />
        ))}
      </table>
    </div>
  );
};
export default ListPassenger;
