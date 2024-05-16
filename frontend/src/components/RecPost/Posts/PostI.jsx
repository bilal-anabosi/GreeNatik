import React from 'react';
import Postss from './Postss';
import BarI from '../BarI';
import { useState } from 'react';

const PostI = () => {
    
    const [postData, setPostData] = useState({
        avatarSrc: "/pics/images/ss1.png",
        postTitle: "GMCR Metal Recycling",
        buttonText: "Pending",
        locations: "Nablus",
        Value: "90"
    });

    return (
<div>
<BarI Title="GMCR Metal Recycling’s post" />

<Postss
    avatarSrc={postData.avatarSrc}
    postTitle={postData.postTitle}
    buttonText={postData.buttonText}
    locations={postData.locations}
    Value={postData.Value}
/>

</div>

);
};
export default PostI;