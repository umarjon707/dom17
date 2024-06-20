const place = document.querySelector('.container')
const sorted = arr.toSorted((a,b) => a.price - b.price)
const five = document.querySelector('.five')
const all = document.querySelector('.all')
for (let item of sorted) {
    const component = Item(item)
    place.append(component)
    function showitems(itemsshow) {
        five.onclick = () =>{
            const fiveitems = sorted.slice(0, 5);
            itemsshow(fiveitems)
        }
        all.onclick = () =>{
            itemsshow(sorted)
        }
        itemsshow(sorted)
    }




}    

