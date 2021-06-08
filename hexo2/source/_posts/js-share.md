---
title: 分享 share
date: 2018-12-20 20:20:30
updated: 2019-01-14 15:05:00
tags:
			- JS
---

## share HTML 加copy
``` bash
<div class="addtoany_list">
  <div class="share-button"><em></em><span>分享至</span></div>
  <div class="social-share"  data-initialized="true">
   <a class="social-share-icon icon-weibo" href="#">&nbsp;</a>
   <a class="social-share-icon icon-wechat" href="#">&nbsp;</a>
   <a class="social-share-icon icon-copy" href="javascript:">&nbsp;</a>
   <div class="copy-success">复制成功</div>
   <div class="copy-error">请手动"复制"</div>           
  </div>
</div>
```
<!--more-->

## share CSS
``` bash
@import url("https://nspro.dev.ciandt.cn/sites/all/themes/custom/npro_master/css/share.min.css?pkoxsv");
css文件夹同级放入fonts文件夹，icon字用的

.social-share {
    float: right;
    margin-bottom: 20px;
}
.social-share .social-share-icon {
    font-size: 0 !important;
    margin: 0 4px;
}
.social-share .social-share-icon:before {
    font-size: 20px;
}

```

## share JS
``` bash
<script type="text/javascript" src="js/social-share.min.js"></script>
<script type="text/javascript" src="js/clipboard.min.js"></script>
  function shareWechat() {
    if ($('.addtoany_list').length){
      var $config = {
        wechatQrcodeTitle   : "微信扫一扫：分享",
        wechatQrcodeHelper  : '<p>在微信中扫描二维码后</p><p>点击右上角的 ··· 分享</p>'
      };
    }
  }

  function noClipboard () {
    $('.copy-error').fadeIn('slow');
    setTimeout(function(){          
      $('.copy-error').fadeOut('slow');
    },2000);
  }

  function shareCopyUrl(){     
    var clipBoardContent = window.location.href;
    if(ClipboardJS.isSupported()) {//copy: clipboard Plugin
      var clipboard = new ClipboardJS('.icon-copy', {
        text: function() {
          return clipBoardContent;
        }
      });
      
      clipboard.on('success', function(e) {          
        $('.copy-success').fadeIn('slow');
        setTimeout(function(){          
          $('.copy-success').fadeOut('slow');
        },2000);
      });

      clipboard.on('error', function(e) { 
        noClipboard();          
      });
    }
    else {   
     $('.icon-copy').click(function(event) { 
        noClipboard();
      });
    }    
  }

  $(document).ready(function() {
  shareCopyUrl(); 
  });
```
<div class="demo-link share-demo">demo</div><iframe  id="share-demo-iframe" class="demo-iframe" src="/xmh-demo/share/index.html" style="height:300px;"></iframe>
<p>More info: [demo](/xmh-demo/share/index.html),[share](https://github.com/overtrue/share.js/).</p>


