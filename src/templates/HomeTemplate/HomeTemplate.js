import { Fragment } from "react"
import { Route } from "react-router-dom"
import ModalTrailer from "../../components/ModalTrailer"
import Footer from "./Footer"
import Header from "./Header"

export const HomeTemplate = (props) => {
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