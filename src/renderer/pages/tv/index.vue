<template>
  <div class="h-full">
    <div class="h-full grid grid-cols-1 grid-rows-4 gap-2">
      <SContainer title="TV feed" class="row-span-3">
        <div>
          <Racetimer />
          <Trackmap />
          <Scrollingtiming />
        </div>
      </SContainer>
      <SContainer class="row-span-1" title="stint">
        <RadialChart class="h-full" />
      </SContainer>
    </div>
  </div>
</template>

<script></script>
