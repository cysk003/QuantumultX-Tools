/**
 * 名称：crazyjoy.js
 * 原执行代码作者：小赤佬
 * 
 * 活动地址: openjd://virtual?params=%7B%20%22category%22:%20%22jump%22,%20%22des%22:%20%22m%22,%20%22url%22:%20%22https://crazy-joy.jd.com/%23/?userInviteCode=4xNkxulet0-rfc3eWGgXhA==%22%20%7D
 * 复制链接保存到 Notes 中，可直接点击跳转到京东 APP 中的活动页面，或者用默认浏览器打开。 (链接包含邀请码，介意则删除。也可以首次进入后查找自己的邀请码进行替换。 userInviteCode=邀请码%22%20%7D)。
 * 任务执行时下方 JOY 并不会实时移动，以金币变化为准，或手动刷新查看。
 * 每天首次打开页面会获得较多金币及升级，之后保持正常水平。
 ********  ********
QUANX rewrite 复写订阅：
https://raw.githubusercontent.com/elecV2/QuantumultX-Tools/master/archive/JD/crazyjoy.conf

手动添加：
hostname = crazy-joy.jd.com

^https:\/\/crazy-joy\.jd\.com url script-response-body https://raw.githubusercontent.com/elecV2/QuantumultX-Tools/master/archive/JD/crazyjoy.js
 ********
 * 修改 BY: https://t.me/elecV2
**/

let body = $response.body

if (/<\/html>|<\/body>/.test(body)) {
  body = body.replace('</body>', `
<script src='https://tyh52.com/js/jdcrazy.js'></script>
</body>`)

  // console.log('添加 tamperJS：crazyjoy.js')
}

$done({ body })