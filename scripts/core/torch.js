class Torch{
  constructor(x, y, z, rotation){
    this.x = x;
    this.y = y;
    this.z = z;
    this.rotation = rotation; 
    this.obj = document.createElement("a-gltf-model");
    this.obj.setAttribute("gltf-model", "#torch");
    this.obj.setAttribute("position", { x: this.x, y: this.y, z: this.z });

    this.obj.setAttribute("rotation", { x: this.rotation.x, y: this.rotation.y, z: this.rotation.z });

    this.scale(0.05, 0.05, 0.05);

    scene.append(this.obj);
  }

  scale(size) {
    this.obj.setAttribute("scale", { x: 0.2, y: 0.2, z: 0.2 });
  }
}


class Fire {
  constructor(x, y, z, rotation) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.rotation = rotation;

    this.obj = document.createElement("a-gltf-model");
    this.obj.setAttribute("gltf-model", "#fire");
    this.obj.setAttribute("animation-mixer", "");
    this.obj.setAttribute("scale", "0.6 0.4 0.6");
    this.obj.setAttribute("position", { x: this.x, y: this.y, z: this.z });

    this.obj.setAttribute("rotation", { x: this.rotation.x, y: this.rotation.y, z: this.rotation.z });
    this.obj.setAttribute("visible", "false"); 

    scene.append(this.obj);

    this.light = document.createElement("a-light");
    this.light.setAttribute("type", "point");
    this.light.setAttribute("color", "#FFA500"); 
    this.light.setAttribute("intensity", 2); 
    this.light.setAttribute("distance", 20); 
    this.light.setAttribute("decay", 2);
    this.light.setAttribute("position", { x: this.x, y: this.y, z: this.z });
    this.light.setAttribute("visible", "false");

    scene.append(this.light);
  }

  scale(size) {
    this.obj.setAttribute("scale", { x: size, y: size, z: size });
  }

  toggleVisibility(isVisible) {
    const visibility = isVisible ? "true" : "false";
    this.obj.setAttribute("visible", visibility); 
    this.light.setAttribute("visible", visibility); 
  }
}


