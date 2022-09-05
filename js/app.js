//specify element by id
const ulist = document.getElementById('navbar__list');
//make a loop of <li> and <a> inside <ul>
for(let x = 1; x<6; x++){
    //make an element <li>
    const list =document.createElement('li'); 
    //make an element <a>
    const al =document.createElement('a'); 
    //set an attribute in <a> name href
    al.setAttribute('href', '#'); 
    al.textContent ='section'+x; 
    //make attribute of class name for every <a>
    al.ClassName= 'link';
    //append an <a> to a <li>
    list.appendChild(al); 
    // append <li> to the main list <ul>
    ulist.appendChild(list);  
    ulist.style.backgroundColor ='rgb(41, 41, 71)';
    
    // use event click 
    al.addEventListener("click", function (e) {
        e.preventDefault();
        let sec =document.getElementById('section'+ x);
        sec.scrollIntoView();
        this.scroll({
            
            behavior:"smooth"
        });
});
}


