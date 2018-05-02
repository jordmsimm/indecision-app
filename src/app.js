console.log('app is running')

const app ={
    title:'Indecision App',
    subTitle:'Put your life in the hands of a computer',
    options:[]
};
const onFormSubmit = (e) =>{
    e.preventDefault();
    
    const option = e.target.elements.option.value;
    //console.log(option)
    if (option){
        app.options.push(option);
        e.target.elements.option.value ='';
        render();
    }
};

const removeAll = () => {
    app.options = [];
    render();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum]
    console.log(option)
}

const appRoot = document.getElementById("app")


const render = () => {
    const template = (
    <div>
    {app.title && <h1> {app.title}</h1> }
    {app.subTitle && <p>{app.subTitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options":"No options" }</p>
    
    <button disabled={app.options.length == 0 ?true:false} onClick={onMakeDecision}>What Should I Do?</button>
    <button onClick={removeAll}>Remove All</button>
   
    <ol>
    {
        app.options.map((opt)=><li key={opt}> {opt}</li>)
    }
    </ol>
    <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button >Add Option</button>
    </form>
        
    </div>
);

    ReactDOM.render(template,appRoot);
};

render();