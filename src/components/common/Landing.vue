<template>
    <div>
        <Loading></Loading>
    </div>
</template>
<script>
import Loading from './Loading'
import { mapState,mapGetter, mapActions, mapMutations } from 'vuex'
import SignService from '../../service/sign.js'

export default {
    data() {
        return {
            email: "",
            username: ""
        }
    },
    computed: {
        ...mapState([
            'is_loading',
            'is_logined',
            'token'
        ])
    },
    components: {
        'Loading': Loading
    },
    methods: {
        ...mapActions([
            'getToken'
        ])
    },
    mounted() {
        this.email = SignService.getEmail();
        this.username = SignService.getUsername(this.email);
        SignService.register(this.username, this.email)
            .then((res => {
                this.getToken();
            }))
    }
}
</script>
