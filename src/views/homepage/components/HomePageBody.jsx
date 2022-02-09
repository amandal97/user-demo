import { Table } from "reactstrap";

/**
 * This component represents the Body of HomePage
 * It is responsible for displaying Table of Users
 * @param {Object} props
 * @returns Table
 */

function HomePageBody({ userList }) {
  return (
    <div className="body">
      {userList.length ? (
        <Table striped>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Joining Date</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td>{item.joining}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        `No Data Found!`
      )}
    </div>
  );
}

export default HomePageBody;
