<template>

    <section class="login">
        <div class="top-box">
            <span class="icon-back" onclick="window.history.go(-1);"></span>
            <router-link v-bind:to="'/Login'">登录</router-link>
        </div>
        <h2 class="title">会员注册</h2>
        <div class="login-box">
            <ul>
                <li class="form-group">
                    <div>
                        <input class="login-input" type="text"  placeholder="手机码号" v-model="mobile">
                    </div>
                </li>
                <li class="form-group">
                    <div class="password">
                        <input class="login-input " type="text" v-model="code" placeholder="验证码">
                        <button class="find-password" :disabled="getCode.disabled" @click="handleGetCode">{{getCode.txt}}</button>
                    </div>
                </li>
                <li class="form-group">
                    <div class="password">
                        <input class="login-input " type="password"  placeholder="登录密码" v-model="password">
                    </div>
                </li>
                <li class="form-group">
                    <div class="password">
                        <input class="login-input " type="password"  placeholder="确认密码" v-model="passwordC">
                    </div>
                </li>
                <li>
                    <div class="form-btn">
                    <button class="login-btn" type="primary" @click="handleRegist">注册</button>
                    <!-- <el-button class="login_btn" @click.native="login" type="primary" round :loading="isBtnLoading">登录</el-button> -->
                    </div>
                </li>
                <li class="login-agreement">
                    <span class="text-agreement">注册即代表您同意我们的</span><a id="viewProtocol">服务协议</a>
                </li>
            </ul>
        </div>
        <!-- <group>
            <x-input title="" name="mobile" placeholder="请输入手机号" v-model="mobile" keyboard="number" is-type="china-mobile" required></x-input>
            <x-input title="" type="text" placeholder="请输入验证码" v-model="code" required>
                <x-button slot="right" type="primary" mini :disabled="getCode.disabled" @click.native="handleGetCode" style="width: 100px;">{{getCode.txt}}</x-button>
            </x-input>
            <x-input title="" type="password" placeholder="请设置登录密码" v-model="password" :min="6" :max="16" required></x-input>
            <x-input title="" type="password" placeholder="确认密码" v-model="passwordC" :min="6" :max="16" required></x-input>
        </group>
        <p><span>注册后，您的微信账号和手机号都可以登录</span></p>
        <box gap="10px 25px">
            <x-button type="primary" @click.native="handleRegist">注册</x-button>
        </box>
        <p>
            <router-link to="/Login">已有账号？去登录</router-link>
        </p> -->
    </section>
</template>

<script>
    import { XInput, Box, Group, XButton } from 'vux'

    export default {
        name: 'regist',
        data() {
            return {
                mobile: "",
                password: "",
                passwordC:"",
                code:"",
                getCode: {
                    txt: '获取验证码',
                    disabled: false,
                }

            }
        },
        methods: {
            // login() {
            //     if (this.mobile === "" || this.password === ""){
            //         alert("账号或密码不能为空");
            //         return
            //     }
            //     this.$router.replace('/login');
            // },
            handleGetCode() {
                if(this.mobile) {
                    this.getCode.disabled = true;
                    this.getCode.txt = '获取中...';
                    let seconds = 10;
                    let self = this;
                    let time = setInterval(function() {
                        --seconds;
                        self.getCode.txt = seconds + 's';
                        if(seconds <= 0) {
                            clearInterval(time);
                            self.getCode.disabled = false;
                            self.getCode.txt = '获取验证码';
                        }
                    }, 1000)
                } else {
                    this.$vux.toast.text('请先填写手机号');
                }
            },
            handleRegist() {
                if(!this.mobile || !this.code || !this.password || !this.passwordC) {
                    this.$vux.toast.text('您有未填项，不能注册')
                } else if(this.password != this.passwordC) {
                    this.$vux.toast.text('两次输入的密码不一致')
                } else {
                    this.$vux.toast.text('注册成功')
                    this.$router.push("/login");
                }

            }
        },
        created() {
            window.document.title = '会员注册';
        },
        components: {
            // XInput,
            // XButton,
            // Group,
            // Box
        }
    }
</script>
<style scoped>
@import "../../static/css/login.css";
</style>
