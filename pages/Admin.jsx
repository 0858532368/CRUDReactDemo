import React from "react";

const Admin = ({ data, removeProducts }) => {
  return (
    <div>
      <table className="table table-boredred table-stripped">
        <thead>
          <tr>
            <th>id</th>
            <th>Title</th>
            <th>price</th>
            <th>decription</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>
                <button onClick={() => removeProducts(item.id)}>xoa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
