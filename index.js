// Reference the frame div by id
const frame = document.getElementById("frame");

// Get the bounding positions of the frame
const frameRect = frame.getBoundingClientRect();

// List of images retrieved from unsplash.com
const imageSrcArray = [
  "https://images.unsplash.com/photo-1666592432779-fa3cbaec35a7?ixid=MnwxMjA3fDB8MXx0b3BpY3x8eEh4WVRNSExnT2N8fHx8fDJ8fDE2NjY3ODYxMjI&ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1632905917161-6e37901f597a?ixid=MnwxMjA3fDB8MXx0b3BpY3x8eEh4WVRNSExnT2N8fHx8fDJ8fDE2NjY3ODYxMjI&ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1666375643892-ee9167a99890?ixid=MnwxMjA3fDB8MXx0b3BpY3x8eEh4WVRNSExnT2N8fHx8fDJ8fDE2NjY3ODYxMjI&ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1666325726492-948c5f9606b7?ixid=MnwxMjA3fDB8MXx0b3BpY3x8eEh4WVRNSExnT2N8fHx8fDJ8fDE2NjY3ODYxMjI&ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1666440968624-15d715a5552e?ixid=MnwxMjA3fDB8MXx0b3BpY3x8eEh4WVRNSExnT2N8fHx8fDJ8fDE2NjY3ODYxMjI&ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1666558614730-9077dcfe1108?ixid=MnwxMjA3fDB8MXx0b3BpY3x8eEh4WVRNSExnT2N8fHx8fDJ8fDE2NjY3ODYxMjI&ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1666618821955-20805e63a559?ixid=MnwxMjA3fDB8MXx0b3BpY3x8eEh4WVRNSExnT2N8fHx8fDJ8fDE2NjY3ODYxMjI&ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1666608517711-b4a30016f471?ixid=MnwxMjA3fDB8MXx0b3BpY3x8eEh4WVRNSExnT2N8fHx8fDJ8fDE2NjY3ODYxMjI&ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1666606341275-3dcd138a3466?ixid=MnwxMjA3fDB8MXx0b3BpY3x8eEh4WVRNSExnT2N8fHx8fDJ8fDE2NjY3ODYxMjI&ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1666606341547-6c018ed382f4?ixid=MnwxMjA3fDB8MXx0b3BpY3x8eEh4WVRNSExnT2N8fHx8fDJ8fDE2NjY3ODYxMjI&ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1666606341560-47c022478e23?ixid=MnwxMjA3fDB8MXx0b3BpY3x8eEh4WVRNSExnT2N8fHx8fDJ8fDE2NjY3ODYxMjI&ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1666606341664-87e8f4aedf6d?ixid=MnwxMjA3fDB8MXx0b3BpY3x8eEh4WVRNSExnT2N8fHx8fDJ8fDE2NjY3ODYxMjI&ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1666606654465-675d553fd218?ixid=MnwxMjA3fDB8MXx0b3BpY3x8eEh4WVRNSExnT2N8fHx8fDJ8fDE2NjY3ODYxMjI&ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1666592432862-aa40682c4a3f?ixid=MnwxMjA3fDB8MXx0b3BpY3x8eEh4WVRNSExnT2N8fHx8fDJ8fDE2NjY3ODYxMjI&ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1666592432903-78debfafd3b2?ixid=MnwxMjA3fDB8MXx0b3BpY3x8eEh4WVRNSExnT2N8fHx8fDJ8fDE2NjY3ODYxMjI&ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1666592433130-b21802c78016?ixid=MnwxMjA3fDB8MXx0b3BpY3x8eEh4WVRNSExnT2N8fHx8fDJ8fDE2NjY3ODYxMjI&ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1666549731593-a997a3bcfe9c?ixid=MnwxMjA3fDB8MXx0b3BpY3x8eEh4WVRNSExnT2N8fHx8fDJ8fDE2NjY3ODYxMjI&ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1666549426460-e3ba155a064f?ixid=MnwxMjA3fDB8MXx0b3BpY3x8eEh4WVRNSExnT2N8fHx8fDJ8fDE2NjY3ODYxMjI&ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1666548004110-c1afb19c1582?ixid=MnwxMjA3fDB8MXx0b3BpY3x8eEh4WVRNSExnT2N8fHx8fDJ8fDE2NjY3ODYxMjI&ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1666538689358-218bdc4dd911?ixid=MnwxMjA3fDB8MXx0b3BpY3x8eEh4WVRNSExnT2N8fHx8fDJ8fDE2NjY3ODYxMjI&ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
];

/**
 * createElement function
 * Creates an image element with the specified src
 * @param id The current id of the image to use
 * @param x The x coord to place the image at
 * @param y The y coord to place the image at
 */
function createElement(imageSrc, x, y) {
  const newElement = document.createElement("img"); // Create a new image element

  newElement.classList.add("image");
  newElement.setAttribute("src", imageSrc);
  newElement.setAttribute("data-id", index);
  newElement.style.left = `${x}px`;
  newElement.style.top = `${y}px`;
  newElement.style.scale = _.random(1.3, 1.5);

  frame.appendChild(newElement); // Add the image element into the frame
  lastPos = { x, y }; // Update the last position where the image was places
}

let index = 0; // Keep track of the index of the image to place
let lastPos = { x: 0, y: 0 }; // Keep track of the position of the last placed image

/**
 * window.onmousemove to listen to whenever the cursor moves and its position/coordinates updates
 * On Mobile, this event is triggered whenever a user taps on the screen
 */
window.onmousemove = (e) => {
  // To prevent the images from popping up too frequently, we check distance between cursor and last placed image
  if (Math.hypot(e.clientX - lastPos.x, e.clientY - lastPos.y) < 200) return;

  // We choose the next image src from the array by using a modulo of the index allowing the index to reset to the start once it reaches the end of the array
  const imageSrc = imageSrcArray[index % imageSrcArray.length];

  // Create element with the chosen imageSrc
  createElement(imageSrc, e.clientX, e.clientY);

  // Update the index to move on to the next image in the array
  index++;

  // To prevent too many images on the page at once, if the index reaches 100, start removing the older images
  if (index > 100)
    document.querySelector(`[data-id="${index - 101}"]`).remove();
};

/**
 * Executes of a function at specified intervals, in our case every 5s
 * The function called will place a random image at random positions within the frame
 */
setInterval(() => {
  const imageSrc = imageSrcArray[_.random(0, 19)],
    x = _.random(frameRect.left, frameRect.right),
    y = _.random(frameRect.top, frameRect.bottom);
  createElement(imageSrc, x, y);
}, 2000);
