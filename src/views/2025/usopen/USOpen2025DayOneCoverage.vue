<script setup>
import WelcomeItem from '../../../components/WelcomeItem.vue'
import OneIcon from '../../../components/icons/IconOne.vue'
</script>

<template>
  <main>
    <div style="margin-bottom: 10px">
      <router-link to="/2025/usopen">Back to 2025 US Open</router-link>
    </div>
    <h2>Day 1, Table 1</h2>
    <div style="margin-top: 10px; margin-bottom: 10px">
      <a
          target="_blank"
          href="https://www.wnttv.com/video-player/vod/2025-us-open-pool-championship-day-one-table-one-full-session?entryIds=0_dn063hpu&feedId=ddde4b96-0d82-44aa-bf83-4dbc03fd14c4&previousPageUrl=vod-view-all%3FfeedId%3Dddde4b96-0d82-44aa-bf83-4dbc03fd14c4%26previousPageUrl%3D%26carouselMediaType%3DDynamic&pageMediaType=Dynamic">
        Link to watch on wnt.tv
      </a>
    </div>
    <iframe width="560" height="460" src="https://www.wnttv.com/video-player/vod/2025-us-open-pool-championship-day-one-table-one-full-session?entryIds=0_dn063hpu&feedId=ddde4b96-0d82-44aa-bf83-4dbc03fd14c4&previousPageUrl=vod-view-all%3FfeedId%3Dddde4b96-0d82-44aa-bf83-4dbc03fd14c4%26previousPageUrl%3D%26carouselMediaType%3DDynamic&pageMediaType=Dynamic"
            title="Test" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
    </iframe>
    <h3 style="margin-top: 10px">Matches:</h3>
    <ul>
      <li>
        Fedor Gorst vs Reginald Jackson
      </li>
      <li>
        Aloysius Yapp vs Joseph Blyler
      </li>
      <li>
        Jayson Shaw vs Barry West Jr
      </li>
      <li>
        Jesus Atencio vs Matt Ross
      </li>
      <li>
        Carlo Biado vs Jason Munro
      </li>
      <li>
        Johann Chua vs Quinten Pongers
      </li>
      <li>
        Felix Vogel vs Earl Strickland
      </li>
      <li>
        Shane Van Boening vs Adam Sisneros
      </li>
    </ul>
  </main>
</template>
