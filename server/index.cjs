const express = require("express");
const bodyParser = require('body-parser');
const sql = require('./database.cjs');
const cors = require('cors');
const path = require("path");
const fs = require('fs');
const nodemailer = require("nodemailer");

let template = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="ru"><head><meta charset="UTF-8"><meta content="width=device-width,initial-scale=1" name="viewport"><meta name="x-apple-disable-message-reformatting"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta content="telephone=no" name="format-detection"><title>Новый шаблон</title><!--[if (mso 16)]><style type="text/css">a{text-decoration:none}</style><![endif]--><!--[if gte mso 9]><style>sup{font-size:100%!important}</style><![endif]--><!--[if gte mso 9]><xml><o:officedocumentsettings><o:allowpng></o:allowpng><o:pixelsperinch>96</o:pixelsperinch></o:officedocumentsettings></xml><![endif]--><style type="text/css">.rollover:hover .rollover-first{max-height:0!important;display:none!important}.rollover:hover .rollover-second{max-height:none!important;display:block!important}.rollover span{font-size:0}u+.body img~div div{display:none}#outlook a{padding:0}span.MsoHyperlink,span.MsoHyperlinkFollowed{color:inherit;mso-style-priority:99}a.es-button{mso-style-priority:100!important;text-decoration:none!important}#MessageViewBody a,a[x-apple-data-detectors]{color:inherit!important;text-decoration:none!important;font-size:inherit!important;font-family:inherit!important;font-weight:inherit!important;line-height:inherit!important}.es-desk-hidden{display:none;float:left;overflow:hidden;width:0;max-height:0;line-height:0;mso-hide:all}@media only screen and (max-width:600px){.es-m-p0r{padding-right:0!important}[class=gmail-fix]{display:none!important}a,p{line-height:150%!important}h1,h1 a{line-height:120%!important}h2,h2 a{line-height:120%!important}h3,h3 a{line-height:120%!important}h4,h4 a{line-height:120%!important}h5,h5 a{line-height:120%!important}h6,h6 a{line-height:120%!important}h1{font-size:36px!important;text-align:left}h2{font-size:26px!important;text-align:left}h3{font-size:20px!important;text-align:left}h4{font-size:24px!important;text-align:left}h5{font-size:20px!important;text-align:left}h6{font-size:16px!important;text-align:left}.es-content-body h1 a,.es-footer-body h1 a,.es-header-body h1 a{font-size:36px!important}.es-content-body h2 a,.es-footer-body h2 a,.es-header-body h2 a{font-size:26px!important}.es-content-body h3 a,.es-footer-body h3 a,.es-header-body h3 a{font-size:20px!important}.es-content-body h4 a,.es-footer-body h4 a,.es-header-body h4 a{font-size:24px!important}.es-content-body h5 a,.es-footer-body h5 a,.es-header-body h5 a{font-size:20px!important}.es-content-body h6 a,.es-footer-body h6 a,.es-header-body h6 a{font-size:16px!important}.es-menu td a{font-size:12px!important}.es-header-body a,.es-header-body p{font-size:14px!important}.es-content-body a,.es-content-body p{font-size:16px!important}.es-footer-body a,.es-footer-body p{font-size:14px!important}.es-infoblock a,.es-infoblock p{font-size:12px!important}.es-m-txt-c,.es-m-txt-c h1,.es-m-txt-c h2,.es-m-txt-c h3,.es-m-txt-c h4,.es-m-txt-c h5,.es-m-txt-c h6{text-align:center!important}.es-m-txt-r,.es-m-txt-r h1,.es-m-txt-r h2,.es-m-txt-r h3,.es-m-txt-r h4,.es-m-txt-r h5,.es-m-txt-r h6{text-align:right!important}.es-m-txt-j,.es-m-txt-j h1,.es-m-txt-j h2,.es-m-txt-j h3,.es-m-txt-j h4,.es-m-txt-j h5,.es-m-txt-j h6{text-align:justify!important}.es-m-txt-l,.es-m-txt-l h1,.es-m-txt-l h2,.es-m-txt-l h3,.es-m-txt-l h4,.es-m-txt-l h5,.es-m-txt-l h6{text-align:left!important}.es-m-txt-c img,.es-m-txt-l img,.es-m-txt-r img{display:inline!important}.es-m-txt-c .rollover:hover .rollover-second,.es-m-txt-l .rollover:hover .rollover-second,.es-m-txt-r .rollover:hover .rollover-second{display:inline!important}.es-m-txt-c .rollover span,.es-m-txt-l .rollover span,.es-m-txt-r .rollover span{line-height:0!important;font-size:0!important;display:block}.es-spacer{display:inline-table}a.es-button,button.es-button{font-size:20px!important;padding:10px 20px 10px 20px!important;line-height:120%!important}.es-button-border,a.es-button,button.es-button{display:inline-block!important}.es-m-fw,.es-m-fw .es-button,.es-m-fw.es-fw{display:block!important}.es-m-il,.es-m-il .es-button,.es-menu,.es-social,.es-social td{display:inline-block!important}.es-adaptive table,.es-left,.es-right{width:100%!important}.es-content,.es-content table,.es-footer,.es-footer table,.es-header,.es-header table{width:100%!important;max-width:600px!important}.adapt-img{width:100%!important;height:auto!important}.es-hidden,.es-mobile-hidden{display:none!important}.es-desk-hidden{width:auto!important;overflow:visible!important;float:none!important;max-height:inherit!important;line-height:inherit!important}tr.es-desk-hidden{display:table-row!important}table.es-desk-hidden{display:table!important}td.es-desk-menu-hidden{display:table-cell!important}.es-menu td{width:1%!important}.esd-block-html table,table.es-table-not-adapt{width:auto!important}.h-auto{height:auto!important}.es-text-2137 .es-text-mobile-size-26,.es-text-2137 .es-text-mobile-size-26 *{font-size:26px!important;line-height:150%!important}.es-text-2137 .es-text-mobile-size-18,.es-text-2137 .es-text-mobile-size-18 *{font-size:18px!important;line-height:150%!important}}@media screen and (max-width:384px){.mail-message-content{width:414px!important}}</style></head><body class="body" style="width:100%;height:100%;padding:0;Margin:0"><div dir="ltr" class="es-wrapper-color" lang="ru" style="background-color:#fafafa"><!--[if gte mso 9]><v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t"><v:fill type="tile" color="#fafafa"></v:fill></v:background><![endif]--><table width="100%" cellspacing="0" cellpadding="0" class="es-wrapper" role="none" style="mso-table-lspace:0;mso-table-rspace:0;border-collapse:collapse;border-spacing:0;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#fafafa"><tr><td valign="top" style="padding:0;Margin:0"><table cellpadding="0" cellspacing="0" align="center" class="es-header" role="none" style="mso-table-lspace:0;mso-table-rspace:0;border-collapse:collapse;border-spacing:0;width:100%;table-layout:fixed!important;background-color:transparent;background-repeat:repeat;background-position:center top"><tr><td align="center" style="padding:0;Margin:0"><table bgcolor="#ffffff" align="center" cellpadding="0" cellspacing="0" class="es-header-body" role="none" style="mso-table-lspace:0;mso-table-rspace:0;border-collapse:collapse;border-spacing:0;background-color:transparent;width:600px"><tr><td align="left" style="Margin:0;padding-top:10px;padding-right:20px;padding-bottom:10px;padding-left:20px"></td></tr></table></td></tr></table><table cellpadding="0" cellspacing="0" align="center" class="es-content" role="none" style="mso-table-lspace:0;mso-table-rspace:0;border-collapse:collapse;border-spacing:0;width:100%;table-layout:fixed!important"><tr><td align="center" style="padding:0;Margin:0"><table bgcolor="#ffffff" align="center" cellpadding="0" cellspacing="0" class="es-content-body" role="none" style="mso-table-lspace:0;mso-table-rspace:0;border-collapse:collapse;border-spacing:0;background-color:#fff;width:600px"><tr><td align="left" style="Margin:0;padding-right:20px;padding-left:20px;padding-top:30px;padding-bottom:30px"><table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0;mso-table-rspace:0;border-collapse:collapse;border-spacing:0"><tr><td align="center" valign="top" style="padding:0;Margin:0;width:560px"><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;border-collapse:collapse;border-spacing:0"><tr class="es-visible-simple-html-only"><td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px;font-size:0"><img src="https://avatars.mds.yandex.net/i?id=cdb8d830d78362acfa053d9d64736fcd582a517c-5877328-images-thumbs&n=13" alt="" width="100" style="display:block;font-size:14px;border:0;outline:0;text-decoration:none;border-radius:0"></td></tr><tr><td align="center" class="es-m-txt-c es-text-2137" style="padding:0;Margin:0;padding-bottom:10px"><h2 style="Margin:0;font-family:arial,'helvetica neue',helvetica,sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:46px;font-style:normal;font-weight:700;line-height:46px;color:#333"><span class="es-text-mobile-size-26" style="text-align:center;font-size:26px;line-height:26px">Спасибо за оставленную заявку! Вскоре мы с вами свяжемся!</span><span class="es-text-mobile-size-18" style="font-size:18px;line-height:18px">​</span></h2></td></tr><tr><td align="center" class="es-m-txt-c es-text-2137" style="padding:0;Margin:0;padding-bottom:10px"><h2 style="Margin:0;font-family:arial,'helvetica neue',helvetica,sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:14px!important;font-style:normal;font-weight:700;color:#333"><span class="es-text-mobile-size-26" style="font-size:14px!important">CodeMakers. Taskills 2024</span><span class="es-text-mobile-size-18" style="font-size:18px;line-height:18px">​</span></h2></td></tr></table></td></tr></table></td></tr></table></td></tr></table></td></tr></table></div></body></html>`;
const email_trans = nodemailer.createTransport({
    host: "smtp.yandex.ru",
    port: 465,
    secure: true, // true for port 465, false for other ports
    auth: {
        user: "filan333@yandex.ru",
        pass: "viumelzuqmvoxquf",
    },
});

