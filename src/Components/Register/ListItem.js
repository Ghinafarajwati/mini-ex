import "../../Pages/RegisterEvent/RegisterEvent.css";


const ListItem = (props) => {
  const { id, firstname, lastname, age, gender, country, mail, event } = props.data;

  return (
      <tbody className="listItem ">
      <tr>
        <td>{firstname}</td>
        <td>{lastname}</td>
        <td>{age}</td>
        <td>{gender}</td>
        <td>{country}</td>
        <td>{mail}</td>
        <td>{event}</td>
        <td className="removeBorder" onClick={() => props.hapusPengunjung(id)}
        >
          <button className="Inputbtn">Hapus</button>
        </td>
      </tr>
    </tbody>
  );
};
export default ListItem;
