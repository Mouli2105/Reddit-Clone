import React, {Component} from 'react'
import {
    Row,
    Col,
} from 'reactstrap'
import '../../assets/CommentTemplate'
import CommentTemplate from '../../assets/CommentTemplate';
import Context from '../../../../../provider'

export default class ProfileComments extends Component {
    constructor(props) {
        super(props)
        this.state = {comments: []}
    }

    componentDidMount() {
        fetch(`/api/reddit/u/${this.props.username}/comments/`)
        .then(data => data.json())
        .then(json => {
            this.setState({
                comments: json,
            })
        })
    }

    render() {
        return (
            <Context.Consumer>
                {context => {
                    return (
                        <React.Fragment>
                            {this.state.comments.length !== 0 ?
                                this.state.comments.map((comment) => {
                                    return (
                                        <Row key={comment.id}>
                                                <Col>
                                                    <CommentTemplate
                                                        context={context}
                                                        content={comment.content}                            
                                                        upvotes={comment.upvotes}
                                                        downvotes={comment.downvotes}
                                                        postid={comment.parent_post.id}
                                                        subreddit={comment.parent_post.subreddit.name}
                                                        subredditlink={true}
                                                        clickable={true}
                                                        />
                                                </Col>
                                            </Row>
                                        )
                                    }
                                )
                                :
                                <h3 className='text-center'>
                                    User hasn't made any comments yet!
                                </h3>
                            }
                        </React.Fragment>
                    )
                }}
            </Context.Consumer>
        )
    }
}