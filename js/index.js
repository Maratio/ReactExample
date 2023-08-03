<<<<<<< HEAD

ReactDOM.render(<h1>Privet</h1>, document.getElementById("app"))
=======
// ReactDOM.render(React.createElement("input",{
//     placeholder: "Help text",
//     onClick: () => console.log("Clicked"),
//     onMouseEnter: () => console.log("Mouse Over") 
// }), document.getElementById("app"))

// ReactDOM.render(<input placeholder = "Help text"/>, document.getElementById("app"))

// const inputclick = () => console.log("Clicked")
// const mouseOver = () => console.log("Mouse Over")
// const el = <input placeholder = "Help text" onClick={inputclick} onMouseEnter={mouseOver}/>
// const app = document.getElementById("app")
// ReactDOM.render(el, app )

const inputClick = () => console.log("Clicked")
const mouseOver = () => console.log("Mouse Over")

const helpText = "Help text"
const el = 
(<div>
    <h1>{helpText}</h1>
    <input placeholder = {helpText} onClick = {inputClick} onMouseEnter={mouseOver}/>
<p>
    {helpText == "Help text" ? "Yes" : "No"}
</p>
</div>)
const app = document.getElementById("app")
ReactDOM.render(el, app )
>>>>>>> 84daa7b (SecondCommit)
