process.on('message',info=>{
  let arr = []
  let obj={}
  for(let i=0;i<info;i++){
      arr.push(Math.floor(Math.random() * (1000- 1 + 1)) + 1)
  }
  for(const numero of arr){
      if(obj[numero]){
          obj[numero]++
      }else{
          obj[numero] = 1
      }
  }
  process.send(obj)
})