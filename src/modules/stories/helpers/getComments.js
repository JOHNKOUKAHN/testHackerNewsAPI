import  comments from './comments.json'
const getComments = (parentID) => {

 let commentsArray = [];
 
 let startIndex = comments.findIndex(i => i.parent == parentID);

 while(comments[startIndex].parent == parentID ){
     commentsArray.push(comments[startIndex])
     startIndex++;
     if(startIndex >= comments.length) break;
 }

return {
        commentsArray: commentsArray,
        algo: 'Algo',
        startIndex

    };

}


export default getComments;