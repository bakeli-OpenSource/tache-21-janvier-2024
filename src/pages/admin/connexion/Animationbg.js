import React from 'react'
import Particles from 'react-tsparticles'
// import { loadFull } from 'tsparticles'

const Animationbg = () => {
    // async function loaderParticles(main) {
    //     await loadFull(main)
    // }
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
    <Particles
      id="tsparticles"
    
      options={{
        background: {
          color: {
            value: "#333",
          },
        },
        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            resize: true,
          },
        },
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 1,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 4,
              size_min: 0.3,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
            distance: 150,
            color: "#ffffff",
            opacity: 0,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        detectRetina: true,
      }}
    />
  </div>

  )
}

export default Animationbg
