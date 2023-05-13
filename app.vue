<template>
  <div>
    <v-stage ref="stage" :config="configKonva">
      <v-layer>
        <v-circle :config="configCircle"></v-circle>
      </v-layer>
    </v-stage>
  </div>
</template>

<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";
import { StageConfig } from "konva/lib/Stage";
import { CircleConfig } from "konva/lib/shapes/Circle";

const { width, height } = useWindowSize();

const configKonva = reactive<Partial<StageConfig>>({
  width: width.value,
  height: height.value,
});

const configCircle = reactive<CircleConfig>({
  x: 100,
  y: 100,
  radius: 70,
  fill: "red",
  stroke: "black",
  strokeWidth: 4,
});

watch([width, height], ([w, h]) => {
  configKonva.width = w;
  configKonva.height = h;
});
</script>
