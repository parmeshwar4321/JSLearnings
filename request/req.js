const req=require('request')

function getPost(){
    const options={
        uri:"https://jsonplaceholder.typicode.com/posts",
        method:"GET",
        headers:   {"user-agent":"node-js"}
    }
    req(options,(er,res,body)=>{
        if(er) throw er;

        console.log(res);
    })
}

getPost()