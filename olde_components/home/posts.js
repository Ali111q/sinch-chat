import Post from './post'
import { Component, useEffect } from 'react'
import { returnData, posts, getHomeData } from '../../controllers/home_controller'


class Posts extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      posts: []
    }
  }
  componentDidMount() {

    this.setState({
      isLoading: true
    })
    try {
      returnData().then((e) => {
        this.setState({
          posts: e.data, posts,
          isLoading: false
        })
        console.log(posts);
      })
    } catch (error) {
      console.log(error);
    }
  }

  render() {


    return (<>


      <div className='post-list-n'>
        {this.state.isLoading ? <h1>loading</h1> : posts.map((e, index) => {
          console.log(e.id);
          return <Post id={e.id} images={e.file_posts} description={e.description} createdTime={e.created_time} user={e.user} likes={e.likes_no} comments={e.comments_no} views={e.views_no} is_saved={e.is_saved} is_liked={e.is_liked} key={index} />
        })}
      </div>

    </>
    )
  }
}

export default Posts
