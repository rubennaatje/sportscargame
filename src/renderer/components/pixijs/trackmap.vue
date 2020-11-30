<template>
  <div ref="stage" v-prevent-parent-scroll class="stage h-full" />
</template>
<script>
import { Viewport } from 'pixi-viewport';
// eslint-disable-next-line no-unused-vars
import tweenManager from 'pixi-tween';
// import { mapGetters } from 'vuex';
import { TrackOOP } from './trackoop';
import { CarOOP } from './caroop';
export default {
  data: () => {
    return {
      pixiCars: [],
    };
  },
  computed: {
    allCars() {
      return this.$store.state.cars.cars;
    },
    trackInfo() {
      return this.$store.state.staticInfo.track.track;
    },
  },
  watch: {
    allCars(newValue, oldValue) {
      if (!this.carsAreSet) {
        this.carsAreSet = true;
        this.allCars.forEach((a, i) => this.AddCar(i));
      }
    },
    trackInfo(newValue, oldValue) {
      if (!this.trackIsSet && newValue.graphics.track_path) {
        this.trackIsSet = true;
        this.AddTrack(newValue);
        console.log('add track!');
      }
      console.log('update!', newValue);
    },
  },
  beforeDestroy() {
    this.app.destroy();
  },
  mounted() {
    this.startPixi();
    console.log();
  },
  methods: {
    initPixi() {
      this.app = new PIXI.Application({
        transparent: true,
        antialias: true,
      });
      this.$el.appendChild(this.app.view);
      this.app.renderer.view.style.display = 'block';
      this.app.renderer.autoResize = true;
      this.app.renderer.resize(
        this.$refs.stage.clientWidth,
        this.$refs.stage.clientHeight,
      );

      this.viewport = new Viewport({
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
        worldWidth: 1000,
        worldHeight: 1000,
        // interaction: this.app.renderer.plugins.interaction, // the interaction module is important for wheel to work properly when renderer.view is placed or scaled
      });
      this.app.stage.addChild(this.viewport);
    },
    startPixi() {
      this.initPixi();

      this.viewport.drag().pinch().wheel().decelerate();

      this.viewport.sortableChildren = true;
      this.viewport.threshold = 100;

      //   this.viewport.follow(bunny);
      this.viewport.zoomPercent(5);

      // Listen for animate update and update the tween manager
      this.app.ticker.add(function (delta) {
        PIXI.tweenManager.update();
      });
    },
    AddTrack(track) {
      this.path = new TrackOOP(track.graphics.track_path, 7001);

      // this.path.lineStyle(14.0, 0xffffff);

      this.path.addPitlane(track.graphics.pitlane_path);

      this.path.addSector(track.graphics.S1_path, 's1');

      this.path.addSector(track.graphics.S2_path, 's2', 0xffff00);

      this.path.addSector(track.graphics.S3_path, 's3', 0x0000ff);
      this.path.drawMarker(0, 'fl', 10, 2, 0xff0000, 'FL');

      track.corners.forEach((corner) => {
        this.path.drawMarker(
          corner.point,
          corner.name,
          10,
          1,
          0xf0f0f0,
          corner.num,
        );
      });

      this.viewport.addChild(this.path);
    },
    AddCar(index) {
      const car = new CarOOP(
        this.allCars[index].category,
        '',
        this.allCars[index].carnumber,
      );

      // init tween
      const tween = PIXI.tweenManager.createTween(car);
      tween.time = 250;
      tween.from({ x: 0 }).to({ x: 250 });
      tween.start();
      tween.loop = true;

      this.viewport.on('zoomed', (ctx) => {
        console.log(ctx);
        car.setAnnotationScale(1 / this.viewport.scaled);
      });

      tween.on('repeat', (loopCount) => {
        const point = this.path.getPointAtPercentage(
          this.allCars[index].percentage,
        );

        tween.from({ x: tween._to.x, y: tween._to.y }).to({
          x: point.x,
          y: point.y,
        });
      });
      if (this.allCars[index].carnumber === 1) {
        car.addAnnotation('P1 ');
      }
      if (this.allCars[index].carnumber === 8) {
        car.addAnnotation('Your car ');
      }
      // if (this.allCars[index].carnumber === 29) {
      //   car.addAnnotation('Fastest lap', 0x9400D3, 50, 20, 2);
      // }
      car.scale.set(2, 2);
      this.viewport.addChild(car);
    },
  },
};
</script>
