import React from 'react'

function Result(props) {

    return (
        <div>
            <div className="card" style={{width: "18rem"}}>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{props.results.name}</li>
                    <li className="list-group-item">{props.results.cod}</li>
                    <li className="list-group-item">{props.results.timezone}</li>
                </ul>
            </div>
        </div>
    )
}

export default Result; 