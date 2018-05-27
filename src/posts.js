
import { creatCommentDisplaySection, createLikeCommentBtnSection, createNewCommentSection } from './comment'


import { create } from './util'

export function createPost(postObject) {

    let mainPostDiv = create({'class': 'card mt-2'})
    let cardBody = create({'class': 'card-body'})

    cardBody.innerHTML = postObject.content || ''

    // let postTopSection = createPostTopSection()
    // cardBody.appendChild(postTopSection)

    // let postContentSection = createPostContentSection()
    // cardBody.appendChild(postContentSection)

    // let postReactionSection = createPostReactionSection()
    // cardBody.appendChild(postReactionSection)

    mainPostDiv.appendChild(cardBody)
    return mainPostDiv    


}


function createPostTopSection() {
    let mainDiv = document.createElement('div')
    // Create Avatar
    // Create User Name
    // Create Date Section
    // Merge With Main Div
    // Return MainDiv

    return mainDiv
}

function createPostContentSection() {
    let mainDiv = document.createElement('div')

    return mainDiv
}

function createPostReactionSection() {
    let mainDiv = document.createElement('div')

    let likeCommentBtnSection = createLikeCommentBtnSection()
    mainDiv.appendChild(likeCommentBtnSection)

    let commentDisplaySection = creatCommentDisplaySection()
    mainDiv.appendChild(commentDisplaySection)

    let createNewCommentSection = createNewCommentSection()
    mainDiv.appendChild(createNewCommentSection)

    return mainDiv
}