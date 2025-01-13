//step 1 :- query the DOM and get the reference of the element in which you expect the event to occur
const button = document.querySelector('button');

const popup = document.querySelector('.popup-wrapper');

const  close = document.querySelector('.popup-close');
//step 2 and step 3:- add an event listener to that element and write a callback function for it :-
button.addEventListener('click', ()=>{
      popup.style.display = 'block';
});


close.addEventListener('click', ()=> {    
    popup.style.display = 'none';
});


popup.addEventListener('click', ()=> {
    popup.style.display = 'none';
});

//.style property :- this will give us all the css property.
//.classList property :- this will give us a list pf all the class associated with that element.