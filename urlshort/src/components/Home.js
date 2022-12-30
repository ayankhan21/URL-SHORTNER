import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Home() {
  const [longurl, setlongUrl] = useState("");
  const [shorturl, setShortUrl] = useState("");

  const fetchData = async () => {
    if(longurl===shorturl){
      setShortUrl('URL ALREADY SHORTENED')
    }else{
      try {
        const response = await axios(
          `https://api.shrtco.de/v2/shorten?url=${longurl}`
        );
        setShortUrl(response.data.result.full_short_link);
      } catch(e) {
        alert('Try Mozilla FireFox')
        setShortUrl("Error");
        setTimeout(()=>{
            setlongUrl('');
            setShortUrl('');
        },5000)
        console.log(e);
      }
    }
    };

  const handleClick = (event) => {
    console.log(event.target.value);
    setlongUrl(event.target.value);
  };
  return (
    <div>

    
    <div className="App">
      <div className="box">
        <div className="input">
          <input value={longurl} placeholder='Enter your URL here' onChange={handleClick} required></input>
          <button
            onClick={() => {
              fetchData();
            }}
          >
            Shorten
          </button>
        </div>

        <div className="shortlinkbox">
          <p>{shorturl}</p>
        </div>
        <div className="copybtn">
        <CopyToClipboard text={shorturl}>
          <button onClick={()=>{
            if(shorturl!==''){
              alert("URL Copied")
            }else{
              alert("Enter a URL")
            }
          }}>Copy</button>
        </CopyToClipboard>
        </div>
      </div>
    </div>
    </div>
  );
}
export default Home;