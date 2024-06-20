
//     const component = Item(item)
//     place.append(component)
//     function showitems(itemsshow) {
//         five.onclick = () =>{
//             const fiveitems = sorted.slice(0, 5);
//             itemsshow(fiveitems)
//         }
//         all.onclick = () =>{
//             itemsshow(sorted)
//         }
//         itemsshow(sorted)
//     }




// }    

const place = document.querySelector('.container');
const sorted = arr.sort((a, b) => a.price - b.price); // Use sort() 
const five = document.querySelector('.five');
const all = document.querySelector('.all');

function showItems(itemsToShow) {
  itemsToShow.forEach(item => {
    const component = Item(item);
    place.append(component);
  });
}

showItems(sorted);

five.onclick=()=>{
    showItems(sorted.slice(0, 5));
}
  
all.omclick = () =>{
    showItems(sorted);
}
 
for (let item of sorted) {
  const component = Item(item);
  place.append(component);
}
