var form = document.getElementById('addForm');//add an item on the submit event

var itemList = document.getElementById('items');

var filter = document.getElementById('filter');


// form submit event 
form.addEventListener('submit', itemAdd);

//delete event
itemList.addEventListener('click', removeItem);

//filtering through the item list
filter.addEventListener('keyup', filterItem);

//add item
function itemAdd(e){
   e.preventDefault();
   
   //get input value
   var newItem = document.getElementById('item').value;

   //create a new list element
   var li =document.createElement('li');
   li.className = 'newList-item';
   //add text node with input value
   li.appendChild(document.createTextNode(newItem));

   //create delete button element
   var delBtn =document.createElement('button');

   //add class to delButton
   delBtn.className ='btn btn-danger btn-sm float-right delete';
   //append textNode
   delBtn.appendChild(document.createTextNode('X'));
   
   //append button to li
   li.appendChild(delBtn);
    //append to list 
   itemList.appendChild(li);
}

//remove item function
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li =e.target.parentElement;
            itemList.removeChild(li)
        }
    }
}

//filter items
function filterItem(e){
    //convert to lowercase
    var text = e.target.value.toLowerCase();

   var items = itemList.getElementsByTagName('li')

   //convert to an array
   Array.from(items).forEach(function(item){
       var itemName = item.firstChild.textContent;
       if(itemName.toLowerCase().indexOf(text)!=-1){
           item.style.display ='block';
       }else{
           item.style.display = 'none';
       }
   });
}