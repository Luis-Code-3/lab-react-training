import { useState } from "react";

function LikeButton() {

    const [likes,setLikes] = useState(0);

    const [backgroundColor, setBackgroundColor] = useState('grey')

    const colors = ['purple','blue','green','yellow','orange','red'];


    function increaselike() {
        setLikes(likes + 1);
        setBackgroundColor(colors[Math.floor(Math.random() * colors.length)])
    }

    

    return (
      <div>

        <button style={{backgroundColor: backgroundColor}}  className="likeButton" onClick={increaselike}>{likes}</button>
        
      </div>
    );
  }
  
  export default LikeButton;