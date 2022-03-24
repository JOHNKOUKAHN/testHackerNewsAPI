
const comments = async function(parentID) {

let story =  await axios.get(`https://hacker-news.firebaseio.com/v0/item/${parentID}.json?print=pretty`)
    .then(response => { return response.data});

let commentsArray =[];

for(let j = 0; j < story.kids.length; j++){

    let comment =  await axios.get(`https://hacker-news.firebaseio.com/v0/item/${story.kids[j]}.json?print=pretty`)
        .then(response => { return response.data});
    commentsArray.push(comment);   

    if(j == 19) break;
}

return commentsArray;

}


export default comments;