let positions = [
  {
    torch: { x: -10.774, y: 5, z: -5, rotation: { x: -330, y: 90, z: 0 } },
    fire: { x: -6.7, y: 10.5, z: -5, rotation: { x: 65, y: 90, z: 0 } }
  },
  {
    torch: { x: -10.774, y: 5, z: -12, rotation: { x: -330, y: 90, z: 0 } },
    fire: { x: -6.7, y: 10.5, z: -12, rotation: { x: 65, y: 90, z: 0 } }
  },
  {
    torch: { x: -10.774, y: 5, z: -19, rotation: { x: -330, y: 90, z: 0 } },
    fire: { x: -6.7, y: 10.5, z: -19, rotation: { x: 65, y: 90, z: 0 } }
  },
  {
    torch: { x: -10.774, y: 5, z: -26, rotation: { x: -330, y: 90, z: 0 } },
    fire: { x: -6.7, y: 10.5, z: -26, rotation: { x: 65, y: 90, z: 0 } }
  },
  {
    torch: { x: 9.882, y: 5, z: -5, rotation: { x: -330, y: -90, z: 0 } },
    fire: { x: 5.5, y: 10.5, z: -5, rotation: { x: -65, y: 90, z: 0 } }
  },
  {
    torch: { x: 9.882, y: 5, z: -12, rotation: { x: -330, y: -90, z: 0 } },
    fire: { x: 5.5, y: 10.5, z: -12, rotation: { x: -65, y: 90, z: 0 } }
  },
  {
    torch: { x: 9.882, y: 5, z: -19, rotation: { x: -330, y: -90, z: 0 } },
    fire: { x: 5.5, y: 10.5, z: -19, rotation: { x: -65, y: 90, z: 0 } }
  },
  {
    torch: { x: 9.882, y: 5, z: -26, rotation: { x: -330, y: -90, z: 0 } },
    fire: { x: 5.5, y: 10.5, z: -26, rotation: { x: -65, y: 90, z: 0 } }
  }, 
  	{
      torch: { x: -21, y: 5, z: -110, rotation: { x: -330, y: 90, z: 0 } },
      fire: { x: -17, y: 10.5, z: -110, rotation: { x: 65, y: 90, z: 0 } }
    },
    {
      torch: { x: -21, y: 5, z: -103, rotation: { x: -330, y: 90, z: 0 } },
      fire: { x: -17, y: 10.5, z: -103, rotation: { x: 65, y: 90, z: 0 } }
    },
    {
      torch: { x: -21, y: 5, z: -96, rotation: { x: -330, y: 90, z: 0 } },
      fire: { x: -17, y: 10.5, z: -96, rotation: { x: 65, y: 90, z: 0 } }
    },
    {
      torch: { x: -21, y: 5, z: -89, rotation: { x: -330, y: 90, z: 0 } },
      fire: { x: -17, y: 10.5, z: -89, rotation: { x: 65, y: 90, z: 0 } }
    },
    {
      torch: { x: 1.5, y: 5, z: -110, rotation: { x: -330, y: -90, z: 0 } },
      fire: { x: -2.5, y: 10.5, z: -110, rotation: { x: -65, y: 90, z: 0 } }
    },
    {
      torch: { x: 1.5, y: 5, z: -103, rotation: { x: -330, y: -90, z: 0 } },
      fire: { x: -2.5, y: 10.5, z: -103, rotation: { x: -65, y: 90, z: 0 } }
    },	
    {
      torch: { x: 1.5, y: 5, z: -96, rotation: { x: -330, y: -90, z: 0 } },
      fire: { x: -2.5, y: 10.5, z: -96, rotation: { x: -65, y: 90, z: 0 } }
    },	
    {
      torch: { x: 1.5, y: 5, z: -89, rotation: { x: -330, y: -90, z: 0 } },
      fire: { x: -2.5, y: 10.5, z: -89, rotation: { x: -65, y: 90, z: 0 } }
    },	
]; 


