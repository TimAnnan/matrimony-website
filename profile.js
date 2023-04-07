import React from "react";

{/*export default function Profile (prop)
{
    return(
        <div>
            <h3>{prop.text.name}</h3>
            <h2>{prop.data}</h2>
        </div>
    )
}
*/}

export default class Profile extends React.Component
{
    render()
    {
        return(
            <div>
                <h4>hi</h4> 
            <h2>{this.props.data}</h2>
            <h1>{this.props.text.name}</h1>
            </div>
        )
    }
}