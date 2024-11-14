import React, { useState } from 'react'

export default function KeyWordEvets() {
       const[url,setUrl]=useState(null);
      function handleCopyText(e){
             alert('copied the Selected values... ')
             
      }    
     function uploadImg(e){
      const file = e.target.files[0]; 
      if (file) {
        const url = URL.createObjectURL(file); 
             setUrl(url)
      }
             
     }
  return ( 
    <div>
          <div onCopy={handleCopyText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aliquid atque dignissimos doloribus eos animi deserunt doloremque id soluta aperiam facilis ad reprehenderit commodi odio, dolor culpa ipsum nulla incidunt.
             </div>   
             {url && <img src={ url} alt="" width='100px' height='100px' onLoad={()=>{alert('img upload successfuly')}}  onError={()=>{alert("images Not uploaded Succuessfully...")}}/>}
             
             <input type="file" name="myImage" accept="image/*" onChange={uploadImg} />
              
    </div>
  )
}
