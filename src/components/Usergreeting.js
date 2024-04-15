import React,{Component} from 'react'
class Usergreeting extends Component{
    constructor(props){
        super(props)
        this.state={
            isloggedin:true
        }
    }
    render(){
        return this.state.isloggedin && <div>Welcome Praveena</div>

        // return (
        //     // this.state.isloggedin?
        //     // <div>Welcome praveena</div>:
        //     // <div>Welcome Guest</div>

        // )
        // let message
        // if (this.state.isloggedin){
        //     message=<div>Welcome praveena </div>
        // }
        // else{
        //     message=<div>Welcome Guest</div>
        // }
        // return <div>{message}</div>
        // if (this.state.isloggedin){
        //     return (
        //         <div>Welcome praveena</div>
        //     )
        // }
        // else{
        //     return(
        //         <div>welcome Guest</div>
        //     )
        // }
        // return(
        //     <div>
        //         welcome Praveena
        //         <div>WElcome Guest</div>
        //     </div>
        // )
    }
}
export default Usergreeting