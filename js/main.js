
window.onload = function () {

  Physijs.scripts.worker = 'js/physii_worker.js';
  Physijs.scripts.ammo = 'ammo.min.js';

  TWEEN.start();

  // Platform positions
  var platforms = [
    {
      "id"    : "1",
      "type"  : "cloud",
      "x_pos" : "100",
      "y_pos" : "900",
      "colour": 0xF5E5B9
    },
    {
      "id"    : "2",
      "type"  : "cloud",
      "x_pos" : "200",
      "y_pos" : "900",
      "colour": 0xF5E5B9
    },
    {
      "id"    : "3",
      "type"  : "cloud",
      "x_pos" : "400",
      "y_pos" : "900",
      "colour": 0xF5E5B9
    },
    {
      "id"    : "4",
      "type"  : "cloud",
      "x_pos" : "1400",
      "y_pos" : "900",
      "colour": 0xF5E5B9
    },
    {
      "id"    : "5",
      "type"  : "cloud",
      "x_pos" : "2000",
      "y_pos" : "900",
      "colour": 0xF5E5B9
    },
    {
      "id"    : "6",
      "type"  : "cloud",
      "x_pos" : "2100",
      "y_pos" : "900",
      "colour": 0xF5E5B9
    },
    {
      "id"    : "7",
      "type"  : "cloud",
      "x_pos" : "2400",
      "y_pos" : "900",
      "colour": 0xF5E5B9
    },
    {
      "id"    : "8",
      "type"  : "cloud",
      "x_pos" : "2500",
      "y_pos" : "900",
      "colour": 0xF5E5B9
    },
    {
      "id"    : "9",
      "type"  : "cloud",
      "x_pos" : "2700",
      "y_pos" : "900",
      "colour": 0xF5E5B9
    },
    {
      "id"    : "10",
      "type"  : "cloud",
      "x_pos" : "3200",
      "y_pos" : "800",
      "colour": 0xF5E5B9
    },
    {
      "id"    : "11",
      "type"  : "cloud",
      "x_pos" : "3300",
      "y_pos" : "800",
      "colour": 0xF5E5B9
    },
    {
      "id"    : "12",
      "type"  : "cloud",
      "x_pos" : "3800",
      "y_pos" : "900",
      "colour": 0xF5E5B9
    },
    {
      "id"    : "13",
      "type"  : "tree",
      "x_pos" : "400",
      "y_pos" : "200",
      "colour": 0x52A588
    },
    {
      "id"    : "14",
      "type"  : "tree",
      "x_pos" : "400",
      "y_pos" : "700",
      "colour": 0x52A588
    },
    {
      "id"    : "15",
      "type"  : "tree",
      "x_pos" : "500",
      "y_pos" : "700",
      "colour": 0x52A588
    },
    {
      "id"    : "16",
      "type"  : "tree",
      "x_pos" : "600",
      "y_pos" : "700",
      "colour": 0x52A588
    },
    {
      "id"    : "17",
      "type"  : "tree",
      "x_pos" : "600",
      "y_pos" : "300",
      "colour": 0x52A588
    },
    {
      "id"    : "18",
      "type"  : "tree",
      "x_pos" : "600",
      "y_pos" : "900",
      "colour": 0x52A588
    },
    {
      "id"    : "19",
      "type"  : "tree",
      "x_pos" : "900",
      "y_pos" : "900",
      "colour": 0x52A588
    },
    {
      "id"    : "20",
      "type"  : "tree",
      "x_pos" : "1100",
      "y_pos" : "800",
      "colour": 0x52A588
    },
    {
      "id"    : "21",
      "type"  : "tree",
      "x_pos" : "1200",
      "y_pos" : "800",
      "colour": 0x52A588
    },
    {
      "id"    : "22",
      "type"  : "tree",
      "x_pos" : "1200",
      "y_pos" : "600",
      "colour": 0x52A588
    },
    {
      "id"    : "23",
      "type"  : "tree",
      "x_pos" : "3500",
      "y_pos" : "400",
      "colour": 0x52A588
    },
    {
      "id"    : "24",
      "type"  : "tree",
      "x_pos" : "3600",
      "y_pos" : "900",
      "colour": 0x52A588
    },
    {
      "id"    : "25",
      "type"  : "tree",
      "x_pos" : "3900",
      "y_pos" : "700",
      "colour": 0x52A588
    },
    {
      "id"    : "26",
      "type"  : "tree",
      "x_pos" : "4000",
      "y_pos" : "900",
      "colour": 0x52A588
    },
    {
      "id"    : "27",
      "type"  : "log",
      "x_pos" : "800",
      "y_pos" : "500",
      "colour": 0x996633
    },
    {
      "id"    : "28",
      "type"  : "log",
      "x_pos" : "900",
      "y_pos" : "500",
      "colour": 0x996633
    },
    {
      "id"    : "28",
      "type"  : "log",
      "x_pos" : "1000",
      "y_pos" : "500",
      "colour": 0x996633
    },
    {
      "id"    : "28",
      "type"  : "log",
      "x_pos" : "800",
      "y_pos" : "300",
      "colour": 0x996633
    },
    {
      "id"    : "29",
      "type"  : "log",
      "x_pos" : "900",
      "y_pos" : "300",
      "colour": 0x996633
    },
    {
      "id"    : "30",
      "type"  : "log",
      "x_pos" : "1000",
      "y_pos" : "300",
      "colour": 0x996633
    },
    {
      "id"    : "31",
      "type"  : "log",
      "x_pos" : "1400",
      "y_pos" : "600",
      "colour": 0x996633
    },
    {
      "id"    : "32",
      "type"  : "log",
      "x_pos" : "1600",
      "y_pos" : "600",
      "colour": 0x996633
    },
    {
      "id"    : "33",
      "type"  : "log",
      "x_pos" : "1800",
      "y_pos" : "600",
      "colour": 0x996633
    },
    {
      "id"    : "34",
      "type"  : "log",
      "x_pos" : "1900",
      "y_pos" : "600",
      "colour": 0x996633
    },
    {
      "id"    : "35",
      "type"  : "log",
      "x_pos" : "2000",
      "y_pos" : "600",
      "colour": 0x996633
    },
    {
      "id"    : "36",
      "type"  : "log",
      "x_pos" : "2400",
      "y_pos" : "500",
      "colour": 0x996633
    },
    {
      "id"    : "37",
      "type"  : "log",
      "x_pos" : "2500",
      "y_pos" : "500",
      "colour": 0x996633
    },
    {
      "id"    : "38",
      "type"  : "log",
      "x_pos" : "2600",
      "y_pos" : "500",
      "colour": 0x996633
    },
    {
      "id"    : "39",
      "type"  : "log",
      "x_pos" : "3100",
      "y_pos" : "500",
      "colour": 0x996633
    },
    {
      "id"    : "40",
      "type"  : "log",
      "x_pos" : "3200",
      "y_pos" : "500",
      "colour": 0x996633
    },
    {
      "id"    : "41",
      "type"  : "log",
      "x_pos" : "3300",
      "y_pos" : "500",
      "colour": 0x996633
    },
    {
      "id"    : "42",
      "type"  : "log",
      "x_pos" : "100",
      "y_pos" : "200",
      "colour": 0x996633
    },
    {
      "id"    : "43",
      "type"  : "log",
      "x_pos" : "2700",
      "y_pos" : "300",
      "colour": 0x996633
    },
    {
      "id"    : "44",
      "type"  : "log",
      "x_pos" : "2800",
      "y_pos" : "300",
      "colour": 0x996633
    },
    {
      "id"    : "45",
      "type"  : "log",
      "x_pos" : "2900",
      "y_pos" : "300",
      "colour": 0x996633
    },
    {
      "id"    : "46",
      "type"  : "stone",
      "x_pos" : "1300",
      "y_pos" : "300",
      "colour": 0x808080
    },
    {
      "id"    : "47",
      "type"  : "stone",
      "x_pos" : "1400",
      "y_pos" : "300",
      "colour": 0x808080
    },
    {
      "id"    : "48",
      "type"  : "stone",
      "x_pos" : "1500",
      "y_pos" : "300",
      "colour": 0x808080
    },
    {
      "id"    : "49",
      "type"  : "stone",
      "x_pos" : "3800",
      "y_pos" : "200",
      "colour": 0x808080
    },
    {
      "id"    : "50",
      "type"  : "stone",
      "x_pos" : "3700",
      "y_pos" : "200",
      "colour": 0x808080
    },
    {
      "id"    : "51",
      "type"  : "stone",
      "x_pos" : "3600",
      "y_pos" : "200",
      "colour": 0x808080
    },
    {
      "id"    : "52",
      "type"  : "stone",
      "x_pos" : "3500",
      "y_pos" : "200",
      "colour": 0x808080
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
    farPlane = 10000;
    camera = new THREE.OrthographicCamera(
      WIDTH / - 2, WIDTH / 2, HEIGHT / 2, HEIGHT / - 2, nearPlane, farPlane);
    camera.position.z = 1000;
    camera.position.y = 140;
    camera.position.x = 1900;
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
    controls.target = new THREE.Vector3(2000,100,0);
    controls.minPolarAngle = -Math.PI / 2;
    controls.maxPolarAngle = Math.PI / 2;
    controls.noZoom = false;
    controls.noPan = false;
    controls.noRotate = true;
    controls.minZoom = 0.3;
		controls.maxZoom = 2;
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

      var intersects = raycaster.intersectObjects( scene.children );

  				if ( intersects.length > 0 ) {

  					if ( INTERSECTED != intersects[ 0 ].object ) {

  						if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );

  						INTERSECTED = intersects[ 0 ].object;
  						INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
  						INTERSECTED.material.emissive.setHex( 0xff0000 );
              console.log(INTERSECTED.position.x);
              posX = (INTERSECTED.position.x/100) - 1;
              posY = (INTERSECTED.position.y/100);

  					}

  				} else {

  					if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );

  					INTERSECTED = null;

  				}
      if(posX != null)
        placeTrap(posX, posY);
  }

  function handleTouchMove(event) {
    if (event.touches.length == 1) {
      //event.preventDefault();
      //mousePos = {x:event.touches[0].pageX, y:event.touches[0].pageY};
    }
  }

  function createLights() {
    light = new THREE.HemisphereLight(0xffffff, 0xffffff, .5)
    light.castShadow = true;

    shadowLight = new THREE.DirectionalLight(0xffffff, .8);
    shadowLight.position.set(0.5, 1, 0.5);
    shadowLight.castShadow = true;

    backLight = new THREE.DirectionalLight(0xffffff, .4);
    backLight.position.set(0.5, 1, -0.5);
    backLight.shadowDarkness = .1;
    backLight.castShadow = true;

    scene.add(backLight);
    scene.add(light);
    scene.add(shadowLight);
  }

  //BIRD

  Bird = function(){

    this.rSegments = 4;
    this.hSegments = 3;
    this.cylRay = 120;
    this.bodyBirdInitPositions = [];
    this.vAngle = this.hAngle = 0;
    this.normalSkin = {r:255/255, g:222/255, b:121/255};
    this.shySkin = {r:255/255, g:157/255, b:101/255};
    this.color = {r:this.normalSkin.r, g:this.normalSkin.g, b:this.normalSkin.b};
    this.side = "left";

    this.shyAngles = {h:0, v:0};
    this.behaviourInterval;
    this.intervalRunning = false;

    this.threegroup = new THREE.Group();

    // materials
    this.yellowMat = new THREE.MeshLambertMaterial ({
      color: 0xffde79,
      shading:THREE.FlatShading
    });
    this.whiteMat = new THREE.MeshLambertMaterial ({
      color: 0xffffff,
      shading: THREE.FlatShading
    });
    this.blackMat = new THREE.MeshLambertMaterial ({
      color: 0x000000,
      shading: THREE.FlatShading
    });
    this.orangeMat = new THREE.MeshLambertMaterial ({
      color: 0xff5535,
      shading: THREE.FlatShading
    });

    //WINGS

    this.wingLeftGroup = new THREE.Group();
    this.wingRightGroup = new THREE.Group();

    var wingGeom = new THREE.BoxGeometry(60,60, 5);
    var wingLeft = new THREE.Mesh(wingGeom, this.yellowMat);
    this.wingLeftGroup.add(wingLeft);
    this.wingLeftGroup.position.x = 70;
    this.wingLeftGroup.position.z = 0;
    this.wingLeftGroup.rotation.y = Math.PI/2;
    wingLeft.rotation.x = -Math.PI/4;
    var wingRight = new THREE.Mesh(wingGeom, this.yellowMat);
    this.wingRightGroup.add(wingRight);
    this.wingRightGroup.position.x = -70;
    this.wingRightGroup.position.z = 0;
    this.wingRightGroup.rotation.y = -Math.PI/2;
    wingRight.rotation.x = -Math.PI/4;

    //BODY

    var bodyGeom = new THREE.CylinderGeometry(40, 70, 200, this.rSegments, this.hSegments);
    this.bodyBird = new THREE.Mesh(bodyGeom, this.yellowMat);
    this.bodyBird.position.y = 70;

    this.bodyVerticesLength = (this.rSegments+1)*(this.hSegments);
    for (var i=0;i<this.bodyVerticesLength; i++){
      var tv = this.bodyBird.geometry.vertices[i];
      this.bodyBirdInitPositions.push({x:tv.x, y:tv.y, z:tv.z});
    }

    this.threegroup.add(this.bodyBird);
    this.threegroup.add(this.wingLeftGroup);
    this.threegroup.add(this.wingRightGroup);


    // EYES

    this.face = new THREE.Group();
    var eyeGeom = new THREE.BoxGeometry(60,60,10);
    var irisGeom = new THREE.BoxGeometry(10,10,10);

    this.leftEye = new THREE.Mesh(eyeGeom, this.whiteMat);
    this.leftEye.position.x = -30;
    this.leftEye.position.y = 120;
    this.leftEye.position.z = 35;
    this.leftEye.rotation.y = -Math.PI/4;

    this.leftIris = new THREE.Mesh(irisGeom, this.blackMat);
    this.leftIris.position.x = -30;
    this.leftIris.position.y = 120;
    this.leftIris.position.z = 40;
    this.leftIris.rotation.y = -Math.PI/4;


    this.rightEye = new THREE.Mesh(eyeGeom, this.whiteMat);
    this.rightEye.position.x = 30;
    this.rightEye.position.y = 120;
    this.rightEye.position.z = 35;
    this.rightEye.rotation.y = Math.PI/4;

    this.rightIris = new THREE.Mesh(irisGeom, this.blackMat);
    this.rightIris.position.x = 30;
    this.rightIris.position.y = 120;
    this.rightIris.position.z = 40;
    this.rightIris.rotation.y = Math.PI/4;

    // BEAK

    var beakGeom = new THREE.CylinderGeometry(0,20,20, 4,1);
    this.beak = new THREE.Mesh(beakGeom, this.orangeMat);
    this.beak.position.z = 65;
    this.beak.position.y = 70;
    this.beak.rotation.x = Math.PI/2;

    this.face.add(this.rightEye);
    this.face.add(this.rightIris);
    this.face.add(this.leftEye);
    this.face.add(this.leftIris);
    this.face.add(this.beak);

    //FEATHERS

    var featherGeom = new THREE.BoxGeometry(10,20,5);
    this.feather1 = new THREE.Mesh(featherGeom, this.yellowMat);
    this.feather1.position.z = 55;
    this.feather1.position.y = 185;
    this.feather1.rotation.x = Math.PI/4;
    this.feather1.scale.set(1.5,1.5,1);

    this.feather2 = new THREE.Mesh(featherGeom, this.yellowMat);
    this.feather2.position.z = 50;
    this.feather2.position.y = 180;
    this.feather2.position.x = 20;
    this.feather2.rotation.x = Math.PI/4;
    this.feather2.rotation.z = -Math.PI/8;

    this.feather3 = new THREE.Mesh(featherGeom, this.yellowMat);
    this.feather3.position.z = 50;
    this.feather3.position.y = 180;
    this.feather3.position.x = -20;
    this.feather3.rotation.x = Math.PI/4;
    this.feather3.rotation.z = Math.PI/8;

    this.face.add(this.feather1);
    this.face.add(this.feather2);
    this.face.add(this.feather3);
    this.threegroup.add(this.face);

    this.threegroup.traverse( function ( object ) {
      if ( object instanceof THREE.Mesh ) {
        object.castShadow = true;
        object.receiveShadow = true;
      }
    } );

  }

  Bird.prototype.look = function(hAngle,vAngle){
    this.hAngle = hAngle;
    this.vAngle = vAngle;

    this.leftIris.position.y = 120 - this.vAngle*30;
    this.leftIris.position.x = -30 + this.hAngle*10;
    this.leftIris.position.z = 40 + this.hAngle*10;

    this.rightIris.position.y = 120 - this.vAngle*30;
    this.rightIris.position.x = 30 + this.hAngle*10;
    this.rightIris.position.z = 40 - this.hAngle*10;

    this.leftEye.position.y = this.rightEye.position.y = 120 - this.vAngle*10;

    this.beak.position.y = 70 - this.vAngle*20;
    this.beak.rotation.x = Math.PI/2 + this.vAngle/3;

    this.feather1.rotation.x = (Math.PI/4) + (this.vAngle/2);
    this.feather1.position.y = 185 - this.vAngle*10;
    this.feather1.position.z = 55 + this.vAngle*10;

    this.feather2.rotation.x = (Math.PI/4) + (this.vAngle/2);
    this.feather2.position.y = 180 - this.vAngle*10;
    this.feather2.position.z = 50 + this.vAngle*10;

    this.feather3.rotation.x = (Math.PI/4) + (this.vAngle/2);
    this.feather3.position.y = 180 - this.vAngle*10;
    this.feather3.position.z = 50 + this.vAngle*10;


    for (var i=0;i<this.bodyVerticesLength; i++){
      var line = Math.floor(i/(this.rSegments+1));
      var tv = this.bodyBird.geometry.vertices[i];
      var tvInitPos = this.bodyBirdInitPositions[i];
      var a, dy;
      if (line >= this.hSegments-1){
        a = 0;
      }else{
        a = this.hAngle/(line+1);
      }
      var tx = tvInitPos.x*Math.cos(a) + tvInitPos.z*Math.sin(a);
      var tz = -tvInitPos.x*Math.sin(a) + tvInitPos.z*Math.cos(a);
      tv.x = tx;
      tv.z = tz;
    }
    this.face.rotation.y = this.hAngle;
    this.bodyBird.geometry.verticesNeedUpdate = true;

  }
  Bird.prototype.lookAway = function(fastMove){
    var speed = fastMove? .4 : 2;
    var ease = fastMove? Strong.easeOut : Strong.easeInOut;
    var delay = fastMove? .2 : 0;
    var col = fastMove? this.shySkin : this.normalSkin;
    var tv = (-1 + Math.random()*2) * Math.PI/3;
    var beakScaleX = .75 + Math.random()*.25;
    var beakScaleZ = .5 + Math.random()*.5;

    if (this.side == "right"){
      var th = (-1 + Math.random()) * Math.PI/4;
    }else{
      var th = Math.random() * Math.PI/4;
    }
    _this = this;
    TweenMax.killTweensOf(this.shyAngles);
    TweenMax.to(this.shyAngles, speed, {v:tv, h:th, ease:ease, delay:delay});
    TweenMax.to (this.color, speed, {r:col.r, g:col.g, b:col.b, ease:ease, delay:delay});
    TweenMax.to(this.beak.scale, speed, {z:beakScaleZ, x:beakScaleX, ease:ease, delay:delay});

  }

  Bird.prototype.stare = function(){
    _this = this;
    var col = this.normalSkin;
    if (this.side == "right"){
      var th = Math.PI/3;
    }else{
      var th = -Math.PI/3;
    }
    TweenMax.to(this.shyAngles, 2, {v:-.5, h:th, ease:Strong.easeInOut});
    TweenMax.to (this.color, 2, {r:col.r, g:col.g, b:col.b, ease:Strong.easeInOut});
    TweenMax.to(this.beak.scale, 2, {z:.8, x:1.5, ease:Strong.easeInOut});

  }

  function createBox (){
    var box_geometry = new THREE.CubeGeometry( 1, 1, 1);
    var shape, material = new THREE.MeshLambertMaterial({ opacity: 0, transparent: true });

    shape = new Physijs.BoxMesh(
            box_geometry,
            material
          );

    shape.material.color.setRGB( Math.random() * 100 / 100, Math.random() * 100 / 100, Math.random() * 100 / 100 );
    shape.castShadow = true;
    shape.receiveShadow = true;


    shape.position.set(
      Math.random() * 30 - 15,
      20,
      Math.random() * 30 - 15
    );

    shape.rotation.set(
      Math.random() * Math.PI,
      Math.random() * Math.PI,
      Math.random() * Math.PI
    );

    scene.add( shape );

    new TWEEN.Tween(shape.material).to({opacity: 1}, 500).start();
    console.log("Successfully created cube bruh");
  }


  function createFloor(){
    floor = new THREE.Mesh(new THREE.PlaneBufferGeometry(100,100), new THREE.MeshBasicMaterial({color: 0xe0dacd}));
    floor.rotation.x = -Math.PI/2;
    floor.position.y = -33;
    floor.receiveShadow = true;
    //scene.add(floor);

    for(var i = 0; i < 40; i++){
      var groundBlock = new Physijs.BoxMesh(
        new THREE.CubeGeometry(100, 100, 100),
        new THREE.MeshLambertMaterial({color: 0xe0dacd}),
        0, // mass
        { restitution: .2, friction: .8 }
      );
      groundBlock.position.y = 0;
      groundBlock.position.x = 100 * i + 100;
      //groundBlock.receiveShadow = true;
      scene.add( groundBlock );
    }

  }

  function createPlatforms() {
    for(var i = 0; i < platforms.length; i++) {
        var obj = platforms[i];

        var box_geometry = new THREE.CubeGeometry( 100, 100, 100);
        var platformBlock, material = new THREE.MeshLambertMaterial({ color: obj.colour});

        platformBlock = new THREE.Mesh(
                box_geometry,
                material
              );

        platformBlock.position.y = obj.y_pos;
        platformBlock.position.x = obj.x_pos;
        //platformBlock.receiveShadow = true;
        //platformBlock.castShadow = true;
        scene.add( platformBlock );
    }
  }

  function createBirds(){
    bird1 = new Bird();
    bird1.threegroup.position.x = 2000;
    bird1.threegroup.position.y = 100;
    scene.add(bird1.threegroup);
  }


  function loop(){
    var tempHA = (mousePos.x-windowHalfX)/200;
    var tempVA = (mousePos.y - windowHalfY)/200;
    var userHAngle = Math.min(Math.max(tempHA, -Math.PI/3), Math.PI/3);
    var userVAngle = Math.min(Math.max(tempVA, -Math.PI/3), Math.PI/3);
    //bird1.look(userHAngle,userVAngle);

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
  //createBirds();
  loop();
}
