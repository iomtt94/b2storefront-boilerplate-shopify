import React from "react";

const Breadcrumbs = () => {
    return (
        <>
            <div className="container">
                <ul className="breadcrumbs">
                    <li>
                        <a href="#">Link 1</a>
                    </li>
                    <li>
                        <a href="#">Link 2</a>
                    </li>
                    <li>
                        <a href="#">Link 3</a>
                    </li>
                    <li>
                        <a href="#">Link 4</a>
                    </li>
                    <li>
                        <a href="#">Link 5</a>
                    </li>
                    <li>
                        <a href="#">Link 6</a>
                    </li>
                    <li>
                        <a href="#">Link 7</a>
                    </li>
                    <li>
                        <a href="#">Link 8</a>
                    </li>
                    <li>
                        <a href="#">Link 9</a>
                    </li>
                    <li>
                        <a className="active" href="#">Link 10</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Breadcrumbs;