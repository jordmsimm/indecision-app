
let visibility = false;
const appRoot = document.getElementById("app")
const onShowDetails = () =>{
    visibility = !visibility;
    render();
}
const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onShowDetails}>{visibility == true?'Hide Details':'Show Details'}</button>
            {visibility && (
                <div><p>hi</p></div>)
            }
        </div>
    );

    ReactDOM.render(template,appRoot);
};

render();