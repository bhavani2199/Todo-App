export default function TodoItem({ todo, deleteTodo }) {
  return (
    <li className="m-5 p-4 border-1 ">
      <strong>{todo.activity}</strong> | RM{todo.price} | {todo.type} | 
      Booking: {todo.booking ? 'Yes' : 'No'} | Accessibility: {todo.accessibility.toFixed(2)}
      <button className="border-1 rounded p-1 ml-6 bg-red-600 text-white" onClick={() => deleteTodo(todo.id)} >Delete</button>
    </li>
  );
}
