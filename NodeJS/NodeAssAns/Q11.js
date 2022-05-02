let fs = require("fs");

var bookstr="";

fs.readFile("./bookObj.json", (err,data)=>{
        if(err)
            console.log(err);
        else{
            const book=JSON.parse(data);
            for(element of book)
            {
                bookstr=bookstr + element.bookId+" : "+element.name+ " : "+element.author + " : "+element.price;
            }
           
            console.log(bookstr);
           
            fs.writeFile("./book.txt",bookstr,(err)=>{
                if(err)
                    console.log(err)
                else
                console.log("written into the file");
            })
        }
})