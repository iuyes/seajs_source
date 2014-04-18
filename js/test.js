var products = ["Shoes", "Sweater", "Jeans", "Wig"],
    doc = document,
    body = doc.getElementById("products");
function showCount(){
    for(var i = 0; i < this.length; i++){
        body.innerHTML += this[i] + ".";
    }
}
var fn = showCount.bind(products);
fn();
