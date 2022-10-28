const appShow=async ()=>{
    let app=""
    let response=await fetch("http://localhost:1000/app").then((res)=>{
        return res.json()
    })
    response.map((elem)=>{
        app+=`<a href="https://www.google.com"><img src="${elem.images}" alt="${elem.alt}"></a>`
    })
    document.querySelector('div.footer>div:nth-of-type(1)>div.bottom').innerHTML=app
}
appShow()