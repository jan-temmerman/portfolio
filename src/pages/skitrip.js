import React from "react"
import CountDown from 'reactjs-countdown';

import SEO from "../components/seo"
import Layout from "../components/layout"

import contactStyle from "./contact.module.css"

class SkitripPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mounted: false
        }
    }

    componentDidMount() {
        this.setState({
            mounted: true
        })
    }

    render() {
        if(this.state.mounted) {
            return(
                <Layout>
                    <SEO title="Contact" keywords={[`Jan Temmerman`, `portfolio`, `skitrip`]} description="Portfolio website of jan temmerman, skitrip"/>
                    <section className="centered">
                    <div className={contactStyle.container}>
                        <h1 className={contactStyle.greet}>Fresh pow in Flaine</h1>
                        <CountDown end='Februari 1, 2020'/>
                        <div className={contactStyle.photo}></div>
                    </div>
                    </section>
                </Layout>
            )
        } else {
            return(
                <Layout>
                    <SEO title="Contact" keywords={[`Jan Temmerman`, `portfolio`, `skitrip`]} description="Portfolio website of jan temmerman, skitrip"/>
                    <section className="centered">
                    <div className={contactStyle.container}>
                        <h1 className={contactStyle.greet}>Fresh pow in Flaine</h1>
                        <div className={contactStyle.photo}></div>
                    </div>
                    </section>
                </Layout>
            )
        }
    }
}

export default SkitripPage
