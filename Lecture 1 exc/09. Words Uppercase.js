function solve(text) {

    let result = text.toUpperCase()
      .split(/[\W]+/)
      .filter(w => w.length > 0)
      .join(", ");
  
    console.log(result);
  }
  

//function solve(text){
   // let res = []
   // let buff = ""
   // for(let i = 0; i < text.length; i++){
   //     let chCode = text.charCodeAt(i)
   //     if(chCode >= 65 && chCode <=90 || chCode >=96 && chCode <= 122){
   //         buff+= text[i]
   //     }else{
   //         res.push(buff)
   //         buff = ""
   //     }
//
   // }
//
   // if(buff){
   //     res.push(buff)
   // }
//
   // res = res.filter(x => x.length > 0)
   // newres = res.map(el => {return el.toUpperCase()})
//
   // console.log(newres.join(", ")) 66/100 points
//}

solve('Hello')