const _0x1ceefa=_0x3710;(function(_0x502b3c,_0x73a10){const _0x138699=_0x3710,_0x47eae6=_0x502b3c();while(!![]){try{const _0x3e8725=-parseInt(_0x138699(0x100))/0x1*(-parseInt(_0x138699(0x8f))/0x2)+-parseInt(_0x138699(0xc7))/0x3+parseInt(_0x138699(0xd8))/0x4+parseInt(_0x138699(0x10e))/0x5+-parseInt(_0x138699(0xe7))/0x6*(parseInt(_0x138699(0xd7))/0x7)+-parseInt(_0x138699(0xd2))/0x8*(parseInt(_0x138699(0xb9))/0x9)+parseInt(_0x138699(0xb8))/0xa;if(_0x3e8725===_0x73a10)break;else _0x47eae6['push'](_0x47eae6['shift']());}catch(_0x2c0f19){_0x47eae6['push'](_0x47eae6['shift']());}}}(_0x1528,0xd6790));import{getContentType,jidDecode,downloadMediaMessage,downloadContentFromMessage,generateWAMessage,areJidsSameUser,generateForwardMessageContent,makeInMemoryStore}from'@whiskeysockets/baileys';import{fileTypeFromBuffer}from'file-type';import _0x292dd2 from'fs';import _0x4a9857 from'pino';import _0x36acbb from'path';import _0x302ba5 from'awesome-phonenumber';import _0x1eb1d1 from'../config.cjs';import{imageToWebp,videoToWebp,writeExifImg,writeExifVid}from'../lib/exif.cjs';import{getBuffer,getSizeMedia}from'../lib/myfunc.cjs';function _0x1528(){const _0x2881f1=['error','BEGIN:VCARD\x0aVERSION:3.0\x0aN:','unlink','isGroup','6KqbyxI','msg','sendPoll','author','OWNER_NAME','isBuffer','selectedId','downloadMediaMessage','groupMetadata','Result\x20is\x20not\x20a\x20buffer','@g.us','promises','quotedMessage','ext','subject','reply','\x20Kontak','parse','test','push','React','loadMessage','existsSync','includes','image','15FVGloS','Error\x20downloading\x20media:','selectedButtonId','downloadAndSaveMediaMessage','sendMessage','@s.whatsapp.net','toObject','keys','contacts','buffer','cMod','ignore','concat','silent','7778885cEMliB','user','fromMe','readViewOnce','mentionedJid','readFileSync','packname','stanzaId','\x0aFN:','text','95416MHNTLP','withoutContact','remoteJid','mtype','url','smsg','view_once','sender','quoted','videoMessage','./lib/exif','participant','Message','alloc','mentions','pathname','viewOnce','split','type','replace','image/webp','buttonsResponseMessage','message','fromObject','mimetype','length','json','getFile','writeFile','normal','messageTypes','appenTextMessage','audio','dirname','download','proto','body','video','fakeObj','caption','string','18379280UKQpmT','394209UDiGQk','name','endsWith','isSelf','\x0aitem1.X-ABLabel:Click\x20here\x20to\x20chat\x0aEND:VCARD','ephemeralMessage','listResponseMessage','sendImageAsSticker','key','getName','\x0aitem1.TEL;waid=','status','sticker','server','3904713JmlpTo','copy','contacts.update','viewOnceMessage','getNumber','document','viewOnceMessageV2','verifiedName','filter','hydratedContentText','buttonsMessage','280IrBPzr','emit','child','from','base64','8555813gNxphn','3304080YlVung','contextInfo','getQuotedObj','templateButtonReplyMessage','join','decodeJid','relayMessage','copyNForward','pushName','sendVideoAsSticker','conversation'];_0x1528=function(){return _0x2881f1;};return _0x1528();}import _0x53a048 from'@whiskeysockets/baileys';const proto=_0x53a048[_0x1ceefa(0xb2)],store=makeInMemoryStore({'logger':_0x4a9857()[_0x1ceefa(0xd4)]({'level':_0x1ceefa(0x10d),'stream':'store'})}),__filename=new URL(import.meta[_0x1ceefa(0x93)])[_0x1ceefa(0x9e)],__dirname=_0x36acbb[_0x1ceefa(0xb0)](__filename);function _0x3710(_0x5d0f9a,_0x5c95ca){const _0x152836=_0x1528();return _0x3710=function(_0x3710db,_0x46fcae){_0x3710db=_0x3710db-0x87;let _0x2ddb6b=_0x152836[_0x3710db];return _0x2ddb6b;},_0x3710(_0x5d0f9a,_0x5c95ca);}function decodeJid(_0x220b59){const {user:_0x3ab466,server:_0x2173aa}=jidDecode(_0x220b59)||{};return _0x3ab466&&_0x2173aa?(_0x3ab466+'@'+_0x2173aa)['trim']():_0x220b59;}const downloadMedia=async _0x267ed8=>{const _0x441710=_0x1ceefa;let _0x536aaa=Object['keys'](_0x267ed8)[0x0],_0x3b501e=_0x267ed8[_0x536aaa];if(_0x536aaa===_0x441710(0xd1)||_0x536aaa===_0x441710(0xcd)){if(_0x536aaa===_0x441710(0xcd))_0x3b501e=_0x267ed8[_0x441710(0xcd)]?.[_0x441710(0xa5)],_0x536aaa=Object[_0x441710(0x107)](_0x3b501e||{})[0x0];else _0x536aaa=Object['keys'](_0x3b501e||{})[0x1];_0x3b501e=_0x3b501e[_0x536aaa];}const _0x412395=await downloadContentFromMessage(_0x3b501e,_0x536aaa[_0x441710(0xa2)]('Message',''));let _0x4a8a72=Buffer[_0x441710(0xd5)]([]);for await(const _0x311073 of _0x412395){_0x4a8a72=Buffer[_0x441710(0x10c)]([_0x4a8a72,_0x311073]);}return _0x4a8a72;};function serialize(_0x14f2cd,_0x25d6d8,_0x3222f6){const _0x15479b=_0x1ceefa;async function _0x14f5ca(_0x22da24){const _0x113e80=_0x3710;try{const _0x4641bd=await downloadMediaMessage(_0x22da24,_0x113e80(0x109),{},{'logger':_0x3222f6,'reuploadRequest':_0x25d6d8['updateMediaMessage']});return _0x4641bd;}catch(_0x116140){return console[_0x113e80(0xe3)](_0x113e80(0x101),_0x116140),null;}}async function _0x218245(_0x10a2ee){const _0x5e4613=_0x3710;let _0x5a02c2={'react':{'text':_0x10a2ee,'key':_0x14f2cd[_0x5e4613(0xc1)]}};await _0x25d6d8['sendMessage'](_0x14f2cd[_0x5e4613(0xd5)],_0x5a02c2);}_0x25d6d8[_0x15479b(0xdd)]=_0x547130=>{const _0x45a609=_0x15479b;if(!_0x547130)return _0x547130;if(/:\d+@/gi[_0x45a609(0xf9)](_0x547130)){let _0x163b10=jidDecode(_0x547130)||{};return _0x163b10[_0x45a609(0x10f)]&&_0x163b10[_0x45a609(0xc6)]&&_0x163b10['user']+'@'+_0x163b10[_0x45a609(0xc6)]||_0x547130;}else return _0x547130;},_0x25d6d8['ev']['on'](_0x15479b(0xc9),_0x5affbc=>{const _0x213935=_0x15479b;for(let _0x103e90 of _0x5affbc){let _0x4c0870=_0x25d6d8[_0x213935(0xdd)](_0x103e90['id']);store&&store[_0x213935(0x108)]&&(store[_0x213935(0x108)][_0x4c0870]={'id':_0x4c0870,'name':_0x103e90['notify']});}}),_0x25d6d8[_0x15479b(0xc2)]=(_0x3583a9,_0x458836=![])=>{const _0x1cb60f=_0x15479b;_0x3583a9=_0x25d6d8['decodeJid'](_0x3583a9),_0x458836=_0x25d6d8[_0x1cb60f(0x90)]||_0x458836;let _0x1f4472;return _0x3583a9[_0x1cb60f(0xbb)](_0x1cb60f(0xf1))?new Promise(async _0x34021b=>{const _0x2525c2=_0x1cb60f;_0x1f4472=store['contacts'][_0x3583a9]||{};if(!(_0x1f4472[_0x2525c2(0xba)]||_0x1f4472['subject']))_0x1f4472=await _0x25d6d8[_0x2525c2(0xef)](_0x3583a9)||{};_0x34021b(_0x1f4472['name']||_0x1f4472[_0x2525c2(0xf5)]||_0x302ba5('+'+_0x3583a9[_0x2525c2(0xa2)]('@s.whatsapp.net',''))[_0x2525c2(0xcb)]('international'));}):(_0x1f4472=_0x3583a9==='0@s.whatsapp.net'?{'id':_0x3583a9,'name':'WhatsApp'}:_0x3583a9===_0x25d6d8[_0x1cb60f(0xdd)](_0x25d6d8[_0x1cb60f(0x10f)]['id'])?_0x25d6d8[_0x1cb60f(0x10f)]:store[_0x1cb60f(0x108)][_0x3583a9]||{},(_0x458836?'':_0x1f4472['name'])||_0x1f4472[_0x1cb60f(0xf5)]||_0x1f4472[_0x1cb60f(0xce)]||_0x302ba5('+'+_0x3583a9['replace'](_0x1cb60f(0x105),''))[_0x1cb60f(0xcb)]('international'));},_0x25d6d8['sendContact']=async(_0x12fe96,_0x489530,_0x5567b0='',_0x5e7f2e={})=>{const _0x4612b9=_0x15479b;let _0x10679a=[];for(let _0x13cf4e of _0x489530){let _0x22a25e=_0x1eb1d1[_0x4612b9(0xeb)];_0x10679a[_0x4612b9(0xfa)]({'displayName':_0x22a25e,'vcard':_0x4612b9(0xe4)+await _0x25d6d8['getName'](_0x13cf4e+_0x4612b9(0x105))+_0x4612b9(0x8d)+_0x22a25e+_0x4612b9(0xc3)+_0x13cf4e+':'+_0x13cf4e+_0x4612b9(0xbd)});}_0x25d6d8['sendMessage'](_0x12fe96,{'contacts':{'displayName':_0x10679a[_0x4612b9(0xa8)]+_0x4612b9(0xf7),'contacts':_0x10679a},..._0x5e7f2e},{'quoted':_0x5567b0});},_0x25d6d8[_0x15479b(0xc0)]=async(_0x52048f,_0x1eafdf,_0x1ddef4,_0x502641={})=>{const _0x364d52=_0x15479b;let _0x13513f=Buffer['isBuffer'](_0x1eafdf)?_0x1eafdf:/^data:.*?\/.*?;base64,/i[_0x364d52(0xf9)](_0x1eafdf)?Buffer[_0x364d52(0xd5)](_0x1eafdf['split']`,`[0x1],'base64'):/^https?:\/\//['test'](_0x1eafdf)?await await getBuffer(_0x1eafdf):_0x292dd2[_0x364d52(0xfd)](_0x1eafdf)?_0x292dd2[_0x364d52(0x8a)](_0x1eafdf):Buffer[_0x364d52(0x9c)](0x0),_0x47cbdb;return _0x502641&&(_0x502641[_0x364d52(0x8b)]||_0x502641[_0x364d52(0xea)])?_0x47cbdb=await writeExifImg(_0x13513f,_0x502641):_0x47cbdb=await imageToWebp(_0x13513f),await _0x25d6d8[_0x364d52(0x104)](_0x52048f,{'sticker':{'url':_0x47cbdb},..._0x502641},{'quoted':_0x1ddef4}),_0x47cbdb;},_0x25d6d8[_0x15479b(0xe1)]=async(_0x5bbf27,_0x2bd5d2,_0x2c8b32,_0x379e9c={})=>{const _0x4c99b5=_0x15479b;let _0x1d2d5d=Buffer['isBuffer'](_0x2bd5d2)?_0x2bd5d2:/^data:.*?\/.*?;base64,/i[_0x4c99b5(0xf9)](_0x2bd5d2)?Buffer[_0x4c99b5(0xd5)](_0x2bd5d2[_0x4c99b5(0xa0)]`,`[0x1],_0x4c99b5(0xd6)):/^https?:\/\//[_0x4c99b5(0xf9)](_0x2bd5d2)?await await getBuffer(_0x2bd5d2):_0x292dd2[_0x4c99b5(0xfd)](_0x2bd5d2)?_0x292dd2['readFileSync'](_0x2bd5d2):Buffer[_0x4c99b5(0x9c)](0x0),_0x368716;return _0x379e9c&&(_0x379e9c[_0x4c99b5(0x8b)]||_0x379e9c[_0x4c99b5(0xea)])?_0x368716=await writeExifVid(_0x1d2d5d,_0x379e9c):_0x368716=await videoToWebp(_0x1d2d5d),await _0x25d6d8[_0x4c99b5(0x104)](_0x5bbf27,{'sticker':{'url':_0x368716},..._0x379e9c},{'quoted':_0x2c8b32}),_0x368716;},_0x25d6d8[_0x15479b(0xe9)]=(_0x29dd89,_0x585384='',_0xcce0dc=[],_0x48742a=0x1)=>{const _0x16c516=_0x15479b;return _0x25d6d8[_0x16c516(0x104)](_0x29dd89,{'poll':{'name':_0x585384,'values':_0xcce0dc,'selectableCount':_0x48742a}});},_0x25d6d8['sendMedia']=async(_0x4c9257,_0x12a8eb,_0x49c75b='',_0x2c360a='',_0x3fad83='',_0x5d34be={})=>{const _0x2f2b86=_0x15479b;let _0x5ccdeb=await _0x25d6d8[_0x2f2b86(0xaa)](_0x12a8eb,!![]),{mime:_0x37e180,ext:_0x47c44d,res:_0x5a4f28,data:_0x16da18,filename:_0x43f173}=_0x5ccdeb;if(_0x5a4f28&&_0x5a4f28[_0x2f2b86(0xc4)]!==0xc8||file[_0x2f2b86(0xa8)]<=0x10000)try{throw{'json':JSON[_0x2f2b86(0xf8)](file['toString']())};}catch(_0x2095d2){if(_0x2095d2['json'])throw _0x2095d2[_0x2f2b86(0xa9)];}let _0x3c42f1='',_0x5d95ed=_0x37e180,_0x2fb923=_0x43f173;if(_0x5d34be['asDocument'])_0x3c42f1='document';if(_0x5d34be['asSticker']||/webp/[_0x2f2b86(0xf9)](_0x37e180)){let {writeExif:_0x239ec6}=require(_0x2f2b86(0x99)),_0x336794={'mimetype':_0x37e180,'data':_0x16da18};_0x2fb923=await _0x239ec6(_0x336794,{'packname':_0x5d34be[_0x2f2b86(0x8b)]?_0x5d34be['packname']:global['packname'],'author':_0x5d34be[_0x2f2b86(0xea)]?_0x5d34be[_0x2f2b86(0xea)]:global[_0x2f2b86(0xea)],'categories':_0x5d34be['categories']?_0x5d34be['categories']:[]}),await _0x292dd2[_0x2f2b86(0xf2)]['unlink'](_0x43f173),_0x3c42f1=_0x2f2b86(0xc5),_0x5d95ed=_0x2f2b86(0xa3);}else{if(/image/[_0x2f2b86(0xf9)](_0x37e180))_0x3c42f1=_0x2f2b86(0xff);else{if(/video/[_0x2f2b86(0xf9)](_0x37e180))_0x3c42f1=_0x2f2b86(0xb4);else{if(/audio/[_0x2f2b86(0xf9)](_0x37e180))_0x3c42f1=_0x2f2b86(0xaf);else _0x3c42f1=_0x2f2b86(0xcc);}}}return await _0x25d6d8[_0x2f2b86(0x104)](_0x4c9257,{[_0x3c42f1]:{'url':_0x2fb923},'caption':_0x2c360a,'mimetype':_0x5d95ed,'fileName':_0x49c75b,..._0x5d34be},{'quoted':_0x3fad83,..._0x5d34be}),_0x292dd2[_0x2f2b86(0xf2)][_0x2f2b86(0xe5)](_0x2fb923);},_0x25d6d8[_0x15479b(0xaa)]=async(_0x593d25,_0x357870)=>{const _0x323267=_0x15479b;let _0x55f611,_0xd2b763,_0x67d107=Buffer[_0x323267(0xec)](_0x593d25)?_0x593d25:/^data:.*?\/.*?;base64,/i[_0x323267(0xf9)](_0x593d25)?Buffer[_0x323267(0xd5)](_0x593d25[_0x323267(0xa0)]`,`[0x1],_0x323267(0xd6)):/^https?:\/\//[_0x323267(0xf9)](_0x593d25)?_0x55f611=await getBuffer(_0x593d25):_0x292dd2[_0x323267(0xfd)](_0x593d25)?(_0xd2b763=_0x593d25,_0x292dd2['readFileSync'](_0x593d25)):typeof _0x593d25===_0x323267(0xb7)?_0x593d25:Buffer[_0x323267(0x9c)](0x0);if(!Buffer[_0x323267(0xec)](_0x67d107))throw new TypeError(_0x323267(0xf0));let _0x62f051=await fileTypeFromBuffer(_0x67d107)||{'mime':'application/octet-stream','ext':'.bin'};if(_0x67d107&&_0x357870&&!_0xd2b763)_0xd2b763=_0x36acbb[_0x323267(0xdc)](__dirname,'./'+new Date()*0x1+'.'+_0x62f051[_0x323267(0xf4)]),await _0x292dd2[_0x323267(0xf2)][_0x323267(0xab)](_0xd2b763,_0x67d107);return{'res':_0x55f611,'filename':_0xd2b763,'size':await getSizeMedia(_0x67d107),..._0x62f051,'data':_0x67d107};},_0x25d6d8[_0x15479b(0x103)]=async(_0x44da7e,_0x24a3a4,_0x1a750e=!![])=>{const _0x2a21e5=_0x15479b;let _0x485413=_0x44da7e[_0x2a21e5(0xe8)]?_0x44da7e[_0x2a21e5(0xe8)]:_0x44da7e,_0x53cb25=(_0x44da7e['msg']||_0x44da7e)['mimetype']||'',_0x5032ba=_0x44da7e[_0x2a21e5(0x92)]?_0x44da7e[_0x2a21e5(0x92)][_0x2a21e5(0xa2)](/Message/gi,''):_0x53cb25[_0x2a21e5(0xa0)]('/')[0x0];const _0x3ca914=await downloadContentFromMessage(_0x485413,_0x5032ba);let _0x3df697=Buffer[_0x2a21e5(0xd5)]([]);for await(const _0x18b3f4 of _0x3ca914){_0x3df697=Buffer[_0x2a21e5(0x10c)]([_0x3df697,_0x18b3f4]);}const _0xc4c2a0=await fileTypeFromBuffer(_0x3df697),_0x11732a=_0x1a750e?_0x24a3a4+'.'+_0xc4c2a0[_0x2a21e5(0xf4)]:_0x24a3a4;return await _0x292dd2['promises'][_0x2a21e5(0xab)](_0x11732a,_0x3df697),_0x11732a;},_0x25d6d8[_0x15479b(0xee)]=async _0x3b91d9=>{const _0x48f223=_0x15479b;let _0x4d299a=(_0x3b91d9['msg']||_0x3b91d9)[_0x48f223(0xa7)]||'',_0x25bd3f=_0x3b91d9[_0x48f223(0x92)]?_0x3b91d9['mtype'][_0x48f223(0xa2)](/Message/gi,''):_0x4d299a[_0x48f223(0xa0)]('/')[0x0];const _0x246b69=await downloadContentFromMessage(_0x3b91d9,_0x25bd3f);let _0x27540c=Buffer[_0x48f223(0xd5)]([]);for await(const _0xc43070 of _0x246b69){_0x27540c=Buffer[_0x48f223(0x10c)]([_0x27540c,_0xc43070]);}return _0x27540c;},_0x25d6d8[_0x15479b(0xdf)]=async(_0x665ea5,_0x3307a4,_0x18d4c2=![],_0x3a22d4={})=>{const _0x285a72=_0x15479b;let _0x422088;_0x3a22d4[_0x285a72(0x88)]&&(_0x3307a4[_0x285a72(0xa5)]=_0x3307a4[_0x285a72(0xa5)]&&_0x3307a4[_0x285a72(0xa5)][_0x285a72(0xbe)]&&_0x3307a4[_0x285a72(0xa5)]['ephemeralMessage'][_0x285a72(0xa5)]?_0x3307a4[_0x285a72(0xa5)]['ephemeralMessage'][_0x285a72(0xa5)]:_0x3307a4[_0x285a72(0xa5)]||undefined,_0x422088=Object[_0x285a72(0x107)](_0x3307a4[_0x285a72(0xa5)][_0x285a72(0xca)][_0x285a72(0xa5)])[0x0],delete(_0x3307a4[_0x285a72(0xa5)]&&_0x3307a4['message'][_0x285a72(0x10b)]?_0x3307a4['message'][_0x285a72(0x10b)]:_0x3307a4['message']||undefined),delete _0x3307a4[_0x285a72(0xa5)][_0x285a72(0xca)][_0x285a72(0xa5)][_0x422088][_0x285a72(0x9f)],_0x3307a4['message']={..._0x3307a4[_0x285a72(0xa5)][_0x285a72(0xca)][_0x285a72(0xa5)]});let _0x3ade4c=Object[_0x285a72(0x107)](_0x3307a4['message'])[0x0],_0x2f29a9=await generateForwardMessageContent(_0x3307a4,_0x18d4c2),_0x572201=Object[_0x285a72(0x107)](_0x2f29a9)[0x0],_0x576c1c={};if(_0x3ade4c!=_0x285a72(0xe2))_0x576c1c=_0x3307a4[_0x285a72(0xa5)][_0x3ade4c]['contextInfo'];_0x2f29a9[_0x572201][_0x285a72(0xd9)]={..._0x576c1c,..._0x2f29a9[_0x572201][_0x285a72(0xd9)]};const _0x180176=await generateWAMessageFromContent(_0x665ea5,_0x2f29a9,_0x3a22d4?{..._0x2f29a9[_0x572201],..._0x3a22d4,..._0x3a22d4[_0x285a72(0xd9)]?{'contextInfo':{..._0x2f29a9[_0x572201]['contextInfo'],..._0x3a22d4['contextInfo']}}:{}}:{});return await _0x25d6d8[_0x285a72(0xde)](_0x665ea5,_0x180176[_0x285a72(0xa5)],{'messageId':_0x180176[_0x285a72(0xc1)]['id']}),_0x180176;},_0x25d6d8[_0x15479b(0x10a)]=(_0x2561d1,_0x13f7d2,_0x475a34='',_0xa527c5=_0x25d6d8['user']['id'],_0x199712={})=>{const _0x2d873b=_0x15479b;let _0x16dabf=Object[_0x2d873b(0x107)](_0x13f7d2[_0x2d873b(0xa5)])[0x0],_0x2a52d3=_0x16dabf===_0x2d873b(0xbe);_0x2a52d3&&(_0x16dabf=Object[_0x2d873b(0x107)](_0x13f7d2[_0x2d873b(0xa5)]['ephemeralMessage'][_0x2d873b(0xa5)])[0x0]);let _0x143111=_0x2a52d3?_0x13f7d2[_0x2d873b(0xa5)][_0x2d873b(0xbe)][_0x2d873b(0xa5)]:_0x13f7d2[_0x2d873b(0xa5)],_0x4d668f=_0x143111[_0x16dabf];if(typeof _0x4d668f===_0x2d873b(0xb7))_0x143111[_0x16dabf]=_0x475a34||_0x4d668f;else{if(_0x4d668f[_0x2d873b(0xb6)])_0x4d668f[_0x2d873b(0xb6)]=_0x475a34||_0x4d668f[_0x2d873b(0xb6)];else{if(_0x4d668f['text'])_0x4d668f[_0x2d873b(0x8e)]=_0x475a34||_0x4d668f['text'];}}if(typeof _0x4d668f!=='string')_0x143111[_0x16dabf]={..._0x4d668f,..._0x199712};if(_0x13f7d2[_0x2d873b(0xc1)][_0x2d873b(0x9a)])_0xa527c5=_0x13f7d2[_0x2d873b(0xc1)][_0x2d873b(0x9a)]=_0xa527c5||_0x13f7d2[_0x2d873b(0xc1)][_0x2d873b(0x9a)];else{if(_0x13f7d2['key']['participant'])_0xa527c5=_0x13f7d2[_0x2d873b(0xc1)][_0x2d873b(0x9a)]=_0xa527c5||_0x13f7d2[_0x2d873b(0xc1)]['participant'];}if(_0x13f7d2['key']['remoteJid'][_0x2d873b(0xfe)](_0x2d873b(0x105)))_0xa527c5=_0xa527c5||_0x13f7d2[_0x2d873b(0xc1)][_0x2d873b(0x91)];else{if(_0x13f7d2[_0x2d873b(0xc1)][_0x2d873b(0x91)][_0x2d873b(0xfe)]('@broadcast'))_0xa527c5=_0xa527c5||_0x13f7d2[_0x2d873b(0xc1)][_0x2d873b(0x91)];}return _0x13f7d2[_0x2d873b(0xc1)][_0x2d873b(0x91)]=_0x2561d1,_0x13f7d2[_0x2d873b(0xc1)]['fromMe']=_0xa527c5===_0x25d6d8[_0x2d873b(0x10f)]['id'],proto['WebMessageInfo'][_0x2d873b(0xa6)](_0x13f7d2);};_0x14f2cd[_0x15479b(0xc1)]&&(_0x14f2cd['id']=_0x14f2cd[_0x15479b(0xc1)]['id'],_0x14f2cd[_0x15479b(0xbc)]=_0x14f2cd['key'][_0x15479b(0x87)],_0x14f2cd[_0x15479b(0xd5)]=decodeJid(_0x14f2cd[_0x15479b(0xc1)]['remoteJid']),_0x14f2cd[_0x15479b(0xe6)]=_0x14f2cd[_0x15479b(0xd5)]['endsWith'](_0x15479b(0xf1)),_0x14f2cd['sender']=_0x14f2cd[_0x15479b(0xe6)]?decodeJid(_0x14f2cd['key'][_0x15479b(0x9a)]):_0x14f2cd[_0x15479b(0xbc)]?decodeJid(_0x25d6d8[_0x15479b(0x10f)]['id']):_0x14f2cd['from']);if(_0x14f2cd['message']){_0x14f2cd[_0x15479b(0xa1)]=getContentType(_0x14f2cd[_0x15479b(0xa5)]);if(_0x14f2cd[_0x15479b(0xa1)]==='ephemeralMessage'){_0x14f2cd[_0x15479b(0xa5)]=_0x14f2cd[_0x15479b(0xa5)][_0x14f2cd[_0x15479b(0xa1)]]['message'];const _0x32bc62=Object[_0x15479b(0x107)](_0x14f2cd[_0x15479b(0xa5)])[0x0];_0x14f2cd['type']=_0x32bc62,_0x32bc62===_0x15479b(0xcd)&&(_0x14f2cd[_0x15479b(0xa5)]=_0x14f2cd[_0x15479b(0xa5)][_0x14f2cd[_0x15479b(0xa1)]]['message'],_0x14f2cd['type']=getContentType(_0x14f2cd[_0x15479b(0xa5)]));}_0x14f2cd[_0x15479b(0xa1)]==='viewOnceMessageV2'&&(_0x14f2cd['message']=_0x14f2cd['message'][_0x14f2cd[_0x15479b(0xa1)]]['message'],_0x14f2cd[_0x15479b(0xa1)]=getContentType(_0x14f2cd[_0x15479b(0xa5)]));_0x14f2cd[_0x15479b(0xad)]=_0x5a99c9=>[_0x15479b(0x98),'imageMessage']['includes'](_0x5a99c9);try{const _0x2ebe71=_0x14f2cd[_0x15479b(0xa5)][_0x14f2cd[_0x15479b(0xa1)]]?.[_0x15479b(0xd9)];if(_0x2ebe71[_0x15479b(0xf3)]['ephemeralMessage']){const _0x61e815=Object[_0x15479b(0x107)](_0x2ebe71[_0x15479b(0xf3)]['ephemeralMessage'][_0x15479b(0xa5)])[0x0];_0x61e815===_0x15479b(0xcd)?_0x14f2cd[_0x15479b(0x97)]={'type':_0x15479b(0x95),'stanzaId':_0x2ebe71[_0x15479b(0x8c)],'participant':decodeJid(_0x2ebe71[_0x15479b(0x9a)]),'message':_0x2ebe71[_0x15479b(0xf3)][_0x15479b(0xbe)][_0x15479b(0xa5)][_0x15479b(0xcd)][_0x15479b(0xa5)]}:_0x14f2cd[_0x15479b(0x97)]={'type':'ephemeral','stanzaId':_0x2ebe71[_0x15479b(0x8c)],'participant':decodeJid(_0x2ebe71[_0x15479b(0x9a)]),'message':_0x2ebe71[_0x15479b(0xf3)]['ephemeralMessage'][_0x15479b(0xa5)]};}else _0x2ebe71[_0x15479b(0xf3)][_0x15479b(0xcd)]?_0x14f2cd[_0x15479b(0x97)]={'type':_0x15479b(0x95),'stanzaId':_0x2ebe71[_0x15479b(0x8c)],'participant':decodeJid(_0x2ebe71[_0x15479b(0x9a)]),'message':_0x2ebe71[_0x15479b(0xf3)][_0x15479b(0xcd)][_0x15479b(0xa5)]}:_0x14f2cd[_0x15479b(0x97)]={'type':_0x15479b(0xac),'stanzaId':_0x2ebe71[_0x15479b(0x8c)],'participant':decodeJid(_0x2ebe71[_0x15479b(0x9a)]),'message':_0x2ebe71[_0x15479b(0xf3)]};_0x14f2cd[_0x15479b(0x97)][_0x15479b(0xbc)]=_0x14f2cd[_0x15479b(0x97)][_0x15479b(0x9a)]===decodeJid(_0x25d6d8[_0x15479b(0x10f)]['id']),_0x14f2cd[_0x15479b(0x97)][_0x15479b(0x92)]=Object['keys'](_0x14f2cd['quoted']['message'])['filter'](_0x3e8f26=>_0x3e8f26[_0x15479b(0xfe)](_0x15479b(0x9b))||_0x3e8f26[_0x15479b(0xfe)]('conversation'))[0x0],_0x14f2cd[_0x15479b(0x97)][_0x15479b(0x8e)]=_0x14f2cd[_0x15479b(0x97)]['message'][_0x14f2cd[_0x15479b(0x97)][_0x15479b(0x92)]]?.[_0x15479b(0x8e)]||_0x14f2cd['quoted'][_0x15479b(0xa5)][_0x14f2cd['quoted'][_0x15479b(0x92)]]?.['description']||_0x14f2cd[_0x15479b(0x97)][_0x15479b(0xa5)][_0x14f2cd[_0x15479b(0x97)][_0x15479b(0x92)]]?.[_0x15479b(0xb6)]||_0x14f2cd[_0x15479b(0x97)]['message'][_0x14f2cd[_0x15479b(0x97)][_0x15479b(0x92)]]?.['hydratedTemplate']?.[_0x15479b(0xd0)]||_0x14f2cd['quoted']['message'][_0x14f2cd[_0x15479b(0x97)][_0x15479b(0x92)]]||'',_0x14f2cd[_0x15479b(0x97)]['key']={'id':_0x14f2cd['quoted'][_0x15479b(0x8c)],'fromMe':_0x14f2cd[_0x15479b(0x97)][_0x15479b(0xbc)],'remoteJid':_0x14f2cd[_0x15479b(0xd5)]},_0x14f2cd[_0x15479b(0x97)]['download']=()=>downloadMedia(_0x14f2cd[_0x15479b(0x97)][_0x15479b(0xa5)]);}catch{_0x14f2cd[_0x15479b(0x97)]=null;}_0x14f2cd[_0x15479b(0xb3)]=_0x14f2cd[_0x15479b(0xa5)]?.['conversation']||_0x14f2cd[_0x15479b(0xa5)]?.[_0x14f2cd[_0x15479b(0xa1)]]?.[_0x15479b(0x8e)]||_0x14f2cd[_0x15479b(0xa5)]?.[_0x14f2cd[_0x15479b(0xa1)]]?.[_0x15479b(0xb6)]||_0x14f2cd['type']===_0x15479b(0xbf)&&_0x14f2cd['message']?.[_0x14f2cd['type']]?.['singleSelectReply']?.['selectedRowId']||_0x14f2cd[_0x15479b(0xa1)]===_0x15479b(0xa4)&&_0x14f2cd[_0x15479b(0xa5)]?.[_0x14f2cd['type']]?.[_0x15479b(0x102)]||_0x14f2cd[_0x15479b(0xa1)]===_0x15479b(0xdb)&&_0x14f2cd[_0x15479b(0xa5)]?.[_0x14f2cd[_0x15479b(0xa1)]]?.[_0x15479b(0xed)]||'',_0x14f2cd[_0x15479b(0xf6)]=_0x43b4f1=>_0x25d6d8['sendMessage'](_0x14f2cd[_0x15479b(0xd5)],{'text':_0x43b4f1},{'quoted':_0x14f2cd}),_0x14f2cd[_0x15479b(0x9d)]=[];if(_0x14f2cd[_0x15479b(0x97)]?.[_0x15479b(0x9a)])_0x14f2cd[_0x15479b(0x9d)]['push'](_0x14f2cd[_0x15479b(0x97)]['participant']);const _0x308434=_0x14f2cd?.[_0x15479b(0xa5)]?.[_0x14f2cd[_0x15479b(0xa1)]]?.['contextInfo']?.[_0x15479b(0x89)]||[];_0x14f2cd['mentions'][_0x15479b(0xfa)](..._0x308434[_0x15479b(0xcf)](Boolean)),_0x14f2cd[_0x15479b(0xb1)]=()=>downloadMedia(_0x14f2cd[_0x15479b(0xa5)]),_0x14f2cd['downloadFile']=()=>_0x14f5ca(_0x14f2cd),_0x14f2cd[_0x15479b(0xfb)]=_0x1ba7f3=>_0x218245(_0x1ba7f3);}return _0x14f2cd[_0x15479b(0xda)]=async()=>{const _0x3a3a5f=_0x15479b;if(!_0x14f2cd[_0x3a3a5f(0x97)])return null;let _0x2dd672=_0x14f2cd['message']['extendedTextMessage']['contextInfo']['stanzaId'],_0x3756b8=store[_0x3a3a5f(0xfc)](_0x14f2cd[_0x3a3a5f(0xd5)],_0x2dd672,_0x25d6d8);return serialize(_0x3756b8,_0x25d6d8,_0x3222f6);},_0x14f2cd[_0x15479b(0xc8)]=()=>exports[_0x15479b(0x94)](_0x25d6d8,M[_0x15479b(0xa6)](M[_0x15479b(0x106)](_0x14f2cd))),_0x14f2cd[_0x15479b(0xdf)]=(_0x5f05c1=_0x14f2cd[_0x15479b(0xd5)],_0x127dd5=![],_0xb85f5a={})=>_0x25d6d8[_0x15479b(0xdf)](_0x5f05c1,_0x14f2cd,_0x127dd5,_0xb85f5a),_0x25d6d8[_0x15479b(0xae)]=async(_0x2dadd9,_0x337c7)=>{const _0x3d7adf=_0x15479b;let _0x15171b=await generateWAMessage(_0x14f2cd['from'],{'text':_0x2dadd9,'mentions':_0x14f2cd[_0x3d7adf(0x89)]},{'userJid':_0x25d6d8[_0x3d7adf(0x10f)]['id'],'quoted':_0x14f2cd[_0x3d7adf(0x97)]&&_0x14f2cd[_0x3d7adf(0x97)][_0x3d7adf(0xb5)]});_0x15171b[_0x3d7adf(0xc1)][_0x3d7adf(0x87)]=areJidsSameUser(_0x14f2cd[_0x3d7adf(0x96)],_0x25d6d8[_0x3d7adf(0x10f)]['id']),_0x15171b[_0x3d7adf(0xc1)]['id']=_0x14f2cd['key']['id'],_0x15171b[_0x3d7adf(0xe0)]=_0x14f2cd[_0x3d7adf(0xe0)];if(_0x14f2cd[_0x3d7adf(0xe6)])_0x15171b[_0x3d7adf(0x9a)]=_0x14f2cd[_0x3d7adf(0x96)];let _0x57b9fd={..._0x337c7,'messages':[proto['WebMessageInfo'][_0x3d7adf(0xa6)](_0x15171b)],'type':'append'};_0x25d6d8['ev'][_0x3d7adf(0xd3)]('messages.upsert',_0x57b9fd);},_0x14f2cd;}export{decodeJid,serialize};