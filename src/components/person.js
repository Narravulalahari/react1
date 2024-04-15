import React from 'react'
function person({person}){
    return (
        <div>
            <h2>
                I am {person.name}.Iam {person.age} years old and {person.skill}
            </h2>
        </div>
    )
}
export default person