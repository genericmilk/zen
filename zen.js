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
        // .glow{height:100%;width:100%;position:absolute;background-color:#000;top:0;left:0;overflow:hidden;pointer-events:none;z-index:-1}.glow .ember{opacity:0;transition:opacity 4s;height:500px;width:500px;position:absolute}.glow .ember.show{opacity:1}.glow .ember.yellow{background:radial-gradient(circle,#5d5026 0%,rgba(93,80,38,0) 50%)}.glow .ember.purple{background:radial-gradient(circle,#3b1766 0%,rgba(59,23,102,0) 50%)}.glow .ember.blue{background:radial-gradient(circle,#2accff 0%,rgba(42,204,255,0) 50%)}.glow .ember.brightPurple{background:radial-gradient(circle,#6f06c1 0%,rgba(111,6,193,0) 50%)}
        
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
