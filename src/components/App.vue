<template>
   <div>
    <div>app</div>
    <div>
        <a v-link="{ path: 'button' }">按钮</a>
        <a v-link="{ path: 'default' }">default</a>
    </div>
    <router-view 
     keep-alive
      transition
      transition-mode="out-in">
    </router-view>
   </div>
</template>

