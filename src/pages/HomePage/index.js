import React, { Component, Fragment } from 'react';
import Cabecalho from '../../components/Cabecalho'
import NavMenu from '../../components/NavMenu'
import Dashboard from '../../components/Dashboard'
import Widget from '../../components/Widget'
import TrendsArea from '../../components/TrendsArea'
import Tweet from '../../components/Tweet'

class HomePage extends Component {

    constructor() {
        super()
        this.state = {
            novoTweet: "",
            tweets:["11", "222354546"]
        }

        this.alteraEstado = this.alteraEstado.bind(this)
    }
    ehValido() {
        return this.state.novoTweet.length > 0 && this.state.length <= 140
    }

    adicionaTweet = (event) =>{
        event.preventDefault()
        this.setState(
            {tweets : [this.state.novoTweet,  ...this.state.tweets],
            novoTweet: ''})

    }

    alteraEstado(event) {
        console.log(event.target.value)
        const novoTexto = event.target.value
        this.setState({
            novoTweet: novoTexto
        })
    }
    render() {
        return (
            <Fragment>
                <Cabecalho>
                    <NavMenu usuario="@omariosouto" />
                </Cabecalho>
                <div className="container">
                    <Dashboard>
                        <Widget>
                            <form className="novoTweet" onSubmit={this.adicionaTweet}>
                                <div className="novoTweet__editorArea">
                                    <span
                                        className={
                                            `novoTweet__status
												${this.state.novoTweet.length > 140
                                                ? 'novoTweet__status--invalido'
                                                : '' }`}>{this.state.novoTweet.length}/140</span>
                                    <textarea value={this.state.novoTweet} className="novoTweet__editor"
										onChange={	(event)	=>	this.setState({	novoTweet:	event.target.value	})	}                                        placeholder="O que está acontecendo?"></textarea>
                                </div>
                                <button type="submit" className="novoTweet__envia" disabled={this.state.novoTweet.length > 140 || this.state.novoTweet.length === 0}>Tweetar</button>
                            </form>
                        </Widget>
                        <Widget>
                            <TrendsArea />
                        </Widget>
                    </Dashboard>
                    <Dashboard posicao="centro">
                        <Widget>
                            <div className="tweetsArea">
                            {	this.state.tweets.map(
									(tweetInfo,	index)	=>	{
													return <Tweet
																	key={tweetInfo	+	index}
																	conteudo={tweetInfo}	/>
													}
									)
					}
                            </div>
                        </Widget>
                    </Dashboard>
                </div>
            </Fragment>
        );
    }
}

export default HomePage;
