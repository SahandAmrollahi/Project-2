let posts=document.querySelector('div.posts')
let getPosts=async ()=>{
    let item=""
    let response=await fetch("http://localhost:1000/posts").then(function (res){
        return res.json()
    }).catch(function (err){
        alert(err)
    })
    response.map((elem)=>{
        item+=`<div class="post" data-id="${elem.id}">
                    <img src="${elem.images}" alt="${elem.alt}">
                    <h1>${elem.text}</h1>
                    <h1>${elem.title}</h1>
                    <p>${elem.date}</p>
                </div>`
    })
    setTimeout(()=>{
        document.querySelector('div.loading').style.display="none"
        document.querySelector('div.spinner').style.display="none"
        document.querySelector('div.wrapper').style.display="block"
        document.querySelector('div.slider').style.display="block"
        document.querySelector('div.Contents').style.display="block"
        document.querySelector('div.register').style.display="block"
        document.querySelector('div.menu').style.display="block"
        document.querySelector('hr').style.display="block"
        document.querySelector('div.logo').style.display="flex"
        document.querySelector('div.footer').style.display="flex"
        document.querySelector('div.final').style.display="flex"
        document.querySelector('div.colleague1').style.display="flex"
        document.querySelector('div.colleague2').style.display="flex"
        posts.innerHTML=item

    },2000)
}
document.querySelector('div.wrapper>div.posts').addEventListener("click",async(event)=>{
    if (event.target.className==="post"){
        const postId=event.target.dataset.id
        let postSingle=await fetch(`http://localhost:1000/posts/${postId}`).then((response)=>{
            return response.json()
        })
        document.querySelector('div.wrapper>div.posts').innerHTML=`<div class="single-post">
        <h1>${postSingle.title}</h1>
        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
        <p>تاریخ انتشار خبر : ${postSingle.date}</p>
        <button class="come-back">
        بازگشت به صفحه اصلی
</button>
</div>`
    }
})
document.querySelector('div.wrapper').addEventListener("click",function (event){
    if (event.target.className==="come-back"){
        document.querySelector('div.loading').style.display="block"
        document.querySelector("div.spinner").style.display="block"
        document.querySelector('div.single-post').style.display="none"
        document.querySelector('div.slider').style.display="none"
        document.querySelector('div.Contents').style.display="none"
        document.querySelector('div.register').style.display="none"
        document.querySelector('div.menu').style.display="none"
        document.querySelector('hr').style.display="none"
        document.querySelector('div.logo').style.display="none"
        document.querySelector('div.footer').style.display="none"
        document.querySelector('div.final').style.display="none"
        document.querySelector('div.colleague1').style.display="none"
        document.querySelector('div.colleague2').style.display="none"
        getPosts()
    }
})
getPosts()