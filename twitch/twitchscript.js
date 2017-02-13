
// var MainHandler = function(x,y,hitBox,image) {
//   this.x = x;
//   this.y = y;
//   this.hitBox = hitBox;
//   this.sprite = image;
// };
// MainHandler.prototype.render = function(){
//       ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

// };

StreamersInfo = function(url,name,logo,about) {
    this.url = url;
    this.name = name;
    this.logo = logo;
    this.about = about;



}
var streamertoSearch = [];
getData();
button();
searchName();
// channels

function getData(){
var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "comster404"];

  for (let i = 0; i < streamers.length; i++) {



    var twitchOnorOffURL = `https://wind-bow.gomix.me/twitch-api/streams/${streamers[i]}`;

     $.ajax(twitchOnorOffURL,{    
                twitchChannel: `https://wind-bow.gomix.me/twitch-api/channels/${streamers[i]}`,
                //    
                dataStream:  {     
                    format: 'json',
                          
                },
             
                dataType:'jsonp',

               
               

            
                success: function(dataStream){
        

                    // console.log(this.twitchChannel);
                   //   console.log(JSON.stringify(arrayObj[3]));


         
                     callback(dataStream,this.twitchChannel);
                     

                  },

        });
    };

}

function callback(dataStream,twitchChannel){
    // console.log(twitchChannel);
    // console.log(dataChannel);
    
                        $.ajax(twitchChannel,{
                            dataStream: dataStream,          
                            dataChannel:  {        
                                format: 'json'            
                            },
                     
                            dataType:'jsonp',
                            success: function(dataChannel){
                                    var about = "Offline";
                                    if(this.dataStream.stream != null) {
                                    
                                         var about = this.dataStream.stream.channel.status; 
                                    }
                                    StreamerInfo = new StreamersInfo(`${dataChannel.url}`, `${dataChannel.display_name}`, `${dataChannel.logo}`, `${about}`);
                                    streamertoSearch.push(StreamerInfo);
                                    display(StreamerInfo);
                                
                                
                               // console.log(this.dataStream);
                               // console.log(this.dataStream.stream.channel.status);
                                // // formatData(dataStream,this.dataChannel);

                             //      console.log(JSON.stringify(dataChannel));
                             }
        // data.stream.channel.status
                        });

                   // console.log(dataChannel);
                   //   console.log(JSON.stringify(arrayObj[3]));

}

function streamerSort(streamersArray,status){
     var ul = document.querySelector('ul');
    while( ul.firstChild ){
           ul.removeChild( ul.firstChild );
           }

  if (status !== 'all'){
    streamersArray.forEach(function(streamer){
        if (status === streamer.about)
            display(streamer);
        else if (status === "online" && streamer.about !== "Offline"){
            display(streamer);
        }
    });

  }
  else{
    streamersArray.length = 0;
    getData();
  } 

}


function display(streamerInfoObj){
               var ul = document.querySelector('ul');
        


           ul.insertAdjacentHTML('beforeend', `<li><span class="pic"><img src="${streamerInfoObj.logo}"></span><span class="info"><a href="${streamerInfoObj.url}">${streamerInfoObj.name}</a>
            <p>${streamerInfoObj.about} </p> </span></li>`);

}

function button(){
    var button = document.querySelectorAll(".sort");
    // 
        for (var i = 0; i < button.length; i++) {
        
            button[i].addEventListener('click', function(e){
        
            streamerSort(streamertoSearch, this.value);

            });
        };
        

}


function searchName(){

 
var search = document.querySelector('.search');
 search.addEventListener('keydown', function(e){
 // var s = document.querySelector('.search');
 //     if (s.value.length <= 1){
    var inputValue = document.querySelector('.search').value;
    var inputValueUpper = capitalizeFirstLetter(inputValue);
    var inputValueLower = LowerFirstLetter(inputValue);
 console.log(inputValueLower);
    for (let i = 0; i < streamertoSearch.length; i++) {

        if ((streamertoSearch[i].name.search(inputValueUpper) === 0 || streamertoSearch[i].name.search(inputValueLower) === 0) && inputValue !== ""){
            console.log(streamertoSearch[i].name.search(inputValueUpper));
            // console.log(inputValue);
               var ul = document.querySelector('ul');
                      while( ul.firstChild ){
                       ul.removeChild( ul.firstChild );
                          }
               display(streamertoSearch[i]);

                         // console.log(streamertoSearch[i].name);

        }
    

      
    }
        
    

 });

}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function LowerFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}



// .list{
//   display: flex;
//     justify-content:center;
//     align-items:center;
    
// }
// ul{
//   display: flex;
//   flex-flow: column wrap;
//   list-style: none;
//   padding: 0;
//   align-content: space-between;
//   height: 900px;

  
  
// }

// li{
  
//   margin: 25px;

//   border-style: solid;
//   border-width: 5px 4px;
//   border-color: #BDBDBD;
//   padding: 20px;
//   display: flex;

      
  
//     box-shadow: 2px 2px 5px #e5e5e5 ;

// }





// function FormatData(datastream, datachannel){

// console.log(datastream);
// console.log(datachannel);

// }