
<template>
<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item v-for:"{title, id} in data" key="id">{{title}}</el-menu-item>
</el-menu>
</template>

<script>
import shortid from "shortid"
  export default {
    data() {
      return [
		  {
			  title: "대시보드",
			  id: shortid.generate(),
		  },
		  {
			  title: "일정",
			  id: shortid.generate(),
		  },
		  {
			  title: "메신저",
			  id: shortid.generate(),
		  },
		  {
			  title: "노트",
			  id: shortid.generate()
		  }
	  ]
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>