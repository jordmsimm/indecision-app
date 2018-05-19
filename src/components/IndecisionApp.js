import React from "react"
import AddOption from "./AddOption"
import Options from "./Options"
import Action from "./Action"
import Header from "./Header"
import OptionModal from "./OptionModal"

 
export default class IndecisionApp extends React.Component{
    state = {
        options:[],
        selectedOption:undefined
    };
    
    handleDeleteOptions = () => {
        this.setState(() => ({options:[]})  )
    }

    handleClearSelectedOption = () => {
        this.setState(() => ({selectedOption:undefined})  )
    }
    

    handleDeleteOption = (optionToRemove) => {
        console.log('asd',optionToRemove )
        this.setState((prevState) => ({
            options:prevState.options.filter((option) => optionToRemove !== option)
        }))
    }
    handlePick = () => {
        const decision = this.state.options[Math.floor(Math.random() * this.state.options.length)]
        this.setState(()=>({
            selectedOption:decision
        }));
        console.log(decision)
    }

    handleAddOption = (option) => {
        if(!option){
            return 'Enter valid value to add item'
        }else if(this.state.options.indexOf(option) > -1){
            return 'this option already exists'
        }else{
            this.setState((prevState)=> ({options:prevState.options.concat(option)}) )
        }
    }
    componentDidMount() {
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

    

    render(){
       
        const subtitle = 'Put your life in the hands of a computer'
        return (
            <div>
                <Header  subtitle={subtitle}/>
                <div className='container'>
                    <Action 
                        hasOptions={this.state.options.length > 0 ? true:false}
                        handlePick ={this.handlePick}
                        />
                    <div className='widget'>
                        <Options 
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption handleAddOption={this.handleAddOption}/>
                    </div>
                </div>
                <OptionModal 
                selectedOption={this.state.selectedOption}
                handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        ) ;
    }
}

IndecisionApp.defaultProps = {
    options: []
}