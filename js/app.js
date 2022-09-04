//specify element by id
const ulist = document.getElementById('navbar__list');
//make a loop of <li> and <a> inside <ul>
for(let x = 1; x<5; x++){
    //make an element <li>
    let list =document.createElement('li'); 
    //make an element <a>
    let al =document.createElement('a'); 
    //set an attribute in <a> name href
    al.setAttribute('href', '#'); 
    al.textContent ='section'+x; 
    //make attribute of class name for every <a>
    al.ClassName= 'link';
    //append an <a> to a <li>
    list.appendChild(al); 
    // append <li> to the main list <ul>
    ulist.appendChild(list);  
    
    //  There are several javascript methods for scrolling, 
    // scroll(), scrollBy(), and scrollIntoView() are all acceptable
    al.addEventListener("click", function (e) {
        e.preventDefault();
        const sec1 =document.getElementById('section'+ x);
        sec1.scrollIntoView();
        this.scroll({
            behavior:"smooth"
        });
});
}
