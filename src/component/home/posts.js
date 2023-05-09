import Post from './post'
import { useState,useEffect} from 'react'
function Posts (props) {
  const data=props.data;
    return (<>
      <div
        className='post-list-n'>
       {data.map((e, index) => {
          return <span onLoad={()=>{
            if (index == data.length-1) {
              props.checkHeigth(true)
            }
          }}>
            <Post run={props.run} data={e} index={index} key={index}/>
            </span>
        })}
      </div>
    </>
    )
  }

export default Posts
