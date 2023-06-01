let quotes = -1;
fetch("https://dummyjson.com/quotes")
.then(async (res)=>{
    let data = await res.json();
    quotes = data;
    data.quotes.forEach(ele => {
        ele = ele.quote
        const node = document.createElement("li");
        const textnode = document.createTextNode(ele);
        node.appendChild(textnode);
        document.getElementById("myList").appendChild(node);
    });
})
.catch(err=>{
    const node = document.createElement("p");
    const textnode = document.createTextNode(err);
    node.appendChild(textnode);
    document.getElementById("body").appendChild(node);
})

function clearList() {
    document.getElementById("myList").innerHTML = "";
}

function filter(){
    clearList();
    let word = document.getElementById('filtertext').value
    let found = false;
    quotes.quotes.forEach(ele => {
        ele = ele.quote
        if( ele.toLowerCase().search(word.toLowerCase()) != -1){
            found = true;
            const node = document.createElement("li");
            const textnode = document.createTextNode(ele);
            node.appendChild(textnode);
            document.getElementById("myList").appendChild(node);
        }
    });
    
    if(!found){
        const node = document.createElement("li");
        const textnode = document.createTextNode("word not found in quotes");
        node.appendChild(textnode);
        document.getElementById("myList").appendChild(node);
    }
}

function normal(){
    clearList();
    quotes.quotes.forEach(ele => {
        ele = ele.quote
        found = true;
        const node = document.createElement("li");
        const textnode = document.createTextNode(ele);
        node.appendChild(textnode);
        document.getElementById("myList").appendChild(node);
    });
}

