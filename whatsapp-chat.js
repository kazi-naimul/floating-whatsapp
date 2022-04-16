var whatsappchat = {
    singleUser :function(options){
        var defaultSettings = {
            phone : '',
            name :'',
            headerMessage: 'Welcome!',
            iconColor: '#4ee676',
            selector: ''
        };

        var settings = {...defaultSettings,...options};
        if(settings.selector != ''){
            var element = null;
            if(settings.selector.charAt(0) == '#'){
                element = document.getElementById(settings.selector.substring(1));
            }else if(settings.selector.charAt(0) == '.'){
                element = document.getElementsByName(settings.selector.substring(1));
            }else{
                console.log('selector is not right format should be #example_id of .example_class');
            }
            if(element !=null){
                var chatButton = '<span class ="rs-openChatBtn"><svg fill="'+settings.iconColor+'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="64px" height="64px"><path d="M 64 2 C 29.8 2 2 29.8 2 64 C 2 74.5 4.5992188 84.800391 9.6992188 93.900391 L 4.4003906 113.30078 C 3.5003906 116.40078 4.3992188 119.60039 6.6992188 121.90039 C 8.9992188 124.20039 12.200781 125.10078 15.300781 124.30078 L 35.5 119 C 44.3 123.6 54.099609 126 64.099609 126 C 98.299609 126 126.09961 98.2 126.09961 64 C 126.09961 47.4 119.7 31.899219 108 20.199219 C 96.2 8.4992187 80.6 2 64 2 z M 64 8 C 79 8 93.099609 13.800391 103.59961 24.400391 C 114.19961 35.000391 120.1 49.1 120 64 C 120 94.9 94.9 120 64 120 C 54.7 120 45.399219 117.59922 37.199219 113.19922 C 36.799219 112.99922 36.300781 112.80078 35.800781 112.80078 C 35.500781 112.80078 35.3 112.80039 35 112.90039 L 13.699219 118.5 C 12.199219 118.9 11.200781 118.09922 10.800781 117.69922 C 10.400781 117.29922 9.6 116.30078 10 114.80078 L 15.599609 94.199219 C 15.799609 93.399219 15.700781 92.600391 15.300781 91.900391 C 10.500781 83.500391 8 73.8 8 64 C 8 33.1 33.1 8 64 8 z M 64 17 C 38.1 17 17 38 17 64 C 17 72.3 19.200781 80.4 23.300781 87.5 C 24.900781 90.3 25.3 93.599219 24.5 96.699219 L 21.599609 107.19922 L 32.800781 104.30078 C 33.800781 104.00078 34.800781 103.90039 35.800781 103.90039 C 37.800781 103.90039 39.8 104.40039 41.5 105.40039 C 48.4 109.00039 56.1 111 64 111 C 89.9 111 111 89.9 111 64 C 111 51.4 106.09922 39.599219 97.199219 30.699219 C 88.399219 21.899219 76.6 17 64 17 z M 43.099609 36.699219 L 45.900391 36.699219 C 47.000391 36.699219 48.099219 36.799219 49.199219 39.199219 C 50.499219 42.099219 53.399219 49.399609 53.699219 50.099609 C 54.099219 50.799609 54.300781 51.699219 53.800781 52.699219 C 53.300781 53.699219 53.100781 54.299219 52.300781 55.199219 C 51.600781 56.099219 50.699609 57.100781 50.099609 57.800781 C 49.399609 58.500781 48.6 59.300781 49.5 60.800781 C 50.4 62.300781 53.299219 67.1 57.699219 71 C 63.299219 76 68.099609 77.600781 69.599609 78.300781 C 71.099609 79.000781 71.900781 78.900391 72.800781 77.900391 C 73.700781 76.900391 76.5 73.599609 77.5 72.099609 C 78.5 70.599609 79.500781 70.900391 80.800781 71.400391 C 82.200781 71.900391 89.400391 75.499219 90.900391 76.199219 C 92.400391 76.899219 93.399219 77.300391 93.699219 77.900391 C 94.099219 78.700391 94.100391 81.599609 92.900391 85.099609 C 91.700391 88.499609 85.700391 91.899609 82.900391 92.099609 C 80.200391 92.299609 77.699219 93.300391 65.199219 88.400391 C 50.199219 82.500391 40.7 67.099609 40 66.099609 C 39.3 65.099609 34 58.100781 34 50.800781 C 34 43.500781 37.799219 40 39.199219 38.5 C 40.599219 37 42.099609 36.699219 43.099609 36.699219 z"/></svg></span>';
                var chatBox = '<div class="rs-openChat"><form><button type="button" class="rs-close">X</button><p for="msg"><b>'+settings.headerMessage+'</b></p><textarea placeholder="Type message..." class="rs-whatsapp-msg" name="msg" required></textarea><div class="rs-go-to-whatsapp"><span class ="rs-SendBtn" ><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="80pt" height="80pt" viewBox="0 0 128 128" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,96.000000) scale(0.100000,-0.100000)" fill="'+settings.iconColor+'" stroke="none"><path d="M378 807 c-99 -38 -157 -88 -206 -181 -24 -45 -27 -62 -27 -146 0-89 2 -99 34 -158 39 -71 79 -110 154 -149 46 -24 63 -27 147 -27 84 0 101 3 147 27 75 39 115 78 154 149 32 59 34 69 34 158 0 79 -4 103 -23 141 -35 72-84 122 -154 159 -54 29 -75 34 -143 37 -51 2 -93 -2 -117 -10z m267 -275 c16-9 -15 -11 -144 -9 l-164 2 -24 75 c-12 41 -23 78 -23 82 0 6 316 -127 355-150z m-5 -46 c-54 -29 -340 -149 -345 -145 -3 4 20 92 40 147 3 9 46 12 167 12 142 -1 160 -3 138 -14z"/></g></svg></span> </div></form></div>';
                var html = chatButton+chatBox;
                element.innerHTML = html;


                document.getElementsByClassName('rs-go-to-whatsapp')[0].addEventListener("click", function(){
                    message = document.getElementsByClassName('rs-whatsapp-msg')[0].value;
                    sendWPMessage(settings.phone, message);
                });



                document.getElementsByClassName('rs-openChatBtn')[0].addEventListener("click", function(){
                    document.getElementsByClassName('rs-openChatBtn')[0].style.display = "none";
                    document.getElementsByClassName('rs-openChat')[0].style.display = "block";
                });
                document.getElementsByClassName('rs-close')[0].addEventListener("click", function(){
                    document.getElementsByClassName('rs-openChatBtn')[0].style.display = "block";
                    document.getElementsByClassName('rs-openChat')[0].style.display = "none";
                });

        }
        }else{
            console.log('selector is required to init');
        }

    },
    multipleUser :function(options){
        var defaultSettings = {
            users : [''],
            headerMessage: 'Feel free to ask any questions!',
            chatBoxMessage: 'The team typically replies in a few minutes.',
            color: '#4ee676',
            selector: '',
        };
        var settings = {...defaultSettings,...options};
        if(settings.selector != ''){
            var userList = '';
            settings.users.forEach(function (user, index){
                var active = 'active active-chat-border';
                if(typeof settings.users[index].active != 'undefined' && !settings.users[index].active){
                    active = '';
                }
                var image = 'assets/user.png';
                if(typeof settings.users[index].image != 'undefined' ){
                    image = settings.users[index].image;
                }
                designation = '';
                if(typeof settings.users[index].designation != 'undefined' ){
                    designation = settings.users[index].designation;
                }
                userList +='<li class="item rs-go-to-whatsapp '+active+'" data-userId="'+index+'">'+
                    '<div class="col col-1"><div class="user-pro-pic-wrapper">'+
                    '<img class="user-pro-pic" src="'+image+'" style="width:50px"></div></div><div class="col col-2">'+
                    '<div class="list-title">'+settings.users[index].name+'</div><div class="list-content">'+designation+'</div>'+
                    '<div class="list-latest-text"></div></div><div class="col col-3"><div class="list-icon-wrapper">'+
                    '<svg class="list-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;"><g> ' +
                    '<path d="M378.853,294.202c-0.997-0.479-38.324-18.859-44.956-21.246c-2.708-0.972-5.609-1.922-8.694-1.922 c-5.04,0-9.274,2.512-12.572,' +
                    '7.446c-3.729,5.542-15.016,18.736-18.503,22.678c-0.456,0.52-1.077,1.142-1.45,1.142 c-0.334,0-6.111-2.379-7.86-3.138c-40.041-17.393-70.433-59.219-74.601-66.272c-0.595-1.014-0.62-1.474-0.625-1.474 c0.146-0.537,' +
                    '1.493-1.887,2.188-2.583c2.033-2.011,4.236-4.663,6.367-7.228c1.009-1.215,2.02-2.432,3.012-3.579 c3.092-3.597,' +
                    '4.468-6.39,6.064-9.625l0.836-1.681c3.897-7.742,0.569-14.274-0.507-16.384c-0.883-1.765-16.643-39.803-18.319-43.799 c-4.03-9.643-9.354-14.133-16.753-14.133c-0.687,' +
                    '0,0,0-2.879,0.121c-3.506,0.148-22.598,2.661-31.039,7.983 c-8.952,5.644-24.096,23.633-24.096,55.271c0,28.474,18.07,55.359,25.828,65.584c0.193,0.258,0.547,0.781,1.061,' +
                    '1.533 c29.711,43.39,66.75,75.547,104.297,90.546c36.148,14.439,53.265,16.108,62.996,16.108c0.002,0,0.002,0,0.002,0 c4.089,0,7.362-0.321,' +
                    '10.25-0.605l1.832-0.175c12.487-1.107,39.929-15.327,46.171-32.673c4.917-13.663,6.214-28.591,2.942-34.008 C387.604,298.403,383.742,' +
                    '296.549,378.853,294.202z"/>' +
                    '<path d="M260.545,0C121.879,0,9.066,111.965,9.066,249.588c0,44.512,11.912,88.084,34.479,126.218 L0.352,' +
                    '503.216c-0.805,2.375-0.206,5.002,1.551,6.791C3.172,511.302,4.892,512,6.649,512c0.673,0,1.351-0.101,2.013-0.313 l132.854-42.217c36.355,' +
                    '19.424,77.445,29.678,119.03,29.678C399.199,499.15,512,387.197,512,249.588 C512,111.965,399.199,0,260.545,0z M260.545,447.159c-39.13,' +
                    '0-77.029-11.299-109.608-32.677c-1.095-0.72-2.367-1.089-3.647-1.089 c-0.677,0-1.355,0.103-2.015,0.313l-66.552,21.155l21.484-63.383c0.695-2.051,' +
                    '0.347-4.314-0.933-6.063 c-24.809-33.898-37.923-73.949-37.923-115.827c0-108.955,89.357-197.597,199.191-197.597c109.821,0,199.168,88.642,199.168,197.597 C459.713,358.53,370.367,447.159,260.545,447.159z"/></g>' +
                    '</svg></div></div></li>';
            })
            var element = null;
            if(settings.selector.charAt(0) == '#'){
                element = document.getElementById(settings.selector.substring(1));
            }else if(settings.selector.charAt(0) == '.'){
                element = document.getElementsByName(settings.selector.substring(1));
            }else{
                console.log('selector is not right format should be #example_id of .example_class');
            }
            if(element !=null){
                var chatBox = '<div class="ayoan_whatsapp_chatbox_container">' +
                    '<div class="rs-openChat" style="display: none"> <div class="ayoan_whatsapp_chatbox">' +
                    '<div class="widget-wrapper"> <div class="widget-header"> <div class="col col-1">' +
                    '<img class="header-icon" src="assets/whatsapp.svg"> </div><div class="col col-2">' +
                    '<div class="header-title">Start a Conversation</div><div class="header-content">'+settings.headerMessage+
                    '</div></div></div><div class="widget-body"><div class="body-title">'+settings.chatBoxMessage+
                    '</div><div class="body-content ayoan_whatsapp_scroll1"><ul class="user-list">'+userList+
                    '</ul></div></div></div></div><div class="widget-close-btn-row" >' +
                    '<button type="button" class="rs-close widget-close-btn">' +
                    '<img class="icon" src="assets/close.svg"></button></div></div>' +
                    '<div class="rs-openChatBtn widget-close-btn-row" >' +
                    '<button type="button" class="rs-openChatBtn widget-close-btn">' +
                    '<img class="icon" src="assets/whatsapp.svg"></button></div></div>';
                element.innerHTML = chatBox;
                changeColor(settings.color);
                var goToWhatsapp = document.getElementsByClassName('rs-go-to-whatsapp');
                for (var i = 0; i < goToWhatsapp.length; i++) {
                    goToWhatsapp[i].addEventListener("click", function(){
                        var userId = this.getAttribute("data-userId");
                        message = "Hello!";
                        sendWPMessage(settings.users[parseInt(userId)].phone, message);
                    });
                }

                document.getElementsByClassName('rs-openChatBtn')[0].addEventListener("click", function(){
                    document.getElementsByClassName('rs-openChatBtn')[0].style.display = "none";
                    document.getElementsByClassName('rs-openChat')[0].style.display = "block";
                });
                document.getElementsByClassName('rs-close')[0].addEventListener("click", function(){
                    document.getElementsByClassName('rs-openChatBtn')[0].style.display = "block";
                    document.getElementsByClassName('rs-openChat')[0].style.display = "none";
                });

            }
        }else{
            console.log('selector is required to init');
        }

    }
}

