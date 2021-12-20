let x,y;
async function test(){
    let b=await fetch("https://restcountries.com/v3.1/lang/spa").then((res)=>{
        return res.json();
    })
    .then((x)=>{
        let y=x[0].capital;
        let z=x[0].borders;
        let v=x[0].coatOfArms.png;
        let p=document.getElementById("dis1");
        p.innerText="Capital:"+y;   
        let q=document.getElementById("dis2");
        q.innerText="Borders:"+z;  
        q=document.getElementById("dis3");
        q.innerText="Borders:"+v;  
        console.log(x);

        let im=document.createElement("img")
        im.setAttribute("src",v)
        p.appendChild(im)
    })
    // let c=await b.json();
    // x=c[0].capital
    // y=c[0].coatOfArms
    // return c[0].name,c[0].capital
    // let p=document.getElementById("dis");
    // p.innerText=x;
    // console.log(b)
    // return c;
}
test()
// console.log(x)
// a().then((x)=>{
//     console.log(x[0])
//     let y=x[0].capital
//     let p=document.getElementById("dis");
//     p.innerText=y;
// })
// a().catch(()=>{
//     console.log("error")
// });

// fetch("https://restcountries.com/v3.1/lang/spa").then((x)=>x.json()).then((x)=>{console.log(x)}).catch(()=>{console.log("error")})

// let p=document.getElementById("dis");
//     p.innerText=a;
// console.log(b)
// console.log(b)
// console.log(b)
// setTimeout(()=>
// console.log(b),2000)