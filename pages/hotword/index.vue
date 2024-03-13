<template>
    <div>
        <el-container class="container-cls">
            <el-header>
                <el-row style="padding-top: 1%;">
                    <el-col :span="4">
                        <div>
                            Hot Word
                        </div>
                    </el-col>
                    <el-col :span="20">
                        <div class="title-cls">
                            每日百词热榜
                        </div>
                    </el-col>
                </el-row>
            </el-header>
            <el-main class="main-cls">
                <el-row>
                    <el-col :span="24">
                        <div class="board-cls">
                            <el-row style="font-size: 16px;">
                                <el-col :span="8">
                                    <div>
                                        词
                                    </div>
                                </el-col>
                                <el-col :span="8">
                                    <div>
                                        解释
                                    </div>
                                </el-col>
                                <el-col :span="8">
                                    <div>
                                        热度
                                    </div>
                                </el-col>
                            </el-row>
                            <el-row style="font-size: 14px; margin: 30px 0 30px 0;"
                                v-for="(item, index) in hundredWordList" :key="index">
                                <el-col :span="8">
                                    <div>
                                        <el-tooltip class="item" effect="dark" :content="item.word"
                                            placement="top">
                                            <div>
                                                {{ item.word && item.word.length < 10 ? item.word : item.word.substring(0, 10) + "..." }}
                                            </div>
                                        </el-tooltip>
                                    </div>
                                </el-col>
                                <el-col :span="8">
                                    <div>
                                        <el-tooltip class="item" effect="light" :content="item.description"
                                            placement="top">
                                            <div>
                                                {{ item.description && item.description.length < 20 ? item.description : item.description.substring(0, 20) + "..." }}
                                            </div>
                                        </el-tooltip>
                                    </div>
                                </el-col>
                                <el-col :span="8">
                                    <div>
                                        {{ index + 1 }}
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                    </el-col>
                </el-row>
            </el-main>
            <el-footer>
                <el-row style="font-size: small; text-align: center;">
                    <el-col :span="12">
                        <div>
                            © 2024 Hot Word 版权所有 | xICP备xxxxxxxxxx号-x
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div>
                            <el-link :underline="false">用户协议 | </el-link>
                            <el-link :underline="false">隐私政策 | </el-link>
                            <el-link :underline="false">常见问题 | </el-link>
                            <el-link :underline="false">联系我们</el-link>
                        </div>
                    </el-col>
                </el-row>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
import hotwordApi from '../../api/hotword';

export default {
    data() {
        return {
            hundredWordList: [],
        }
    },
    created() {
        // this.getHundredWord();
    },
    methods: {
        getHundredWord() {
            hotwordApi.getHundredWord()
                .then(res => {
                    if (res.data.code == 1) {
                        this.hundredWordList = res.data.data;
                    } else {
                        this.$message({
                            type: 'info',
                            message: '服务器出了点问题，麻烦稍等一下哈'
                        })
                    }
                })
                .catch(res => {
                    this.$message({
                        type: 'info',
                        message: '获取不到数据，网络出了点问题哦'
                    })
                })
        },
    }
}
</script>

<style scoped>
.title-cls {
    padding-left: 35%;
    font-size: large;
}

.main-cls {
    /* background-color: antiquewhite; */
    padding-left: 10%;
    padding-right: 10%;
}

.board-cls {
    /* background-color: blueviolet; */
    text-align: center;
}

.container-cls {
    /* background: linear-gradient(to bottom, #00FFFF,#0000, #00FFFF); */
    /* background: linear-gradient(to bottom, #00FFFF,#a66a6a, #00FFFF); */
    background: linear-gradient(to bottom, #000000, #00FFFF);
    color: white;
}
</style>