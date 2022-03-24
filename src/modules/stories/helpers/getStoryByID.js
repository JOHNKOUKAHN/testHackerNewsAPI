import stories from './stories.json'

const getStoryByID =  (ID) => {
    let story = stories[stories.findIndex(s => s.id == Number(ID))]
    return {story}

}
export default getStoryByID
