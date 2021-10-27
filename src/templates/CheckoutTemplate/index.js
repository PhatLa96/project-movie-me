import { Fragment, useEffect } from "react"
import { Route, Redirect } from "react-router-dom"
import { TOKEN } from "../../util/settings/config"

const CheckoutTemplate = (props) => {
    const { Component, ...restRoute } = props
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    if (!localStorage.getItem(TOKEN)) {
        return <Redirect to="/dangnhap" />
    }
    return <Route {...restRoute} render={(propsRoute) => {
        return <Fragment>

            <Component {...propsRoute} />

        </Fragment>
    }} />
}
export default CheckoutTemplate