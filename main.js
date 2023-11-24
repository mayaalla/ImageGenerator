let imgbox = document.getElementById("imgbox");
let box = document.querySelectorAll(".box");
let nbr = document.querySelectorAll(".nbr");
let img = document.querySelectorAll("img");
let inp = document.getElementById("prompt")
let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let gnrt = document.getElementById("gnrt");
let err = document.getElementById("err")
const key = "Bearer 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";
let k;
let el;
let array = [];
let array1 = [];
let div;

const getImage = async() => {
    const methods = {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Authorization": key
        },
        body:JSON.stringify(
        {
            "prompt": inp.value,
            "n": nbrimg,
            "size":"256x256"
        }
            
        )
    }
    const res = await fetch("https://api.openai.com/v1/images/generations", methods);
    const data = await res.json()
    console.log(data.data[0].url)
        const listimg = data.data
            listimg.map((img) => {
                imgbox.innerHTML += '<img src="' + img.url + '">';
            })


}

gnrt.onclick = function(){
    if(inp.value != ""){
        getImage()
        
    }else{
       err.style.display = "block"
       for(k=0; k<nbrimg; k){
        console.log(box[k]);
     }
    }
}


let nbrimg = 4;
// for (let i = 0; i < 4; i++) {
//     imgbox.innerHTML += '<img id="img' + i  + '">';
//     el = document.getElementById("img" + i);
//     array.push(el);
// }
four.style.backgroundColor = "#affdf7"
four.style.color = "#001C30"

let a = document.getElementById(4);



function click(n) {
    n.onclick = function () {
        array = [];
        imgbox.innerHTML = "<div id= 'div'></div>";
        div = document.getElementById("div")
        imgbox.removeChild(div);
        nbrimg = parseInt(n.id);
        a.style.backgroundColor="#001C30"
        a.style.color = "#affdf7"
            n.style.backgroundColor = "#affdf7"
            n.style.color =  "#001C30"
            a = n
        // for (i = 0; i < nbrimg; i++) {
        //     imgbox.innerHTML += '<img id="img' + i  + '">';
        //     el = document.getElementById("img" + i);
        //     array.push(el);
        // }



        console.log(nbrimg)
        
    }
    
}


nbr.forEach(e => {
  click(e)
   
})

