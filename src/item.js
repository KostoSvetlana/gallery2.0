const ITEM_TYPES = {
    image: drawImage,
    audio: drawAudio,
    Video: drawVideo
}

function drawImage(item) {
    const imgElement = document.createElement('img')
    imgElement.classList = " gallery-item_image"
    imgElement.src = item.resource


    return imgElement
}

function drawAudio(item){
    const audioElement = document.createElement('audio')
    audioElement.classList = "gallery-item_audio"
    audioElement.src = item.resource
    audioElement.controls = true


    return audioElement
}



function grawVideo(item){
    const videoElement = document.createElement('video')
    videoElement.classList = "gallery-item_video"
    videoElement.src = item.resource
    videoElement.controls = true


    return videoElement
}

export function drawGallaryItem(item){
    const itemElement = document.createElement('div')
    itemElement.classList = "gallery-item"

    const resourceWrapElement = document.createElement('div')
    resourceWrapElement.classList = "gallery-item_resourse"

    const drawForType = ITEM_TYPES(item.type)
    resourceWrapElement.appendChild(drawForType(item))

    const titlElement = document.createElement('span')
    titlElement.classList= "gallery-item_title"
    titlElement.textContent = item.titlElement

    itemElement.appendChild(resourceWrapElement)
    itemElement.appendChild(titlElement)


    return itemElement
}

