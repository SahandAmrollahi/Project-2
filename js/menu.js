const menuShow =async ()=>{
    let menu=""
    let response=await fetch("http://localhost:1000/menu").then((res)=>{
        return res.json()
    })
    response.map((elem)=>{
        menu+=`<li><a href="#">${elem.title}</a></li>`
    })
    document.querySelector('div.menu>nav>ul').innerHTML=menu
}
menuShow()

