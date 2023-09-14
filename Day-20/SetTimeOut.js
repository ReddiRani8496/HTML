setTimeout(()=>{
    let i = 1;
    setInterval(()=>{
        if(i==10)
            return;
        console.log("hi "+i++);
    },500);
},10000);