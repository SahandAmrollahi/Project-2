const colleagueShow=async()=>{
    let colleague=""
    let response=await fetch("http://localhost:1000/colleague").then((res)=>{
        return res.json()
    })
    response.map((elem)=>{
        colleague+=`<img src="${elem.images}" alt="${elem.alt}">`
    })
    document.querySelector('div.colleague2').innerHTML=colleague
}
colleagueShow()