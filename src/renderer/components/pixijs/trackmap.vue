<template>
  <div
    ref="stage"
    v-prevent-parent-scroll
    class="stage h-full w-full"
  />
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
      }
    },
  },
  beforeDestroy() {
    this.trackIsSet = false;
    this.carsAreSet = false;
    this.app.destroy();
  },
  mounted() {
    this.startPixi();
    if (
      !this.trackIsSet &&
      this.trackInfo &&
      this.trackInfo.graphics.track_path
    ) {
      this.trackIsSet = true;
      this.AddTrack(this.trackInfo);
    }
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
        screenWidth: this.$refs.stage.clientWidth,
        screenHeight: this.$refs.stage.clientWidth,
        worldWidth: 1000,
        worldHeight: 1000,
        interaction: this.app.renderer.plugins.interaction, // the interaction module is important for wheel to work properly when renderer.view is placed or scaled
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
      this.path = new TrackOOP(track.graphics.track_path, 7001, 654);

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
        // car.setAnnotationScale(1 / this.viewport.scaled);
        car.scale.set(5 / this.viewport.scaled);
      });
      car.car.on('click', () => {
        this.viewport.follow(car);
      });
      tween.on('repeat', (loopCount) => {
        if (this.path) {
          let point = this.path.getPointAtPercentage(
            this.allCars[index].percentage,
          );

          if (this.allCars[index].realdeal.car.extra.inPitlane) {
            point = this.path.getPitlanePointAtPercentage(
              this.allCars[index].pitlanePercentage,
            );
          }

          tween.from({ x: tween._to.x, y: tween._to.y }).to({
            x: point.x,
            y: point.y,
          });
        }
      });
      if (this.allCars[index].carnumber === 1) {
        car.addAnnotation('P1 ');
      }
      if (this.allCars[index].carnumber === 7) {
        car.addAnnotation('Your car ');
        this.viewport.follow(car, {
          speed: 1,
          acceleration: 0.5,
          radius: 50,
        });
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
