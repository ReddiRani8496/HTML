let i = 1;
setInterval(()=>{
    if(i==10)
        return;
    console.log("hello"+i++);
}, 500);