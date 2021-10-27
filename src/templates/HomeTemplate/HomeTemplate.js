import { Fragment, useEffect } from "react"
import { Route } from "react-router-dom"
import ModalTrailer from "../../components/ModalTrailer"
import Footer from "./Footer"
import Header from "./Header"

const HomeTemplate = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    })

    const { Component, ...restRoute } = props
    return <Route {...restRoute} render={(propsRoute) => {
        return <Fragment>
            <Header {...propsRoute} />
            <Component {...propsRoute} />
            <ModalTrailer />
            <Footer />
        </Fragment>
    }} />
}

export default HomeTemplate