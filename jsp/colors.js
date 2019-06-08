    /*jsp 파일 내 내용: 객체로 정리하기*/
    var Links = {
        setColor: function (color) {
            /*jquery사용 => $*/
            /*새로운 언어가 아님 jsp를 이용해서 우리대신 css라는 함수를 jquery가 만들어 놓은 것*/
            $('a').css('color', color);
            //            var alist = document.querySelectorAll('a');
            //            var i = 0;
            //            while (i < alist.length) {
            //                alist[i].style.color = color;
            //                i = i + 1;
            //            }
        }
    }

    var Body = {
        setColor: function (color) {
            //            document.querySelector('body').style.color = color;
            $('body').css('color', color);
        },
        setBackGroundColor: function (color) {
            //            document.querySelector('body').style.backgroundColor = color;
            $('body').css('backgroundColor', color);
        }
    }

    function nightDayHandler(self) {
        var target = document.querySelector('body');
        if (self.value === 'night') {
            Body.setBackGroundColor('black');
            Body.setColor('white');
            self.value = 'day';

            Links.setColor('powderblue');

        } else {
            Body.setBackGroundColor('white');
            Body.setColor('black');
            self.value = 'night';

            Links.setColor('blue');
        }
    }
