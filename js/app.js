//specify element by id
const ulist = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
//make a loop of <li> and <a> inside <ul>
for(let x = 0; x<sections.length; x++){
    //make an element <li>
    const list =document.createElement('li'); 
    
    //make an element <a>
    const al =document.createElement('a'); 
    //set an attribute in <a> name href
    al.setAttribute('href', '#'); 
    al.textContent ='section'+(x+1); 
    //make attribute of class name for every <a>
    al.ClassName= 'link';
    //append an <a> to a <li>
    list.appendChild(al); 
    // append <li> to the main list <ul>
    ulist.appendChild(list);  
    ulist.style.backgroundColor ='rgb(41, 41, 71)';
    //check if it visible in viewport
    
    function secposi(){
    for(let section of sections){
        let rect = section.getBoundingClientRect();
        console.log(rect);
        
                if(section.offsetTop>=0 && section.offsetHeight >= rect.bottom){
                    section.classList.add('your-active-class');
                    console.log("true");
                }
                else{
                    section.classList.remove('your-active-class');
                    console.log("false");
                }  
            
        }
    
    }
    // use event click 
    al.addEventListener("click", function (e) {
        e.preventDefault();
        let sec =document.getElementById('section'+ (x+1));
        sec.scrollIntoView({behavior:"smooth"});
});

}




document.addEventListener('scroll', secposi);
