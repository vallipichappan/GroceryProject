//Step 2 -- Define Routes
import PageContent from './components/PageContent.vue'
import AddItem from './AddItem.vue'
export default[
    { path: '/', component: PageContent},
    { path: '/add', component: AddItem}
]