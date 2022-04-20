var Link = {
    setColor:function(color){
   $('a').css('color',color)
    }
} 

var Body = {
    setColor:function(color){
        $('body').css('color',color);
    },
    setBackgroundColor:function(color){
        $('body').css('backgroundColor',color)
    }
}
function nightdayhandler(self){
    var target = document.querySelector('body');
    if(self.value==='night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value='day';
    Link.setColor('powderblue');    
    } else{
    target.style.backgroundColor='white';
    target.style.color='black';
    self.value='night';
    Link.setColor('black');
 }
}