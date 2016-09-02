<script>
    function hasClass(element, className) {
        return element.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(element.className);
    }
    
    function onSearch(){
        var searchbar = document.getElementById("searchbar");
        var searchbarX = document.getElementById("searchbar-x");
        var verify = hasClass(searchbar, 'searchbox-isOpen');
        if(!verify){
            searchbar.className += " searchbox-isOpen";
            searchbarX.style.display="inline";
    
        }else{
            searchbar.className = "searchbox-input";
            searchbarX.style.display="none";        
        }
    }  
    function onSearchDelete(){
        var form = document.getElementById("cntnt01moduleform_1");
        form.reset();
    }
    
</script> 
