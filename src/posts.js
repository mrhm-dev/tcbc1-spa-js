
import { creatCommentDisplaySection, createLikeCommentBtnSection, createNewCommentSection } from './comment'

export const createPost = postObject => {

    let mainPostDiv = document.createElement('div')

    let postTopSection = createPostTopSection()
    mainPostDiv.appendChild(postTopSection)

    let postContentSection = createPostContentSection()
    mainPostDiv.appendChild(postContentSection)

    let postReactionSection = createPostReactionSection()
    mainPostDiv.appendChild(postReactionSection)

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