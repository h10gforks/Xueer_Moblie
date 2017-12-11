import Fetch from './fetch.js'
import Cookie from './cookie.js'

let service = {
    getEmail() {
        return window.location.href.split('?')[1].split('&')[0].split('=')[1]
    },
    login(email) {
        fetch('/api/v1.0/token', {
            method: 'POST',
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(email + ':muxi304')
            },
            body: JSON.stringify({
                username: btoa(email),
                password: btoa("muxi304")
            })
        }).then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(value => {
            Cookie.setCookie('token', value.token, 14)
        })
    },
    register(email) {
        fetch('/api/v1.0/users', {
            method: 'POST',
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: "学而用户",
                email: email,
                password: "muxi304",
                roleid: 3
            })
        })
    }
}