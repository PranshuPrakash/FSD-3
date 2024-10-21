function task(message,delay){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve();
            }, delay);
    });
}
task("first task completed",1000).then(()=>task("Second",1000)).then(()=>task("third",2000))
