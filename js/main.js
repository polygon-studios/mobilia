var fox,
    bear,
    skunk,
    rabbit;

window.onload = function () {

  Physijs.scripts.worker = 'js/physii_worker.js';
  Physijs.scripts.ammo = 'ammo.min.js';

  TWEEN.start();

  // Platform positions
  var platforms = [
    {
      "id"    : "1",
      "type"  : "cloud",
      "x_pos" : "10",
      "y_pos" : "90",
      "colour": 0xF5E5B9
    },
    {
      "id"    : "2",
      "type"  : "cloud",
      "x_pos" : "20",
      "y_pos" : "90",
      "colour": 0xF5E5B9
    },
    {
      "id"    : "3",
      "type"  : "cloud",
      "x_pos" : "40",
      "y_pos" : "90",
      "colour": 0xF5E5B9
    },
    {
      "id"    : "4",
      "type"  : "cloud",
      "x_pos" : "140",
      "y_pos" : "90",
      "colour": 0xF5E5B9
    },
    {
      "id"    : "5",
      "type"  : "cloud",
      "x_pos" : "200",
      "y_pos" : "90",
      "colour": 0xF5E5B9
    },
    {
      "id"    : "6",
      "type"  : "cloud",
      "x_pos" : "210",
      "y_pos" : "90",
      "colour": 0xF5E5B9
    },
    {
      "id"    : "7",
      "type"  : "cloud",
      "x_pos" : "240",
      "y_pos" : "90",
      "colour": 0xF5E5B9
    },
    {
      "id"    : "8",
      "type"  : "cloud",
      "x_pos" : "250",
      "y_pos" : "90",
      "colour": 0xF5E5B9
    },
    {
      "id"    : "9",
      "type"  : "cloud",
      "x_pos" : "270",
      "y_pos" : "90",
      "colour": 0xF5E5B9
    },
    {
      "id"    : "10",
      "type"  : "cloud",
      "x_pos" : "320",
      "y_pos" : "80",
      "colour": 0xF5E5B9
    },
    {
      "id"    : "11",
      "type"  : "cloud",
      "x_pos" : "330",
      "y_pos" : "80",
      "colour": 0xF5E5B9
    },
    {
      "id"    : "12",
      "type"  : "cloud",
      "x_pos" : "380",
      "y_pos" : "90",
      "colour": 0xF5E5B9
    },
    {
      "id"    : "13",
      "type"  : "tree",
      "x_pos" : "40",
      "y_pos" : "20",
      "colour": 0x52A588
    },
    {
      "id"    : "14",
      "type"  : "tree",
      "x_pos" : "40",
      "y_pos" : "70",
      "colour": 0x52A588
    },
    {
      "id"    : "15",
      "type"  : "tree",
      "x_pos" : "50",
      "y_pos" : "70",
      "colour": 0x52A588
    },
    {
      "id"    : "16",
      "type"  : "tree",
      "x_pos" : "60",
      "y_pos" : "70",
      "colour": 0x52A588
    },
    {
      "id"    : "17",
      "type"  : "tree",
      "x_pos" : "60",
      "y_pos" : "30",
      "colour": 0x52A588
    },
    {
      "id"    : "18",
      "type"  : "tree",
      "x_pos" : "60",
      "y_pos" : "90",
      "colour": 0x52A588
    },
    {
      "id"    : "19",
      "type"  : "tree",
      "x_pos" : "90",
      "y_pos" : "90",
      "colour": 0x52A588
    },
    {
      "id"    : "20",
      "type"  : "tree",
      "x_pos" : "110",
      "y_pos" : "80",
      "colour": 0x52A588
    },
    {
      "id"    : "21",
      "type"  : "tree",
      "x_pos" : "120",
      "y_pos" : "80",
      "colour": 0x52A588
    },
    {
      "id"    : "22",
      "type"  : "tree",
      "x_pos" : "120",
      "y_pos" : "60",
      "colour": 0x52A588
    },
    {
      "id"    : "23",
      "type"  : "tree",
      "x_pos" : "350",
      "y_pos" : "40",
      "colour": 0x52A588
    },
    {
      "id"    : "24",
      "type"  : "tree",
      "x_pos" : "360",
      "y_pos" : "90",
      "colour": 0x52A588
    },
    {
      "id"    : "25",
      "type"  : "tree",
      "x_pos" : "390",
      "y_pos" : "70",
      "colour": 0x52A588
    },
    {
      "id"    : "26",
      "type"  : "tree",
      "x_pos" : "400",
      "y_pos" : "90",
      "colour": 0x52A588
    },
    {
      "id"    : "27",
      "type"  : "log",
      "x_pos" : "80",
      "y_pos" : "50",
      "colour": 0x996633
    },
    {
      "id"    : "28",
      "type"  : "log",
      "x_pos" : "90",
      "y_pos" : "50",
      "colour": 0x996633
    },
    {
      "id"    : "28",
      "type"  : "log",
      "x_pos" : "100",
      "y_pos" : "50",
      "colour": 0x996633
    },
    {
      "id"    : "28",
      "type"  : "log",
      "x_pos" : "80",
      "y_pos" : "30",
      "colour": 0x996633
    },
    {
      "id"    : "29",
      "type"  : "log",
      "x_pos" : "90",
      "y_pos" : "30",
      "colour": 0x996633
    },
    {
      "id"    : "30",
      "type"  : "log",
      "x_pos" : "100",
      "y_pos" : "30",
      "colour": 0x996633
    },
    {
      "id"    : "31",
      "type"  : "log",
      "x_pos" : "140",
      "y_pos" : "60",
      "colour": 0x996633
    },
    {
      "id"    : "32",
      "type"  : "log",
      "x_pos" : "160",
      "y_pos" : "60",
      "colour": 0x996633
    },
    {
      "id"    : "33",
      "type"  : "log",
      "x_pos" : "180",
      "y_pos" : "60",
      "colour": 0x996633
    },
    {
      "id"    : "34",
      "type"  : "log",
      "x_pos" : "190",
      "y_pos" : "60",
      "colour": 0x996633
    },
    {
      "id"    : "35",
      "type"  : "log",
      "x_pos" : "200",
      "y_pos" : "60",
      "colour": 0x996633
    },
    {
      "id"    : "36",
      "type"  : "log",
      "x_pos" : "240",
      "y_pos" : "50",
      "colour": 0x996633
    },
    {
      "id"    : "37",
      "type"  : "log",
      "x_pos" : "250",
      "y_pos" : "50",
      "colour": 0x996633
    },
    {
      "id"    : "38",
      "type"  : "log",
      "x_pos" : "260",
      "y_pos" : "50",
      "colour": 0x996633
    },
    {
      "id"    : "39",
      "type"  : "log",
      "x_pos" : "310",
      "y_pos" : "50",
      "colour": 0x996633
    },
    {
      "id"    : "40",
      "type"  : "log",
      "x_pos" : "320",
      "y_pos" : "50",
      "colour": 0x996633
    },
    {
      "id"    : "41",
      "type"  : "log",
      "x_pos" : "330",
      "y_pos" : "50",
      "colour": 0x996633
    },
    {
      "id"    : "42",
      "type"  : "log",
      "x_pos" : "10",
      "y_pos" : "20",
      "colour": 0x996633
    },
    {
      "id"    : "43",
      "type"  : "log",
      "x_pos" : "270",
      "y_pos" : "30",
      "colour": 0x996633
    },
    {
      "id"    : "44",
      "type"  : "log",
      "x_pos" : "280",
      "y_pos" : "30",
      "colour": 0x996633
    },
    {
      "id"    : "45",
      "type"  : "log",
      "x_pos" : "290",
      "y_pos" : "30",
      "colour": 0x996633
    },
    {
      "id"    : "46",
      "type"  : "stone",
      "x_pos" : "130",
      "y_pos" : "30",
      "colour": 0x808080
    },
    {
      "id"    : "47",
      "type"  : "stone",
      "x_pos" : "140",
      "y_pos" : "30",
      "colour": 0x808080
    },
    {
      "id"    : "48",
      "type"  : "stone",
      "x_pos" : "150",
      "y_pos" : "30",
      "colour": 0x808080
    },
    {
      "id"    : "49",
      "type"  : "stone",
      "x_pos" : "380",
      "y_pos" : "20",
      "colour": 0x808080
    },
    {
      "id"    : "50",
      "type"  : "stone",
      "x_pos" : "370",
      "y_pos" : "20",
      "colour": 0x808080
    },
    {
      "id"    : "51",
      "type"  : "stone",
      "x_pos" : "360",
      "y_pos" : "20",
      "colour": 0x808080
    },
    {
      "id"    : "52",
      "type"  : "stone",
      "x_pos" : "350",
      "y_pos" : "20",
      "colour": 0x808080
    },
    {
      "id"    : "53",
      "type"  : "floater",
      "x_pos" : "20",
      "y_pos" : "70",
      "colour": 0x808080
    },
    {
      "id"    : "54",
      "type"  : "floater",
      "x_pos" : "50",
      "y_pos" : "50",
      "colour": 0x808080
    },
    {
      "id"    : "55",
      "type"  : "floater",
      "x_pos" : "270",
      "y_pos" : "70",
      "colour": 0x808080
    },
    {
      "id"    : "56",
      "type"  : "floater",
      "x_pos" : "290",
      "y_pos" : "90",
      "colour": 0x808080
    },
    {
      "id"    : "57",
      "type"  : "floater",
      "x_pos" : "290",
      "y_pos" : "60",
      "colour": 0x808080
    },
    {
      "id"    : "58",
      "type"  : "grass",
      "x_pos" : "20",
      "y_pos" : "40",
      "colour": 0x33ccff
    },
    {
      "id"    : "59",
      "type"  : "grass",
      "x_pos" : "30",
      "y_pos" : "40",
      "colour": 0x33ccff
    },
    {
      "id"    : "60",
      "type"  : "grass",
      "x_pos" : "350",
      "y_pos" : "70",
      "colour": 0x33ccff
    },
    {
      "id"    : "61",
      "type"  : "grass",
      "x_pos" : "360",
      "y_pos" : "70",
      "colour": 0x33ccff
    },

  ];

  //THREEJS RELATED VARIABLES

  var scene,
      camera,
      controls,
      fieldOfView,
      aspectRatio,
      nearPlane,
      farPlane,
      shadowLight,
      backLight,
      light,
      renderer,
      container,
      raycaster;

  var mouse = new THREE.Vector2(), INTERSECTED;



  var render, createShape, NoiseGen, table, table2,
     physics_stats, ground, ground_geometry, ground_material, camera;

  //SCENE
  var floor, brid1, bird2;

  //SCREEN VARIABLES

  var HEIGHT,
      WIDTH,
      windowHalfX,
      windowHalfY,
      mousePos = {x:0,y:0};


  //INIT THREE JS, SCREEN AND MOUSE EVENTS

  function init(){
    scene = new Physijs.Scene({ fixedTimeStep: 1 / 120 });
    scene.setGravity(new THREE.Vector3( 0, -30, 0 ));
    scene.addEventListener(
      'update',
      function() {
        scene.simulate( undefined, 2 );
        physics_stats.update();
      }
    );
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;
    aspectRatio = WIDTH / HEIGHT;
    fieldOfView = 60;
    nearPlane = 0.1;
    farPlane = 1000;
    camera = new THREE.OrthographicCamera(
      WIDTH / - 2, WIDTH / 2, HEIGHT / 2, HEIGHT / - 2, nearPlane, farPlane);
    camera.position.z = 100;
    camera.position.y = 14;
    camera.position.x = 190;
    renderer = new THREE.WebGLRenderer({alpha: true, antialias: true });
    renderer.setSize(WIDTH, HEIGHT);
    renderer.shadowMapEnabled = true;
    raycaster = new THREE.Raycaster();
    container = document.getElementById('world');
    container.appendChild(renderer.domElement);

    windowHalfX = WIDTH / 2;
    windowHalfY = HEIGHT / 2;

    window.addEventListener('resize', onWindowResize, false);
    document.addEventListener('mousemove', handleMouseMove, false);
    document.addEventListener('mousedown', handleMouseDown, false);
    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchend', handleTouchEnd, false);
    document.addEventListener('touchmove',handleTouchMove, false);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.target = new THREE.Vector3(200,10,-100);
    controls.minPolarAngle = -Math.PI / 2;
    controls.maxPolarAngle = Math.PI / 2;
    controls.noZoom = false;
    controls.noPan = false;
    controls.noRotate = true;
    controls.minZoom = 4;
		controls.maxZoom = 10;
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
  }

  function onWindowResize() {
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;
    windowHalfX = WIDTH / 2;
    windowHalfY = HEIGHT / 2;
    renderer.setSize(WIDTH, HEIGHT);
    camera.aspect = WIDTH / HEIGHT;
    camera.updateProjectionMatrix();
  }

  function handleMouseMove(event) {

  }

  function handleTouchStart(event) {
    if (event.touches.length > 1) {
      //event.preventDefault();
      //mousePos = {x:event.touches[0].pageX, y:event.touches[0].pageY};
      socket.emit('open');
    }
  }

  function handleTouchEnd(event) {
      //mousePos = {x:windowHalfX, y:windowHalfY};
  }

  function handleMouseDown(event) {
      var posX, posY;
      mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  		mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
      raycaster.setFromCamera( mouse, camera );
      var trapType = 'bramble';

      var intersects = raycaster.intersectObjects( scene.children );

  				if ( intersects.length > 0 ) {

  					if ( INTERSECTED != intersects[ 0 ].object ) {

  						if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );

  						INTERSECTED = intersects[ 0 ].object;
  						INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
  						INTERSECTED.material.emissive.setHex( 0xff0000 );
              console.log(INTERSECTED.position.x);
              posX = (INTERSECTED.position.x/10) - 1;
              posY = (INTERSECTED.position.y/10);

  					}

  				} else {

  					if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );

  					INTERSECTED = null;

  				}
      if(posX != null)
        placeTrap(posX, posY, trapType);
  }

  function handleTouchMove(event) {
    if (event.touches.length == 1) {
      //event.preventDefault();
      //mousePos = {x:event.touches[0].pageX, y:event.touches[0].pageY};
    }
  }

  function createLights() {
    light = new THREE.HemisphereLight(0xffffff, 0xffffff, .5)
    //light.castShadow = true;

    shadowLight = new THREE.DirectionalLight(0xffffff, .8);
    shadowLight.position.set(0.5, 1, 0.5);
    //shadowLight.castShadow = true;

    backLight = new THREE.DirectionalLight(0xffffff, .4);
    backLight.position.set(0.5, 1, -0.5);
    backLight.shadowDarkness = .1;
    //backLight.castShadow = true;

    scene.add(backLight);
    scene.add(light);
    scene.add(shadowLight);
  }



  function createFloor(){
    floor = new THREE.Mesh(new THREE.PlaneBufferGeometry(100,100), new THREE.MeshBasicMaterial({color: 0xe0dacd}));
    floor.rotation.x = -Math.PI/2;
    floor.position.y = -33;
    floor.receiveShadow = true;
    //scene.add(floor);

    for(var i = 0; i < 40; i++){
      var groundBlock = new Physijs.BoxMesh(
        new THREE.CubeGeometry(10, 10, 10),
        new THREE.MeshLambertMaterial({color: 0xe0dacd}),
        0, // mass
        { restitution: .2, friction: .8 }
      );
      groundBlock.position.y = 0;
      groundBlock.position.x = 10 * i + 10;
      //groundBlock.receiveShadow = true;
      scene.add( groundBlock );
    }

  }

  function createPlatforms() {
    for(var i = 0; i < platforms.length; i++) {
        var obj = platforms[i];

        var box_geometry = new THREE.CubeGeometry( 10, 10, 10);
        var platformBlock, material = new THREE.MeshLambertMaterial({ color: obj.colour});

        platformBlock = new THREE.Mesh(
                box_geometry,
                material
              );

        platformBlock.position.y = obj.y_pos;
        platformBlock.position.x = obj.x_pos;
        scene.add( platformBlock );
    }
  }


  function createCharacters(){
    var foxImg = new THREE.MeshBasicMaterial({
        map:THREE.ImageUtils.loadTexture('img/fox.png')
    });
    //foxImg.map.needsUpdate = true;

    fox = new THREE.Mesh(new THREE.PlaneBufferGeometry(10, 10),foxImg);
    fox.overdraw = true;
    scene.add(fox);

    var skunkImg = new THREE.MeshBasicMaterial({
        map:THREE.ImageUtils.loadTexture('img/skunk.png')
    });
    //foxImg.map.needsUpdate = true;

    skunk = new THREE.Mesh(new THREE.PlaneBufferGeometry(10, 10),skunkImg);
    skunk.overdraw = true;
    scene.add(skunk);
  }
  /*
  function createMap(){
    var mapImg = new THREE.MeshBasicMaterial({
        map:THREE.ImageUtils.loadTexture('img/map.png')
    });
    mapImg.map.needsUpdate = true;

    var mapPlane = new THREE.Mesh(new THREE.PlaneBufferGeometry(400, 100),mapImg);
    mapPlane.overdraw = true;
    scene.add(mapPlane);
  }
  */

  function foxMove(xPos, yPos) {
    fox.position.x = xPos * 1.276;
    fox.position.y = yPos * 1.25;
    console.log("Fox X: " + fox.position.x + " Fox Y: " + fox.position.y );
  }

  function loop(){
    var tempHA = (mousePos.x-windowHalfX)/200;
    var tempVA = (mousePos.y - windowHalfY)/200;
    var userHAngle = Math.min(Math.max(tempHA, -Math.PI/3), Math.PI/3);
    var userVAngle = Math.min(Math.max(tempVA, -Math.PI/3), Math.PI/3);

    render();
    requestAnimationFrame(loop);
  }

  function render(){
    controls.update();

    raycaster.setFromCamera( mouse, camera );


    renderer.render(scene, camera);
  }


  init();
  createLights();
  createFloor();
  createPlatforms();
  createCharacters();
  //createMap();
  loop();
}

window.moveFox = function(xPos, yPos){
  fox.position.x = xPos * 1.276 * 10 + 10;
  fox.position.y = yPos * 1.35 * 10 + 5;
  console.log("Fox X: " + fox.position.x + " Fox Y: " + fox.position.y );
}

window.moveSkunk = function(xPos, yPos){
  skunk.position.x = xPos * 1.276 * 10 + 10;
  skunk.position.y = yPos * 1.35 * 10 + 5;
  console.log("Skunk X: " + skunk.position.x + " Skunk Y: " + skunk.position.y );
}