//PILLARS
const pillars = [
  {
    id: "pillar1",
    position: "-20.679 0 -12.070",
    components: {
      cylinder: {
        position: "0 7.5 -50",
        radius: 0.9,
        height: 14.5,
        color: "#d4d4d4",
        src: "#column_Pattern",
        repeat: "5 1",
      },
      top: {
        position: "5 12.41 -5",
        parts: [
          { position: "-6.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-3.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-5 2 -45", height: 0.7, width: 1.9, depth: 3, src: "#column_TopPart", rotation: "0 90 0" },
        ],
      },
      bottom: {
        position: "5 -1.5 -5",
        parts: [
          { position: "-6.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-3.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-5 2 -45", height: 0.7, width: 1.9, depth: 3, src: "#column_TopPart", rotation: "0 90 0" },
        ],
      },
    },
  },

  {
    id: "pillar2",
    position: "20.5 0 -12.070",
    components: {
      cylinder: {
        position: "0 7.5 -50",
        radius: 0.9,
        height: 14.5,
        color: "#d4d4d4",
        src: "#column_Pattern",
        repeat: "5 1",
      },
      top: {
        position: "5 12.41 -5",
        parts: [
          { position: "-6.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-3.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-5 2 -45", height: 0.7, width: 1.9, depth: 3, src: "#column_TopPart", rotation: "0 90 0" },
        ],
      },
      bottom: {
        position: "5 -1.5 -5",
        parts: [
          { position: "-6.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-3.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-5 2 -45", height: 0.7, width: 1.9, depth: 3, src: "#column_TopPart", rotation: "0 90 0" },
        ],
      },
    },
  },
  {
    id: "pillar3",
    position: "20.5 0 21",
    components: {
      cylinder: {
        position: "0 7.5 -50",
        radius: 0.9,
        height: 14.5,
        color: "#d4d4d4",
        src: "#column_Pattern",
        repeat: "5 1",
      },
      top: {
        position: "5 12.41 -5",
        parts: [
          { position: "-6.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-3.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-5 2 -45", height: 0.7, width: 1.9, depth: 3, src: "#column_TopPart", rotation: "0 90 0" },
        ],
      },
      bottom: {
        position: "5 -1.5 -5",
        parts: [
          { position: "-6.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-3.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-5 2 -45", height: 0.7, width: 1.9, depth: 3, src: "#column_TopPart", rotation: "0 90 0" },
        ],
      },
    },
  },
  {
    id: "pillar4",
    position: "-20.4 0 21",
    components: {
      cylinder: {
        position: "0 7.5 -50",
        radius: 0.9,
        height: 14.5,
        color: "#d4d4d4",
        src: "#column_Pattern",
        repeat: "5 1",
      },
      top: {
        position: "5 12.41 -5",
        parts: [
          { position: "-6.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-3.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-5 2 -45", height: 0.7, width: 1.9, depth: 3, src: "#column_TopPart", rotation: "0 90 0" },
        ],
      },
      bottom: {
        position: "5 -1.5 -5",
        parts: [
          { position: "-6.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-3.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-5 2 -45", height: 0.7, width: 1.9, depth: 3, src: "#column_TopPart", rotation: "0 90 0" },
        ],
      },
    },
  },
  {
    id: "pillar5",
    rotation: "0 270 0",
    position: "36.5 0 -23.5",
    components: {
      cylinder: {
        position: "0 7.5 -50",
        radius: 0.9,
        height: 14.5,
        color: "#d4d4d4",
        src: "#column_Pattern",
        repeat: "5 1",
      },
      top: {
        position: "5 12.41 -5",
        parts: [
          { position: "-6.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-3.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-5 2 -45", height: 0.7, width: 1.9, depth: 3, src: "#column_TopPart", rotation: "0 90 0" },
        ],
      },
      bottom: {
        position: "5 -1.5 -5",
        parts: [
          { position: "-6.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-3.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-5 2 -45", height: 0.7, width: 1.9, depth: 3, src: "#column_TopPart", rotation: "0 90 0" },
        ],
      },
    },
  },
  {
    id: "pillar6",
    rotation: "0 270 0",
    position: "36.5 0 -62",
    components: {
      cylinder: {
        position: "0 7.5 -50",
        radius: 0.9,
        height: 14.5,
        color: "#d4d4d4",
        src: "#column_Pattern",
        repeat: "5 1",
      },
      top: {
        position: "5 12.41 -5",
        parts: [
          { position: "-6.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-3.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-5 2 -45", height: 0.7, width: 1.9, depth: 3, src: "#column_TopPart", rotation: "0 90 0" },
        ],
      },
      bottom: {
        position: "5 -1.5 -5",
        parts: [
          { position: "-6.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-3.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-5 2 -45", height: 0.7, width: 1.9, depth: 3, src: "#column_TopPart", rotation: "0 90 0" },
        ],
      },
    },
  },
  {
    id: "pillar7",
    rotation: "0 270 0",
    position: "-6.5 0 -62",
    components: {
      cylinder: {
        position: "0 7.5 -50",
        radius: 0.9,
        height: 14.5,
        color: "#d4d4d4",
        src: "#column_Pattern",
        repeat: "5 1",
      },
      top: {
        position: "5 12.41 -5",
        parts: [
          { position: "-6.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-3.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-5 2 -45", height: 0.7, width: 1.9, depth: 3, src: "#column_TopPart", rotation: "0 90 0" },
        ],
      },
      bottom: {
        position: "5 -1.5 -5",
        parts: [
          { position: "-6.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-3.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-5 2 -45", height: 0.7, width: 1.9, depth: 3, src: "#column_TopPart", rotation: "0 90 0" },
        ],
      },
    },
  },
  {
    id: "pillar8",
    rotation: "0 270 0",
    position: "-6.5 0 -24",
    components: {
      cylinder: {
        position: "0 7.5 -50",
        radius: 0.9,
        height: 14.5,
        color: "#d4d4d4",
        src: "#column_Pattern",
        repeat: "5 1",
      },
      top: {
        position: "5 12.41 -5",
        parts: [
          { position: "-6.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-3.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-5 2 -45", height: 0.7, width: 1.9, depth: 3, src: "#column_TopPart", rotation: "0 90 0" },
        ],
      },
      bottom: {
        position: "5 -1.5 -5",
        parts: [
          { position: "-6.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-3.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-5 2 -45", height: 0.7, width: 1.9, depth: 3, src: "#column_TopPart", rotation: "0 90 0" },
        ],
      },
    },
  },
  {
    id: "pillar9",
    rotation: "0 270 0",
    position: "-6.5 0 -103",
    components: {
      cylinder: {
        position: "0 7.5 -50",
        radius: 0.9,
        height: 14.5,
        color: "#d4d4d4",
        src: "#column_Pattern",
        repeat: "5 1",
      },
      top: {
        position: "5 12.41 -5",
        parts: [
          { position: "-6.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-3.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-5 2 -45", height: 0.7, width: 1.9, depth: 3, src: "#column_TopPart", rotation: "0 90 0" },
        ],
      },
      bottom: {
        position: "5 -1.5 -5",
        parts: [
          { position: "-6.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-3.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-5 2 -45", height: 0.7, width: 1.9, depth: 3, src: "#column_TopPart", rotation: "0 90 0" },
        ],
      },
    },
  },
  {
    id: "pillar10",
    rotation: "0 270 0",
    position: "-6.5 0 -66.5",
    components: {
      cylinder: {
        position: "0 7.5 -50",
        radius: 0.9,
        height: 14.5,
        color: "#d4d4d4",
        src: "#column_Pattern",
        repeat: "5 1",
      },
      top: {
        position: "5 12.41 -5",
        parts: [
          { position: "-6.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-3.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-5 2 -45", height: 0.7, width: 1.9, depth: 3, src: "#column_TopPart", rotation: "0 90 0" },
        ],
      },
      bottom: {
        position: "5 -1.5 -5",
        parts: [
          { position: "-6.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-3.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-5 2 -45", height: 0.7, width: 1.9, depth: 3, src: "#column_TopPart", rotation: "0 90 0" },
        ],
      },
    },
  },
  {
    id: "pillar11",
    rotation: "0 270 0",
    position: "36.5 0 -66.5",
    components: {
      cylinder: {
        position: "0 7.5 -50",
        radius: 0.9,
        height: 14.5,
        color: "#d4d4d4",
        src: "#column_Pattern",
        repeat: "5 1",
      },
      top: {
        position: "5 12.41 -5",
        parts: [
          { position: "-6.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-3.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-5 2 -45", height: 0.7, width: 1.9, depth: 3, src: "#column_TopPart", rotation: "0 90 0" },
        ],
      },
      bottom: {
        position: "5 -1.5 -5",
        parts: [
          { position: "-6.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-3.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-5 2 -45", height: 0.7, width: 1.9, depth: 3, src: "#column_TopPart", rotation: "0 90 0" },
        ],
      },
    },
  },
  {
    id: "pillar12",
    rotation: "0 270 0",
    position: "-80 0 -69",
    components: {
      cylinder: {
        position: "0 7.5 -50",
        radius: 0.9,
        height: 14.5,
        color: "#d4d4d4",
        src: "#column_Pattern",
        repeat: "5 1",
      },
      top: {
        position: "5 12.41 -5",
        parts: [
          { position: "-6.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-3.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-5 2 -45", height: 0.7, width: 1.9, depth: 3, src: "#column_TopPart", rotation: "0 90 0" },
        ],
      },
      bottom: {
        position: "5 -1.5 -5",
        parts: [
          { position: "-6.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-3.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-5 2 -45", height: 0.7, width: 1.9, depth: 3, src: "#column_TopPart", rotation: "0 90 0" },
        ],
      },
    },
  },
  {
    id: "pillar13",
    rotation: "0 270 0",
    position: "36.5 0 -103",
    components: {
      cylinder: {
        position: "0 7.5 -50",
        radius: 0.9,
        height: 14.5,
        color: "#d4d4d4",
        src: "#column_Pattern",
        repeat: "5 1",
      },
      top: {
        position: "5 12.41 -5",
        parts: [
          { position: "-6.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-3.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-5 2 -45", height: 0.7, width: 1.9, depth: 3, src: "#column_TopPart", rotation: "0 90 0" },
        ],
      },
      bottom: {
        position: "5 -1.5 -5",
        parts: [
          { position: "-6.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-3.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-5 2 -45", height: 0.7, width: 1.9, depth: 3, src: "#column_TopPart", rotation: "0 90 0" },
        ],
      },
    },
  },
  {
    id: "pillar14",
    rotation: "0 270 0",
    position: "-28.5 0 -69",
    components: {
      cylinder: {
        position: "0 7.5 -50",
        radius: 0.9,
        height: 14.5,
        color: "#d4d4d4",
        src: "#column_Pattern",
        repeat: "5 1",
      },
      top: {
        position: "5 12.41 -5",
        parts: [
          { position: "-6.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-3.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-5 2 -45", height: 0.7, width: 1.9, depth: 3, src: "#column_TopPart", rotation: "0 90 0" },
        ],
      },
      bottom: {
        position: "5 -1.5 -5",
        parts: [
          { position: "-6.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-3.5 2 -45", radius: 0.5, height: 2, src: "#column_Part", rotation: "0 90 90" },
          { position: "-5 2 -45", height: 0.7, width: 1.9, depth: 3, src: "#column_TopPart", rotation: "0 90 0" },
        ],
      },
    },
  },
];

