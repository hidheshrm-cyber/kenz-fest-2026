import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initStoryAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  // Create a container for the scrolling characters
  const storyContainer = document.createElement('div');
  storyContainer.id = 'story-animations-container';
  Object.assign(storyContainer.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    pointerEvents: 'none',
    zIndex: '1', // Places images behind content (z-index: 2) but above background
    overflow: 'hidden'
  });

  // Create the 3 image elements
  // We use object-fit and transparent fallback to prevent ugly broken image icons if files are missing
  storyContainer.innerHTML = `
    <img id="story-char-2" src="/assets/story_char2.png" onerror="this.style.opacity='0'" alt="Character 2" style="position: absolute; opacity: 0; width: 180px; will-change: transform;" />
    <img id="story-char-3" src="/assets/story_char3.png" onerror="this.style.opacity='0'" alt="Character 3" style="position: absolute; opacity: 0; width: 220px; will-change: transform;" />
  `;
  document.body.appendChild(storyContainer);

  const img2 = document.getElementById('story-char-2');
  const img3 = document.getElementById('story-char-3');

  const eventsSec = document.getElementById('events');
  const mascotSec = document.getElementById('mascot-3d');
  const coordsSec = document.getElementById('coordinators');
  const aboutSec = document.getElementById('about');
  
  if (!eventsSec || !mascotSec || !coordsSec || !aboutSec) return;

  // Animation 1: Pink Panther (story_char2) moving Right Top to Left Down
  const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: eventsSec,
      start: "top 10%",
      endTrigger: mascotSec,
      end: "top 60%",
      scrub: 2.5,
      toggleActions: "play reverse play reverse"
    }
  });
  
  tl1.set(img2, { opacity: 1 })
     .fromTo(img2, 
       { x: '110vw', y: '-20vh' },
       { x: '-30vw', y: '120vh', ease: "power2.inOut" }
     )
     .set(img2, { opacity: 0 });

  // Animation 2: Pink Panther with white guy (story_char3) moving Left Down to Right Top (in 3rd position slot)
  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: coordsSec,
      start: "top 60%", // Starts just as coordinators section comes into view
      endTrigger: aboutSec,
      end: "top 85%", // Ends when Institution Profile section just starts coming into view
      scrub: 2.5
    }
  });

  tl3.set(img3, { opacity: 1 })
     .fromTo(img3,
       { x: '-30vw', y: '120vh' },
       { x: '110vw', y: '-20vh', ease: "power2.inOut" }
     )
     .set(img3, { opacity: 0 });

}

