<template>
<div>
    <router-view :key="$route.path"/>
</div>
</template>
<script>
export default {
    data: () => ({

    }),
    
    methods: {

    }
}
 //   {
    //     "name": "Filler Tarantino",
    //     "vendor": "bitcoin",
    //     "valid": "04/21",
    //     "number": "3463 2818 9492 1882"
    // },
    //   {
    //     "name": "Filler Bergman",
    //     "vendor": "blockchain",
    //     "valid": "02/22",
    //     "number": "2456 2818 3452 3532"
    //   },
    //   {
    //     "name": "Filler Anderson",
    //     "vendor": "evilcorp",
    //     "valid": "04/23",
    //     "number": "2345 1234 1346 1882"
  
    //   }
</script>

<style>
/* html {
    background-color: rgb(49, 49, 49);
} */
body {
    margin-top: 0;
}
</style>
