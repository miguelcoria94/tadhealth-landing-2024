<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">
        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h1 class="h2 mb-4">TadHealth can help scale your resources.</h1>
          <p class="text-xl text-gray-300">
            Easily customized resources can give you a reach to new community
            mental health resources empowering youth and cultures to embrace
            well-being.
          </p>
        </div>

        <!-- World illustration -->
        <div class="flex flex-col items-center pt-12 md:pt-16">
          <div class="relative">
            <svg
              class="absolute inset-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              width="800"
              height="800"
              viewBox="0 -28 839 839"
              style="max-width: 200%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g class="fill-current text-gray-700 opacity-75">
                <circle class="pulse" cx="400" cy="400" r="200" />
                <circle class="pulse pulse-1" cx="400" cy="400" r="200" />
                <circle class="pulse pulse-2" cx="400" cy="400" r="200" />
              </g>
            </svg>
            <!-- Globe image -->
            <img
              class="relative"
              src="../images/planet.png"
              width="600"
              height="500"
              alt="Planet"
            />
            <!-- Static dots -->
            <svg
              class="absolute top-0 h-auto w-30"
              viewBox="-10 0 500 500"
              style="left: 12%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter
                  x="-41.7%"
                  y="-34.2%"
                  width="183.3%"
                  height="185.6%"
                  filterUnits="objectBoundingBox"
                  id="world-ill-a"
                >
                  <feOffset
                    dy="4"
                    in="SourceAlpha"
                    result="shadowOffsetOuter1"
                  />
                  <feGaussianBlur
                    stdDeviation="6"
                    in="shadowOffsetOuter1"
                    result="shadowBlurOuter1"
                  />
                  <feColorMatrix
                    values="0 0 0 0 0 0 0 0 0 0.439215686 0 0 0 0 0.956862745 0 0 0 0.32 0"
                    in="shadowBlurOuter1"
                  />
                </filter>

                <filter
                  x="-7.3%"
                  y="-23.8%"
                  width="114.5%"
                  height="147.6%"
                  filterUnits="objectBoundingBox"
                  id="world-ill-e"
                >
                  <feGaussianBlur stdDeviation="2" in="SourceGraphic" />
                </filter>
                <ellipse
                  id="world-ill-b"
                  cx="51"
                  cy="175.402"
                  rx="24"
                  ry="23.364"
                />
                <ellipse
                  id="world-ill-d"
                  cx="246"
                  cy="256.201"
                  rx="12"
                  ry="11.682"
                />
                <linearGradient
                  x1="50%"
                  y1="0%"
                  x2="50%"
                  y2="100%"
                  id="world-ill-f"
                >
                  <stop stop-color="#4acdc4" stop-opacity="0" offset="0%" />
                  <stop
                    stop-color="#4acdc4"
                    stop-opacity=".64"
                    offset="52.449%"
                  />
                  <stop stop-color="#4acdc4" stop-opacity="0" offset="100%" />
                </linearGradient>
              </defs>
              <g transform="translate(0 -.818)" fill="none" fill-rule="evenodd">
                <use
                  fill="#000"
                  filter="url(#world-ill-a)"
                  xlink:href="#world-ill-b"
                />
                <use fill="#4acdc4" xlink:href="#world-ill-b" />
                <use
                  fill="#000"
                  filter="url(#world-ill-c)"
                  xlink:href="#world-ill-d"
                />
                <use fill="#4acdc4" xlink:href="#world-ill-d" />
                <ellipse
                  fill-opacity=".32"
                  fill="#4acdc4"
                  cx="293"
                  cy="142.303"
                  rx="8"
                  ry="7.788"
                />
                <ellipse
                  fill-opacity=".64"
                  fill="#4acdc4"
                  cx="250"
                  cy="187.083"
                  rx="6"
                  ry="5.841"
                />
                <ellipse
                  fill-opacity=".64"
                  fill="#4acdc4"
                  cx="13"
                  cy="233.811"
                  rx="2"
                  ry="1.947"
                />
                <ellipse
                  fill="#4acdc4"
                  cx="29"
                  cy="114.072"
                  rx="2"
                  ry="1.947"
                />
                <path
                  d="M258 256.2l87-29.204"
                  stroke="#666"
                  stroke-width="2"
                  opacity=".16"
                  filter="url(#world-ill-e)"
                />
                <path
                  d="M258 251.333c111.333-40.237 141-75.282 89-105.136M136 103.364c66.667 4.543 104.667 32.45 114 83.72"
                  stroke="url(#world-ill-f)"
                  stroke-width="2"
                  stroke-dasharray="2"
                />
              </g>
            </svg>
            <!-- Dynamic dots -->
            <svg
              class="absolute"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              style="width: 12%; top: 19%; left: 46%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g class="fill-current text-mint-500">
                <circle class="pulse pulse-mini" cx="24" cy="24" r="8" />
                <circle
                  class="pulse pulse-mini pulse-2"
                  cx="24"
                  cy="24"
                  r="8"
                />
                <circle cx="24" cy="24" r="8" />
              </g>
            </svg>
            <!-- Avatars -->
            <!-- Black icon -->
            <!-- Blue icon -->

            <!-- White icon -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FeaturesWorld",
};
</script>
