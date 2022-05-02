const fs = require('fs');

fs.readFile("./customer.json", function(err, data)
{
    if(err)
        console.error(err);
    else{
    const customer = JSON.parse(data);

    for(let i = 0; i < customer.length; i++)
        console.log("Name :"+customer[i].name + " Address : "+customer[i].address+" Phone Number : "+ customer[i].ph_no);
    }
})