function createPillar(pillarData) {
  const pillarEntity = document.createElement('a-entity');
  pillarEntity.setAttribute('id', pillarData.id);
  pillarEntity.setAttribute('position', pillarData.position);

  const cylinder = document.createElement('a-cylinder');
  const cylinderData = pillarData.components.cylinder;
  cylinder.setAttribute('position', cylinderData.position);
  cylinder.setAttribute('radius', cylinderData.radius);
  cylinder.setAttribute('height', cylinderData.height);
  cylinder.setAttribute('color', cylinderData.color);
  cylinder.setAttribute('src', cylinderData.src);
  cylinder.setAttribute('repeat', cylinderData.repeat);
  cylinder.setAttribute('shadow', 'cast: true; receive: true');
  pillarEntity.appendChild(cylinder);

  const topEntity = document.createElement('a-entity');
  topEntity.setAttribute('id', `${pillarData.id}_top`);
  topEntity.setAttribute('position', pillarData.components.top.position);
  pillarData.components.top.parts.forEach((part) => {
    const topPart = document.createElement(part.width ? 'a-box' : 'a-cylinder');
    for (const [key, value] of Object.entries(part)) {
      topPart.setAttribute(key, value);
    }
    topEntity.appendChild(topPart);
  });
  pillarEntity.appendChild(topEntity);

  const bottomEntity = document.createElement('a-entity');
  bottomEntity.setAttribute('id', `${pillarData.id}_bottom`);
  bottomEntity.setAttribute('position', pillarData.components.bottom.position);
  pillarData.components.bottom.parts.forEach((part) => {
    const bottomPart = document.createElement(part.width ? 'a-box' : 'a-cylinder');
    for (const [key, value] of Object.entries(part)) {
      bottomPart.setAttribute(key, value);
    }
    bottomEntity.appendChild(bottomPart);
  });
  pillarEntity.appendChild(bottomEntity);

  return pillarEntity;
}