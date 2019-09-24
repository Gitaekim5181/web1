var Links = {
    setColor:function(color){
        // var alist = document.querySelectorAll('a');
        // var i=0;
        // while(i<alist.length){
        //     alist[i].style.color=color;
        //     i=i+1;
        // }
        $('a').css('color',color);
    }
}

var boy ={
        setColor:function(color){
        //document.querySelector('body').style.color=color;
        $('body').css('color',color);
        },
        setBackgroundcolor:function(color){
        //document.querySelector('body').style.backgroundColor=color;
        $('body').css('backgroundColor',color);
        }
    }   

    function nightDayHandler(self){
            var target = document.querySelector('body');
            if(	self.value==='night'){
            boy.setBackgroundcolor('black');
            boy.setColor('white');
    
            self.value ='day';
            Links.setColor('powderblue');
        
            }else{
                boy.setBackgroundcolor('white');
                boy.setColor('black');
                self.value ='night';

                Links.setColor('red');

            }
    }