function changeColor(color){
    var widgetHeader = document.getElementsByClassName('widget-header');
    var widgetCloseBtn = document.getElementsByClassName('widget-close-btn');
    var chatBorder = document.getElementsByClassName('active-chat-border');
    var listIcon = document.querySelectorAll(".ayoan_whatsapp_chatbox .widget-body .body-content .user-list .item.active .col-3 .list-icon-wrapper .list-icon path");
    for (var i = 0; i < widgetHeader.length; i++) {
        widgetHeader[i].style.background = color;
    }
    for (var i = 0; i < widgetCloseBtn.length; i++) {
        widgetCloseBtn[i].style.background = color;
    }
    for (var i = 0; i < listIcon.length; i++) {
        listIcon[i].style.fill = color;
    }
    for (var i = 0; i < chatBorder.length; i++) {
        chatBorder[i].style.borderLeft = '3px solid '+color;
    }
}

function isMobile() {
    var mobileDevice = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return mobileDevice;
}
  
function sendWPMessage(phone, message=''){
    var isMobileTrue = isMobile();
    var apiEndPoint = 'http://';
    if(isMobileTrue){
        apiEndPoint = apiEndPoint+'api';
    }else{
        apiEndPoint = apiEndPoint+'web';
    }
    apiEndPoint = apiEndPoint+'.whatsapp.com/send?phone=' + phone + '&text=' + encodeURI(message);
    
    window.open(apiEndPoint);
}