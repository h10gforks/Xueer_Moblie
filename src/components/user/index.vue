<template>
	<div :class="$style.container">
    <div :class="$style.info">
      <div :class="$style.avatar">
        <img src="https://occc3ev3l.qnssl.com/xueer/m/avatar.png">
      </div>
      <div :class="$style.ids">
        <div :class="$style.username">{{username}}</div>
        <div :class="$style.email">{{email}}</div>
      </div>
    </div>
    <div :class="$style.btns" ref="foo">
      <div :class="[$style.btn, $style.logout]" @click="onLogout">注销</div>
      <div :class="$style.btn" @click="getPromotionLink">{{
        loadingLink ? "加载中":"获取专属推广链接"}}</div>
	  </div>
    <div :class="[$style.linkBox, showLink ? $style.showLink:'']">
      <button :class="$style.clipBtn" id="clip" data-clipboard-target="#link">复制</button>
     <textarea id="link" readonly v-model="link" :class="$style.link"/>
    </div>
    <Dialog :show="showDialog" @ok="onOK"></Dialog>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import ClipboardJS from "clipboard";
import Vue from "vue";
import Dialog from "../common/commonDialog.vue";

export default {
  data() {
    return {
      showDialog: false,
      showLink: false,
      promotionLink: ""
    };
  },
  created() {
    this.fetchUserData(this.token);
  },
  mounted() {
    Vue.nextTick(() => {
      const clipboard = new ClipboardJS("#clip");

      clipboard.on("success", e => {
        e.clearSelection();
        this.showDialog = true;
        setTimeout(() => {
          this.showDialog = false;
        }, 1000);
      });

      clipboard.on("error", e => {
        console.error("Action:", e.action);
        console.error("Trigger:", e.trigger);
      });
    });
  },
  computed: {
    ...mapState({
      username: state => state.user.username,
      email: state => state.user.email,
      link: state => state.user.link,
      loadingLink: state => state.user.loadingLink
    }),
    ...mapGetters(["token"])
  },
  methods: {
    ...mapActions(["logout", "resetUserData", "fetchUserData", "fetchLink"]),
    onLogout() {
      this.resetUserData();
      this.logout();
      this.$router.push({ path: "/" });
    },
    getPromotionLink() {
      this.showLink = true;
      this.fetchLink(this.token);
    },
    onOK() {
      this.showDialog = false;
    }
  },
  components: {
    Dialog
  }
};
</script>

<style lang='scss' module>
@import "../../assets/reset.scss";
@import "../../assets/value.scss";
.container {
  padding: 16px 24px;
}
.info {
  display: flex;
  .avatar {
    width: 40px;
    height: 40px;
  }
  image {
    border-radius: 50%;
    width: 100%;
  }
  .ids {
    margin-left: 8px;
    display: flex;
    flex-direction: column;
    .username {
      color: $_green;
      font-size: 16px; /*px*/
    }
    .email {
      margin-top: 8px;
      color: $shallow_grey;
      font-size: 14px; /*px*/
    }
  }
}
.btns {
  margin-top: 20px;
  display: flex;
  .logout {
    margin-right: 20px;
  }
}
.btn {
  padding: 0 36px;
  height: 36px;
  text-align: center;
  line-height: 36px;
  box-sizing: border-box;
  border: 1px solid $_yellow;
  border-radius: 2px;
  font-size: 14px; /*px*/
  color: $_yellow;
}
.linkBox {
  visibility: hidden;
  padding: 3px;
  margin-top: 20px;
  position: relative;
  height: 50px;
  border: 1px solid #eee;
  border-radius: 2px;
}
.showLink {
  visibility: visible;
}
.clipBtn {
  color: #2bbb8f;
  position: absolute;
  right: 0;
  top: 0;
  background: none;
  border-left: 1px solid #eee;
  border-bottom: 1px solid #eee;
  border-radius: 2px;
  padding: 5px;
}
</style>
