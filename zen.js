var zen = {
    embers: [
        'purple',
        'blue',
        'green',
        'orange',
        'pink',
        'darkPink',
        'brightPurple'
    ],
    boot:function(){
        if($('.glow').length<1){
            return; // do not spawn if no container
        }
        zen.spawn();        
        setInterval(function(){
            zen.spawn();
        }, 2000);
    },
    spawn:function(){
        var emberName = Math.floor(Date.now() / 1000);
        var emberColor = zen.embers[Math.floor(Math.random() * zen.embers.length)];
        $(".glow").append('<div class="ember" data-ember="' + emberName + '"></div>');
        var ember = $('.glow .ember[data-ember=' + emberName + ']');
        ember.addClass(emberColor);
        var x = Math.floor(Math.random() * 120) + -20;
        var y = Math.floor(Math.random() * 120) + -20;
        var s = Math.floor(Math.random() * 8) + 5;
        ember.css({top: x + '%', left: y + '%'}).css('transform', 'scale(' + s + ')');
        setTimeout(function(){
            ember.addClass('show');
            setTimeout(function(){
                ember.removeClass('show');
                setTimeout(function(){
                    ember.remove();
                }, 6000);
            }, 6000);
        }, 500);
    }
  };
