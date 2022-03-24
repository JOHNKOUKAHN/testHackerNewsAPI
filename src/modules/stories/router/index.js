
export default{

    name: 'stories',
    component: () => import(/* webpackChunkName: "stories" */ '@/modules/stories/layouts/stories.vue'),
    children: [
        {
            path: '',
            name: 'no-story',
            component: () => import(/* webpackChunkName: "stories-no-story" */ '@/modules/stories/views/NoStorySelected.vue'),
    
        },
        {
            path: ':id',
            name: 'story',
            component: () => import(/* webpackChunkName: "story" */ '@/modules/stories/views/StoryView.vue'),
            props: ( route ) =>{
                return{
                    id: route.params.id
                }
            }
        }
    ]

}