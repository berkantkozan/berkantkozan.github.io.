import React from "react"
import { Routes, Route } from "react-router-dom"
import Description from "../Description"

export default function DescriptionRoute({ todo }) {
    return (
        <div>
            <Routes>
                <Route path="/">
                    <Outlet />
                </Route>
                <Route
                    exact path={`/${todo.id}`}
                    element={<Description />}
                ></Route>
            </Routes>
        </div>
    )
}