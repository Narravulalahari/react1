import React from 'react'
import person from './person'
function Namelist(){
    const persons=[
        {
            id:1,
            name:'praveena',
            age:30,
            skill:'react'
        },
        {
            id:2,
            name:'Clerk',
            age:25,
            skill:'Angular'
        }
    ]
    const personlist=persons.map(person=> <person person={person}/>
        // <h2>Iam {person.name} .Iam {person.age} years old with {person.skill}</h2>
    )
    return (
        <div>
           {personlist}
        </div>
    )
//  const names=['praveena','lahari','Subhashini','Govardhan']
//  const nameList=names.map(name=><h2>{name}</h2>)
//  return <div>{nameList}</div>
//     return(
//         <div>
//             {
//             // {/* <h2>{names[0]}</h2>
//             // <h2>{names[1]}</h2> */}
//             names.map(name => <h2>{name}</h2>)
//         }
//         </div>
//     )
// }
}
export default Namelist