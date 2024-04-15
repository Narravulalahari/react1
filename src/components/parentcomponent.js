import React,{Component} from 'react'
import Childcomponent from './Childcomponent'
class parentComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            parentname:'Parent'
        }
        this.greetparent=this.greetparent.bind(this)
    }
    greetparent(){
        alert(`hello ${this.state.parentname}`)
    }
    render(){
        return(
            <div>
                <Childcomponent greetHandler={this.greetparent}/>
                
            </div>
        )
    }
}
export default parentComponent