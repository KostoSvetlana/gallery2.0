import ("./main.scss")
import { drawGallaryItem } from './item'
import items from './items'
const galleryRootElement = document.getElementById('gallery')

items.map(item => galleryRootElement.appendChild(drawGallaryItem(item)))