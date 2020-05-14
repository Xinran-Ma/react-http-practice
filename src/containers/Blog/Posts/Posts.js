import React, { Component } from 'react'
import axios from '../../../axios'
import Post from '../../../components/Post/Post'
import './Posts.css'
import FullPost from '../FullPost/FullPost'
import { Route } from 'react-router-dom'

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount () {
        console.log(this.props)
        axios.get('/posts')
            .then(response => {
                // update state within the 'then' request
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Ray'
                    }
                })
                this.setState({posts: updatedPosts});
            })
            .catch(error => {
                // console.log(error);
                // this.setState({error: true})
            });
    }

    postSelectedhandler = (id) => {
        // this.setState({selectedPostId: id})
        this.props.history.push({pathname: this.props.match.url+ '/' + id})
    }

    

    render () {
        let posts = <p style={{textAlign: "center"}}>Something went wrong!</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    // <Link to={'/' + post.id} key={post.id} >
                        <Post 
                            key={post.id}
                            title={post.title}
                            author={post.author}
                            clicked={() => this.postSelectedhandler(post.id)} />
                    // </Link>
                )
            })
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + "/:id"} exact component={FullPost} />
            </div>
            
        )
    }
}

export default Posts;