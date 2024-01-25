
 ///<reference types="../@types/jquery"/> 


(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;

    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "10/25/",
        birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end
    
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
            document.getElementById("days").innerText = `${Math.floor(distance / (day))} day`,
            document.getElementById("hours").innerText = `${Math.floor((distance % (day)) / (hour))} hour`,
            document.getElementById("minutes").innerText = `${Math.floor((distance % (hour)) / (minute))} minute`,
            document.getElementById("seconds").innerText = `${Math.floor((distance % (minute)) / second)} second`;

        }, 0)
    }());

    let y;
    let x=100;
    $('#number').html(x);
    $('#message').keyup(function(e){


        y=e.target.value;
        $('#number').html(x-y.length);
        if((x-y.length)<0||(x-y.length)==0){
            $('#number').html('your available character finished ')
        }
    })


    $('.sidebaropen').on('click',function () { 

        $('.sidebaropen').animate({marginLeft:"200px"})
        $('.side-nav').animate({width:"200px"})
        
    });
    
    
    $('.fa-x').on('click',function(){
        $('.side-nav').animate({width:"0px"});
        $('.sidebaropen').animate({marginLeft:"0px"})
    })
    
    $('.durationText h1').on('click',function(e){
        $('.durationText p').not($(e.target).next()).slideUp(1000)
    
        $(e.target).next().slideToggle(1000)
    })


    $('.side-nav a[href]').click(function(e){
        let hrefPass=$(e.target).attr('href');
      
        let y=$(hrefPass).offset().top;
        
        $("html,body").animate({scrollTop:y},500 )
      
      })