import './index.css'

import { createPost } from './posts'
import { select, create } from './util'

window.onload = function() {

    const postObject = {}

    const nameField = select('#nameField')
    nameField.addEventListener('keyup', function(event) {
        if (event.target.value) {
            postObject.username = event.target.value
        } else {
            alert('Please Enter Your Name')
        }
    }) 

    const contentField = select('#contentField')
    contentField.addEventListener('keyup', function(event) {
        if (nameField.value) {  
            postObject.content = event.target.value
        } else {
            alert('Please Enter Your Name First')
            this.value = ''
            nameField.focus()
        }
    })

    const selectFont = select('#selectFont')
    selectFont.addEventListener('change', function(event) {
        postObject.fontFamily = event.target.value
    })

    const selectFontSize = select('#selectFontSize')
    selectFontSize.addEventListener('change', function(event){
        postObject.fontSize = event.target.value
    })
    
    
    const postBtn = select('#postBtn')
    // postBtn.addEventListener('click', e => createPost(postObject))
    postBtn.addEventListener('click', function() {
        
        nameField.value = ''
        contentField.value = ''

        let parents = select('#allPosts')
        parents.appendChild(createPost(postObject))
    })


}


