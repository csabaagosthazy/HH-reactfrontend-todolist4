import React from "react";

const TodoTable = props => {
  return (
    <div>
      <table align="center">
        <tbody>
          <tr>
            <th>Description</th>
            <th>Date</th>
          </tr>
          {props.todos.map(todo => (
            <tr key={todo.id}>
              <td>{todo.desc}</td>
              <td>{todo.date}</td>
              <td>
                <button
                  type="button"
                  onClick={() => props.handleDelete(todo.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoTable;
