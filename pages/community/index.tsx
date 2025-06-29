import { NextPage } from "next";
import { useState } from "react";
import withLayoutBasic from '@/libs/components/layout/LayoutBasic';



const Community:NextPage =()=>{
    console.log("Community Component -Pages Router ");
    const [title,setTitle] = useState<string>("hello");
    return(
        <div>
           COMMUNITY ("")
           <button onClick={() => alert("Hello MIT ")} style={{margin:"15px"}}>
            PresMe
           </button>
        </div>
    );
};

export default  withLayoutBasic(Community);