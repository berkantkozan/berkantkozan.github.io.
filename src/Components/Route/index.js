import React from "react"
import { Routes, Route } from "react-router-dom"
import Description from "../Description"
import Body from "../body"

export default function DescriptionRoute() {
    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element={<Body />}>
                </Route>
                <Route
                    exact path={`/:id`}
                    element={<Description />}
                ></Route>
            </Routes>
        </div>
    )
}