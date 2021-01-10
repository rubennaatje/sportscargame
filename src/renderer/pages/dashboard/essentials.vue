<template>
  <section class="h-full">
    <div class="grid grid-cols-6 grid-rows-2 gap-2 h-full flex">
      <SContainer
        title="Driver"
        class="col-span-2 h-full flex-grow-0"
      >
        <DonutChart class="overflow-y-auto h-full flex-grow-0" />
      </SContainer>

      <SContainer class="h-1/2" title="Essentials">
        <CloseCars class="overflow-y-auto" />
      </SContainer>

      <SContainer class="h-1/3" title="STINT">
        <Stint class="overflow-y-auto" />
      </SContainer>

      <SContainer class="h-1/3 col-span-2" title="stint">
        <RadialChart class />
      </SContainer>

      <SContainer
        title="fuel"
        class="grid grid-cols-2 grid-rows-2 text-center"
      >
        <div>
          LL:
          <span class="better">
            <span class="green-text">3.2</span>L
          </span>
        </div>
        <div>
          AVG:
          <span class="green-text">4.2</span>L
        </div>
        <div class="col-span-2">
          Remaining:
          <span class="green-text">70</span> Liters
        </div>
        <div class="col-span-2">
          Remaining:
          <span class="green-text">10.4</span> Laps
        </div>
      </SContainer>

      <SContainer title="tires">
        <AllTires />
      </SContainer>

      <SContainer
        title="temperatures"
        class="grid grid-cols-3 grid-rows-2 text-center"
      >
        <div>
          Last lap:
          <br />
          <span>
            <span>2:51</span>
          </span>
        </div>
        <div class="delta-container">
          Delta
          <br />
          <div>
            <span class="green-text delta">-1.5</span>
          </div>
        </div>
        <div>
          current lap:
          <span class="green-text">1:43</span>
        </div>
        <div class="col-span-2">
          <span class="green-text">70</span> Liters
        </div>
        <div class="col-span-2">
          Remaining:
          <span class="green-text">10.4</span> Laps
        </div>
      </SContainer>

      <SContainer title="driver comms" class="col-span-2 h-full">
        <div class="overflow-y-scroll h-full">
          <p>
            <span class="green-text">21:55:39||Nakajima IN CAR:</span>
            Car feels fine, feeling confident and safe.
          </p>
          <p>
            <span class="orange-text">21:55:59||ENGINEER:</span>
            Car behind is gaining on us, around 2 tents per lap.
          </p>
          <p>
            <span class="blue-text">21:56:04||Rubennaatje:</span>
            Push more, target laptime is 1:59
          </p>
          <p>
            <span class="green-text">21:56:07||Nakajima IN CAR:</span>
            ok, i'll try
          </p>
          <p>
            <span class="orange-text">21:55:59||ENGINEER:</span>
            Car behind is losing on us, around half a second per lap.
          </p>
          <p>
            <span class="orange-text">21:55:59||ENGINEER:</span>
            We're gaining on the guy in front around 2 tents per lap.
          </p>
        </div>
      </SContainer>

      <SContainer title="onboard">
        <!-- <SpeedChart /> -->
        <LapTimes />
      </SContainer>

      <SContainer class="col-span-2 h-1/5" title="chat">
        <chat class="h-full" />
      </SContainer>

      <SContainer title="telemetry">
        <Delta class="overflow-y-auto" />
      </SContainer>

      <SContainer class="col-span-2 h-1/5" title="TV">
        <Trackmap />
      </SContainer>
    </div>
  </section>
</template>
