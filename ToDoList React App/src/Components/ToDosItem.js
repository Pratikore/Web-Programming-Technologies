const ToDosItem = (props) => {
    return (
<div>
    <h4>
        {props.todo.SrNum}
    </h4>
    <h4>
        {props.todo.Title}
    </h4>
    <button className="btn btn-danger" onClick={()=>props.onDelete(props.todos)}>Delete</button>
</div>
    );
}
export default ToDosItem;