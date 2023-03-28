async function change(){
    let file=await fetch("https://dog.ceo/api/breeds/image/random").then(res=>{return res.json()})
    // {
    // "message": "https://images.dog.ceo/breeds/terrier-australian/n02096294_8721.jpg",
    // "status": "success"
    // }
    document.getElementById("image").innerHTML=`<img src=${file.message} alt="DOGS" title="DOGS"/>`
}