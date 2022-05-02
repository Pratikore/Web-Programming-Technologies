import ToDosItem from "./ToDosItem";

const ToDos =(props) => {
    return (
        <div className="container">
            <h3 className="text-center">To Do List</h3>
            {props.todos.map((todos)=>{
                return <ToDosItem todo = {props.todos} onDelete = {props.onDelete}/>
            })}
            
        </div>
    );
}
export default ToDos;