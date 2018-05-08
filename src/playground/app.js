

class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            options:props.options
        }
    }

    componentDidMount() {
        //fires when component mounts to the dom
        //fetching data
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json)
            if(options){
               this.setState(()=> ({options}))
             }
        }catch (e){
            // Do Nothing
        }
        
        
        console.log('component--+Did Mount')
    }
    componentDidUpdate(prevProps, prevState){
        //saving data
        //fires whenever state changes for component
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json)
            console.log('save data')
        }
    }
    componentWillUnmount(){
        //barely used
        //fires right before component unmounts
        console.log('willunmount')
    }

    handleDeleteOptions(){
        this.setState(() => ({options:[]})  )
    }

    handleDeleteOption(optionToRemove){
        console.log('asd',optionToRemove )
        this.setState((prevState) => ({
            options:prevState.options.filter((option) => optionToRemove !== option)
        }))
    }
    handlePick(){
        const decision = this.state.options[Math.floor(Math.random() * this.state.options.length)]
        console.log(decision)
    }

    handleAddOption(option){
        if(!option){
            return 'Enter valid value to add item'
        }else if(this.state.options.indexOf(option) > -1){
            return 'this option already exists'
        }else{
            this.setState((prevState)=> ({options:prevState.options.concat(option)}) )
        }
    }

    render(){
       
        const subtitle = 'Put your life in the hands of a computer'
        return (
            <div>
                <Header  subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0 ? true:false}
                    handlePick ={this.handlePick}
                    />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        ) ;
    }
}

IndecisionApp.defaultProps = {
    options: []
}

const Header = (props) =>{
    return (
        <div>
            <h1> {props.title}</h1>
           {props.subtitle && <h2> {props.subtitle} </h2>}
        </div>
    )
}


Header.defaultProps = {
    title: 'Indecision App'
}

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick}
            disabled={!props.hasOptions}
            >
            What should I do?
            </button>
        </div>
    ) ;
}


const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}> Remove All</button>
            {props.options.length === 0 && <p>Please add an option</p>}
            {props.options.map((option) => ( 
                <Option 
                    key={option} 
                    option={option} 
                    handleDeleteOption = {props.handleDeleteOption}/>) )
            }
        </div>
    ) ;
}


const Option = (props) =>{
    return (
        <div>
            <p>{props.option}</p>
            <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.option)
                }}
            
            >Remove</button>
        </div>
    ) ;
}


class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state={
            error:undefined
        }
    }
    handleAddOption(e){
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({error}))

        if(!error){
            e.target.elements.option.value = ''
        }
        

    }

    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button >Submit</button>
                </form>
            </div>
        ) ;
    }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'))

