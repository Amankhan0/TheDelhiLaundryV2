import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../WebView/Home/Home'
import About from '../WebView/About/About'
import Blogs from '../WebView/Blogs/Blogs'
import Service from '../WebView/Service/Service'
import Location from '../WebView/Location/Location'

export default function CustomRoutes() {
    return (
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/service" exact element={<Service />} />
            <Route path="/location" exact element={<Location />} />
            <Route path="/blogs" exact element={<Blogs />} />
        </Routes>
    )
}
