import React from "react";

function Person ({Person, key}) {
    return (
        <div>
            <h2>
                I am {Person.name}, I am {Person.age} years old. I know {Person.skill}
            </h2>
        </div>
    )
}

export default Person;