const corsOption = {
    credentials: true,
    methods: ["GET", "POST"],
}

// App Init
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOption));

function sql_query(query, options, cb){
    sql.query(query, options, (err, res)=>{
        if(err){
            console.log("error: ", err);
            return false;
        }
        cb(res);
    });
}

// Routes Init
app.post("/api/email", async function(req, res){
    let email = req.body.email.trim();

    if(!email){
        return res.json({message: 'Ввдетие Email', success: false});
    }
    else{
        if(email.length < 6 || !email.includes('@') || !email.includes('.')){
            return res.json({message: 'Email невалиден!', success: false});

        }
        sql_query("SELECT * FROM subscribers WHERE email=?", [email], (data) => {
            if(data.length > 0){
                return res.json({message: 'Вы уже отправляли заявку!', success: false});
            }
            else{
                sql_query("INSERT INTO subscribers VALUES (null, ?)", [email], ()=>{});

                email_trans.sendMail({
                    from: '"CodeMakers" <filan333@yandex.ru>',
                    to: `${email}`,
                    html: template,
                });
                setTimeout(() => {
                    email_trans.sendMail({
                        from: '"CodeMakers" <filan333@yandex.ru>',
                        to: `filan333@yandex.ru`,
                        html: `<h1>Оставлена заявка: ${email}</h1>`,
                    });
                }, 10000);

                return res.json({message: 'Вскоре мы с вами свяжемся!', success: true});
            }
        });

    }
});

app.get('/*', (req, res) => {
    fs.exists(__dirname + '/../dist' + req.url, (e) => {
        if(e){
            res.sendFile(req.url, {root: __dirname + '/../dist'});
        }
        else{
            res.send('404');
        }
    });
});


// Listen App
app.listen(80);
