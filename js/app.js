const faq_items = document.querySelectorAll('.faqs .faq-item');

// add event click
faq_items.forEach( item =>{
    item.addEventListener('click', (e)=>{

        if( item.classList.contains('expanded') )
            item.classList.remove('expanded');
        else
            item.classList.add('expanded');
        
        // collapse the other tabs
        faq_items.forEach( (i,index) => {
            if( i != item ){
                //alert(`hi ${index}`);
                i.classList.remove('expanded');
            }
        });
        
    });
});