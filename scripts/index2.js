import Gl from './gl';
import Blob from './gl/Blob';

import gsap from 'gsap';

class App {
  constructor() {
    this.blob = null;
    this.addBlobs();
    gsap.registerPlugin(SplitText);

    // Main animation tl

    this.tl
      .add(this.article())
      .add(this.animBlobs(), '-=1');
  }

  addBlobs() {
    // size, speed, color, freq, density, strength, offset
    if(window.innerWidth <= 786) this.blob = new Blob(2.0, 0.15, 3.0, 2.2, 0.3, Math.PI * 2);
    else this.blob = new Blob(4.0, 0.15, 4.0, 2.2, 0.3, Math.PI * 2);   
    this.blob.position.set(0, 0, 0);
    this.blob.rotation.set(0, 0, 0);
    Gl.scene.add(this.blob);
    
  }

  article() {
    
    // Main content
    const tl = gsap.timeline({
      defaults: {
        ease: 'power3.inOut',
      }
    });

    // Content clip
    const content = document.querySelector('.content span');
    const contentClip = { x: 0 };    

    

    return tl;    
  }

  animBlobs() {
    // Move Threejs Blobs
    const tl = gsap.timeline({
      defaults: {
        duration: 2,
        ease: 'power3.inOut'
      },
    });

    tl
      .from(this.blob.position, { z: 5, })
      .from(this.blob.mesh.material.uniforms.uAlpha, {
        value: 0,
        stagger: 0.2,
      }, 0);

    return tl;
  }

  
}

new App();