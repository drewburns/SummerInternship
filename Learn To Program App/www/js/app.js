
var xmlhttp;
var courseData  
    window.onload = function()
    {
      loadXML();
        
    }

    function loadXML(){
        var url = "https://s3-us-west-2.amazonaws.com/mobileapps2016/HTML5BeginningBeginner/course.json";
        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = processData;
        xmlhttp.open("GET", url , true);
        xmlhttp.send();
    }

    function processData() {
        if (xmlhttp.readyState==4 && xmlhttp.status== 200){
            courseData = xmlhttp.responseText;
            courseData = JSON.parse(courseData);
            var chapters = courseData.chapters
            var numChapter = chapters.length;
            updateHeader();
            updatePageThree();
            for (i=0; i < numChapter; i++) {
                var out = "<li class='divider ui-li ui-li-divider ui-btn ui-bar-b' data-role='list-divider'>" + chapters[i].name + "</li>"
                document.getElementById('my-listview').innerHTML += out;
                var numSub = chapters[i].subchapters.length
                for (x=0; x < numSub; x++) {
                    var thumbnail = chapters[i].subchapters[x].thumbnail_url
                    var videoTitle = chapters[i].subchapters[x].name
                    var description = chapters[i].subchapters[x].description
                    document.getElementById('my-listview').innerHTML;
                    var sub_out = "<li class='course-item ui-btn ui-btn-up-c ui-btn-icon-right ui-li-has-arrow ui-li' data-theme='c'>" + "<div class='ui-btn-inner ui-li' aria-hidden='true'>" + "<div class='ui-btn-text'>" +
                        "<img class='list-image' src=" + thumbnail + ">" +
                        "<div class='list-content'>" +
                        "<h1 class='list-title ui-li-heading'>" + videoTitle + "</h1>" +
                        "<p class='list-desc ui-li-desc'>" + description + "</p>" +
                        "<a href='#page-two' onclick='updatePageTwo(" + i + "," + x + ")' class=' button small-7'>Play</a>" +
                        "<a class='ui-link-inherit' href='#page-two'></a>" + "</div></div></li>"
                    
                      document.getElementById('my-listview').innerHTML += sub_out; 
                                
                }

            }
        }
        
    }


    function updatePageTwo(chapter,subchapter) {
        var theSubChapter = courseData.chapters[chapter].subchapters[subchapter]
        var out = "<div class='header'>" +
            "<h1 id='course-name'>" + theSubChapter.name + "<h1>" + "</div>" +
            "<div data-role='content' id='video-content'>" +
            "<a onclick='stopVideo()' id='back-button' href='#page-one'>Back</a>" +
            "<video allowfullscreen autoplay poster='loading.gif' id='video' width='100%'><source src='" +
            theSubChapter.video_url + "'type='video/mp4'></video>" +
            "<h1 class='video-title'>" + theSubChapter.name + "</h1>" +
            "<p class='video-desc'>" + theSubChapter.description + "</p>"+
        "</div>"
        
        if (theSubChapter.labTXTS != null && theSubChapter.labPics != null) {
            for (y=0; y < theSubChapter.labTXTS.length; y++) {
                var lab = "labs/" + theSubChapter.labTXTS[y].file
                var image = "labs/" + theSubChapter.labPics[y].file
                out += "<p class='lab-desc'>" + readTextFile(lab) + "</p>" +
                "<img class='lab-image' src='" +  image + "'></img>"
            }
        }

        document.getElementById('page-two').innerHTML = out;
document.getElementById('video').addEventListener('click',playVideo, false);
    }


    function updatePageThree() {
        
        var title = courseData.title
        var description = courseData.description
        var author = courseData.author
        var graphic = courseData.graphic
        
        
        var out = "<img id='course-graphic' src='" + graphic + "'></img>" +
            "<h1 class='video-title'>" + author + "</h1>" +
            "<p class='video-desc'>"+ description + "</p>"
        document.getElementById('about-content').innerHTML += out;
        
    }

    function updateHeader(){
        var name = courseData.title
        document.getElementById('course-name').innerHTML = name;
    }

    function readTextFile(file) {
        var allText = "test"
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
        {
            if(rawFile.readyState === 4)
            {
                if(rawFile.status === 200 || rawFile.status == 0)
                {
                    allText = rawFile.responseText;
                    
                }
            }
        }
    rawFile.send(null);
    return allText
    }
    
    function playVideo() {
        document.getElementById('video').play();
        document.getElementById('video').webkitEnterFullscreen();
    }
//
    function stopVideo() {
        document.getElementById('video').pause()
    }

    
// document.getElementById('btnGetInfo').addEventListener('click',getMovieInfo, false);


//span to add to list-view for little arrow thing
//<span class='ui-icon ui-icon-arrow-r ui-icon-shadow'></span>
////
//            <img id="course-graphic" src=""></img>
//                <h1 class="video-title"> Title</h1>
//          <h1 class="video-title">Author</h1>
//                <p class="video-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
