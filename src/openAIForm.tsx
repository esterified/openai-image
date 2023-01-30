import { useState, useId, useRef } from "react";

function openAIForm() {
  const openAI_API_Key = "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";
  const postTextAreaId = useId();
  const imgRef = useRef(null);
  const [image, setImage] = useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const form = e.currentTarget;
    const txt = form.description.value;
    console.log(txt, "get Data");
    const response = await getImage(txt);
    const imgUrl = response?.data[0].url
    setImage(imgUrl);
    console.log(txt, imgUrl);
  };

  const getImage = async (txt: string) =>{
    return await fetch("https://api.openai.com/v1/images/generations",{
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${openAI_API_Key}`
        },
        "body": JSON.stringify({
            "prompt": txt,
            "n": 1,
            "size": "256x256"
        })
    }).then(res=>res.json())
    .catch(err=>console.log(err));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor={postTextAreaId} className="d-block w-100">
          Type anything to generate an image
        </label>
        <textarea defaultValue="starry night van gough with blinking stars" id={postTextAreaId} className="d-block w-100 res-none" rows={4} cols={40} name="description" />
        <input className="d-block w-100" type="submit" value="Submit" />
      </form>
      <img ref={imgRef} src={image} alt="" />
    </div>
  );
}

export default openAIForm;
