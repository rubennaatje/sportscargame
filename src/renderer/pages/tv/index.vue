<template>
  <div class="grid  grid-cols-1 grid-rows-4 gap-2 h-full flex">
    <SContainer title="TV feed" class="row-span-3">
      <Racetimer />
      <Trackmap class="h-9" />
      <Scrollingtiming />
    </SContainer>
    <SContainer class="row-span-1 " title="stint">
      <RadialChart class="h-full" />
    </SContainer>
  </div>
</template>

<script></script>
