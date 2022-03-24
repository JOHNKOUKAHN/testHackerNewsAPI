const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs');


const getStories = async function(){

// Get the max number of stories
let maxItemID = await axios.get("https://hacker-news.firebaseio.com/v0/maxitem.json?print=pretty").then(response => { return response.data})
console.log(maxItemID)

let topStories = Array(10).fill(0);
let scores = Array(10).fill(0);

//Get the ids of best ranked stories 
let stories =  await axios.get(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`)
        .then(response => { return response.data});

//We need the score to select only the top 10 and since array also includes jobs, we need to make sure type is 'story'
for (let index = 0; index < stories.length; index++) {
    let {score,type} =await axios.get(`https://hacker-news.firebaseio.com/v0/item/${stories[index]}.json?print=pretty`)
    .then(response => { return response.data});


    if( type == "story" && score >= scores[0]){
        scores.push(score);
        topStories.push(stories[index]);

//bubble method to multi-sort scores and stories IDs based on scores             
        for(var i = 0; i < scores.length; i++){
            for(var j = 0; j < ( scores.length - i -1 ); j++){
                if(scores[j] > scores[j+1]){
                    var temp = scores[j]
                    var tempStorie = topStories[j]
                    scores[j] = scores[j + 1]
                    topStories[j] = topStories[j + 1]

                    scores[j+1] = temp
                    topStories[j+1] = tempStorie
                }
            
            }
        } 
        topStories.shift();
        scores.shift();
        
    }
 
}


//Write stories objects to a json file to access locally
//Also write the comments of each story and write them to a diferent json file
var data = fs.readFileSync('stories.json');
var storiesJson = JSON.parse(data)


// let topStories = [
//     30725804, 30727052,
//     30743141, 30723890,
//     30729212, 30733339,
//     30744925, 30729109,
//     30747332, 30749134
//   ];

var comments = fs.readFileSync('comments.json');
var commentsJson = JSON.parse(comments)

for (let i = 0; i < commentsJson.length; i++) {
   console.log( commentsJson[i].parent );
    
}


console.log('2')
for (let i = topStories.length -1; i >= 0 ; i-- ) {

    let story =  await axios.get(`https://hacker-news.firebaseio.com/v0/item/${topStories[i]}.json?print=pretty`)
            .then(response => { return response.data});
    
    
    let storyDetails = await axios.get(story.url)
    .then(response => {return response.data});

    let $ = cheerio.load(storyDetails)

    console.log(i)
    
    let storyDescription = $('p:first').text()

    if (storyDescription) {
        story.description = storyDescription;
    }
    else{
      
      story.description = "There is no description available";
    }

     storiesJson.push(story);   


    for(let j = 0; j < story.kids.length; j++){

        let comment =  await axios.get(`https://hacker-news.firebaseio.com/v0/item/${story.kids[j]}.json?print=pretty`)
            .then(response => { return response.data});
        commentsJson.push(comment);   

        if(j == 19) break;
    }




}

var newData = JSON.stringify(storiesJson);
fs.writeFile('stories.json', newData, err => {
    // error checking
    if(err) throw err;
    
    console.log("Stories added");
}); 

var newComments = JSON.stringify(commentsJson);
fs.writeFile('comments.json', newComments, err => {
    // error checking
    if(err) throw err;
    
    console.log("Comments added");
}); 






console.log('Done') 
}

getStories()


