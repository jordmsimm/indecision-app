

const appRoot = document.getElementById("app")

class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state={
            visibility:true
    }

    handleToggleVisibility(){
        this.setState((prevState)=>{
            return {
                visibility: !prevState.visibility
            };
        })
    }
    render(){
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility == true?'Hide Details':'Show Details'}</button>
                {this.state.visibility && (
                    <div><p>Hey. These are some details you can see now.</p></div>)
                }
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle/>,appRoot);

