console.log("This is second project")

// constructor
function Book (name,author,type){
    this.name=name;
    this.author=author;
    this.type=type;

}

// Display constructor
function Display(){

}

// add method to display prototype
Display.prototype.add=function(book){
console.log("Addig to local storage");
tablebody = document.getElementById('tablebody');
let ulstring=`
    <tr>  
   
      <td>${book.name}</td>
      <td>${book.author}</td>
      <td>${book.type}</td>
    </tr>`;
    tablebody.innerHTML += ulstring;


}
// impliment the clear function
Display.prototype.clear=function(){
   let libraryform=document.getElementById('libraryform');
   libraryform.reset();
}

// impliment the validate function
Display.prototype.validate=function(book){
   if(book.name.length<2 || book.author.length<2){
      return false;
   }
   else{
      return true;
   }
}
// impliment the show  function
Display.prototype.show=function(type,message){
   let successalert=document.getElementById('successalert');
   successalert.innerHTML +=`<div class="alert alert-success" role="alert">
                         ${type}    ${message}
                           </div>`
                           setTimeout(function() {
                              successalert.innerHTML='';
                           }, 2000);
}

 // for store data in local storage

// let addbtn=document.getElementById('addbtn');
// addbtn.addEventListener('click',function(e){
//    let libraryform2=document.getElementById('libraryform');
//    let tablebody2=document.getElementById('tablebody');
//    if(tablebody2==null){
//       tablerow=[];
//    }
//    else{
//     tablerow=JSON.parse(tablebody) ;
//    }
//    tablerow.push(libraryform2.value);
//    localStorage.setItem("tablebody2",JSON.stringify(tablerow));
//    console.log(tablerow);
// })


// add eventlistner to submitt form

let libraryform=document.getElementById('libraryform');
addEventListener('submit',libraryformsubmit);

function libraryformsubmit(e){

    console.log('Your form is submitted');
    e.preventDefault();
    let name = document.getElementById('BookName').value;
    let author = document.getElementById('Author').value;
    
    let type; 

     //  fiction , programming , cooking
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if(fiction.checked){
       type = fiction.value;
    }
    else if(programming.checked){
       type = programming.value
    }
    else if(cooking.checked){
       type = cooking.value
    }

   // //  checkbox

   //  let checkbox;
   //  let checkbox1 = document.getElementById('exampleCheck1');
   //  if(checkbox1.checked){
   //    checkbox = checkbox1.value;
   //  }
   //  else if(checkbox1=!checked){
   //    console.log('Please check read and check the box')
   //  }

    let book = new Book(name,author,type)
    console.log(book);
    
    let display = new Display();
    if(display.validate(book)){
    display.add(book);
    display.clear();
    display.show('Success :' , 'Your book has been added successfully')
   }
   else{
      display.show('Error !' ,   '  Sorry you cannot add this book write character mote than two')
   }
   

}
